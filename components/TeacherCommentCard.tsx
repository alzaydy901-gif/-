import React from 'react';
import { Quote } from 'lucide-react';
import type { TeacherComment } from '../types';

interface TeacherCommentCardProps {
  comment: TeacherComment;
}

const TeacherCommentCard: React.FC<TeacherCommentCardProps> = ({ comment }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/50 p-px rounded-2xl group transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:!scale-105 h-full">
      <div className="bg-slate-900 rounded-[15px] p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="flex-grow ltr:mr-4 rtl:ml-4">
            <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{comment.teacherName}</h4>
            <p className="text-md text-cyan-400">{comment.subject}</p>
          </div>
          <img src={comment.avatarUrl} alt={comment.teacherName} className="w-16 h-16 rounded-full object-cover border-2 border-slate-700 group-hover:border-cyan-400 transition-colors" />
        </div>
        <div className="mt-2 flex-grow flex items-center gap-x-4">
          <Quote className="w-16 h-16 text-slate-700/80 transform scale-x-[-1] flex-shrink-0" />
          <blockquote className="text-lg text-gray-300 font-light italic">
            {comment.comment}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TeacherCommentCard;