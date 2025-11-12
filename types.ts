// FIX: Import necessary types from React to resolve namespace errors.
import type { ComponentType, Dispatch, SetStateAction } from 'react';

export interface StudentInfo {
  name: string;
  grade: string;
  school: string;
  email: string;
  class: string;
}

export interface Achievement {
  id: number;
  title: string;
  type: 'academic' | 'volunteer' | 'personal';
  description: string;
  year: number;
  fileUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  // FIX: Use ComponentType from react instead of React.ComponentType.
  icon: ComponentType<{ className?: string }>;
}

export interface Hobby {
    name: string;
    // FIX: Use ComponentType from react instead of React.ComponentType.
    icon: ComponentType<{ className?: string }>;
}

export interface PortfolioContent {
  aboutMe: string;
  education: string;
  achievements: Achievement[];
  skills: Skill[];
  hobbies: Hobby[];
  goals: {
    shortTerm: string;
    longTerm: string;
  };
  volunteerWork: string;
}

export interface TranslatedData {
  studentInfo: StudentInfo;
  content: PortfolioContent;
  labels: {
    [key: string]: string;
  };
}

export type Language = 'ar' | 'en';

export interface AppContextType {
  data: TranslatedData;
  // FIX: Use Dispatch and SetStateAction from react instead of React.Dispatch and React.SetStateAction.
  setData: Dispatch<SetStateAction<TranslatedData>>;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}