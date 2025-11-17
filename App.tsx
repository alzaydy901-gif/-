
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import PortfolioPage from './pages/PortfolioPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import CosmicBackground from './components/CosmicBackground';

function App() {
  return (
    <AppProvider>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        <CosmicBackground />
        <div className="relative z-10">
          <HashRouter>
            <Routes>
              <Route path="/" element={<PortfolioPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
            </Routes>
          </HashRouter>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
