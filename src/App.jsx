import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TerminalCard from './components/TerminalCard';
import ProjectCard from './components/ProjectCard';
import Data from './data';


const SectionTitle = ({ title, num }) => (
  <div className="flex items-center gap-3 mb-8 group cursor-default">
    <span className="text-slate-500 font-mono text-xl">0{num}.</span>
    <h2 className="text-3xl font-bold text-slate-200 group-hover:text-emerald-400 transition-colors font-mono flex items-center">
      <span className="text-emerald-500 mr-3 select-none">$</span>
      {title}
      <span className="animate-pulse text-emerald-500 font-normal ml-1">_</span>
    </h2>
    <div className="h-px bg-slate-800 flex-grow ml-4 group-hover:bg-emerald-900/50 transition-colors"></div>
  </div>
);

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117] text-slate-300 font-mono selection:bg-emerald-500/30 selection:text-emerald-200">

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-[#0d1117]">
        <div className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981]" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <Navbar />

      <main className="flex-grow pt-28 px-4 sm:px-6 max-w-5xl mx-auto w-full space-y-32 pb-20">

        {/* 1. Terminal  */}
        <TerminalCard />

        {/* 2. EDUCATION  */}
        <section id="education">
          <SectionTitle num="1" title="ls -l ./education" />
          <div className="grid gap-6 md:grid-cols-2">
            {Data.education.map((edu) => (
              <div key={edu.id} className="bg-[#161b22] border border-slate-800 p-6 rounded hover:border-emerald-500/50 transition-colors">
                <div className="text-emerald-500 mb-2 text-sm">{"{"}</div>
                <div className="pl-4 space-y-2">
                  <p><span className="text-purple-400">"degree"</span>: <span className="text-yellow-200">"{edu.degree}"</span>,</p>
                  <p><span className="text-purple-400">"school"</span>: <span className="text-yellow-200">"{edu.school}"</span>,</p>
                  <p><span className="text-purple-400">"year"</span>: <span className="text-yellow-200">"{edu.year}"</span></p>
                  <p><span className="text-purple-400">"gpa"</span>: <span className="text-yellow-200">"{edu.gpa}"</span></p>
                </div>
                <div className="text-emerald-500 mt-2 text-sm">{"}"}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. EXPERIENCE SECTION */}
        <section id="experience">
          <SectionTitle num="2" title="ls -t ./experience" />
          <div className="font-mono text-sm md:text-base space-y-8">
            {Data.experience.map((job) => (
              <div key={job.id} className="group">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-slate-500 whitespace-nowrap">[{job.year}]</span>
                  <h3 className="text-emerald-400 font-bold text-lg">{job.role} @ {job.company}</h3>
                </div>
                <div className="pl-[4.5rem] border-l border-slate-800 ml-[1.5rem] py-2">
                  <p className="text-slate-400 mb-2">
                    <span className="text-purple-400">var</span> responsibilities = <span className="text-yellow-200">"{job.desc}"</span>;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SKILLS SECTION */}
        <section id="skills">
          <SectionTitle num="3" title="ls -a ./skills" />
          <div className="bg-[#161b22] border border-slate-800 p-6 rounded">
            <span className="text-purple-400">var</span> skills = [
            <div className="flex flex-wrap gap-2 pl-4 py-3">
              {Data.skills.map((skill, index) => (
                <span key={index} className="text-yellow-200 hover:text-emerald-400 transition-colors cursor-pointer">
                  "{skill}"<span className="text-slate-500">,</span>
                </span>
              ))}
            </div>
            ];
          </div>
        </section>

        {/* 5. PROJECTS SECTION */}
        <section id="projects">
          <SectionTitle num="4" title="ls ./projects" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Data.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;