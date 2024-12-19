import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-green-500/50 transition-all duration-300">
      <div className="text-green-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ProjectCard;