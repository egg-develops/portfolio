import React from 'react';
import { PROJECTS } from '../constants';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.4em] text-indigo-500 uppercase mb-4">Track Record</h2>
            <h3 className="text-5xl font-black mb-6 tracking-tight">Strategic Deployments</h3>
            <p className="text-gray-400 text-xl font-light">Directing growth through high-stakes financing rounds, category definition, and market exits.</p>
          </div>
          <div className="mt-8 md:mt-0 text-indigo-400 font-mono text-xs tracking-widest border-b border-indigo-500/30 pb-2">
            2018 — PRESENT
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-indigo-500/40 transition-all duration-700 flex flex-col h-full bg-gradient-to-b from-white/[0.03] to-transparent">
              <div className="flex justify-between items-start mb-10">
                <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 text-[10px] font-bold tracking-widest text-indigo-300 border border-indigo-500/20 uppercase">
                  {project.category}
                </span>
                <span className="text-white/40 text-xs font-mono tracking-tighter uppercase">{project.stats}</span>
              </div>
              
              <h4 className="text-4xl font-bold mb-6 group-hover:text-indigo-400 transition-colors tracking-tight">{project.name}</h4>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed font-light">
                {project.description}
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                    <p className="text-sm text-gray-300 leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 text-gray-500 px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-indigo-500/20 group-hover:text-indigo-400 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;