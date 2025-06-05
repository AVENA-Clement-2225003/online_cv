import fs from 'fs';
import { CVData } from '../api/types';

// Path to the JSON database file
// In browser environments, we'll use fallback data instead of trying to access the file system
const DB_PATH = '../api/data/db.json';

// Fallback data in case we can't access the file directly in the browser
const fallbackData: CVData = {
  profile: {
    name: "John Doe",
    title: "Senior Software Engineer",
    summary: "Passionate software engineer with a love for creating elegant solutions.",
    about: "Tech enthusiast with experience in web development.",
    tagline: "Fueled by coffee and passion for code",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe"
    }
  },
  programmingLanguages: [],
  developmentTools: [],
  ides: [],
  software: [],
  experience: [],
  education: [],
  hobbies: [],
  projects: { personal: [], professional: [], academic: [] },
  certificates: [],
  contact: {
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    availability: "Open to new opportunities",
    preferredContact: "email"
  }
};

/**
 * Response interface for service operations
 */
interface ServiceResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * File Service for CRUD operations on CV data
 */
class FileService {
  /**
   * Read the entire database
   */
  readDatabase(): ServiceResponse<CVData> {
    try {
      const data = fs.readFileSync(DB_PATH, 'utf8');
      return {
        success: true,
        data: JSON.parse(data) as CVData
      };
    } catch (error) {
      console.error('Error reading database:', error);
      // Use fallback data when file operations fail (e.g., in browser environment)
      return {
        success: true,
        data: fallbackData
      };
    }
  }

  /**
   * Write to the entire database
   */
  writeDatabase(data: CVData): ServiceResponse<null> {
    try {
      fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
      return {
        success: true
      };
    } catch (error) {
      console.error('Error writing database:', error);
      return {
        success: false,
        error: `Failed to write database: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  }

  /**
   * Get a specific section from the CV data
   */
  getSection<K extends keyof CVData>(section: K): ServiceResponse<CVData[K]> {
    try {
      const response = this.readDatabase();
      
      if (!response.success || !response.data) {
        return {
          success: false,
          error: response.error || 'Failed to read database'
        };
      }

      if (!(section in response.data)) {
        return {
          success: false,
          error: `Section '${String(section)}' not found in database`
        };
      }

      return {
        success: true,
        data: response.data[section]
      };
    } catch (error) {
      console.error(`Error getting section ${String(section)}:`, error);
      return {
        success: false,
        error: `Failed to get section: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  }

  /**
   * Update a specific section in the CV data
   */
  updateSection<K extends keyof CVData>(
    section: K, 
    data: CVData[K]
  ): ServiceResponse<null> {
    try {
      const response = this.readDatabase();
      
      if (!response.success || !response.data) {
        return {
          success: false,
          error: response.error || 'Failed to read database'
        };
      }

      if (!(section in response.data)) {
        return {
          success: false,
          error: `Section '${String(section)}' not found in database`
        };
      }

      // Update the section
      const updatedData = {
        ...response.data,
        [section]: data
      };

      // Write the updated data back to the database
      return this.writeDatabase(updatedData);
    } catch (error) {
      console.error(`Error updating section ${String(section)}:`, error);
      return {
        success: false,
        error: `Failed to update section: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  }

  /**
   * Add an item to an array section in the CV data
   */
  addItem<K extends keyof CVData>(
    section: K, 
    item: any
  ): ServiceResponse<number> {
    try {
      const response = this.readDatabase();
      
      if (!response.success || !response.data) {
        return {
          success: false,
          error: response.error || 'Failed to read database'
        };
      }

      if (!(section in response.data)) {
        return {
          success: false,
          error: `Section '${String(section)}' not found in database`
        };
      }

      const sectionData = response.data[section];
      
      // Check if the section is an array
      if (!Array.isArray(sectionData)) {
        return {
          success: false,
          error: `Section '${String(section)}' is not an array`
        };
      }

      // Generate a new ID for the item
      const newId = this.getNextId(sectionData);
      const newItem = { ...item, id: newId };
      
      // Add the item to the section
      const updatedSection = [...sectionData, newItem];
      
      // Update the section in the database
      const updateResponse = this.updateSection(section, updatedSection as CVData[K]);
      
      if (!updateResponse.success) {
        return {
          success: false,
          error: updateResponse.error
        };
      }

      return {
        success: true,
        data: newId
      };
    } catch (error) {
      console.error(`Error adding item to section ${String(section)}:`, error);
      return {
        success: false,
        error: `Failed to add item: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  }

  /**
   * Update an item in an array section in the CV data
   */
  updateItem<K extends keyof CVData>(
    section: K, 
    id: number, 
    item: any
  ): ServiceResponse<null> {
    try {
      const response = this.readDatabase();
      
      if (!response.success || !response.data) {
        return {
          success: false,
          error: response.error || 'Failed to read database'
        };
      }

      if (!(section in response.data)) {
        return {
          success: false,
          error: `Section '${String(section)}' not found in database`
        };
      }

      const sectionData = response.data[section];
      
      // Check if the section is an array
      if (!Array.isArray(sectionData)) {
        return {
          success: false,
          error: `Section '${String(section)}' is not an array`
        };
      }

      // Find the item index
      const itemIndex = sectionData.findIndex((i: any) => i.id === id);
      
      if (itemIndex === -1) {
        return {
          success: false,
          error: `Item with ID ${id} not found in section '${String(section)}'`
        };
      }

      // Update the item
      const updatedSection = [...sectionData];
      updatedSection[itemIndex] = { ...item, id }; // Ensure ID remains the same
      
      // Update the section in the database
      return this.updateSection(section, updatedSection as CVData[K]);
    } catch (error) {
      console.error(`Error updating item in section ${String(section)}:`, error);
      return {
        success: false,
        error: `Failed to update item: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  }

  /**
   * Delete an item from an array section in the CV data
   */
  deleteItem<K extends keyof CVData>(
    section: K, 
    id: number
  ): ServiceResponse<null> {
    try {
      const response = this.readDatabase();
      
      if (!response.success || !response.data) {
        return {
          success: false,
          error: response.error || 'Failed to read database'
        };
      }

      if (!(section in response.data)) {
        return {
          success: false,
          error: `Section '${String(section)}' not found in database`
        };
      }

      const sectionData = response.data[section];
      
      // Check if the section is an array
      if (!Array.isArray(sectionData)) {
        return {
          success: false,
          error: `Section '${String(section)}' is not an array`
        };
      }

      // Filter out the item with the given ID
      const updatedSection = sectionData.filter((item: any) => item.id !== id);
      
      // Check if any item was removed
      if (updatedSection.length === sectionData.length) {
        return {
          success: false,
          error: `Item with ID ${id} not found in section '${String(section)}'`
        };
      }
      
      // Update the section in the database
      return this.updateSection(section, updatedSection as CVData[K]);
    } catch (error) {
      console.error(`Error deleting item from section ${String(section)}:`, error);
      return {
        success: false,
        error: `Failed to delete item: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  }

  /**
   * Get the next available ID for a new item in an array
   */
  private getNextId(items: any[]): number {
    if (items.length === 0) {
      return 1;
    }
    
    // Find the maximum ID and add 1
    const maxId = Math.max(...items.map((item: any) => item.id || 0));
    return maxId + 1;
  }
}

// Export a singleton instance
export const fileService = new FileService();
export default fileService;
