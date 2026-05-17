
export interface LocalizedText {
  pt: string;
  en: string;
}

export interface LocalizedTextArray {
  pt: string[];
  en: string[];
}

export interface ExperienceItem {
  id: string;
  order: number;
  title: LocalizedText;
  role: LocalizedText;
  description: LocalizedTextArray;
  date: LocalizedText;
  logoKey: string;
  linkedinUrl: string;
  techKeys: string[];
}

export interface EducationItem {
  id: string;
  order: number;
  title: LocalizedText;
  role: LocalizedText;
  description: LocalizedTextArray;
  date: LocalizedText;
  logoKey: string;
  linkedinUrl: string;
  descriptionLinks?: { index: number; href: string; label: LocalizedText }[];
}

export interface ProjectItem {
  id: string;
  order: number;
  title: LocalizedText;
  subtitle?: LocalizedText;
  description: LocalizedText;
  featured?: boolean;
  highlights?: LocalizedTextArray;
  githubLink: string;
  liveUrl?: string;
  bgImage: string;
  videoUrl: string;
}

export type Locale = 'pt' | 'en';

export interface ExperienceItemResolved {
  id: string;
  order: number;
  title: string;
  role: string;
  description: string[];
  date: string;
  logoKey: string;
  linkedinUrl: string;
  techKeys: string[];
}

export interface EducationItemResolved {
  id: string;
  order: number;
  title: string;
  role: string;
  description: (string | React.ReactNode)[];
  date: string;
  logoKey: string;
  linkedinUrl: string;
  descriptionLinks?: { index: number; href: string; label: string }[];
}

export interface ProjectItemResolved {
  id: string;
  order: number;
  title: string;
  subtitle?: string;
  description: string;
  featured: boolean;
  highlights?: string[];
  githubLink: string;
  liveUrl?: string;
  bgImage: string;
  videoUrl: string;
}
