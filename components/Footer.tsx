
import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Mail, Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  const { data, t, language } = useAppContext();

  return (
    <footer className="bg-slate-950/50 border-t border-slate-800 text-gray-400 py-12 px-4 sm:px-8">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-white">{t('contact')}</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 text-lg sm:text-xl">
          <a href={`mailto:${data.studentInfo.email}`} className="flex items-center group text-gray-300 hover:text-cyan-300 transition-colors">
            <Mail className="mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            <span>{data.studentInfo.email}</span>
          </a>
          <div className="flex items-center text-gray-300">
            <Briefcase className="mr-3 text-cyan-400" />
            <span>{data.studentInfo.name}</span>
          </div>
        </div>
        <p className="mt-10 text-base text-gray-500">
            &copy; {new Date().getFullYear()} {data.studentInfo.name}. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;