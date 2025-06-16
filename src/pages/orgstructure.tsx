import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User, Users, Mail, Phone } from 'lucide-react';
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

const OrgChart = () => {
  const [expandedDepartments, setExpandedDepartments] = useState<Set<string>>(new Set());
  const [expandedSubTeams, setExpandedSubTeams] = useState<Set<string>>(new Set());

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

  const departments: Department[] = [
    {
      id: 'operations',
      name: 'Operations',
      color: 'bg-orange-500',
      head: {
        id: 'operations-head',
        name: 'Murali',
        title: 'Director - Operations',
        email: 'murali@company.com',
        phone: '+1 (555) 345-6789'
      },
      subTeams: [
        {
          id: 'it-team',
          name: 'IT',
          color: 'bg-purple-600',
          members: []
        },
        {
          id: 'admin-team',
          name: 'Admin',
          color: 'bg-purple-600',
          members: []
        }
      ]
    },
    {
      id: 'finance',
      name: 'Finance',
      color: 'bg-orange-500',
      head: {
        id: 'cfo',
        name: 'Ramachandran S',
        title: 'CFO',
        email: 'ramachandran.s@company.com',
        phone: '+1 (555) 456-7890'
      },
      subTeams: [
        {
          id: 'finance-team',
          name: 'Finance Team',
          color: 'bg-purple-600',
          members: []
        },
        {
          id: 'cs-team',
          name: 'CS',
          color: 'bg-purple-600',
          members: [
            {
              id: 'cs1',
              name: 'Jayashree',
              title: 'CS',
              email: 'jayashree@company.com',
              phone: '+1 (555) 567-8901'
            }
          ]
        }
      ]
    },
    {
      id: 'people-culture',
      name: 'People & Culture',
      color: 'bg-orange-500',
      head: {
        id: 'people-head',
        name: 'Siva Kumar',
        title: 'CDO / Head-People & Culture',
        email: 'siva.kumar@company.com',
        phone: '+1 (555) 678-9012'
      },
      subTeams: [
        {
          id: 'ta-team',
          name: 'TA Team',
          color: 'bg-purple-600',
          members: []
        },
        {
          id: 'hr-team',
          name: 'HR Team',
          color: 'bg-purple-600',
          members: []
        }
      ]
    },
    {
      id: 'cro-wtd',
      name: 'CRO / WTD',
      color: 'bg-orange-500',
      head: {
        id: 'cro',
        name: 'Venkateswaran K',
        title: 'CRO / WTD',
        email: 'venkateswaran.k@company.com',
        phone: '+1 (555) 789-0123'
      },
      subTeams: [
        {
          id: 'delivery',
          name: 'Delivery CMS',
          color: 'bg-teal-600',
          members: [
            {
              id: 'delivery-head',
              name: 'Sriram Seshasdri',
              title: 'Director - Delivery CMS',
              email: 'sriram.seshasdri@company.com',
              phone: '+1 (555) 890-1234'
            }
          ]
        },
        {
          id: 'delivery-subteams',
          name: 'Delivery Subteams',
          color: 'bg-purple-600',
          members: [
            {
              id: 'cloud-transformation',
              name: 'Cloud Transformation',
              title: '',
              email: 'cloud.transformation@company.com',
              phone: '+1 (555) 890-1235'
            },
            {
              id: 'managed-services',
              name: 'Managed Services',
              title: '',
              email: 'managed.services@company.com',
              phone: '+1 (555) 890-1236'
            },
            {
              id: 'coe-cloud',
              name: 'CoE Cloud',
              title: '',
              email: 'coe.cloud@company.com',
              phone: '+1 (555) 890-1237'
            }
          ]
        },
        {
          id: 'bigdata-analytics',
          name: 'Bigdata & Analytics',
          color: 'bg-teal-600',
          members: [
            {
              id: 'bigdata-head',
              name: 'Jayakumar',
              title: 'Director - Bigdata & Analytics',
              email: 'jayakumar@company.com',
              phone: '+1 (555) 901-2345'
            }
          ]
        },
        {
          id: 'bigdata-subteams',
          name: 'Bigdata Subteams',
          color: 'bg-purple-600',
          members: [
            {
              id: 'data-ai',
              name: 'Data & AI',
              title: '',
              email: 'data.ai@company.com',
              phone: '+1 (555) 901-2346'
            },
            {
              id: 'application-modernization',
              name: 'Application Modernization',
              title: '',
              email: 'app.modernization@company.com',
              phone: '+1 (555) 901-2347'
            },
            {
              id: 'cadp',
              name: 'CADP',
              title: '',
              email: 'cadp@company.com',
              phone: '+1 (555) 901-2348'
            }
          ]
        },
        {
          id: 'marketing',
          name: 'Marketing',
          color: 'bg-teal-600',
          members: [
            {
              id: 'marketing-head',
              name: 'TBH',
              title: 'Director - Marketing',
              email: 'marketing.director@company.com',
              phone: '+1 (555) 012-3456'
            }
          ]
        },
        {
          id: 'marketing-subteams',
          name: 'Marketing Subteams',
          color: 'bg-purple-600',
          members: [
            {
              id: 'marketing-team',
              name: 'Marketing Team',
              title: '',
              email: 'marketing.team@company.com',
              phone: '+1 (555) 012-3457'
            }
          ]
        },
        {
          id: 'rsm-apac',
          name: 'RSM (APAC) - Singapore',
          color: 'bg-teal-600',
          members: [
            {
              id: 'rsm-apac-head',
              name: 'Roy',
              title: 'RSM (APAC) - Singapore',
              email: 'roy@company.com',
              phone: '+1 (555) 123-7890'
            }
          ]
        },
        {
          id: 'rsm-subteams',
          name: 'RSM Subteams',
          color: 'bg-purple-600',
          members: [
            {
              id: 'rsm-mea',
              name: 'TBH',
              title: 'RSM (MEA) - Dubai',
              email: 'rsm.mea@company.com',
              phone: '+1 (555) 234-8901'
            },
            {
              id: 'channel-manager',
              name: 'TBH',
              title: 'Channel Manager',
              email: 'channel.manager@company.com',
              phone: '+1 (555) 345-9012'
            },
            {
              id: 'regional-sales',
              name: 'Regional Sales',
              title: '',
              email: 'regional.sales@company.com',
              phone: '+1 (555) 345-9013'
            },
            {
              id: 'inside-sales',
              name: 'Inside Sales',
              title: '',
              email: 'inside.sales@company.com',
              phone: '+1 (555) 345-9014'
            }
          ]
        }
      ]
    }
  ];

  const vpSales: Department = {
    id: 'vp-sales',
    name: 'VP Sales',
    color: 'bg-teal-600',
    head: {
      id: 'vp-sales-head',
      name: 'VP Sales',
      title: 'VP Sales',
      email: 'vp.sales@company.com',
      phone: '+1 (555) 456-0123'
    },
    subTeams: []
  };

  const itStaffing1: Department = {
    id: 'it-staffing-1',
    name: 'IT India Staffing',
    color: 'bg-teal-600',
    head: {
      id: 'it-staffing-head-1',
      name: 'Sabin Kumar Gupta',
      title: 'Sr. Manager - IT India Staffing',
      email: 'sabin.kumar@company.com',
      phone: '+1 (555) 567-1234'
    },
    subTeams: [
      {
        id: 'recruiting-team',
        name: 'Recruiting Team',
        color: 'bg-purple-600',
        members: []
      }
    ]
  };

  const itStaffing2: Department = {
    id: 'it-staffing-2',
    name: 'IT Staffing',
    color: 'bg-teal-600',
    head: {
      id: 'it-staffing-head-2',
      name: 'Darshana Pravav',
      title: 'Sr. Manager - IT Staffing',
      email: 'darshana.pravav@company.com',
      phone: '+1 (555) 678-2345'
    },
    subTeams: []
  };

  const itSales: Department = {
    id: 'it-sales',
    name: 'IT Sales',
    color: 'bg-teal-600',
    head: {
      id: 'it-sales-head',
      name: 'Ramesh Sampath',
      title: 'Sr. Manager - IT Sales',
      email: 'ramesh.sampath@company.com',
      phone: '+1 (555) 678-2346'
    },
    subTeams: []
  };

  const allDepartments = [
    ...departments,
    vpSales,
    itStaffing1,
    itStaffing2,
    itSales
  ];

  const toggleDepartment = (departmentId: string) => {
    const newExpanded = new Set(expandedDepartments);
    if (newExpanded.has(departmentId)) {
      newExpanded.delete(departmentId);
    } else {
      newExpanded.add(departmentId);
    }
    setExpandedDepartments(newExpanded);
  };

  const toggleSubTeam = (subTeamId: string) => {
    const newExpanded = new Set(expandedSubTeams);
    if (newExpanded.has(subTeamId)) {
      newExpanded.delete(subTeamId);
    } else {
      newExpanded.add(subTeamId);
    }
    setExpandedSubTeams(newExpanded);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* CEO Level */}
      <div className="flex justify-center">
        <PersonCard person={ceo} isHead={true} color="bg-blue-600" size="large" />
      </div>

      {/* Senior EA */}
      <div className="flex justify-center">
        <PersonCard person={seniorEA} color="bg-teal-500" size="medium" />
      </div>

      {/* First Row - Executive Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {departments.map((department) => (
          <DepartmentCard
            key={department.id}
            department={department}
            isExpanded={expandedDepartments.has(department.id)}
            onToggle={() => toggleDepartment(department.id)}
            expandedSubTeams={expandedSubTeams}
            onSubTeamToggle={toggleSubTeam}
          />
        ))}
      </div>

      {/* Second Row - VP and Senior Managers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DepartmentCard
          department={vpSales}
          isExpanded={expandedDepartments.has(vpSales.id)}
          onToggle={() => toggleDepartment(vpSales.id)}
          expandedSubTeams={expandedSubTeams}
          onSubTeamToggle={toggleSubTeam}
        />
        <DepartmentCard
          department={itStaffing1}
          isExpanded={expandedDepartments.has(itStaffing1.id)}
          onToggle={() => toggleDepartment(itStaffing1.id)}
          expandedSubTeams={expandedSubTeams}
          onSubTeamToggle={toggleSubTeam}
        />
        <DepartmentCard
          department={itStaffing2}
          isExpanded={expandedDepartments.has(itStaffing2.id)}
          onToggle={() => toggleDepartment(itStaffing2.id)}
          expandedSubTeams={expandedSubTeams}
          onSubTeamToggle={toggleSubTeam}
        />
        <DepartmentCard
          department={itSales}
          isExpanded={expandedDepartments.has(itSales.id)}
          onToggle={() => toggleDepartment(itSales.id)}
          expandedSubTeams={expandedSubTeams}
          onSubTeamToggle={toggleSubTeam}
        />
      </div>
    </div>
  );
};

interface PersonCardProps {
  person: TeamMember;
  isHead?: boolean;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const PersonCard: React.FC<PersonCardProps> = ({ 
  person, 
  isHead = false, 
  color = 'bg-slate-600',
  size = isHead ? 'large' : 'medium'
}) => {
  const sizeClasses = {
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6'
  };

  const avatarSizes = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <Card className={`${sizeClasses[size]} bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-blue-500 max-w-sm mx-auto`}>
      <div className="flex flex-col items-center space-y-3">
        <div className={`${avatarSizes[size]} ${color} rounded-full flex items-center justify-center text-white font-semibold`}>
          <User className={size === 'large' ? 'w-8 h-8' : size === 'medium' ? 'w-6 h-6' : 'w-4 h-4'} />
        </div>
        <div className="text-center">
          <h3 className={`font-bold text-slate-800 ${size === 'large' ? 'text-xl' : 'text-lg'}`}>
            {person.name}
          </h3>
          <p className={`text-slate-600 ${size === 'large' ? 'text-base' : 'text-sm'} mb-2`}>
            {person.title}
          </p>
          <div className="space-y-1">
            {/* Commented out email section */}
            {/* <div className="flex items-center justify-center space-x-2 text-slate-500 text-xs">
              <Mail className="w-3 h-3" />
              <span className="truncate">{person.email}</span>
            </div> */}
            {/* Commented out phone section */}
            {/* <div className="flex items-center justify-center space-x-2 text-slate-500 text-xs">
              <Phone className="w-3 h-3" />
              <span>{person.phone}</span>
            </div> */}
          </div>
        </div>
      </div>
    </Card>
  );
};

interface DepartmentCardProps {
  department: Department;
  isExpanded: boolean;
  onToggle: () => void;
  expandedSubTeams: Set<string>;
  onSubTeamToggle: (subTeamId: string) => void;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  department,
  isExpanded,
  onToggle,
  expandedSubTeams,
  onSubTeamToggle
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Department Header */}
      <div 
        className={`${department.color} p-4 cursor-pointer hover:opacity-90 transition-opacity`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-white" />
            <div>
              <h2 className="text-lg font-bold text-white">{department.name}</h2>
              <p className="text-white/80 text-xs">
                {department.subTeams.length} teams
              </p>
            </div>
          </div>
          <div className="text-white">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>

      {/* Department Head */}
      <div className="p-3 bg-gray-50">
        <PersonCard 
          person={department.head} 
          isHead={true} 
          color={department.color}
          size="small"
        />
      </div>

      {/* Sub Teams - Collapsible */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-3 space-y-2 bg-gray-25">
          <h4 className="font-semibold text-slate-700 text-xs uppercase tracking-wide">
            Teams
          </h4>
          {department.subTeams.map((subTeam) => (
            <SubTeamCard
              key={subTeam.id}
              subTeam={subTeam}
              isExpanded={expandedSubTeams.has(subTeam.id)}
              onToggle={() => onSubTeamToggle(subTeam.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface SubTeamCardProps {
  subTeam: SubTeam;
  isExpanded: boolean;
  onToggle: () => void;
}

const SubTeamCard: React.FC<SubTeamCardProps> = ({
  subTeam,
  isExpanded,
  onToggle
}) => {
  return (
    <div className="bg-white rounded border">
      <div 
        className={`${subTeam.color} p-2 cursor-pointer hover:opacity-90 transition-opacity rounded-t`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <span className="text-white text-sm font-medium">{subTeam.name}</span>
          {subTeam.members.length > 0 && (
            <div className="text-white">
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Team Members */}
      {subTeam.members.length > 0 && (
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="p-2 space-y-2">
            {subTeam.members.map((member) => (
              <PersonCard 
                key={member.id} 
                person={member} 
                color={subTeam.color}
                size="small"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgChart;