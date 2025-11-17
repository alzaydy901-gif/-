
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { LogIn, LogOut, Settings, Languages } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage, t, isAdmin, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLanguageToggle = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="py-6 px-4 sm:px-8 md:px-12 bg-slate-950/70 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl md:text-4xl font-extrabold text-white tracking-tight hover:text-cyan-300 transition-colors">
          {t('siteName')}
        </Link>
        <nav className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={handleLanguageToggle}
            className="p-2 rounded-full text-white hover:bg-white/10 hover:text-cyan-300 transition-all duration-300"
            aria-label="Toggle Language"
          >
            <Languages size={24} />
          </button>
          {isAdmin ? (
            <>
              <Link
                to="/admin"
                className="p-2 rounded-full text-white hover:bg-white/10 hover:text-cyan-300 transition-all duration-300"
                aria-label={t('adminDashboard')}
              >
                <Settings size={24} />
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 rounded-full text-white hover:bg-red-500/20 hover:text-red-400 transition-all duration-300"
                aria-label={t('logout')}
              >
                <LogOut size={24} />
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="p-2 rounded-full text-white hover:bg-white/10 hover:text-cyan-300 transition-all duration-300"
              aria-label={t('adminLogin')}
            >
              <LogIn size={24} />
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;