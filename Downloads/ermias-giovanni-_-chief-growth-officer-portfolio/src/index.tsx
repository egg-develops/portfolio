import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PortfolioSection from '../components/PortfolioSection';
import MilestonesSection from '../components/MilestonesSection';
import PhilosophySection from '../components/PhilosophySection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-500 selection:text-white bg-[#030712] text-white">
      <Header />
      
      <main className="relative">
        {/* The Hero component contains the #intro ID at its root */}
        <Hero />
        
        {/* Each component below contains its own ID at the section level */}
        <PortfolioSection />
        
        <MilestonesSection />
        
        <PhilosophySection />
        
        <SkillsSection />
        
        <ContactSection />
      </main>

      {/* Floating Side Nav Indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col space-y-4 no-print">
        {['intro', 'portfolio', 'milestones', 'philosophy', 'skills', 'contact'].map((id) => (
          <a 
            key={id} 
            href={`#${id}`} 
            className="group relative flex items-center justify-end"
            aria-label={`Scroll to ${id}`}
          >
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap">
              {id.replace('-', ' ')}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-indigo-500 group-hover:scale-150 transition-all duration-300"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;