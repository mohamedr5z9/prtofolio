import React from 'react';
import { Shield, Code2, Brain, Network, Lock, Terminal } from 'lucide-react';
import SkillCard from '../components/skills/SkillCard';

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: 'Penetration Testing',
      skills: ['Web Application Testing', 'Network Penetration Testing', 'Mobile App Security', 'API Security Testing']
    },
    {
      icon: Code2,
      title: 'Security Tools',
      skills: ['Burp Suite', 'Metasploit', 'Wireshark', 'Nmap', 'OWASP ZAP']
    },
    {
      icon: Brain,
      title: 'Knowledge Areas',
      skills: ['OWASP Top 10', 'Network Protocols', 'Cryptography', 'Social Engineering']
    },
    {
      icon: Network,
      title: 'Network Security',
      skills: ['Firewall Configuration', 'IDS/IPS', 'VPN Setup', 'Network Monitoring']
    },
    {
      icon: Lock,
      title: 'Security Assessment',
      skills: ['Vulnerability Assessment', 'Risk Analysis', 'Security Auditing', 'Compliance Testing']
    },
    {
      icon: Terminal,
      title: 'Technical Skills',
      skills: ['Python Scripting', 'Bash Scripting', 'Linux Administration', 'Docker Security']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Skills & Expertise</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Continuously expanding my knowledge in cybersecurity through hands-on experience,
          certifications, and staying current with emerging threats and defense mechanisms.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;