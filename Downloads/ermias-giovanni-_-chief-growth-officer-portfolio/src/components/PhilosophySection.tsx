
import React from 'react';

const PhilosophySection: React.FC = () => {
  const motions = [
    "Deeply understanding our ideal clients",
    "Mapping out the stages of their buying journey",
    "Define our category and establish thought leadership",
    "High-quality, demand generating, SEO-GEO-driven content",
    "Strategic distribution across organic, owned, and paid channels",
    "Engineering-style methodologies, CI/CD, execution in agile sprints",
    "Consistent measurement with data-driven CRO"
  ];

  return (
    <section id="philosophy" className="py-24 relative">
       <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
       </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-8">Philosophy</h2>
          <div className="glass-card p-10 rounded-3xl border-l-4 border-l-indigo-500">
            <p className="text-xl text-gray-300 leading-relaxed italic">
              "A deep understanding of ideal client profiles (ICP) must pervade every process and touchpoint of our organization—from product and marketing to sales and customer experience. It's the starting point of my strategy and the constant variable by which I measure success."
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-8">Growth Motions</h2>
          <div className="space-y-4">
            {motions.map((motion, idx) => (
              <div key={idx} className="flex items-center p-4 glass-card rounded-2xl border-white/5 hover:translate-x-2 transition-transform cursor-default">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400 font-mono text-xs mr-4">
                  0{idx + 1}
                </span>
                <span className="text-gray-300 font-medium">{motion}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
