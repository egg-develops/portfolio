import React from 'react';

const Hero: React.FC = () => {
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (typeof window.print === 'function') {
        window.print();
      } else {
        throw new Error('Print not supported');
      }
    } catch (err) {
      console.error('Print failed:', err);
      alert('The print dialog could not be opened automatically. Please use Ctrl+P (Windows) or Cmd+P (Mac) to save this page as a PDF.');
    }
  };

  return (
    <section id="intro" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Structural Background elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-float no-print"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-float no-print" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold tracking-[0.3em] uppercase no-print">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Executive Growth Advisory
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
          STRATEGIC <br />
          <span className="text-gradient">GROWTH</span> ARCHITECT.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Scale-up specialist for high-stakes SaaS and Web3 ventures. 
          I build the institutional-grade GTM engines that turn vision into global market dominance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 no-print">
          <a href="#portfolio" className="group w-full sm:w-auto px-10 py-5 bg-white text-black hover:bg-indigo-500 hover:text-white rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3">
            Explore GTM Case Studies
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <button 
            onClick={handlePrint}
            type="button"
            className="w-full sm:w-auto px-10 py-5 glass-card border-white/10 hover:border-white/30 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Executive CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;