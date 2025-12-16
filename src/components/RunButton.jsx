import React, { useState } from 'react';
import { Play, Check, Loader2 } from "lucide-react";

const RunButton = () => {
  const [status, setStatus] = useState('idle'); // idle, compiling, success
  const [log, setLog] = useState('Run Project');
  const [progress, setProgress] = useState(0);

  const handleRun = () => {
    if (status !== 'idle') return;

    setStatus('compiling');
    setProgress(0);

    // Simulation steps for the "Build" process
    const steps = [
      { pct: 10, msg: "npm install..." },
      { pct: 30, msg: "gcc -O2 main.c" },
      { pct: 50, msg: "analyzing deps..." },
      { pct: 70, msg: "optimizing..." },
      { pct: 90, msg: "linking..." },
      { pct: 100, msg: "Build Successful" },
    ];

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps.length) {
        clearInterval(interval);
        setStatus('success');
        setLog('EXEC_SUCCESS');
        
        // After a moment, scroll to projects
        setTimeout(() => {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
          
          // Reset button after scrolling
          setTimeout(() => {
            setStatus('idle');
            setLog('Run Project');
            setProgress(0);
          }, 1000);
        }, 800);
        
        return;
      }

      setProgress(steps[currentStep].pct);
      setLog(steps[currentStep].msg);

    }, 300); // Speed of the "compilation"
  };

  return (
    <button 
      onClick={handleRun}
      className={`
        relative overflow-hidden px-6 py-3 font-mono font-bold rounded-sm border transition-all duration-300 group
        ${status === 'idle' ? 'bg-emerald-600/10 border-emerald-500 text-emerald-400 hover:bg-emerald-600 hover:text-black' : ''}
        ${status === 'compiling' ? 'bg-[#0d1117] border-slate-600 text-slate-300 cursor-wait' : ''}
        ${status === 'success' ? 'bg-emerald-500 border-emerald-500 text-black' : ''}
      `}
    >
      {/* Progress Bar Background (Only visible during compiling) */}
      <div 
        className="absolute inset-0 bg-emerald-900/40 transition-all duration-300 ease-out z-0"
        style={{ width: status === 'compiling' ? `${progress}%` : '0%' }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex items-center gap-3 min-w-[140px] justify-center">
        {status === 'idle' && <Play size={18} className="group-hover:fill-current" />}
        {status === 'compiling' && <Loader2 size={18} className="animate-spin text-emerald-400" />}
        {status === 'success' && <Check size={18} strokeWidth={3} />}
        
        <span className="uppercase tracking-wider text-sm">{log}</span>
      </div>
    </button>
  );
};

export default RunButton;