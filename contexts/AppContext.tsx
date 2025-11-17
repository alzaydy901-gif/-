import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import type { AppContextType, Language, TranslatedData } from '../types';
import staticData from '../data/content';
import { iconMap } from '../components/IconMap';

const AppContext = createContext<AppContextType | undefined>(undefined);

const hydrateData = (data: TranslatedData): TranslatedData => {
    const hydratedContent = { ...data.content };

    if (hydratedContent.skills) {
        hydratedContent.skills = hydratedContent.skills.map(skill => ({
            ...skill,
            icon: iconMap[skill.iconName]
        }));
    }
    if (hydratedContent.hobbies) {
        hydratedContent.hobbies = hydratedContent.hobbies.map(hobby => ({
            ...hobby,
            icon: iconMap[hobby.iconName]
        }));
    }
    return { ...data, content: hydratedContent };
};


export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');
  const [data, setData] = useState<TranslatedData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const docRef = doc(db, 'portfolio', language);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setData(hydrateData(docSnap.data() as TranslatedData));
            } else {
                console.log(`Document for language '${language}' does not exist. Falling back to local data.`);
                setData(hydrateData(staticData[language]));
            }
        } catch (error) {
            console.error("Error fetching data from Firestore, falling back to local data:", error);
            setData(hydrateData(staticData[language]));
        } finally {
            setIsLoading(false);
        }
    };
    fetchData();
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);
  
  const t = useCallback((key: string): string => {
    return data?.labels?.[key] || key;
  }, [data]);

  const login = (password: string): boolean => {
    if (password === 'admin123') { // Using a slightly more secure password
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
  };

  const value: AppContextType = {
    data,
    setData,
    language,
    setLanguage,
    t,
    isAdmin,
    login,
    logout,
    isLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};