import React from 'react';
import { Terminal as TerminalIcon, Shield, Code2, Brain, Github, Linkedin, Mail } from 'lucide-react';

const Terminal: React.FC = () => {
  return (
    <div className="font-mono text-sm md:text-base bg-black/90 rounded-lg p-4 shadow-xl">
      <div className="flex items-center gap-2 mb-4 text-gray-400">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-green-500">
        <p>$ whoami</p>
        <p className="text-white ml-2 mb-2">mohamed_tarek</p>
        <p>$ cat skills.txt</p>
        <div className="text-white ml-2 mb-2">
          <p>• Penetration Testing</p>
          <p>• Network Security</p>
          <p>• Web Application Security</p>
          <p>• Security Assessments</p>
        </div>
        <p>$ ./status</p>
        <p className="text-white ml-2">Currently learning and growing in cybersecurity...</p>
      </div>
    </div>
  );
};

export default Terminal;