import React from 'react';
import ProfileSection from '../components/about/ProfileSection';
import ExperienceSection from '../components/about/ExperienceSection';
import CertificationCard from '../components/certifications/CertificationCard';
import { certifications } from '../data/certifications';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <ProfileSection />
          <ExperienceSection />
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={index}
                  name={cert.name}
                  issuer={cert.issuer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;