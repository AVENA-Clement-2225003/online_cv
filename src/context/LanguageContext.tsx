import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'fr';

// Define the context type
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // General
    'app.title': 'Online CV',
    'app.language': 'Language',
    
    // Navigation
    'nav.home': 'Home',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Skills
    'skills.programming': 'Programming Languages',
    'skills.tools': 'Development Tools',
    'skills.ides': 'Development Environments (IDEs)',
    'skills.software': 'Software & Tools',
    'skills.experience': 'Experience',
    'skills.projects': 'Projects',
    
    // Labels
    'label.level': 'Level',
    'label.experience': 'Experience',
    'label.projects': 'Projects',
    'label.loading': 'Loading...',
    'label.error': 'Error loading data',
    
    // Project types
    'projects.personal': 'Personal',
    'projects.professional': 'Professional',
    'projects.academic': 'Academic',
    
    // Home page
    'home.about': 'About Me',
    'home.hobbies': 'Hobbies & Interests',
    'home.education': 'Education',
    'home.education.date': '{0} - {1}',
    'home.education.present': 'Present',
  },
  fr: {
    // General
    'app.title': 'CV en ligne',
    'app.language': 'Langue',
    
    // Navigation
    'nav.home': 'Accueil',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Skills
    'skills.programming': 'Langages de Programmation',
    'skills.tools': 'Outils de Développement',
    'skills.ides': 'Environnements de Développement (IDEs)',
    'skills.software': 'Logiciels & Outils',
    'skills.experience': 'Expérience',
    'skills.projects': 'Projets',
    
    // Labels
    'label.level': 'Niveau',
    'label.experience': 'Expérience',
    'label.projects': 'Projets',
    'label.loading': 'Chargement...',
    'label.error': 'Erreur de chargement des données',
    
    // Project types
    'projects.personal': 'Personnel',
    'projects.professional': 'Professionnel',
    'projects.academic': 'Académique',
    
    // Home page
    'home.about': 'À Propos de Moi',
    'home.hobbies': 'Loisirs & Intérêts',
    'home.education': 'Formation',
    'home.education.date': '{0} - {1}',
    'home.education.present': 'Présent',
  },
};

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
