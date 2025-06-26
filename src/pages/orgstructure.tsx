import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  avatar?: string;
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

const PersonCard = ({ person, color = 'bg-slate-600', size = 'small', onClick, isExpanded }: { person: TeamMember; color?: string; size?: 'small' | 'medium' | 'large'; onClick?: () => void; isExpanded?: boolean }) => {
  return (
    <Card className={`${sizeClasses[size]} bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border-l-4 border-l-transparent hover:border-l-blue-500 max-w-xs mx-auto cursor-pointer`} onClick={onClick}>
      <div className="flex flex-col items-center space-y-2">
        <div className={`${avatarSizes[size]} ${color} rounded-full flex items-center justify-center text-white font-semibold`}>
          <User className={size === 'large' ? 'w-6 h-6' : size === 'medium' ? 'w-4 h-4' : 'w-3 h-3'} />
        </div>
        <div className="text-center">
          <h3 className={`font-bold text-slate-800 ${textSizes[size].name}`}>{person.name}</h3>
          <p className={`text-slate-600 ${textSizes[size].title} mb-1`}>{person.title}</p>
          {onClick && (
            <span className="text-xs text-gray-400">{isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}</span>
          )}
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

  const murali: TeamMember = { id: 'ops', name: 'Murali', title: 'Director - Operations', email: '', phone: '' };
  const balajiS: TeamMember = { id: 'balaji', name: 'Balaji S', title: 'I.T. Admin', email: '', phone: '' };
  const vishnuMohan: TeamMember = { id: 'vishnu', name: 'Vishnu Mohan', title: 'Admin', email: '', phone: '' };
  const rathinasabapathi: TeamMember = { id: 'rathina', name: 'Rathinasabapathi A', title: 'I.T. Admin', email: '', phone: '' };
  const nithishKumar: TeamMember = { id: 'nithish', name: 'Nithish Kumar C', title: 'I.T. Admin', email: '', phone: '' };
  const vijayakumar: TeamMember = { id: 'vijaya', name: 'Vijayakumar P', title: 'I.T. Admin', email: '', phone: '' };
  const selvaraj: TeamMember = { id: 'selvaraj', name: 'Selvaraj', title: 'Admin', email: '', phone: '' };
  const senthil: TeamMember = { id: 'senthil', name: 'Senthil', title: 'Admin', email: '', phone: '' };
  const valarmathy: TeamMember = { id: 'valar', name: 'Valarmathy', title: 'Admin', email: '', phone: '' };
  const kamatchi: TeamMember = { id: 'kamatchi', name: 'Kamatchi M', title: 'Admin', email: '', phone: '' };
  const sikkanthar: TeamMember = { id: 'sikkanthar', name: 'A Sikkanthar Ammal', title: 'Admin', email: '', phone: '' };
  const rajakumari: TeamMember = { id: 'rajakumari', name: 'Rajakumari S', title: 'Admin', email: '', phone: '' };
  const ramachandran: TeamMember = { id: 'finance', name: 'Ramachandran S', title: 'CFO', email: '', phone: '' };
  const sivaKumar: TeamMember = { id: 'people', name: 'Siva Kumar', title: 'CDO / People & Culture', email: '', phone: '' };
  const venkateswaran: TeamMember = { id: 'cro', name: 'Venkateswaran K', title: 'CRO / WTD', email: '', phone: '' };

  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    ops: false,
    balaji: false,
    vishnu: false,
  });

  const toggleExpand = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 py-8 relative">
      {/* CEO Card */}
      <div className="flex justify-center relative">
        <div className="relative z-10">
          <PersonCard person={ceo} color="bg-blue-600" size="medium" />
        </div>
        <div className="absolute top-full left-1/2 w-px h-12 bg-gray-300"></div>
      </div>

      {/* Senior EA aligned to right */}
      <div className="flex justify-end pr-10">
        <PersonCard person={seniorEA} color="bg-teal-500" size="small" />
      </div>

      {/* Department Heads Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="space-y-4">
          <PersonCard person={murali} color="bg-orange-500" size="small" onClick={() => toggleExpand('ops')} isExpanded={expanded.ops} />
          {expanded.ops && (
            <div className="ml-10 space-y-2">
              <PersonCard person={balajiS} color="bg-orange-300" size="small" onClick={() => toggleExpand('balaji')} isExpanded={expanded.balaji} />
              {expanded.balaji && (
                <div className="ml-10 space-y-2">
                  <PersonCard person={rathinasabapathi} color="bg-orange-100" size="small" />
                  <PersonCard person={nithishKumar} color="bg-orange-100" size="small" />
                  <PersonCard person={vijayakumar} color="bg-orange-100" size="small" />
                   
                </div>
              )}
              <PersonCard person={vishnuMohan} color="bg-orange-300" size="small" onClick={() => toggleExpand('vishnu')} isExpanded={expanded.vishnu} />
              {expanded.vishnu && (
                <div className="ml-10 space-y-2">
                  <PersonCard person={selvaraj} color="bg-orange-100" size="small" />
                  <PersonCard person={senthil} color="bg-orange-100" size="small" />
                  <PersonCard person={valarmathy} color="bg-orange-100" size="small" />
                  <PersonCard person={kamatchi} color="bg-orange-100" size="small" />
                  <PersonCard person={sikkanthar} color="bg-orange-100" size="small" />
                  <PersonCard person={rajakumari} color="bg-orange-100" size="small" />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="space-y-4">
          <PersonCard person={ramachandran} color="bg-orange-500" size="small" />
        </div>
        <div className="space-y-4">
          <PersonCard person={sivaKumar} color="bg-orange-500" size="small" />
        </div>
        <div className="space-y-4">
          <PersonCard person={venkateswaran} color="bg-orange-500" size="small" />
        </div>
      </div>
    </div>
  );
};

export default OrgStructure;