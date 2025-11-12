
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
    <header className="py-6 px-4 sm:px-8 md:px-12 bg-black/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl md:text-4xl font-bold text-cyan-300 tracking-wider">
          {t('siteName')}
        </Link>
        <nav className="flex items-center space-x-4">
          <button
            onClick={handleLanguageToggle}
            className="p-2 text-white hover:text-cyan-300 transition-colors duration-300"
            title="Toggle Language"
          >
            <Languages size={28} />
          </button>
          {isAdmin ? (
            <>
              <Link
                to="/admin"
                className="p-2 text-white hover:text-cyan-300 transition-colors duration-300"
                title={t('adminDashboard')}
              >
                <Settings size={28} />
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 text-white hover:text-red-400 transition-colors duration-300"
                title={t('logout')}
              >
                <LogOut size={28} />
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="p-2 text-white hover:text-cyan-300 transition-colors duration-300"
              title={t('adminLogin')}
            >
              <LogIn size={28} />
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
