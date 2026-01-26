
import React from 'react';
import { SKILLS, MARTECH } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Technical Arsenal</h2>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Skills Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-8 flex items-center text-indigo-400">
              <span className="mr-3">⚡</span> Core Competencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-indigo-500/50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Martech Stack Column */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {MARTECH.map((group) => (
              <div key={group.category} className="glass-card p-6 rounded-2xl border-white/5">
                <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-4">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-indigo-500/10 text-xs text-indigo-300 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
