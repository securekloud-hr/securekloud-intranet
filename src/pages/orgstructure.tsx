import React from 'react';
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

// Your departments array is already loaded here:
// const departments: Department[] = [...];

// Continue your existing logic after departments definition
// such as useState, toggle logic, rendering DepartmentCard, etc.

// Let me know if you want me to complete the rest of the logic/rendering part again.