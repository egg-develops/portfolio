import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-12 md:p-24 overflow-hidden relative border-white/5">
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/5 via-transparent to-transparent pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-sm font-bold tracking-[0.3em] text-indigo-400 uppercase mb-6">Contact</h2>
            
            <div className="mb-12">
              <h3 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">ERMIAS GIOVANNI</h3>
              <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">Chief Growth Officer</p>
            </div>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-16"></div>

            <div className="grid md:grid-cols-2 gap-12 w-full mb-16">
              <a href="mailto:ermiasgiovanni@gmail.com" className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-indigo-600/20 transition-colors">
                  <span className="text-2xl">✉️</span>
                </div>
                <span className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-bold">Email</span>
                <span className="text-xl font-semibold text-gray-200 group-hover:text-white">ermiasgiovanni@gmail.com</span>
              </a>

              <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-indigo-600/20 transition-colors">
                  <span className="text-2xl">📞</span>
                </div>
                <span className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-bold">Phone</span>
                <span className="text-xl font-semibold text-gray-200">+41 77 919 92 02</span>
              </div>
            </div>

            <div className="flex items-center gap-8 no-print">
              <a 
                href="https://www.linkedin.com/in/ermiasgio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-all text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2 group"
              >
                LinkedIn
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <a 
                href="https://x.com/ermiasgio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-all text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2 group"
              >
                X (Twitter)
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] uppercase tracking-[0.2em]">
          <p>© 2025 Ermias Giovanni. High-Growth Strategic Leadership.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#intro" className="hover:text-white transition-colors">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;