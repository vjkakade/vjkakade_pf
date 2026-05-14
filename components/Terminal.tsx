'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

type CommandOutput = {
  command: string;
  output: React.ReactNode;
};

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: '',
      output: (
        <div className="text-green-400">
          Welcome to VK-OS v1.0.0. <br />
          Type <span className="text-yellow-300 font-bold">&apos;help&apos;</span> to see available commands.
        </div>
      )
    }
  ]);
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        output = (
          <ul className="list-none space-y-1 text-neutral-300">
            <li><span className="text-yellow-300">whoami</span> - Display my bio</li>
            <li><span className="text-yellow-300">skills</span> - List my technical stack</li>
            <li><span className="text-yellow-300">contact</span> - Show my contact email</li>
            <li><span className="text-yellow-300">clear</span> - Clear the terminal</li>
          </ul>
        );
        break;
      case 'whoami':
        output = 'Vijay Kakade - Cloud & DevOps Architect. Specializing in highly available systems, Terraform automation, and GenAI integrations.';
        break;
      case 'skills':
        output = 'Azure, AWS, GCP, Terraform, Kubernetes, Docker, Azure DevOps, Python, AI Vector Search, Prompt Engineering';
        break;
      case 'contact':
        output = <a href="mailto:vijaykakade@live.com" className="text-blue-400 hover:underline">vijaykakade@live.com</a>;
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        output = '';
        break;
      default:
        output = <span className="text-red-400">Command not found: {trimmed}. Type &apos;help&apos; for a list of commands.</span>;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.8)] font-mono text-sm sm:text-base mt-24"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10 cursor-pointer">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center text-xs text-neutral-400 font-semibold uppercase tracking-widest">
          guest@vk-os:~
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {history.map((entry, idx) => (
          <div key={idx} className="mb-4">
            {entry.command && (
              <div className="flex text-neutral-300 mb-1">
                <span className="text-green-500 mr-2">guest@vk-os:~$</span>
                <span>{entry.command}</span>
              </div>
            )}
            <div className="text-neutral-400 leading-relaxed">{entry.output}</div>
          </div>
        ))}

        <form onSubmit={onSubmit} className="flex text-neutral-300">
          <span className="text-green-500 mr-2">guest@vk-os:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
}
