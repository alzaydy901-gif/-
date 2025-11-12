
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import type { AppContextType, Language, TranslatedData } from '../types';
import initialData from '../data/content';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');
  const [data, setData] = useState<TranslatedData>(initialData[language]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setData(initialData[lang]);
  }, []);
  
  const t = useCallback((key: string): string => {
    return data.labels[key] || key;
  }, [data]);

  const login = (password: string): boolean => {
    if (password === 'admin') {
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
