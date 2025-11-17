import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import AchievementCard from '../components/AchievementCard';
import TeacherCommentCard from '../components/TeacherCommentCard';
import TradingGame from '../components/TradingGame';
import { useAppContext } from '../contexts/AppContext';
import type { Achievement, TeacherComment } from '../types';

const PortfolioPage: React.FC = () => {
  const { data, t, isLoading } = useAppContext();
  const [filter, setFilter] = useState<'all' | 'academic' | 'volunteer' | 'personal'>('all');
  
  const [comments, setComments] = useState<TeacherComment[]>([]);
  const [newComment, setNewComment] = useState({ name: '', subject: '', comment: '' });
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    if (data?.content?.teacherComments) {
      setComments(data.content.teacherComments);
    }
  }, [data]);

  if (isLoading) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-3xl font-bold">
            Loading...
        </div>
    );
  }

  if (!data) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-3xl font-bold">
            Could not load portfolio data. Please try again later.
        </div>
    );
  }

  const { studentInfo, content } = data;

  const filteredAchievements = content.achievements.filter(ach =>
    filter === 'all' ? true : ach.type === filter
  );
  
  const filterButtons: Array<'all' | 'academic' | 'volunteer' | 'personal'> = ['all', 'academic', 'volunteer', 'personal'];

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.subject.trim() || !newComment.comment.trim()) {
        setFormMessage({ type: 'error', text: t('commentError') });
        return;
    }
    const newCommentObject: TeacherComment = {
        id: Date.now(),
        teacherName: newComment.name,
        subject: newComment.subject,
        comment: newComment.comment,
        avatarUrl: `https://picsum.photos/seed/${Date.now()}/100`,
    };
    // Note: This comment is only added to the local state and will not be persisted.
    setComments(prev => [...prev, newCommentObject]);
    setNewComment({ name: '', subject: '', comment: '' });
    setFormMessage({ type: 'success', text: t('commentSuccess') });
    setTimeout(() => setFormMessage({ type: '', text: '' }), 4000);
  };

  return (
    <div className="bg-transparent" dir={useAppContext().language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="min-h-[70vh] flex items-center justify-center text-center px-4">
            <div className="container mx-auto">
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 leading-tight mb-4 animate-[fade-in-down_1s_ease-out]">
                    {studentInfo.name}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-cyan-300 font-medium animate-[fade-in-up_1s_ease-out_0.5s]">
                    {studentInfo.grade} - {studentInfo.school}
                </p>
            </div>
        </div>

        {/* About Me */}
        <Section title={t('aboutMe')}>
          <p className="text-center text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed text-gray-300 font-light">
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
                        className={`text-base sm:text-lg font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                        filter === btnFilter
                            ? 'bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-400/30'
                            : 'bg-slate-800/60 border border-slate-700 text-gray-300 hover:bg-slate-700/80'
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
        <Section title={t('skills')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-cyan-300">{t('skills')}</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {content.skills.map(skill => (
                            skill.icon && (
                                <div key={skill.name} className="flex items-center gap-3 text-lg font-medium bg-slate-800/60 border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800 transition-all py-3 px-5 rounded-lg">
                                    <skill.icon className="text-cyan-300" size={24} />
                                    <span>{skill.name}</span>
                                </div>
                            )
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-cyan-300">{t('hobbies')}</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {content.hobbies.map(hobby => (
                            hobby.icon && (
                                <div key={hobby.name} className="flex items-center gap-3 text-lg font-medium bg-slate-800/60 border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800 transition-all py-3 px-5 rounded-lg">
                                    <hobby.icon className="text-cyan-300" size={24} />
                                    <span>{hobby.name}</span>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </Section>

        {/* Goals */}
        <Section title={t('goals')}>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800/70 border border-slate-800 p-6 sm:p-8 rounded-2xl text-center shadow-lg">
                    <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-400">{t('shortTerm')}</h4>
                    <p className="text-xl sm:text-2xl text-gray-300 font-light">{content.goals.shortTerm}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800/70 border border-slate-800 p-6 sm:p-8 rounded-2xl text-center shadow-lg">
                    <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-400">{t('longTerm')}</h4>
                    <p className="text-xl sm:text-2xl text-gray-300 font-light">{content.goals.longTerm}</p>
                </div>
            </div>
        </Section>
        
        {/* Teacher Comments */}
        <Section title={t('teacherComments')}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {comments.map(comment => (
                    <TeacherCommentCard key={comment.id} comment={comment} />
                ))}
            </div>
        </Section>

        {/* Leave a Comment Form */}
        <Section title={t('leaveAComment')}>
            <div className="max-w-3xl mx-auto bg-slate-900/70 backdrop-blur-xl border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl shadow-cyan-500/10">
                <form onSubmit={handleCommentSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-300 text-lg font-bold mb-3">{t('yourName')}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={newComment.name}
                                onChange={handleCommentChange}
                                className="text-lg appearance-none border-2 border-slate-700 rounded-lg w-full py-3 px-4 bg-slate-800/50 text-white leading-tight focus:outline-none focus:bg-slate-700 focus:border-cyan-500 transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-300 text-lg font-bold mb-3">{t('yourSubject')}</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={newComment.subject}
                                onChange={handleCommentChange}
                                className="text-lg appearance-none border-2 border-slate-700 rounded-lg w-full py-3 px-4 bg-slate-800/50 text-white leading-tight focus:outline-none focus:bg-slate-700 focus:border-cyan-500 transition-colors"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="comment" className="block text-gray-300 text-lg font-bold mb-3">{t('yourComment')}</label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={newComment.comment}
                            onChange={handleCommentChange}
                            rows={5}
                            className="text-lg appearance-none border-2 border-slate-700 rounded-lg w-full py-3 px-4 bg-slate-800/50 text-white leading-tight focus:outline-none focus:bg-slate-700 focus:border-cyan-500 transition-colors"
                            required
                        />
                    </div>
                    {formMessage.text && (
                        <p className={`text-center mb-4 text-lg ${formMessage.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                            {formMessage.text}
                        </p>
                    )}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="text-xl shadow bg-cyan-600 hover:bg-cyan-500 focus:shadow-outline focus:outline-none text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            {t('submitComment')}
                        </button>
                    </div>
                </form>
            </div>
        </Section>
        
        {/* Trading Game */}
        <Section title={t('tradingGame')}>
            <TradingGame />
        </Section>

      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;