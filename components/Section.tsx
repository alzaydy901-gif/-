
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
  return (
    <section className={`py-16 sm:py-24 px-4 sm:px-8 md:px-12 ${className}`}>
      <div className="container mx-auto">
        <div className="mb-12 text-center">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-white relative inline-block tracking-tight">
                {title}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 mx-auto rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;