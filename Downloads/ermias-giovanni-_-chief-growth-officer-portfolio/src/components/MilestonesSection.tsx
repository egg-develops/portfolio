
import React from 'react';
import { MILESTONES } from '../../constants';

const MilestonesSection: React.FC = () => {
  return (
    <section id="milestones" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Career Milestones</h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2">
          {MILESTONES.map((milestone, idx) => (
            <div key={idx} className={`relative mb-12 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-[-50%]' : 'md:pl-12 md:ml-[50%]'}`}>
              {/* Dot */}
              <div className="absolute top-1.5 -left-[9px] md:left-auto md:right-[-9px] w-4 h-4 rounded-full bg-indigo-600 border-4 border-gray-900 z-10 hidden md:block" 
                   style={idx % 2 !== 0 ? { left: '-8px' } : {}}></div>
              
              <div className="glass-card p-6 rounded-2xl group hover:border-indigo-500/50 transition-all">
                <span className="text-3xl font-black text-indigo-500/30 mb-2 block font-mono">{milestone.year}</span>
                <p className="text-gray-200 font-medium leading-relaxed group-hover:text-white transition-colors">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
