import React from 'react';
import { Github, Linkedin, Mail, GitBranch, Terminal, Power, AlertTriangle, CheckCircle2 } from 'lucide-react';

const Footer = () => {

  // Logic to handle the email click
  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "santhoshn315@gmail.com";
    const subject = "Message from Portfolio Visitor";
    const message = "Hi Santosh,\n\n ";

    // Construct the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    // Trigger the email client
    window.location.href = mailtoLink;
  };

  return (
    <footer className="bg-[#0d1117] border-t border-slate-800 mt-20 font-mono">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Top Section: The "Command" & Links */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left: The "Exit" Command */}
          {/* Left: The "Exit" Command */}
<div className="flex flex-col gap-2 text-center md:text-left">
  <div className="flex items-center gap-2 text-emerald-500">
     <Terminal size={16} />
     <span className="font-bold">system_shutdown_sequence()</span>
  </div>
  <p className="text-slate-500 text-sm">
    {/* "return" keyword in purple */}
    <span className="text-purple-400">return</span> 
    
    {/* The Score in Yellow String */}
    <span className="text-yellow-200 ml-2">"10/10"</span>; 
    
    {/* The Comment */}
    <span className="text-slate-600 ml-2">// Profile parsed. Verdict: Perfect match.</span>
  </p>
</div>

          {/* Right: Social Links */}
          <div className="flex gap-4">
            {/* GitHub */}
            <a href="https://github.com/santhoshn315" target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded hover:border-emerald-500/50 hover:bg-slate-800 transition-all">
              <Github size={18} className="text-slate-400 group-hover:text-white transition-colors" />
              <span className="text-slate-400 text-sm group-hover:text-emerald-400">github</span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/santhoshn315/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded hover:border-blue-500/50 hover:bg-slate-800 transition-all">
              <Linkedin size={18} className="text-slate-400 group-hover:text-white transition-colors" />
              <span className="text-slate-400 text-sm group-hover:text-blue-400">linkedin</span>
            </a>

            {/* Mail - Updated with your Handler */}
            <button
              onClick={handleEmailClick}
              className="group flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded hover:border-red-500/50 hover:bg-slate-800 transition-all"
            >
              <Mail size={18} className="text-slate-400 group-hover:text-white transition-colors" />
              <span className="text-slate-400 text-sm group-hover:text-red-400">email</span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom "Status Bar" */}
      <div className="bg-[#010409] border-t border-slate-800 py-2 px-4 text-xs text-slate-500 flex justify-between items-center select-none">

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:text-emerald-500 cursor-pointer transition-colors">
            <GitBranch size={12} />
            <span>main</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span>Online</span>
          </div>
        </div>

        <div className="hidden md:block">
          © {new Date().getFullYear()} Santosh N. Status: 200 OK.
        </div>

        <div className="flex items-center gap-4">
          <span className="hover:text-slate-300 cursor-default">UTF-8</span>

          <div className="flex items-center gap-1 text-emerald-500">
            <CheckCircle2 size={12} />
            <span>Works on my machine</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;