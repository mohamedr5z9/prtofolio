import React from 'react';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  name: string;
  issuer: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ name, issuer }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-green-500/50 transition-all duration-300">
      <div className="flex items-start">
        <Award className="text-green-500 mr-3 flex-shrink-0" />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-400">{issuer}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;