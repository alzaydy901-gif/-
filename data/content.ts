
import React from 'react';
import { BrainIcon, ZapIcon, UsersIcon, FootprintsIcon, TrophyIcon, HandshakeIcon, RocketIcon, TargetIcon, GamepadIcon, SwordsIcon, DropletsIcon } from 'lucide-react';
import type { TranslatedData } from '../types';

const data: { [key: string]: TranslatedData } = {
  ar: {
    studentInfo: {
      name: 'محمد عبدالرحمن عطيه الزايدي',
      grade: 'الأول متوسط',
      school: 'مدارس الاندلس الاهليه',
      email: 'operatiogve@gmail.com',
      class: '1/3',
    },
    content: {
      aboutMe: 'طالب مجتهد ويحب المنافسة، شغوف بتعلم كل ما هو جديد، وأطمح لمساعدة الناس في فهم عالم التداول.',
      education: 'المرحلة المتوسطة في مدارس الاندلس الاهلية.',
      achievements: [
        { id: 1, title: 'إنشاء موقع إلكتروني', type: 'academic', description: 'بناء أول موقع شخصي لعرض الإنجازات والمهارات.', year: 2024, imageUrl: 'https://picsum.photos/seed/website/400/300' },
        { id: 2, title: 'المساعدة في الحج', type: 'volunteer', description: 'التطوع في موسم الحج لخدمة ضيوف الرحمن.', year: 2023, imageUrl: 'https://picsum.photos/seed/hajj/400/300' },
        { id: 3, title: 'الفوز في مسابقة مدرسية', type: 'personal', description: 'تحقيق المركز الأول في مسابقة رياضية على مستوى المدرسة.', year: 2024, imageUrl: 'https://picsum.photos/seed/winner/400/300' },
      ],
      skills: [
        { name: 'السرعة', icon: ZapIcon },
        { name: 'الذكاء', icon: BrainIcon },
      ],
      hobbies: [
        { name: 'كرة القدم', icon: FootprintsIcon },
        { name: 'البادل', icon: SwordsIcon },
        { name: 'كرة السلة', icon: GamepadIcon },
      ],
      goals: {
        shortTerm: 'تعلم أساسيات التداول والاستثمار بشكل أعمق.',
        longTerm: 'إنشاء موقع متكامل يفيد الناس في تعلم التداول بأمان وذكاء.',
      },
      volunteerWork: 'المشاركة في تنظيم الفعاليات المدرسية والمساعدة في موسم الحج.',
    },
    labels: {
        siteName: 'الأول على المدرسة',
        aboutMe: 'نبذة عني',
        education: 'التعليم',
        academicAchievements: 'الإنجازات',
        skills: 'المهارات',
        hobbies: 'الهوايات',
        goals: 'الأهداف',
        shortTerm: 'قصيرة المدى',
        longTerm: 'طويلة المدى',
        volunteerWork: 'الأعمال التطوعية',
        tradingGame: 'لعبة التداول',
        all: 'الكل',
        academic: 'أكاديمي',
        volunteer: 'تطوعي',
        personal: 'شخصي',
        adminLogin: 'دخول المسؤول',
        password: 'كلمة السر',
        login: 'دخول',
        logout: 'خروج',
        adminDashboard: 'لوحة التحكم',
        saveChanges: 'حفظ التغييرات',
        edit: 'تعديل',
        name: 'الاسم',
        grade: 'الصف',
        school: 'المدرسة',
        email: 'البريد الإلكتروني',
        class: 'الفصل',
        contact: 'تواصل معي'
    },
  },
  en: {
    studentInfo: {
      name: 'Mohammed Abdulrahman Attia Al-Zaydi',
      grade: 'First Intermediate Grade',
      school: 'Al-Andalus National Schools',
      email: 'operatiogve@gmail.com',
      class: '1/3',
    },
    content: {
      aboutMe: 'A diligent and competitive student, passionate about learning new things, and I aspire to help people understand the world of trading.',
      education: 'Intermediate level at Al-Andalus National Schools.',
      achievements: [
        { id: 1, title: 'Website Creation', type: 'academic', description: 'Built my first personal website to showcase achievements and skills.', year: 2024, imageUrl: 'https://picsum.photos/seed/website/400/300' },
        { id: 2, title: 'Helping in Hajj', type: 'volunteer', description: 'Volunteered during the Hajj season to serve the pilgrims.', year: 2023, imageUrl: 'https://picsum.photos/seed/hajj/400/300' },
        { id: 3, title: 'School Competition Winner', type: 'personal', description: 'Achieved first place in a school-wide sports competition.', year: 2024, imageUrl: 'https://picsum.photos/seed/winner/400/300' },
      ],
      skills: [
        { name: 'Speed', icon: ZapIcon },
        { name: 'Intelligence', icon: BrainIcon },
      ],
      hobbies: [
        { name: 'Football', icon: FootprintsIcon },
        { name: 'Padel', icon: SwordsIcon },
        { name: 'Basketball', icon: GamepadIcon },
      ],
      goals: {
        shortTerm: 'Learn the fundamentals of trading and investing more deeply.',
        longTerm: 'Create a comprehensive website that helps people learn trading safely and intelligently.',
      },
      volunteerWork: 'Participating in organizing school events and helping during the Hajj season.',
    },
    labels: {
        siteName: 'First in School',
        aboutMe: 'About Me',
        education: 'Education',
        academicAchievements: 'Achievements',
        skills: 'Skills',
        hobbies: 'Hobbies',
        goals: 'Goals',
        shortTerm: 'Short Term',
        longTerm: 'Long Term',
        volunteerWork: 'Volunteer Work',
        tradingGame: 'Trading Game',
        all: 'All',
        academic: 'Academic',
        volunteer: 'Volunteer',
        personal: 'Personal',
        adminLogin: 'Admin Login',
        password: 'Password',
        login: 'Login',
        logout: 'Logout',
        adminDashboard: 'Admin Dashboard',
        saveChanges: 'Save Changes',
        edit: 'Edit',
        name: 'Name',
        grade: 'Grade',
        school: 'School',
        email: 'Email',
        class: 'Class',
        contact: 'Contact Me'
    },
  },
};

export default data;
