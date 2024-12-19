import React from 'react';
import { Briefcase } from 'lucide-react';
import { experience } from '../../data/experience';

const ExperienceSection = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold flex items-center">
        <Briefcase className="mr-2 text-green-500" />
        Professional Experience
      </h2>
      
      <div className="space-y-6">
        {experience.map((job, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-green-500">{job.title}</h3>
                <p className="text-gray-400">{job.company}</p>
              </div>
              <span className="text-sm text-gray-500">{job.period}</span>
            </div>
            <ul className="space-y-2">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="text-gray-300 flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;