import React from 'react';
import { User, Users } from 'lucide-react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  { name: 'Mr. Kwajja Lawrence', role: 'Team Lead / Management' },
  { name: 'Mr. Kanku Tom', role: 'Senior Specialist' },
  { name: 'Mr. Kokulu Paul', role: 'Operations' },
  { name: 'Mr. AbdulMalik Malolo', role: 'Technical & Design' },
  { name: 'Mr. Ssenabulya Isaac', role: 'Customer Service' },
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
              <Users className="text-green-600" size={24} />
           </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet The Team</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The dedicated professionals behind Printstar making sure your work is done to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-pink-500 transition-colors duration-300 flex items-center justify-center">
                 {/* Placeholder for team images since none were provided specifically for each person */}
                 <User size={64} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-pink-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;