import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-green-500/50 transition-all duration-300">
      <div className="text-green-500 mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-400 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;