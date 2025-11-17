
import React from 'react';
import type { Achievement } from '../types';
import { useAppContext } from '../contexts/AppContext';

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const { t } = useAppContext();
  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/50 p-px rounded-2xl group transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:!scale-105">
        <div className="bg-slate-900 rounded-[15px] overflow-hidden h-full">
            <img src={achievement.imageUrl} alt={achievement.title} className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{achievement.title}</h3>
                    <span className="text-sm font-semibold bg-cyan-500/10 text-cyan-300 py-1 px-3 rounded-full whitespace-nowrap">{achievement.year}</span>
                </div>
                <p className="text-gray-400 text-lg mb-4 font-light">{achievement.description}</p>
                <span className="text-sm font-medium text-cyan-400 capitalize">{t(achievement.type)}</span>
            </div>
        </div>
    </div>
  );
};

export default AchievementCard;