import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Mail, Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  const { data, t } = useAppContext();

  return (
    <footer className="bg-gray-900/50 text-gray-300 py-12 px-4 sm:px-8">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-cyan-300">{t('contact')}</h3>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg sm:text-xl">
          <a href={`mailto:${data.studentInfo.email}`} className="flex items-center hover:text-cyan-300 transition-colors">
            <Mail className="mr-3" />
            <span>{data.studentInfo.email}</span>
          </a>
          <div className="flex items-center">
            <Briefcase className="mr-3" />
            <span>{data.studentInfo.name}</span>
          </div>
        </div>
        <p className="mt-8 text-base sm:text-lg">&copy; {new Date().getFullYear()} {data.studentInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;