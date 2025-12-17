import React from 'react';
import {
  Cpu,
  Database,
  Server,
  GitBranch,
  Code2,
  Hash,
  Network,
  Command,
  Globe
} from "lucide-react";

const getTechIcon = (tagName) => {
  const lowerTag = tagName.toLowerCase();

  if (lowerTag.includes('c++')) {
    return <Code2 size={14} className="text-orange-400" />;
  }
  if (lowerTag.includes('cuda')) {
    return <Cpu size={14} className="text-orange-400" />;
  }
  if (lowerTag.includes('sql') || lowerTag.includes('database') || lowerTag.includes('mongo')) {
    return <Database size={14} className="text-blue-400" />;
  }
  if (lowerTag.includes('react')) {
    return <Command size={14} className="text-cyan-400" />;
  }
  if (lowerTag.includes('node') || lowerTag.includes('api') || lowerTag.includes('backend')) {
    return <Server size={14} className="text-green-400" />;
  }
  if (lowerTag.includes('express')) {
    return <Network size={14} className="text-red-400" />;
  }
  if (lowerTag.includes('multithreading')) {
    return <GitBranch size={14} className="text-yellow-400" />;
  }

  return <Hash size={14} className="text-slate-500" />;
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-[#161b22] border border-slate-800 rounded p-5 hover:border-emerald-500/50 transition-all flex flex-col h-full hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center gap-3 text-emerald-500 mb-4">
        <span className="font-bold text-lg tracking-tight">{project.title}</span>
      </div>

      <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/50 border border-slate-700 rounded text-xs text-slate-300 font-mono hover:bg-slate-800 hover:border-slate-600 transition-colors"
          >
            {getTechIcon(tag)}
            <span>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;