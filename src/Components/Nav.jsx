import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navigation Container */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8 md:py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-zinc-900/90 border border-zinc-800/80 rounded-2xl px-6 py-3.5 shadow-2xl backdrop-blur-md">
          
          {/* Brand Logo with dynamic dot indicator */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              FOODEY
            </span>
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse group-hover:scale-130 transition-transform" />
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800/50">
            {['Home', 'About', 'Contact Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-all duration-200 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Right side Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              Sign In
            </button>
            <button className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-xl hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 transform active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Interactive Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 rounded-xl transition-all relative z-50 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <div className="space-y-1.5 w-4">
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>

        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Side Drawer Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-72 bg-zinc-950 border-l border-zinc-800 p-6 pt-24 z-40 shadow-2xl transition-transform duration-300 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-between">
          
          {/* Menu Items */}
          <div className="flex flex-col space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 px-3">Navigation</p>
            {['Home', 'About', 'Contact Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-base font-medium text-zinc-300 hover:text-white rounded-xl hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Items at Bottom */}
          <div className="space-y-3 mb-8">
            <button className="w-full text-center py-3 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="w-full text-center py-3 text-sm font-semibold bg-white text-black rounded-xl hover:bg-amber-400 transition-colors shadow-lg">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Nav;