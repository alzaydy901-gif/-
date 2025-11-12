import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const TradingGame: React.FC = () => {
  const { t } = useTranslation();
  const [price, setPrice] = useState(100);
  const [balance, setBalance] = useState(1000);
  const [shares, setShares] = useState(0);
  const [lastChange, setLastChange] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 10;
      setPrice(prev => Math.max(1, prev + change));
      setLastChange(change);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const buy = () => {
    if (balance >= price) {
      setBalance(prev => prev - price);
      setShares(prev => prev + 1);
    }
  };

  const sell = () => {
    if (shares > 0) {
      setBalance(prev => prev + price);
      setShares(prev => prev - 1);
    }
  };

  const priceColor = lastChange >= 0 ? 'text-green-400' : 'text-red-400';
  const PriceIcon = lastChange >= 0 ? TrendingUp : TrendingDown;

  return (
    <div className="bg-gray-900/60 backdrop-blur-md p-4 sm:p-8 rounded-lg shadow-2xl shadow-cyan-500/20 max-w-2xl mx-auto text-center">
      <h3 className="text-3xl sm:text-4xl font-bold text-cyan-300 mb-6">{t('tradingGame')}</h3>
      <p className="text-gray-400 text-lg sm:text-xl mb-8">A simple simulation to understand market dynamics.</p>
      
      <div className="bg-black/50 p-6 rounded-lg mb-6">
        <p className="text-xl sm:text-2xl text-gray-300 mb-2">Stock Price</p>
        <div className={`flex items-center justify-center text-5xl sm:text-6xl font-mono font-bold ${priceColor}`}>
          <DollarSign size={32} className="mr-2 sm:mr-2"/>
          {price.toFixed(2)}
          <PriceIcon size={32} className="ml-2 sm:ml-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl sm:text-2xl mb-8">
        <div className="bg-black/50 p-4 rounded-lg">
          <p className="text-gray-400">Balance</p>
          <p className="font-bold text-white">${balance.toFixed(2)}</p>
        </div>
        <div className="bg-black/50 p-4 rounded-lg">
          <p className="text-gray-400">Shares</p>
          <p className="font-bold text-white">{shares}</p>
        </div>
      </div>

      <div className="flex justify-center space-x-4 sm:space-x-6">
        <button onClick={buy} className="text-xl sm:text-2xl bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/20">Buy</button>
        <button onClick={sell} className="text-xl sm:text-2xl bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-red-500/20">Sell</button>
      </div>
    </div>
  );
};

export default TradingGame;