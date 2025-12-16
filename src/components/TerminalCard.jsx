import React, { useState } from 'react';
import Typewriter from "typewriter-effect";
import { Terminal, Hash } from "lucide-react";
import RunButton from './RunButton'; 

const TerminalCard = () => {
  const [commandTyped, setCommandTyped] = useState(false);

  return (
    <section id="about" className="min-h-[85vh] flex flex-col justify-center pt-12 md:pt-0">
      
      {/* Terminal Window Container */}
      <div className="w-full bg-[#161b22] border border-slate-700 rounded-lg shadow-2xl overflow-hidden relative">
        
        {/* Terminal Top Bar */}
        <div className="bg-[#010409] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
           <div className="flex gap-2">
             <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
             <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
           </div>
           <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
             <Terminal size={12} />
             santosh@dev: ~
           </div>
           <div className="w-10"></div>
        </div>

        {/* Terminal Content Area */}
        <div className="p-6 md:p-10 font-mono text-sm md:text-base leading-relaxed h-full min-h-[400px]">
          
          {/* Line 1: The Prompt and Command */}
          <div className="flex flex-wrap items-center gap-2 text-lg md:text-xl mb-6">
            <span className="text-emerald-400 font-bold">santosh@dev:~$</span>
            <span className="text-slate-100">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('init_portfolio --user="Santosh"')
                    .callFunction(() => {
                      setCommandTyped(true);
                    })
                    .start();
                }}
                options={{
                  delay: 50,
                  cursor: "█",
                  cursorClassName: "text-slate-500 animate-pulse"
                }}
              />
            </span>
          </div>

          {/* Output: Revealed after command is typed */}
          <div className={`transition-opacity duration-500 ${commandTyped ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* System Messages */}
            <div className="text-slate-500 mb-6 space-y-1">
               <p>[OK] Loading kernel modules...</p>
               <p>[OK] Mounting file system...</p>
               <p className="text-emerald-500">[SUCCESS] User 'Santosh' found.</p>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
              Hello World, I am <span className="text-emerald-400">Santosh N</span>.
            </h1>
            
            <p className="text-slate-400 max-w-2xl mb-6 text-lg">
            Software Engineer passionate about building software that makes a difference.
            </p>

            <div className="p-4 border-l-2 border-slate-700 bg-slate-800/30 text-slate-300 italic">
              "Simple code. Serious engineering.."
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <RunButton />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalCard;