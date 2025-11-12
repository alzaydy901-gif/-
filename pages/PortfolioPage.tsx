import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import AchievementCard from '../components/AchievementCard';
import TradingGame from '../components/TradingGame';
import { useAppContext } from '../contexts/AppContext';
import type { Achievement } from '../types';

const PortfolioPage: React.FC = () => {
  const { data, t } = useAppContext();
  const { studentInfo, content } = data;
  const [filter, setFilter] = useState<'all' | 'academic' | 'volunteer' | 'personal'>('all');

  const filteredAchievements = content.achievements.filter(ach =>
    filter === 'all' ? true : ach.type === filter
  );
  
  const filterButtons: Array<'all' | 'academic' | 'volunteer' | 'personal'> = ['all', 'academic', 'volunteer', 'personal'];

  return (
    <div className="bg-black" dir={useAppContext().language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="min-h-[60vh] flex items-center justify-center text-center px-4 bg-black">
            <div className="container mx-auto">
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-tight mb-4">
                    {studentInfo.name}
                </h1>
                <p className="text-xl sm:text-2xl md:text-4xl text-cyan-300 font-semibold">
                    {studentInfo.grade} - {studentInfo.school}
                </p>
            </div>
        </div>

        {/* About Me */}
        <Section title={t('aboutMe')} className="bg-gray-900/30">
          <p className="text-center text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed text-gray-200">
            {content.aboutMe}
          </p>
        </Section>
        
        {/* Achievements */}
        <Section title={t('academicAchievements')}>
            <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
                {filterButtons.map(btnFilter => (
                    <button
                        key={btnFilter}
                        onClick={() => setFilter(btnFilter)}
                        className={`text-base sm:text-xl font-semibold py-2 px-4 sm:px-6 rounded-full transition-all duration-300 ${
                        filter === btnFilter
                            ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/30'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        {t(btnFilter)}
                    </button>
                ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {filteredAchievements.map((ach: Achievement) => (
                    <AchievementCard key={ach.id} achievement={ach} />
                ))}
            </div>
        </Section>
        
        {/* Skills & Hobbies */}
        <Section title={t('skills')} className="bg-gray-900/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-cyan-300">{t('skills')}</h3>
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                        {content.skills.map(skill => (
                            <div key={skill.name} className="flex flex-col items-center gap-3 text-xl sm:text-2xl font-semibold">
                                <div className="bg-gray-800 p-4 sm:p-6 rounded-full text-cyan-300">
                                    <skill.icon size={48} />
                                </div>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-cyan-300">{t('hobbies')}</h3>
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                        {content.hobbies.map(hobby => (
                            <div key={hobby.name} className="flex flex-col items-center gap-3 text-xl sm:text-2xl font-semibold">
                                <div className="bg-gray-800 p-4 sm:p-6 rounded-full text-cyan-300">
                                    <hobby.icon size={48} />
                                </div>
                                <span>{hobby.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>

        {/* Goals */}
        <Section title={t('goals')}>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
                <div className="bg-gray-900/60 p-6 sm:p-8 rounded-lg text-center">
                    <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-400">{t('shortTerm')}</h4>
                    <p className="text-xl sm:text-2xl text-gray-300">{content.goals.shortTerm}</p>
                </div>
                <div className="bg-gray-900/60 p-6 sm:p-8 rounded-lg text-center">
                    <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-400">{t('longTerm')}</h4>
                    <p className="text-xl sm:text-2xl text-gray-300">{content.goals.longTerm}</p>
                </div>
            </div>
        </Section>
        
        {/* Trading Game */}
        <Section title={t('tradingGame')} className="bg-gray-900/30">
            <TradingGame />
        </Section>

      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;