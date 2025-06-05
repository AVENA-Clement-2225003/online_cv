// CV Data Types

export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  about: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl: string;
  socialLinks: SocialLinks;
}

export interface ProgrammingLanguage {
  id: number;
  name: string;
  level: string;
  description: string;
  experience: string;
  projects: string;
}

export interface DevelopmentTool {
  id: number;
  name: string;
  tools: string[];
  experience: string;
  description: string;
}

export interface IDE {
  id: number;
  name: string;
  type: string;
  experience: string;
  features: string[];
  description: string;
}

export interface SoftwareItem {
  id: number;
  name: string;
  purpose: string;
  experience: string;
}

export interface SoftwareCategory {
  id: number;
  category: string;
  items: SoftwareItem[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Hobby {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface PersonalProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

export interface ProfessionalProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export interface AcademicProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  paper: string;
  image: string;
}

export interface Projects {
  personal: PersonalProject[];
  professional: ProfessionalProject[];
  academic: AcademicProject[];
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  availability: string;
  preferredContact: string;
}

export interface CVData {
  profile: Profile;
  programmingLanguages: ProgrammingLanguage[];
  developmentTools: DevelopmentTool[];
  ides: IDE[];
  software: SoftwareCategory[];
  experience: Experience[];
  education: Education[];
  hobbies: Hobby[];
  projects: Projects;
  certificates: Certificate[];
  contact: Contact;
}
