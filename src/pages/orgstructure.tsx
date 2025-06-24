import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, User, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  avatar?: string;
}

interface SubTeam {
  id: string;
  name: string;
  members: TeamMember[];
  color: string;
}

interface Department {
  id: string;
  name: string;
  head: TeamMember;
  subTeams: SubTeam[];
  color: string;
}

const textSizes = {
  small: { name: 'text-sm', title: 'text-xs' },
  medium: { name: 'text-base', title: 'text-sm' },
  large: { name: 'text-lg', title: 'text-base' }
};

const avatarSizes = {
  small: 'w-6 h-6',
  medium: 'w-8 h-8',
  large: 'w-12 h-12'
};

const sizeClasses = {
  small: 'p-2',
  medium: 'p-3',
  large: 'p-4'
};

const PersonCard = ({ person, color = 'bg-slate-600', size = 'small' }: { person: TeamMember; color?: string; size?: 'small' | 'medium' | 'large' }) => {
  return (
    <Card className={`${sizeClasses[size]} bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border-l-4 border-l-transparent hover:border-l-blue-500 max-w-xs mx-auto`}>
      <div className="flex flex-col items-center space-y-2">
        <div className={`${avatarSizes[size]} ${color} rounded-full flex items-center justify-center text-white font-semibold`}>
          <User className={size === 'large' ? 'w-6 h-6' : size === 'medium' ? 'w-4 h-4' : 'w-3 h-3'} />
        </div>
        <div className="text-center">
          <h3 className={`font-bold text-slate-800 ${textSizes[size].name}`}>{person.name}</h3>
          <p className={`text-slate-600 ${textSizes[size].title} mb-1`}>{person.title}</p>
        </div>
      </div>
    </Card>
  );
};

const OrgStructure = () => {
  const ceo: TeamMember = {
    id: 'ceo',
    name: 'Suresh Venkatachari',
    title: 'CEO & CHAIRMAN',
    email: 'suresh.venkatachari@company.com',
    phone: '+1 (555) 123-4567'
  };

  const seniorEA: TeamMember = {
    id: 'senior-ea',
    name: 'Hemamalini',
    title: 'Senior E.A',
    email: 'hemamalini@company.com',
    phone: '+1 (555) 234-5678'
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 py-8 relative">
      {/* CEO Card */}
      <div className="flex justify-center relative">
        <div className="relative z-10">
          <PersonCard person={ceo} color="bg-blue-600" size="medium" />
        </div>
        {/* Horizontal Line under CEO */}
        <div className="absolute top-full left-1/2 w-px h-12 bg-gray-300"></div>
      </div>

      {/* Senior EA aligned to right */}
      <div className="flex justify-end pr-10">
        <PersonCard person={seniorEA} color="bg-teal-500" size="small" />
      </div>

      {/* Placeholder: Department Grid (4 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Example department heads */}
        <PersonCard
          person={{ id: 'ops', name: 'Murali', title: 'Director - Operations', email: '', phone: '' }}
          color="bg-orange-500"
          size="small"
        />
        <PersonCard
          person={{ id: 'finance', name: 'Ramachandran S', title: 'CFO', email: '', phone: '' }}
          color="bg-orange-500"
          size="small"
        />
        <PersonCard
          person={{ id: 'people', name: 'Siva Kumar', title: 'CDO / People & Culture', email: '', phone: '' }}
          color="bg-orange-500"
          size="small"
        />
        <PersonCard
          person={{ id: 'cro', name: 'Venkateswaran K', title: 'CRO / WTD', email: '', phone: '' }}
          color="bg-orange-500"
          size="small"
        />
      </div>
    </div>
  );
};

export default OrgStructure;