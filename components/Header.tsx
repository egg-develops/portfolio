import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      window.print();
    } catch (err) {
      alert('Please use your browser menu or Ctrl+P to save as PDF.');
    }
  };

  const navLinks = [
    { name: 'Deployments', href: '#portfolio' },
    { name: 'Timeline', href: '#milestones' },
    { name: 'The Method', href: '#philosophy' },
    { name: 'Arsenal', href: '#skills' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 no-print ${
      isScrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/10' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#intro" className="flex flex-col group">
          <span className="text-xl font-black tracking-tighter group-hover:text-indigo-400 transition-colors uppercase">GIOVANNI</span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-indigo-500 font-bold">Growth Advisory</span>
        </a>
        
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-4 bg-white/10"></div>
          <a 
            href="https://www.linkedin.com/in/ermiasgio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
          >
            LinkedIn
          </a>
          <button 
            onClick={handleDownload}
            type="button"
            className="flex items-center text-xs font-bold uppercase tracking-widest text-indigo-400 hover:text-white transition-colors gap-2"
          >
            CV
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>

        <a 
          href="#contact" 
          className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl active:scale-95"
        >
          Work With Me
        </a>
      </div>
    </nav>
  );
};

export default Header;