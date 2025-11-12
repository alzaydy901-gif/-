
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
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-12 text-center text-white relative">
            {title}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-cyan-400"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
