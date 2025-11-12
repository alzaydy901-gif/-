
import React from 'react';
import type { Achievement } from '../types';
import { useAppContext } from '../contexts/AppContext';

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const { t } = useAppContext();
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg shadow-cyan-500/10 transform hover:scale-105 transition-transform duration-300 group">
      <img src={achievement.imageUrl} alt={achievement.title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">{achievement.title}</h3>
            <span className="text-sm font-semibold bg-cyan-800 text-cyan-100 py-1 px-3 rounded-full">{achievement.year}</span>
        </div>
        <p className="text-gray-300 text-lg mb-4">{achievement.description}</p>
        <span className="text-sm font-medium text-cyan-400 capitalize">{t(achievement.type)}</span>
      </div>
    </div>
  );
};

export default AchievementCard;
