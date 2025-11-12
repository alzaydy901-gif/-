import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

const LoginPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, t } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md bg-gray-900/70 backdrop-blur-sm p-8 rounded-lg shadow-2xl shadow-cyan-500/20">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-cyan-300">{t('adminLogin')}</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-300 text-xl sm:text-2xl font-bold mb-2">
              {t('password')}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-lg sm:text-xl appearance-none border-2 border-gray-700 rounded w-full py-3 px-4 bg-gray-800 text-white leading-tight focus:outline-none focus:bg-gray-700 focus:border-cyan-500"
            />
          </div>
          {error && <p className="text-red-500 text-base sm:text-lg text-center mb-4">{error}</p>}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="text-xl sm:text-2xl shadow bg-cyan-600 hover:bg-cyan-500 focus:shadow-outline focus:outline-none text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              {t('login')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;