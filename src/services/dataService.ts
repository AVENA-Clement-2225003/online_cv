import { CVData } from '../api/types';

// Import static data directly
import dbData from '../api/data/db.json';
const staticData = dbData as CVData;

/**
 * Data Service for accessing CV data
 * Provides a simple interface for components to interact with the data
 */
class DataService {
  /**
   * Get all CV data
   */
  getAllData(): CVData | null {
    try {
      // In browser environment, always use the imported static data
      return staticData;
    } catch (error) {
      console.error('Error getting all data:', error);
      return null;
    }
  }

  /**
   * Get a specific section of CV data
   */
  getSection<K extends keyof CVData>(section: K): CVData[K] | null {
    try {
      // In browser environment, always use the imported static data
      if (staticData && section in staticData) {
        return staticData[section];
      }
      return null;
    } catch (error) {
      console.error(`Error getting section ${String(section)}:`, error);
      return null;
    }
  }

  /**
   * Update a specific section of CV data
   * Note: In browser environment, this is a no-op as we can't write to the file system
   */
  updateSection<K extends keyof CVData>(section: K, _data: CVData[K]): boolean {
    console.warn(`Cannot update section ${String(section)} in browser environment`);
    return false;
  }

  /**
   * Add an item to a section
   * Note: In browser environment, this is a no-op as we can't write to the file system
   */
  addItem<K extends keyof CVData>(section: K, _item: any): number | null {
    console.warn(`Cannot add item to section ${String(section)} in browser environment`);
    return null;
  }

  /**
   * Update an item in a section
   * Note: In browser environment, this is a no-op as we can't write to the file system
   */
  updateItem<K extends keyof CVData>(section: K, _id: number, _item: any): boolean {
    console.warn(`Cannot update item in section ${String(section)} in browser environment`);
    return false;
  }

  /**
   * Delete an item from a section
   * Note: In browser environment, this is a no-op as we can't write to the file system
   */
  deleteItem<K extends keyof CVData>(section: K, _id: number): boolean {
    console.warn(`Cannot delete item from section ${String(section)} in browser environment`);
    return false;
  }

  /**
   * Get programming languages data
   * This is a convenience method for the ProgrammingLanguages component
   */
  getProgrammingLanguages() {
    // Get programming languages from the static data
    if (staticData && staticData.programmingLanguages) {
      return staticData.programmingLanguages;
    }
    
    // Fallback to empty array if data is not available
    console.warn('Programming languages data not found in static data');
    return [];
  }

  /**
   * Update programming languages data
   * This is a convenience method for the ProgrammingLanguages component
   */
  updateProgrammingLanguages(languages: any[]): boolean {
    // Update the programmingLanguages section in the JSON file
    return this.updateSection('programmingLanguages', languages);
  }
}

// Export a singleton instance
export const dataService = new DataService();
export default dataService;
