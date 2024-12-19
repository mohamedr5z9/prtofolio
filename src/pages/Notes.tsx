import React from 'react';
import { Calendar, Tag } from 'lucide-react';

const Notes = () => {
  const Notes = [
    {
      title: 'Understanding Modern Web Application Vulnerabilities',
      date: '2024-03-15',
      tags: ['Web Security', 'OWASP'],
      excerpt: 'An analysis of emerging web application security threats and mitigation strategies...'
    },/*
    {
      title: 'Network Protocol Analysis for Security Testing',
      date: '2024-03-10',
      tags: ['Network Security', 'Protocols'],
      excerpt: 'Deep dive into analyzing network protocols for security vulnerabilities...'
    },*/
    {
      title: 'Advanced SQL Injection Techniques',
      date: '2024-03-05',
      tags: ['Web Security', 'Database'],
      excerpt: 'Exploring sophisticated SQL injection methods and prevention strategies...'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Research Notes</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Documenting my journey through cybersecurity research and discoveries.
          These notes serve as a knowledge base and reference for future projects.
        </p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {researchNotes.map((note, index) => (
            <article
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-green-500/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">{note.title}</h2>
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {note.date}
                </div>
                <div className="flex items-center">
                  <Tag size={16} className="mr-2" />
                  {note.tags.join(', ')}
                </div>
              </div>
              <p className="text-gray-400">{note.excerpt}</p>
              <button className="mt-4 text-green-500 hover:text-green-400 transition-colors">
                Read More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
