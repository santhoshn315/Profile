import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add background opacity effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '~/about', href: '#about' },
    { name: '~/education', href: '#education' },
    { name: '~/experience', href: '#experience' },
    { name: '~/skills', href: '#skills' },
    { name: '~/projects', href: '#projects' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled
        ? "bg-[#0d1117]/90 backdrop-blur-md border-slate-800 py-2"
        : "bg-transparent border-transparent py-4"
        }`}
    >
      <div className="w-full px-6 md:px-12">
        <div className="flex justify-between items-center h-12">

          {/* LEFT SIDE: Logo & Socials */}
          <div className="flex items-center gap-6">

            {/* Logo area */}
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <Terminal className="text-emerald-500 w-5 h-5 group-hover:text-emerald-400 transition-colors" />
              <span className="font-mono font-bold text-lg text-slate-100 tracking-tight group-hover:text-emerald-400 transition-colors">
                Santosh_N
              </span>
            </div>

            {/* Social Icons  */}
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-slate-700">
              <a
                href="https://github.com/santhoshn315"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white hover:bg-slate-800 p-1.5 rounded transition-all"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/santhoshn315/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-blue-400 hover:bg-slate-800 p-1.5 rounded transition-all"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-mono text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50 rounded transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-4">
            {/* Show Socials on Mobile (outside menu) */}
            <div className="flex gap-2 sm:hidden">
              <a href="#" className="text-slate-400 hover:text-white"><Github size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-400"><Linkedin size={18} /></a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-emerald-400 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#161b22] border-b border-slate-800 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-mono font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800 border-l-2 border-transparent hover:border-emerald-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;