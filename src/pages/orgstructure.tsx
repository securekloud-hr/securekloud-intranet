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

const OrgChart = () => {
  const departmentIds = ['operations', 'finance', 'people-culture', 'cro-wtd'];
  const [expandedDepartments, setExpandedDepartments] = useState<Set<string>>(new Set());
  const [expandedSubTeams, setExpandedSubTeams] = useState<Set<string>>(new Set());

  const ceo: TeamMember = {
    id: 'ceo',
    name: 'Suresh V',
    title: 'CEO & CHAIRMAN',
    email: 'suresh.v@company.com',
    phone: '+1 (555) 123-4567'
  };

  const seniorEA: TeamMember = {
    id: 'senior-ea',
    name: 'Hemamalini K',
    title: 'Senior E.A',
    email: 'hemamalini.k@company.com',
    phone: '+1 (555) 234-5678'
  };

  const departments: Department[] = [
    {
      id: 'operations',
      name: 'Operations',
      color: 'bg-orange-500',
      head: {
        id: 'operations-head',
        name: 'Murali Krishnan R',
        title: 'Director - Operations',
        email: 'murali.krishnan.r@company.com',
        phone: '+1 (555) 345-6789'
      },
      subTeams: [
        {
          id: 'admin-team',
          name: 'Admin',
          color: 'bg-purple-600',
          members: [
            {
              id: 'B1311',
              name: 'Vishnu Mohan',
              title: 'Manager - Admin',
              email: 'vishnu.mohan@company.com',
              phone: '+1 (555) 345-6790'
            },
            {
              id: 'D0001',
              name: 'Selvaraj',
              title: 'Team Member',
              email: 'selvaraj@company.com',
              phone: '+1 (555) 345-6791'
            },
            {
              id: 'D0003',
              name: 'Senthil',
              title: 'Team Member',
              email: 'senthil@company.com',
              phone: '+1 (555) 345-6792'
            },
            {
              id: 'H0001',
              name: 'Valarmathy',
              title: 'Team Member',
              email: 'valarmathy@company.com',
              phone: '+1 (555) 345-6793'
            },
            {
              id: 'B22166',
              name: 'Kamatchi M',
              title: 'Team Member',
              email: 'kamatchi.m@company.com',
              phone: '+1 (555) 345-6794'
            },
            {
              id: 'H0002',
              name: 'A Sikkanthar Ammal',
              title: 'Team Member',
              email: 'a.sikkanthar.ammal@company.com',
              phone: '+1 (555) 345-6795'
            },
            {
              id: 'H0003',
              name: 'Rajakumari S',
              title: 'Team Member',
              email: 'rajakumari.s@company.com',
              phone: '+1 (555) 345-6796'
            }
          ]
        },
        {
          id: 'it-admin-team',
          name: 'I.T. Admin',
          color: 'bg-purple-600',
          members: [
            {
              id: 'B23016',
              name: 'Balaji S',
              title: 'Manager - I.T. Admin',
              email: 'balaji.s@company.com',
              phone: '+1 (555) 345-6797'
            },
            {
              id: 'B23011',
              name: 'Rathinasabapathi A',
              title: 'Team Member',
              email: 'rathinasabapathi.a@company.com',
              phone: '+1 (555) 345-6798'
            },
            {
              id: 'B24047',
              name: 'Nithish Kumar C',
              title: 'Team Member',
              email: 'nithish.kumar.c@company.com',
              phone: '+1 (555) 345-6799'
            },
            {
              id: 'B22195',
              name: 'Vijayakumar P',
              title: 'Team Member',
              email: 'vijayakumar.p@company.com',
              phone: '+1 (555) 345-6800'
            }
          ]
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
          members: [
            {
              id: 'B22205',
              name: 'Tamilarasan P',
              title: 'Manager - Finance',
              email: 'tamilarasan.p@company.com',
              phone: '+1 (555) 456-7891'
            },
            {
              id: 'B24028',
              name: 'Jayashree V',
              title: 'Manager - CS',
              email: 'jayashree.v@company.com',
              phone: '+1 (555) 456-7892'
            },
            {
              id: 'B1803',
              name: 'Mohana Balasubramaniam',
              title: 'Team Member',
              email: 'mohana.balasubramaniam@company.com',
              phone: '+1 (555) 456-7893'
            },
            {
              id: 'B1971',
              name: 'Velayutham G',
              title: 'Team Member',
              email: 'velayutham.g@company.com',
              phone: '+1 (555) 456-7894'
            },
            {
              id: 'B24026',
              name: 'Sowmiya R',
              title: 'Team Member',
              email: 'sowmiya.r@company.com',
              phone: '+1 (555) 456-7895'
            },
            {
              id: 'B24038',
              name: 'Swetha R',
              title: 'Team Member',
              email: 'swetha.r@company.com',
              phone: '+1 (555) 456-7896'
            },
            {
              id: 'B24052',
              name: 'Gayathri S',
              title: 'Team Member',
              email: 'gayathri.s@company.com',
              phone: '+1 (555) 456-7897'
            }
          ]
        },
        {
          id: 'cs-team',
          name: 'CS Team',
          color: 'bg-purple-600',
          members: [
            {
              id: 'B22157',
              name: 'Viral Kothari K',
              title: 'Team Member',
              email: 'viral.kothari.k@company.com',
              phone: '+1 (555) 456-7898'
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
        name: 'Sivakumar Natarajan',
        title: 'CDO / Head-People & Culture',
        email: 'sivakumar.natarajan@company.com',
        phone: '+1 (555) 678-9012'
      },
      subTeams: [
        {
          id: 'hr-team',
          name: 'HR Team',
          color: 'bg-purple-600',
          members: [
            {
              id: 'B20075',
              name: 'Cynthia V',
              title: 'Manager - HR',
              email: 'cynthia.v@company.com',
              phone: '+1 (555) 678-9013'
            },
            {
              id: 'B22029',
              name: 'Ezhilarasi S',
              title: 'Team Member',
              email: 'ezhilarasi.s@company.com',
              phone: '+1 (555) 678-9014'
            },
            {
              id: 'B22055',
              name: 'Sinthya Alex A',
              title: 'Team Member',
              email: 'sinthya.alex.a@company.com',
              phone: '+1 (555) 678-9015'
            }
          ]
        },
        {
          id: 'ta-team',
          name: 'TA Team',
          color: 'bg-purple-600',
          members: [
            {
              id: 'B22124',
              name: 'Sachidanantham S',
              title: 'Manager - TA',
              email: 'sachidanantham.s@company.com',
              phone: '+1 (555) 678-9016'
            },
            {
              id: 'B21104',
              name: 'Sruthi S',
              title: 'Team Member',
              email: 'sruthi.s@company.com',
              phone: '+1 (555) 678-9017'
            },
            {
              id: 'B22131',
              name: 'Sriram R',
              title: 'Team Member',
              email: 'sriram.r@company.com',
              phone: '+1 (555) 678-9018'
            },
            {
              id: 'B24046',
              name: 'Riswana Fathima M S',
              title: 'Team Member',
              email: 'riswana.fathima.m.s@company.com',
              phone: '+1 (555) 678-9019'
            }
          ]
        },
        {
          id: 'iam-team',
          name: 'I.A.M. Team',
          color: 'bg-purple-600',
          members: [
            {
              id: 'B20123',
              name: 'Manikandan V',
              title: 'Team Member',
              email: 'manikandan.v@company.com',
              phone: '+1 (555) 678-9020'
            },
            {
              id: 'B22050',
              name: 'Manivannan K',
              title: 'Team Member',
              email: 'manivannan.k@company.com',
              phone: '+1 (555) 678-9021'
            }
          ]
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
          id: 'delivery-cms',
          name: 'Delivery CMS',
          color: 'bg-teal-600',
          members: [
            {
              id: 'B1702',
              name: 'Sriram Seshadri',
              title: 'Director - Delivery CMS',
              email: 'sriram.seshadri@company.com',
              phone: '+1 (555) 890-1234'
            },
            {
              id: 'B1873',
              name: 'Hariwasa S',
              title: 'Team Member',
              email: 'hariwasa.s@company.com',
              phone: '+1 (555) 890-1235'
            },
            {
              id: 'B1953',
              name: 'Harithasri S',
              title: 'Team Member',
              email: 'harithasri.s@company.com',
              phone: '+1 (555) 890-1236'
            },
            {
              id: 'B21076',
              name: 'Veerendra Kumar Meka R',
              title: 'Team Member',
              email: 'veerendra.kumar.meka.r@company.com',
              phone: '+1 (555) 890-1237'
            },
            {
              id: 'B21077',
              name: 'Karthick Gajapathy J',
              title: 'Team Member',
              email: 'karthick.gajapathy.j@company.com',
              phone: '+1 (555) 890-1238'
            },
            {
              id: 'B21101',
              name: 'Venkata Siva Reddy M',
              title: 'Team Member',
              email: 'venkata.siva.reddy.m@company.com',
              phone: '+1 (555) 890-1239'
            },
            {
              id: 'B21119',
              name: 'Vijay Kumar M',
              title: 'Team Member',
              email: 'vijay.kumar.m@company.com',
              phone: '+1 (555) 890-1240'
            },
            {
              id: 'B21150',
              name: 'Kishore Kumar S',
              title: 'Team Member',
              email: 'kishore.kumar.s@company.com',
              phone: '+1 (555) 890-1241'
            },
            {
              id: 'B21155',
              name: 'Nethaji S',
              title: 'Team Member',
              email: 'nethaji.s@company.com',
              phone: '+1 (555) 890-1242'
            },
            {
              id: 'B21167',
              name: 'Prasad N',
              title: 'Team Member',
              email: 'prasad.n@company.com',
              phone: '+1 (555) 890-1243'
            },
            {
              id: 'B21169',
              name: 'Anand J',
              title: 'Team Member',
              email: 'anand.j@company.com',
              phone: '+1 (555) 890-1244'
            },
            {
              id: 'B22082',
              name: 'Radhika M',
              title: 'Team Member',
              email: 'radhika.m@company.com',
              phone: '+1 (555) 890-1245'
            },
            {
              id: 'B22141',
              name: 'Kameswaran R',
              title: 'Team Member',
              email: 'kameswaran.r@company.com',
              phone: '+1 (555) 890-1246'
            },
            {
              id: 'B22143',
              name: 'Syed Navassherif S',
              title: 'Team Member',
              email: 'syed.navassherif.s@company.com',
              phone: '+1 (555) 890-1247'
            },
            {
              id: 'B22162',
              name: 'Prem Kumar G',
              title: 'Team Member',
              email: 'prem.kumar.g@company.com',
              phone: '+1 (555) 890-1248'
            },
            {
              id: 'B22184',
              name: 'Siva Rama Krishnan P',
              title: 'Team Member',
              email: 'siva.rama.krishnan.p@company.com',
              phone: '+1 (555) 890-1249'
            },
            {
              id: 'B23048',
              name: 'Kirankumar B',
              title: 'Team Member',
              email: 'kirankumar.b@company.com',
              phone: '+1 (555) 890-1250'
            },
            {
              id: 'B24048',
              name: 'Ashokkumar T',
              title: 'Team Member',
              email: 'ashokkumar.t@company.com',
              phone: '+1 (555) 890-1251'
            },
            {
              id: 'B24061',
              name: 'Sridhar J',
              title: 'Team Member',
              email: 'sridhar.j@company.com',
              phone: '+1 (555) 890-1252'
            }
          ]
        },
        {
          id: 'bigdata-analytics',
          name: 'Bigdata & Analytics',
          color: 'bg-teal-600',
          members: [
            {
              id: 'A0907',
              name: 'Jayakumar Karuppasamy',
              title: 'Director - Bigdata & Analytics',
              email: 'jayakumar.karuppasamy@company.com',
              phone: '+1 (555) 901-2345'
            },
            {
              id: 'B1584',
              name: 'Sebabrata Ghosh',
              title: 'Manager',
              email: 'sebabrata.ghosh@company.com',
              phone: '+1 (555) 901-2346'
            },
            {
              id: 'B21017',
              name: 'Chandrakanth S',
              title: 'Team Member',
              email: 'chandrakanth.s@company.com',
              phone: '+1 (555) 901-2347'
            },
            {
              id: 'B21021',
              name: 'Jayasree R',
              title: 'Manager',
              email: 'jayasree.r@company.com',
              phone: '+1 (555) 901-2348'
            },
            {
              id: 'B22081',
              name: 'Devendran Rajesh K',
              title: 'Manager',
              email: 'devendran.rajesh.k@company.com',
              phone: '+1 (555) 901-2349'
            },
            {
              id: 'B25022',
              name: 'Mathana Krishnan S',
              title: 'Team Member',
              email: 'mathana.krishnan.s@company.com',
              phone: '+1 (555) 901-2350'
            },
            {
              id: 'B1923',
              name: 'Swathy R',
              title: 'Team Member',
              email: 'swathy.r@company.com',
              phone: '+1 (555) 901-2351'
            },
            {
              id: 'B22058',
              name: 'Karthikeyan V',
              title: 'Team Member',
              email: 'karthikeyan.v@company.com',
              phone: '+1 (555) 901-2352'
            },
            {
              id: 'B22088',
              name: 'Aravindh S',
              title: 'Team Member',
              email: 'aravindh.s@company.com',
              phone: '+1 (555) 901-2353'
            },
            {
              id: 'B22128',
              name: 'Priya P M',
              title: 'Team Member',
              email: 'priya.p.m@company.com',
              phone: '+1 (555) 901-2354'
            },
            {
              id: 'B23028',
              name: 'Ashwinkumar R',
              title: 'Team Member',
              email: 'ashwinkumar.r@company.com',
              phone: '+1 (555) 901-2355'
            },
            {
              id: 'B24064',
              name: 'Gayathri Ganesan',
              title: 'Team Member',
              email: 'gayathri.ganesan@company.com',
              phone: '+1 (555) 901-2356'
            },
            {
              id: 'B22120',
              name: 'Kishore N L',
              title: 'Team Member',
              email: 'kishore.n.l@company.com',
              phone: '+1 (555) 901-2357'
            },
            {
              id: 'B23035',
              name: 'Kokila V',
              title: 'Team Member',
              email: 'kokila.v@company.com',
              phone: '+1 (555) 901-2358'
            },
            {
              id: 'B23043',
              name: 'Priyanka Pannerselvam',
              title: 'Team Member',
              email: 'priyanka.pannerselvam@company.com',
              phone: '+1 (555) 901-2359'
            },
            {
              id: 'B24016',
              name: 'Vignash M',
              title: 'Team Member',
              email: 'vignash.m@company.com',
              phone: '+1 (555) 901-2360'
            },
            {
              id: 'B24025',
              name: 'Thamizharasi Jayagopi',
              title: 'Manager',
              email: 'thamizharasi.jayagopi@company.com',
              phone: '+1 (555) 901-2361'
            },
            {
              id: 'B24065',
              name: 'Lingeswar P',
              title: 'Team Member',
              email: 'lingeswar.p@company.com',
              phone: '+1 (555) 901-2362'
            },
            {
              id: 'B22048',
              name: 'Saravana Kumar D',
              title: 'Team Member',
              email: 'saravana.kumar.d@company.com',
              phone: '+1 (555) 901-2363'
            },
            {
              id: 'B22112',
              name: 'Gunaselvam E',
              title: 'Team Member',
              email: 'gunaselvam.e@company.com',
              phone: '+1 (555) 901-2364'
            },
            {
              id: 'B22161',
              name: 'Kathiravan P',
              title: 'Team Member',
              email: 'kathiravan.p@company.com',
              phone: '+1 (555) 901-2365'
            },
            {
              id: 'B24017',
              name: 'Rajkumar I',
              title: 'Team Member',
              email: 'rajkumar.i@company.com',
              phone: '+1 (555) 901-2366'
            },
            {
              id: 'B24021',
              name: 'Hariharan V',
              title: 'Team Member',
              email: 'hariharan.v@company.com',
              phone: '+1 (555) 901-2367'
            },
            {
              id: 'B22115',
              name: 'Harikishore L',
              title: 'Team Member',
              email: 'harikishore.l@company.com',
              phone: '+1 (555) 901-2368'
            },
            {
              id: 'B22125',
              name: 'Saurav Sarkar A',
              title: 'Team Member',
              email: 'saurav.sarkar.a@company.com',
              phone: '+1 (555) 901-2369'
            },
            {
              id: 'B23067',
              name: 'Ganesh R',
              title: 'Team Member',
              email: 'ganesh.r@company.com',
              phone: '+1 (555) 901-2370'
            },
            {
              id: 'B24018',
              name: 'Tharun Kumar E',
              title: 'Team Member',
              email: 'tharun.kumar.e@company.com',
              phone: '+1 (555) 901-2371'
            },
            {
              id: 'B24019',
              name: 'Ashkar Ali A',
              title: 'Team Member',
              email: 'ashkar.ali.a@company.com',
              phone: '+1 (555) 901-2372'
            },
            {
              id: 'B24020',
              name: 'Ragul Rathna T',
              title: 'Team Member',
              email: 'ragul.rathna.t@company.com',
              phone: '+1 (555) 901-2373'
            },
            {
              id: 'B24022',
              name: 'Kiran Balaji B',
              title: 'Team Member',
              email: 'kiran.balaji.b@company.com',
              phone: '+1 (555) 901-2374'
            },
            {
              id: 'B25014',
              name: 'Nandraj Rathod',
              title: 'Team Member',
              email: 'nandraj.rathod@company.com',
              phone: '+1 (555) 901-2375'
            },
            {
              id: 'B22182',
              name: 'Vaitheeshwaran J',
              title: 'Team Member',
              email: 'vaitheeshwaran.j@company.com',
              phone: '+1 (555) 901-2376'
            },
            {
              id: 'B23060',
              name: 'Hari Prasad J',
              title: 'Team Member',
              email: 'hari.prasad.j@company.com',
              phone: '+1 (555) 901-2377'
            }
          ]
        },
        {
          id: 'coe-cloud',
          name: 'CoE Cloud',
          color: 'bg-teal-600',
          members: [
            {
              id: 'B1611',
              name: 'Sakthidasan E',
              title: 'Manager - CoE Cloud',
              email: 'sakthidasan.e@company.com',
              phone: '+1 (555) 901-2378'
            },
            {
              id: 'B1537',
              name: 'Abirami Ravi',
              title: 'Team Member',
              email: 'abirami.ravi@company.com',
              phone: '+1 (555) 901-2379'
            },
            {
              id: 'B1705',
              name: 'Pradeep V',
              title: 'Team Member',
              email: 'pradeep.v@company.com',
              phone: '+1 (555) 901-2380'
            },
            {
              id: 'B1874',
              name: 'Agathees Kumar',
              title: 'Team Member',
              email: 'agathees.kumar@company.com',
              phone: '+1 (555) 901-2381'
            },
            {
              id: 'B1890',
              name: 'Veeresh M',
              title: 'Team Member',
              email: 'veeresh.m@company.com',
              phone: '+1 (555) 901-2382'
            },
            {
              id: 'B1941',
              name: 'Joshva Nathan M',
              title: 'Team Member',
              email: 'joshva.nathan.m@company.com',
              phone: '+1 (555) 901-2383'
            },
            {
              id: 'B1981',
              name: 'Pamulapati Kishore',
              title: 'Team Member',
              email: 'pamulapati.kishore@company.com',
              phone: '+1 (555) 901-2384'
            },
            {
              id: 'B20004',
              name: 'Ananth P',
              title: 'Team Member',
              email: 'ananth.p@company.com',
              phone: '+1 (555) 901-2385'
            },
            {
              id: 'B20063',
              name: 'Ramesh Ram',
              title: 'Manager',
              email: 'ramesh.ram@company.com',
              phone: '+1 (555) 901-2386'
            },
            {
              id: 'B20115',
              name: 'Manikandan Srinivasan',
              title: 'Team Member',
              email: 'manikandan.srinivasan@company.com',
              phone: '+1 (555) 901-2387'
            },
            {
              id: 'B21024',
              name: 'Sweetha B',
              title: 'Team Member',
              email: 'sweetha.b@company.com',
              phone: '+1 (555) 901-2388'
            },
            {
              id: 'B21025',
              name: 'Shanmugavel S',
              title: 'Manager',
              email: 'shanmugavel.s@company.com',
              phone: '+1 (555) 901-2389'
            },
            {
              id: 'B21064',
              name: 'Praghatiesh S',
              title: 'Team Member',
              email: 'praghatiesh.s@company.com',
              phone: '+1 (555) 901-2390'
            },
            {
              id: 'B21075',
              name: 'Jegan R',
              title: 'Team Member',
              email: 'jegan.r@company.com',
              phone: '+1 (555) 901-2391'
            },
            {
              id: 'B21153',
              name: 'Abubakkar Siddik N',
              title: 'Team Member',
              email: 'abubakkar.siddik.n@company.com',
              phone: '+1 (555) 901-2392'
            },
            {
              id: 'B22031',
              name: 'Abhinav Sutradhar',
              title: 'Team Member',
              email: 'abhinav.sutradhar@company.com',
              phone: '+1 (555) 901-2393'
            },
            {
              id: 'B22040',
              name: 'Nachiyar C',
              title: 'Team Member',
              email: 'nachiyar.c@company.com',
              phone: '+1 (555) 901-2394'
            },
            {
              id: 'B22110',
              name: 'Hariprasaad G N',
              title: 'Team Member',
              email: 'hariprasaad.g.n@company.com',
              phone: '+1 (555) 901-2395'
            },
            {
              id: 'B22117',
              name: 'Nivashini S',
              title: 'Team Member',
              email: 'nivashini.s@company.com',
              phone: '+1 (555) 901-2396'
            },
            {
              id: 'B22119',
              name: 'Lakshmi A',
              title: 'Team Member',
              email: 'lakshmi.a@company.com',
              phone: '+1 (555) 901-2397'
            },
            {
              id: 'B23039',
              name: 'Pagadavarapu Dileep',
              title: 'Team Member',
              email: 'pagadavarapu.dileep@company.com',
              phone: '+1 (555) 901-2398'
            },
            {
              id: 'B23044',
              name: 'Bijeta Dubey',
              title: 'Team Member',
              email: 'bijeta.dubey@company.com',
              phone: '+1 (555) 901-2399'
            },
            {
              id: 'B23047',
              name: 'Shankar Kumar M',
              title: 'Team Member',
              email: 'shankar.kumar.m@company.com',
              phone: '+1 (555) 901-2400'
            },
            {
              id: 'B23056',
              name: 'Nithveen J',
              title: 'Team Member',
              email: 'nithveen.j@company.com',
              phone: '+1 (555) 901-2401'
            },
            {
              id: 'B24008',
              name: 'Poornima S',
              title: 'Team Member',
              email: 'poornima.s@company.com',
              phone: '+1 (555) 901-2402'
            },
            {
              id: 'B24009',
              name: 'Priya K',
              title: 'Team Member',
              email: 'priya.k@company.com',
              phone: '+1 (555) 901-2403'
            },
            {
              id: 'B24010',
              name: 'Sandhiya S',
              title: 'Team Member',
              email: 'sandhiya.s@company.com',
              phone: '+1 (555) 901-2404'
            },
            {
              id: 'B24011',
              name: 'Vijayalakshmi V',
              title: 'Team Member',
              email: 'vijayalakshmi.v@company.com',
              phone: '+1 (555) 901-2405'
            },
            {
              id: 'B24012',
              name: 'Vinni Blessi Joice P',
              title: 'Team Member',
              email: 'vinni.blessi.joice.p@company.com',
              phone: '+1 (555) 901-2406'
            },
            {
              id: 'B24060',
              name: 'Ankita H',
              title: 'Team Member',
              email: 'ankita.h@company.com',
              phone: '+1 (555) 901-2407'
            },
            {
              id: 'B24066',
              name: 'Anishkumar C',
              title: 'Team Member',
              email: 'anishkumar.c@company.com',
              phone: '+1 (555) 901-2408'
            },
            {
              id: 'B24067',
              name: 'Manimaran Venkatachalam',
              title: 'Team Member',
              email: 'manimaran.venkatachalam@company.com',
              phone: '+1 (555) 901-2409'
            },
            {
              id: 'B24068',
              name: 'Ponsurya L',
              title: 'Team Member',
              email: 'ponsurya.l@company.com',
              phone: '+1 (555) 901-2410'
            },
            {
              id: 'B24070',
              name: 'Kumar A',
              title: 'Team Member',
              email: 'kumar.a@company.com',
              phone: '+1 (555) 901-2411'
            },
            {
              id: 'B24071',
              name: 'Pannem Srikanth',
              title: 'Team Member',
              email: 'pannem.srikanth@company.com',
              phone: '+1 (555) 901-2412'
            },
            {
              id: 'B24072',
              name: 'Tharangini Gajendran',
              title: 'Team Member',
              email: 'tharangini.gajendran@company.com',
              phone: '+1 (555) 901-2413'
            },
            {
              id: 'B24073',
              name: 'Sridevi S',
              title: 'Team Member',
              email: 'sridevi.s@company.com',
              phone: '+1 (555) 901-2414'
            },
            {
              id: 'B24074',
              name: 'Siva S',
              title: 'Team Member',
              email: 'siva.s@company.com',
              phone: '+1 (555) 901-2415'
            },
            {
              id: 'B24075',
              name: 'Kowsalya Palanisamy',
              title: 'Team Member',
              email: 'kowsalya.palanisamy@company.com',
              phone: '+1 (555) 901-2416'
            },
            {
              id: 'B25007',
              name: 'Anburaj C',
              title: 'Team Member',
              email: 'anburaj.c@company.com',
              phone: '+1 (555) 901-2417'
            },
            {
              id: 'B25008',
              name: 'Abdul Khadir A',
              title: 'Team Member',
              email: 'abdul.khadir.a@company.com',
              phone: '+1 (555) 901-2418'
            },
            {
              id: 'B25009',
              name: 'Dilli Babu K',
              title: 'Team Member',
              email: 'dilli.babu.k@company.com',
              phone: '+1 (555) 901-2419'
            },
            {
              id: 'B25010',
              name: 'Mohanraj R G',
              title: 'Team Member',
              email: 'mohanraj.r.g@company.com',
              phone: '+1 (555) 901-2420'
            },
            {
              id: 'B25011',
              name: 'Magalakshmi M',
              title: 'Team Member',
              email: 'magalakshmi.m@company.com',
              phone: '+1 (555) 901-2421'
            },
            {
              id: 'B25012',
              name: 'Vijayakumar P',
              title: 'Team Member',
              email: 'vijayakumar.p2@company.com',
              phone: '+1 (555) 901-2422'
            },
            {
              id: 'B25013',
              name: 'Guru Prakash S',
              title: 'Team Member',
              email: 'guru.prakash.s@company.com',
              phone: '+1 (555) 901-2423'
            },
            {
              id: 'B25018',
              name: 'Aishwarya R',
              title: 'Team Member',
              email: 'aishwarya.r@company.com',
              phone: '+1 (555) 901-2424'
            },
            {
              id: 'B25019',
              name: 'Krishnakumar V',
              title: 'Team Member',
              email: 'krishnakumar.v@company.com',
              phone: '+1 (555) 901-2425'
            },
            {
              id: 'B22156',
              name: 'Priyanka C',
              title: 'Team Member',
              email: 'priyanka.c@company.com',
              phone: '+1 (555) 901-2426'
            },
            {
              id: 'B25004',
              name: 'Suganya P',
              title: 'Team Member',
              email: 'suganya.p@company.com',
              phone: '+1 (555) 901-2427'
            },
            {
              id: 'B23040',
              name: 'Thulasiraja M',
              title: 'Team Member',
              email: 'thulasiraja.m@company.com',
              phone: '+1 (555) 901-2428'
            }
          ]
        },
        {
          id: 'cede',
          name: 'CEDE',
          color: 'bg-teal-600',
          members: [
            {
              id: 'B21025',
              name: 'Shanmugavel S',
              title: 'Manager - CEDE',
              email: 'shanmugavel.s@company.com',
              phone: '+1 (555) 901-2429'
            },
            {
              id: 'B21066',
              name: 'Selva Kumar T',
              title: 'Team Member',
              email: 'selva.kumar.t@company.com',
              phone: '+1 (555) 901-2430'
            },
            {
              id: 'B21080',
              name: 'Ooviyalakshmi K',
              title: 'Team Member',
              email: 'ooviyalakshmi.k@company.com',
              phone: '+1 (555) 901-2431'
            },
            {
              id: 'B22181',
              name: 'Diwakar N',
              title: 'Team Member',
              email: 'diwakar.n@company.com',
              phone: '+1 (555) 901-2432'
            },
            {
              id: 'B23008',
              name: 'Shajin R T',
              title: 'Team Member',
              email: 'shajin.r.t@company.com',
              phone: '+1 (555) 901-2433'
            }
          ]
        },
        {
          id: 'it-staffing',
          name: 'IT Staffing',
          color: 'bg-teal-600',
          members: [
            {
              id: 'B25006',
              name: 'Darshana Pranav',
              title: 'Sr. Manager - IT Staffing',
              email: 'darshana.pranav@company.com',
              phone: '+1 (555) 678-2345'
            },
            {
              id: 'B22152',
              name: 'Valarmathi V',
              title: 'Team Member',
              email: 'valarmathi.v@company.com',
              phone: '+1 (555) 678-2346'
            },
            {
              id: 'B25005',
              name: 'Senthamizhselvan P',
              title: 'Team Member',
              email: 'senthamizhselvan.p@company.com',
              phone: '+1 (555) 678-2347'
            }
          ]
        },
        {
          id: 'infosys',
          name: 'Infosys',
          color: 'bg-teal-600',
          members: [
            {
              id: 'B21029',
              name: 'Ramesh Sampath S',
              title: 'Manager - Infosys',
              email: 'ramesh.sampath.s@company.com',
              phone: '+1 (555) 901-2434'
            },
            {
              id: 'B21110',
              name: 'Vipul Vohra',
              title: 'Team Member',
              email: 'vipul.vohra@company.com',
              phone: '+1 (555) 901-2435'
            },
            {
              id: 'B23054',
              name: 'Dharanitharan Murugan',
              title: 'Team Member',
              email: 'dharanitharan.murugan@company.com',
              phone: '+1 (555) 901-2436'
            },
            {
              id: 'B25021',
              name: 'Rakesh Desabathula',
              title: 'Team Member',
              email: 'rakesh.desabathula@company.com',
              phone: '+1 (555) 901-2437'
            }
          ]
        },
        {
          id: 'it-india',
          name: 'IT India',
          color: 'bg-teal-600',
          members: [
            {
              id: 'B25015',
              name: 'Sabin Kumar Gupta',
              title: 'Sr. Manager - IT India',
              email: 'sabin.kumar.gupta@company.com',
              phone: '+1 (555) 567-1234'
            },
            {
              id: 'B23063',
              name: 'Siddhant Kumar',
              title: 'Team Member',
              email: 'siddhant.kumar@company.com',
              phone: '+1 (555) 567-1235'
            },
            {
              id: 'B25002',
              name: 'Carol Praisy R',
              title: 'Team Member',
              email: 'carol.praisy.r@company.com',
              phone: '+1 (555) 567-1236'
            },
            {
              id: 'B25003',
              name: 'Roshan Amarsingh Maliye',
              title: 'Team Member',
              email: 'roshan.amarsingh.maliye@company.com',
              phone: '+1 (555) 567-1237'
            },
            {
              id: 'B25020',
              name: 'Nikita Kukreja',
              title: 'Team Member',
              email: 'nikita.kukreja@company.com',
              phone: '+1 (555) 567-1238'
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
              name: 'TBD',
              title: 'Director - Marketing',
              email: 'marketing.director@company.com',
              phone: '+1 (555) 012-3456'
            },
            {
              id: 'B23061',
              name: 'Rajthilak R',
              title: 'Team Member',
              email: 'rajthilak.r@company.com',
              phone: '+1 (555) 012-3457'
            },
            {
              id: 'B24034',
              name: 'Rajkumar P',
              title: 'Team Member',
              email: 'rajkumar.p@company.com',
              phone: '+1 (555) 012-3458'
            },
            {
              id: 'B24051',
              name: 'Abdul Azeez S',
              title: 'Team Member',
              email: 'abdul.azeez.s@company.com',
              phone: '+1 (555) 012-3459'
            },
            {
              id: 'B25001',
              name: 'Prasanna Kumar',
              title: 'Team Member',
              email: 'prasanna.kumar@company.com',
              phone: '+1 (555) 012-3460'
            },
            {
              id: 'B25016',
              name: 'Swathi Rajagopal',
              title: 'Team Member',
              email: 'swathi.rajagopal@company.com',
              phone: '+1 (555) 012-3461'
            },
            {
              id: 'B25017',
              name: 'Abhinandhan V',
              title: 'Team Member',
              email: 'abhinandhan.v@company.com',
              phone: '+1 (555) 012-3462'
            }
          ]
        }
      ]
    }
  ];

  const allSubTeamIds = departments.flatMap(dept => dept.subTeams.map(subTeam => subTeam.id));

  const expandAll = () => {
    setExpandedDepartments(new Set(departmentIds));
    setExpandedSubTeams(new Set(allSubTeamIds));
  };

  const collapseAll = () => {
    setExpandedDepartments(new Set());
    setExpandedSubTeams(new Set());
  };

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-6 py-6">
      {/* Buttons for Expand/Collapse All */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={expandAll}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Expand All
        </button>
        <button
          onClick={collapseAll}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
        >
          Collapse All
        </button>
      </div>

      {/* CEO Level */}
      <div className="flex justify-center">
        <PersonCard person={ceo} isHead={true} color="bg-blue-600" size="medium" />
      </div>

      {/* Senior EA Level */}
      <div className="flex justify-end">
        <div className="mr-12">
          <PersonCard person={seniorEA} color="bg-teal-500" size="small" />
        </div>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {departments.map((department) => (
          <div key={department.id} className="transform scale-90">
            <DepartmentCard
              department={department}
              isExpanded={expandedDepartments.has(department.id)}
              onToggle={() => toggleDepartment(department.id)}
              expandedSubTeams={expandedSubTeams}
              onSubTeamToggle={toggleSubTeam}
            />
          </div>
        ))}
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
  size = isHead ? 'medium' : 'small'
}) => {
  const sizeClasses = {
    small: 'p-2',
    medium: 'p-3',
    large: 'p-4'
  };

  const avatarSizes = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const textSizes = {
    small: { name: 'text-sm', title: 'text-xs' },
    medium: { name: 'text-base', title: 'text-sm' },
    large: { name: 'text-lg', title: 'text-base' }
  };

  return (
    <Card className={`${sizeClasses[size]} bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border-l-4 border-l-transparent ${isHead ? 'border-l-blue-500' : ''} max-w-xs mx-auto`}>
      <div className="flex flex-col items-center space-y-2">
        <div className={`${avatarSizes[size]} ${color} rounded-full flex items-center justify-center text-white font-semibold`}>
          <User className={size === 'large' ? 'w-6 h-6' : size === 'medium' ? 'w-4 h-4' : 'w-3 h-3'} />
        </div>
        <div className="text-center">
          <h3 className={`font-bold text-slate-800 ${textSizes[size].name}`}>
            {person.name}
          </h3>
          <p className={`text-slate-600 ${textSizes[size].title} mb-1`}>
            {person.title}
          </p>
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className={`${department.color} p-3 cursor-pointer hover:opacity-90 transition-opacity`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-white" />
            <div>
              <h2 className="text-base font-bold text-white">{department.name}</h2>
              <p className="text-white/80 text-xs">
                {department.subTeams.length} teams
              </p>
            </div>
          </div>
          <div className="text-white">
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </div>

      <div className="p-2 bg-gray-50">
        <PersonCard person={department.head} isHead={true} color={department.color} size="small" />
      </div>

      {isExpanded && (
        <div className="p-2 space-y-1 bg-gray-25">
          <h4 className="font-semibold text-slate-700 text-xs uppercase tracking-wide">Teams</h4>
          {department.subTeams.map((subTeam) => (
            <SubTeamCard
              key={subTeam.id}
              subTeam={subTeam}
              isExpanded={expandedSubTeams.has(subTeam.id)}
              onToggle={() => onSubTeamToggle(subTeam.id)}
            />
          ))}
        </div>
      )}
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
        className={`${subTeam.color} p-1 cursor-pointer hover:opacity-90 transition-opacity rounded-t`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <span className="text-white text-xs font-medium">{subTeam.name}</span>
          {subTeam.members.length > 0 && (
            <div className="text-white">
              {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </div>
          )}
        </div>
      </div>

      {subTeam.members.length > 0 && (
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="p-1 space-y-1">
            <div className="overflow-y-auto max-h-96">
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
        </div>
      )}
    </div>
  );
};

export default OrgChart;