import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

// This is a helper component defined outside the main component
const EditableField: React.FC<{
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
}> = ({ label, value, onChange, isTextArea = false }) => (
  <div className="mb-6">
    <label className="block text-cyan-300 text-xl sm:text-2xl font-bold mb-2">{label}</label>
    {isTextArea ? (
      <textarea
        value={value}
        onChange={onChange}
        rows={4}
        className="text-lg sm:text-xl appearance-none border-2 border-gray-700 rounded w-full py-3 px-4 bg-gray-800 text-white leading-tight focus:outline-none focus:bg-gray-700 focus:border-cyan-500"
      />
    ) : (
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="text-lg sm:text-xl appearance-none border-2 border-gray-700 rounded w-full py-3 px-4 bg-gray-800 text-white leading-tight focus:outline-none focus:bg-gray-700 focus:border-cyan-500"
      />
    )}
  </div>
);

const AdminDashboardPage: React.FC = () => {
  const { isAdmin, data, setData, t, logout } = useAppContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(data);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/login');
    }
  }, [isAdmin, navigate]);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleStudentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      studentInfo: { ...prev.studentInfo, [name]: value }
    }));
  };
  
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      content: { ...prev.content, [name]: value }
    }));
  };

  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        content: {
            ...prev.content,
            goals: { ...prev.content.goals, [name]: value }
        }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
  
  if (!isAdmin) {
    return null; 
  }

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8" dir={useAppContext().language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-300">{t('adminDashboard')}</h1>
            <button onClick={() => { logout(); navigate('/'); }} className="text-lg sm:text-xl bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors">
                {t('logout')}
            </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900/60 backdrop-blur-sm p-4 sm:p-8 rounded-lg shadow-2xl shadow-cyan-500/20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 border-b-2 border-cyan-500 pb-3 text-white">Student Info</h2>
          <div className="grid md:grid-cols-2 gap-x-8">
            <EditableField label={t('name')} value={formData.studentInfo.name} onChange={(e) => handleStudentInfoChange({...e, target: {...e.target, name: 'name'}})} />
            <EditableField label={t('grade')} value={formData.studentInfo.grade} onChange={(e) => handleStudentInfoChange({...e, target: {...e.target, name: 'grade'}})} />
            <EditableField label={t('school')} value={formData.studentInfo.school} onChange={(e) => handleStudentInfoChange({...e, target: {...e.target, name: 'school'}})} />
            <EditableField label={t('email')} value={formData.studentInfo.email} onChange={(e) => handleStudentInfoChange({...e, target: {...e.target, name: 'email'}})} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mt-12 mb-6 border-b-2 border-cyan-500 pb-3 text-white">Content</h2>
          <EditableField label={t('aboutMe')} value={formData.content.aboutMe} onChange={(e) => handleContentChange({...e, target: {...e.target, name: 'aboutMe'}})} isTextArea />
          <EditableField label={t('goals') + ` (${t('shortTerm')})`} value={formData.content.goals.shortTerm} onChange={(e) => handleGoalChange({...e, target: {...e.target, name: 'shortTerm'}})} isTextArea />
          <EditableField label={t('goals') + ` (${t('longTerm')})`} value={formData.content.goals.longTerm} onChange={(e) => handleGoalChange({...e, target: {...e.target, name: 'longTerm'}})} isTextArea />

          {/* Achievement editing would be more complex and is omitted for simplicity */}

          <div className="mt-12 text-center">
            <button type="submit" className="text-2xl sm:text-3xl bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-lg transition-colors duration-300">
              {t('saveChanges')}
            </button>
            {saved && <p className="text-green-400 mt-4 text-xl sm:text-2xl">Changes saved successfully!</p>}
            <p className="text-gray-400 mt-4 text-base sm:text-lg">(Note: Changes are saved for the current session only)</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboardPage;