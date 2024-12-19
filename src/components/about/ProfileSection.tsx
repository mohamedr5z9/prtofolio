import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { profile } from '../../data/profile';

const ProfileSection = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
      <h1 className="text-4xl font-bold mb-4">{profile.name}</h1>
      <h2 className="text-xl text-green-500 mb-6">{profile.title}</h2>
      
      <div className="space-y-3 text-gray-300 mb-8">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-3 text-green-500" />
          <span>{profile.location}</span>
        </div>
        <div className="flex items-center">
          <Mail className="w-5 h-5 mr-3 text-green-500" />
          <a href={`mailto:${profile.email}`} className="hover:text-green-500">
            {profile.email}
          </a>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-3 text-green-500" />
          <span>{profile.phone}</span>
        </div>
        <div className="flex items-center">
          <Linkedin className="w-5 h-5 mr-3 text-green-500" />
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            LinkedIn Profile
          </a>
        </div>
      </div>
      
      <p className="text-gray-400 leading-relaxed">
        {profile.summary}
      </p>
    </div>
  );
};

export default ProfileSection;