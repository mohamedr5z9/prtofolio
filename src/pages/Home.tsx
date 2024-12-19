import React from 'react';
import Hero from '../components/home/Hero';
import ProjectCard from '../components/ProjectCard';
import { Shield, Code2, Brain } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Projects Section */}
      <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              icon={<Shield size={24} />}
              title="Network Vulnerability Scanner"
              description="Developed a custom vulnerability scanner focusing on network security assessment and reporting."
            />
            <ProjectCard
              icon={<Code2 size={24} />}
              title="Web Security Tool"
              description="Created an automated web application security testing framework for common vulnerabilities."
            />
            <ProjectCard
              icon={<Brain size={24} />}
              title="Security Research"
              description="Conducting ongoing research on emerging cyber threats and defense mechanisms."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;