import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { UserPlus, Users, Building, Award, Mail, Briefcase } from "lucide-react";

enum Priority {
  High = 'high',
  Medium = 'medium',
  Standard = 'standard',
}

interface ReferralOpportunity {
  id: string;
  title: string;
  department?: string;
  location: string;
  type: "full-time" | "part-time" | "contract";
  experience: string;
  postedDate: string;
  description: string;
  requirements: string[];
  priority: Priority;
  bonus: number;
}

const referralOpportunities: ReferralOpportunity[] = [
  {
    id: "2024-108",
    title: `Inside Sales Representative - APAC`,
    location: `Chennai`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `Drive sales in the APAC market with hands-on experience in SaaS, partner relationships, renewals, and cybersecurity.`,
    requirements: ["Cold Calling", "Lead Generation", "APAC Market Connect"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2024-216",
    title: `Manager - Sales (IT Staffing)`,
    location: `Chennai`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `Acquire clients in India for IT staffing needs (contract and permanent) in software development and consulting.`,
    requirements: ["IT Staffing (Contract & Permanent)"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2024-276",
    title: `Inside Sales Representative - Middle East & Africa (MEA)`,
    location: `Chennai`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `Drive sales in the MEA market with expertise in SaaS, partner relationships, renewals, and cybersecurity.`,
    requirements: ["Cold Calling", "Lead Generation", "MEA Market Connect"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-006",
    title: `AI Product Manager`,
    location: `Chennai`,
    type: "full-time",
    experience: `15+ Years`,
    postedDate: `May 30, 2025`,
    description: `Lead product development with expertise in Cloud Engineering, Data Analytics, and Artificial Intelligence.`,
    requirements: ["AI", "Product Road Map", "Data Analytics", "Cloud"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-036",
    title: `Data Scientist - Senior`,
    location: `Chennai`,
    type: "full-time",
    experience: `10 Years`,
    postedDate: `May 30, 2025`,
    description: `Develop and implement advanced machine learning models, including neural networks and generative AI.`,
    requirements: ["Neural Networks", "GenAI/LLM", "Python", "R"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-037",
    title: `Data Scientist - Mid Level`,
    location: `Chennai`,
    type: "full-time",
    experience: `5 Years`,
    postedDate: `May 30, 2025`,
    description: `Develop and implement machine learning models, including neural networks and generative AI.`,
    requirements: ["Python", "Neural Networks", "GenAI/LLM", "Prompt Engineering"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-038",
    title: `Python Developer - Senior`,
    location: `Chennai`,
    type: "full-time",
    experience: `8 Years`,
    postedDate: `May 30, 2025`,
    description: `Develop and maintain Python-based applications and systems for data and image processing.`,
    requirements: ["Python", "SQL", "API Development", "Data & Image Processing"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-039",
    title: `UI Developer - Senior`,
    location: `Chennai`,
    type: "full-time",
    experience: `8 Years`,
    postedDate: `May 30, 2025`,
    description: `Design and develop user interfaces using Angular, React, or React with Python.`,
    requirements: ["UI Design", "Angular", "React", "React with Python"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-050",
    title: `Channel Leader - PAN India`,
    location: `Chennai, Mumbai, Bangalore`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `Identify and onboard new channel partners to expand market presence.`,
    requirements: ["Channel Partner Acquisition", "B2B Sales", "Market Expansion", "Relationship Building"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-060",
    title: `Finance Executive`,
    location: `Chennai`,
    type: "full-time",
    experience: `2+ Years`,
    postedDate: `May 30, 2025`,
    description: `Conduct detailed profitability analysis across products, customers, and channels.`,
    requirements: ["Profitability Analysis", "Cost Analysis", "Benchmarking", "Variance and Trend Analysis"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-063",
    title: `Inside Sales - US Market`,
    location: `Chennai`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `Create and maintain a database of prospects for the US market, focusing on cloud and SaaS solutions.`,
    requirements: ["Cloud (AWS, Azure, GCP)", "SaaS", "Sales", "US Market"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-064",
    title: `Inside Sales - India Market`,
    location: `Chennai`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `Create and maintain a database of prospects for the India market, focusing on cloud and SaaS solutions.`,
    requirements: ["Cloud (AWS, Azure, GCP)", "SaaS", "Sales", "India Market"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-066",
    title: `SAP CPI`,
    location: `Hyderabad`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop and manage SAP CPI interfaces, ensuring seamless integration across systems.`,
    requirements: ["SAP CPI", "Integration Development"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-067",
    title: `IDMC Admin Role`,
    location: `Hyderabad`,
    type: "full-time",
    experience: `7+ Years`,
    postedDate: `May 30, 2025`,
    description: `Install, configure, and maintain the IDMC platform for efficient data management.`,
    requirements: ["IDMC Administration", "Platform Configuration"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-069",
    title: `SAP SD`,
    location: `Bangalore`,
    type: "full-time",
    experience: `7+ Years`,
    postedDate: `May 30, 2025`,
    description: `Implement and support SAP SD modules with hands-on experience in S/4 HANA.`,
    requirements: ["SAP SD", "S/4 HANA"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-070",
    title: `BT/BLE Firmware/Host Developer`,
    location: `Pune`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop and maintain BT/BLE firmware and host applications for embedded systems.`,
    requirements: ["BT/BLE Firmware Development", "Host Development"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-071",
    title: `Full Stack Developer`,
    location: `Pune`,
    type: "full-time",
    experience: `12+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop full-stack applications using Java, React.js, and Spring Boot, with expertise in CI/CD pipelines and testing frameworks.`,
    requirements: ["Java", "React.js", "Spring Framework", "Spring Boot", "Redux", "CI/CD Pipelines", "Jest/Mocha"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-072",
    title: `SAP MM Consultant`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Configure and customize the SAP MM module to optimize procurement and inventory processes.`,
    requirements: ["SAP MM", "S/4 HANA", "Procurement Management"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-073",
    title: `SAP S/4 HANA Controlling`,
    location: `Bangalore`,
    type: "full-time",
    experience: `8+ Years`,
    postedDate: `May 30, 2025`,
    description: `Implement and design SAP S/4 HANA CO solutions, focusing on profitability analysis.`,
    requirements: ["SAP S/4 HANA", "CO PA"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-074",
    title: `Cyber Security Admin`,
    location: `Bangalore`,
    type: "full-time",
    experience: `2+ Years`,
    postedDate: `May 30, 2025`,
    description: `Monitor network and system activity for security breaches and ensure robust cybersecurity measures.`,
    requirements: ["Cybersecurity Administration", "Network Monitoring"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-075",
    title: `GCP Data Engineer`,
    location: `Chennai`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Lead data migration efforts to GCP, utilizing BigQuery, SQL, and Python in an Agile framework.`,
    requirements: ["GCP", "Python", "BigQuery", "Kubernetes", "SQL"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-076",
    title: `Automation Engineer`,
    location: `Hyderabad, Pune`,
    type: "full-time",
    experience: `8+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop automation testing frameworks using QTP (UFT), Selenium, and BDD tools like Cucumber.`,
    requirements: ["Automation Testing (QTP/UFT, Selenium)", "BDD", "Cucumber", "Maven"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-077",
    title: `Data Architect`,
    location: `Bangalore`,
    type: "full-time",
    experience: `8+ Years`,
    postedDate: `May 30, 2025`,
    description: `Design end-to-end SAP integration architectures with systems like SAP BW, S/4 HANA, and PaPM.`,
    requirements: ["SAP BW", "S/4 HANA", "PaPM"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-078",
    title: `Senior SAP Development Consultant`,
    location: `Bangalore`,
    type: "full-time",
    experience: `8+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop SAP solutions using ABAP, RAP, CAP, and BRF for S/4 HANA implementations.`,
    requirements: ["SAP ABAP", "S/4 HANA", "RAP", "CAP", "BRF"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-079",
    title: `Business Analyst`,
    location: `Chennai`,
    type: "full-time",
    experience: `5-7 Years`,
    postedDate: `May 30, 2025`,
    description: `Collaborate with cross-functional teams to define project scope, solutions, and risks using Agile methodologies.`,
    requirements: ["Business Analysis", "Agile", "Confluence", "JIRA"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-080",
    title: `Manager Sales - North`,
    location: `Remote (North India)`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop and execute a go-to-market strategy to grow the CMS business in North India.`,
    requirements: ["Sales", "Market Expansion", "Relationship Building"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-081",
    title: `Manager Sales - Mumbai`,
    location: `Mumbai`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop and execute a go-to-market strategy to grow the CMS business in Mumbai.`,
    requirements: ["Sales", "Market Expansion", "Relationship Building"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-083",
    title: `IT Systems Administrator`,
    location: `Chennai`,
    type: "full-time",
    experience: `2-10 Years`,
    postedDate: `May 30, 2025`,
    description: `Develop PowerShell scripts for system management and operational efficiencies.`,
    requirements: ["PSADT", "SCCM/MCEM", "MSI", "Active Directory", "Windows Server 2022/2019"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-084",
    title: `IT Systems Administrator`,
    location: `Pune`,
    type: "full-time",
    experience: `5-12 Years`,
    postedDate: `May 30, 2025`,
    description: `Develop PowerShell scripts for system management and operational efficiencies.`,
    requirements: ["PSADT", "SCCM/MCEM", "MSI", "Active Directory", "Windows Server 2022/2019"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-087",
    title: `Senior SAP PP Consultant`,
    location: `Bangalore`,
    type: "full-time",
    experience: `7+ Years`,
    postedDate: `May 30, 2025`,
    description: `Support SAP PP/MM implementations for manufacturing and automotive industries.`,
    requirements: ["SAP PP", "Logistics Functional"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-088",
    title: `Full Stack Developer`,
    location: `Bangalore`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop and deploy full-stack applications using Angular, Java, and Spring, with involvement in production support.`,
    requirements: ["Angular (v8-14)", "HTML", "CSS", "JavaScript", "Java (JDK 8+)", "Spring Framework"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-089",
    title: `AWS Data Engineer`,
    location: `Bangalore, Hyderabad, Mumbai, Pune, Kolkata, Chennai`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop data pipelines using AWS services like S3, Lambda, Glue, and SQS.`,
    requirements: ["AWS S3", "Lambda", "Glue", "API Gateway", "SQS"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-090",
    title: `Azure Databricks Engineer`,
    location: `Bangalore, Hyderabad, Mumbai, Pune, Kolkata, Chennai`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Implement advanced data analytics solutions using Azure Databricks for big data processing.`,
    requirements: ["Databricks", "Azure"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-091",
    title: `AI & Data Testing Engineer`,
    location: `Bangalore, Hyderabad, Mumbai, Pune, Kolkata, Chennai`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Validate ETL processes and data integrity for cloud and on-premise systems.`,
    requirements: ["ETL Testing", "BI Testing"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-092",
    title: `Appian Developer`,
    location: `Hyderabad`,
    type: "full-time",
    experience: `4+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop and design Appian applications with L1 & L2 certification.`,
    requirements: ["Appian", "L1 & L2 Certification"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-093",
    title: `Azure DevOps Engineer`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Manage Azure DevOps pipelines for deploying applications on Azure PaaS services.`,
    requirements: ["Azure", "DevOps", "Kubernetes"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-094",
    title: `Senior Backend Developer`,
    location: `Bangalore`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop backend services using Java, Spring Boot, and ElasticSearch for scalable applications.`,
    requirements: ["Java", "Spring Boot", "Object Databases", "ElasticSearch/Solr"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-095",
    title: `Senior Frontend Developer`,
    location: `Bangalore`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop responsive frontends using TypeScript, Stencil.js, and Svelte.`,
    requirements: ["TypeScript", "JavaScript", "Stencil.js", "Svelte", "CSS", "HTML"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-096",
    title: `Senior QA Engineer`,
    location: `Bangalore`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `Perform manual and automated testing to ensure software quality.`,
    requirements: ["Manual Testing", "Automated Testing"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-097",
    title: `Middleware Expert`,
    location: `Remote (PAN India)`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop and manage middleware solutions with expertise in ETL and royalty calculation engines.`,
    requirements: ["GCAI", "ETL", "Royalty Calculation (Prime, SAP)"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-098",
    title: `PySpark Developer`,
    location: `Remote (PAN India)`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop big data solutions using PySpark for database migration and processing.`,
    requirements: ["PySpark", "Big Data Systems", "Database Migration"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-099",
    title: `Looker Developer`,
    location: `Bangalore, Hyderabad`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Design and develop LookML data models for advanced analytics.`,
    requirements: ["Looker", "LookML"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-100",
    title: `SAP ABAP Developer`,
    location: `Bangalore`,
    type: "full-time",
    experience: `8+ Years`,
    postedDate: `May 30, 2025`,
    description: `Maintain S/4 HANA solutions using SAP ABAP, ensuring best practices for WRICEFs.`,
    requirements: ["SAP ABAP", "S/4 HANA"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-101",
    title: `Java Backend Developer`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop microservices using Spring Boot for scalable backend systems.`,
    requirements: ["Spring Boot", "Microservices"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-102",
    title: `Full Stack Developer`,
    location: `Gurgaon`,
    type: "full-time",
    experience: `4+ Years`,
    postedDate: `May 30, 2025`,
    description: `Build web applications using JavaScript, Node.js, and React for the digital marketing domain.`,
    requirements: ["JavaScript", "Node.js", "React"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-103",
    title: `Entra ID Specialist`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Manage and configure Entra ID for secure identity and access management.`,
    requirements: ["Entra ID"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-104",
    title: `Software Engineer`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop software solutions using PLSQL, Java, and C for enterprise applications.`,
    requirements: ["PLSQL", "Java", "C"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-105",
    title: `Specialist - Oracle EBS`,
    location: `Bangalore`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `Implement and support Oracle EBS solutions for enterprise resource planning.`,
    requirements: ["Oracle EBS"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-106",
    title: `SAP Architect`,
    location: `Chennai, Pune, Bangalore, Hyderabad, Chandigarh, Gurgaon, Kolkata`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `Design SAP integration strategies using BTP, PI, and CPI.`,
    requirements: ["SAP BTP", "PI", "CPI"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-107",
    title: `Big Data Developer`,
    location: `Remote (PAN India)`,
    type: "full-time",
    experience: `8+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop big data solutions using Spark and Scala for large-scale data processing.`,
    requirements: ["Spark", "Scala", "Big Data"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-108",
    title: `Python Developer`,
    location: `Bangalore`,
    type: "full-time",
    experience: `4+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop Python applications with SQL and visualization capabilities.`,
    requirements: ["Python", "SQL", "Data Visualization"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-109",
    title: `QA Engineer`,
    location: `Bangalore`,
    type: "full-time",
    experience: `4-7 Years`,
    postedDate: `May 30, 2025`,
    description: `Perform quality assurance using automation testing tools like QTP and Selenium.`,
    requirements: ["Automation Testing (QTP/UFT, Selenium)", "BDD", "Cucumber", "Maven"],
    priority: Priority.Medium,
    bonus: 50000,
  },
  {
    id: "2025-110",
    title: `Salesforce Developer`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5-7 Years`,
    postedDate: `May 30, 2025`,
    description: `Develop customized Salesforce solutions using Apex, Visualforce, and LWC.`,
    requirements: ["Salesforce", "LWC", "Apex", "Visualforce"],
    priority: Priority.Standard,
    bonus: 25000,
  },
  {
    id: "2025-111",
    title: `Full Stack Web Developer`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5-7 Years`,
    postedDate: `May 30, 2025`,
    description: `Build full-stack web applications for digital marketing using TypeScript, React, and Node.js.`,
    requirements: ["TypeScript", "JavaScript", "React", "Node.js", "Cloud", "Digital Marketing"],
    priority: Priority.High,
    bonus: 75000,
  },
  {
    id: "2025-112",
    title: `Mobile Automation Tester`,
    location: `Chennai, Pune, Bangalore, Hyderabad, Chandigarh, Gurgaon, Kolkata`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Perform mobile automation testing for iOS and Android using Appium and Perfecto.`,
    requirements: ["Mobile Automation Testing (Appium, Perfecto)", "AEM", "Selenium/Java", "API Testing"],
    priority: Priority.Medium,
    bonus: 50000,
  }
];

interface RecruitingEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  virtual?: boolean;
}

const recruitingEvents: RecruitingEvent[] = [
  {
    id: "1",
    title: "Tech Talent Career Fair",
    date: "May 15, 2025",
    location: "San Francisco Convention Center",
    description: "Join us at this major tech career fair to meet potential candidates in person.",
  },
  {
    id: "2",
    title: "Cloud Security Webinar",
    date: "May 20, 2025",
    location: "Online",
    description: "Hosting a webinar on cloud security trends to attract security professionals.",
    virtual: true,
  },
  {
    id: "3",
    title: "University Recruitment - MIT",
    date: "May 25, 2025",
    location: "MIT Campus, Cambridge, MA",
    description: "Campus recruitment event targeting graduating students in computer science and cybersecurity.",
  },
  {
    id: "4",
    title: "Women in Tech Networking Event",
    date: "June 2, 2025",
    location: "Online",
    description: "Virtual networking event to connect with women professionals in technology roles.",
    virtual: true,
  },
];

const TalentAcquisition = () => {
  const [selectedJobId, setSelectedJobId] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    candidateName: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null,
    notes: '',
  });

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedOpportunities = selectedJobId
    ? referralOpportunities.filter((opportunity) => opportunity.id === selectedJobId)
    : referralOpportunities.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(referralOpportunities.length / itemsPerPage);

  const handleJobSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedJobId(event.target.value);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      candidateName: '',
      email: '',
      phone: '',
      position: '',
      resume: null,
      notes: '',
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Talent Acquisition</h1>
        <p className="text-muted-foreground">Help grow our team by referring talented candidates</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-securekloud-100 dark:bg-securekloud-700 flex items-center justify-center">
              <UserPlus className="h-5 w-5 text-securekloud-700 dark:text-securekloud-100" />
            </div>
            <div>
              <CardTitle>Employee Referral Program</CardTitle>
              <CardDescription>Earn bonuses for successful candidate referrals</CardDescription>
            </div>
          </div>
        </CardHeader>
       <CardContent className="space-y-2 self-start">
  <div className="flex flex-col md:flex-row items-start"> {/* Changed to flex for better control */}
    <div className="bg-securekloud-50 dark:bg-securekloud-800 p-4 rounded-lg border border-securekloud-200 dark:border-securekloud-600 space-y-6 w-full md:w-1/2">
      <h3 className="font-medium mb-2">How the Referral Program Works</h3>
      <ul className="list-disc pl-6 space-y-2 text-sm">
        <li>Refer qualified candidates for open positions at SecureKloud</li>
        <li>If your referral is hired and completes 90 days of employment, you earn a referral bonus</li>
        <li>Bonus amounts vary by position, with high-priority roles offering higher bonuses</li>
        <li>Submit referrals through the form below or email recruiting@securekloud.com</li>
        <li>There is no limit to the number of referrals you can submit or bonuses you can earn</li>
      </ul>
    </div>
    <div className="w-full md:w-1/2 ml-0 md:ml-0"> {/* Removed margin-left spacing */}
      <h2 className="text-xl font-semibold text-securekloud-700 dark:text-securekloud-100">Referral Incentive Structure</h2>
      <div className="bg-securekloud-50 dark:bg-securekloud-800 p-4 rounded-lg border border-securekloud-200 dark:border-securekloud-600 mt-0 pt-0"> {/* Ensured no top margin/padding */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-300 dark:border-gray-600 text-left">
            <thead className="bg-blue-600 dark:bg-blue-800 text-white dark:text-gray-200">
              <tr>
                <th scope="col" className="p-2 border dark:border-gray-600">Roles</th>
                <th scope="col" className="p-2 border dark:border-gray-600">Band</th>
                <th scope="col" className="p-2 border dark:border-gray-600">Incentive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border dark:border-gray-600">Fresher</td>
                <td className="p-2 border dark:border-gray-600">B1</td>
                <td className="p-2 border dark:border-gray-600">Rs. 2,500/-</td>
              </tr>
              <tr>
                <td className="p-2 border dark:border-gray-600">Team Member</td>
                <td className="p-2 border dark:border-gray-600">B2</td>
                <td className="p-2 border dark:border-gray-600">Rs. 10,000/-</td>
              </tr>
              <tr>
                <td className="p-2 border dark:border-gray-600">Senior Team Member</td>
                <td className="p-2 border dark:border-gray-600">B3</td>
                <td className="p-2 border dark:border-gray-600">Rs. 25,000/-</td>
              </tr>
              <tr>
                <td className="p-2 border dark:border-gray-600">Middle Management</td>
                <td className="p-2 border dark:border-gray-600">B4 - B5</td>
                <td className="p-2 border dark:border-gray-600">Rs. 50,000/-</td>
              </tr>
              <tr>
                <td className="p-2 border dark:border-gray-600">Management</td>
                <td className="p-2 border dark:border-gray-600">B6 - B7</td>
                <td className="p-2 border dark:border-gray-600">Rs. 75,000/-</td>
              </tr>
              <tr>
                <td className="p-2 border dark:border-gray-600">Senior Management and above</td>
                <td className="p-2 border dark:border-gray-600">B8 & Above</td>
                <td className="p-2 border dark:border-gray-600">Rs. 1,00,000/-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <form onSubmit={handleSubmit}>
    <h3 className="font-medium mb-4">Submit a Referral</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="candidateName" className="text-sm font-medium mb-1.5 block">
          Candidate Name
        </label>
        <Input
          id="candidateName"
          name="candidateName"
          type="text"
          placeholder="Full name"
          value={formData.candidateName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium mb-1.5 block">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="position" className="text-sm font-medium mb-1.5 block">
          Position Referred For
        </label>
        <Input
          id="position"
          name="position"
          type="text"
          placeholder="Job title"
          value={formData.position}
          onChange={handleInputChange}
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="resume" className="text-sm font-medium mb-1.5 block">
          Resume or CV (PDF)
        </label>
        <Input
          id="resume"
          name="resume"
          type="file"
          accept="application/pdf"
          onChange={handleInputChange}
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="notes" className="text-sm font-medium mb-1.5 block">
          Additional Notes
        </label>
        <Input
          id="notes"
          name="notes"
          type="text"
          placeholder="Any additional information about the candidate"
          value={formData.notes}
          onChange={handleInputChange}
        />
      </div>
    </div>
    <Button type="submit">
      <UserPlus className="h-4 w-4 mr-2" />
      Submit Referral
    </Button>
  </form>
</CardContent>
      </Card>

      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-securekloud-100 dark:bg-securekloud-700 flex items-center justify-center">
            <Award className="h-5 w-5 text-securekloud-700 dark:text-securekloud-100" />
          </div>
          <h2 className="text-2xl font-bold">Current Referral Opportunities</h2>
        </div>

        <div className="mb-4">
          <label htmlFor="jobSelect" className="text-sm font-medium mr-2">
            Select a Job:
          </label>
          <select
            id="jobSelect"
            className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full max-w-xs"
            value={selectedJobId}
            onChange={handleJobSelect}
            aria-label="Select a job opening"
          >
            <option value="" disabled>Select a Job</option>
            {referralOpportunities.map((job) => (
              <option key={job.id} value={job.id}>
                {job.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-6">
          {displayedOpportunities.map((opportunity) => (
            <ReferralCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>

        {!selectedJobId && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                variant={currentPage === i + 1 ? 'default' : 'outline'}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        )}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-securekloud-100 dark:bg-securekloud-700 flex items-center justify-center">
              <Users className="h-5 w-5 text-securekloud-700 dark:text-securekloud-100" />
            </div>
            <div>
              <CardTitle>Upcoming Recruiting Events</CardTitle>
              <CardDescription>Where we're actively recruiting new talent</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recruitingEvents.map((event) => (
              <div key={event.id} className="border rounded-lg p-4 dark:border-gray-600">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{event.title}</h3>
                  {event.virtual && (
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      Virtual
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  <div>{event.date}</div>
                  <div>{event.location}</div>
                </div>
                <p className="text-sm mb-4">{event.description}</p>
                <Button size="sm" variant="outline">Learn More</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Talent Acquisition Resources</CardTitle>
          <CardDescription>Tools to help you refer the best candidates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 dark:border-gray-600">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="h-5 w-5 text-securekloud-700 dark:text-securekloud-100" />
                <h3 className="font-medium">Job Descriptions</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Access detailed job descriptions for all open positions.
              </p>
              <Button variant="outline" size="sm">View Descriptions</Button>
            </div>
            <div className="border rounded-md p-4 dark:border-gray-600">
              <div className="flex items-center gap-2 mb-3">
                <Building className="h-5 w-5 text-securekloud-700 dark:text-securekloud-100" />
                <h3 className="font-medium">Company Information</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Resources to help candidates learn about SecureKloud.
              </p>
              <Button variant="outline" size="sm">Access Resources</Button>
            </div>
            <div className="border rounded-md p-4 dark:border-gray-600">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="h-5 w-5 text-securekloud-700 dark:text-securekloud-100" />
                <h3 className="font-medium">Email Templates</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Templates to use when reaching out to potential candidates.
              </p>
              <Button variant="outline" size="sm">Download Templates</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface ReferralCardProps {
  opportunity: ReferralOpportunity;
}

const ReferralCard = ({ opportunity }: ReferralCardProps) => {
  if (!opportunity) {
    return <div>Error: No opportunity data provided</div>;
  }

  const getPriorityBadgeVariant = (priority: Priority) => {
    switch (priority) {
      case Priority.High:
        return "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800";
      case Priority.Medium:
        return "bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-200 dark:hover:bg-orange-800";
      case Priority.Standard:
        return "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800";
      default:
        return "";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{opportunity.title}</CardTitle>
            {opportunity.department && (
              <CardDescription className="flex items-center mt-1">
                <Building className="h-4 w-4 mr-1" />
                {opportunity.department}
              </CardDescription>
            )}
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge className={getPriorityBadgeVariant(opportunity.priority)}>
              {opportunity.priority.charAt(0).toUpperCase() + opportunity.priority.slice(1)} Priority
            </Badge>
            <div className="text-sm font-medium text-green-700 dark:text-green-300">
              Rs. {opportunity.bonus.toLocaleString('en-IN')}/- Bonus
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Building className="h-4 w-4 mr-1" />
          Location: {opportunity.location}
        </div>
        <p className="text-sm">{opportunity.description}</p>
        <div>
          <h4 className="font-medium mb-2">Key Requirements:</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {opportunity.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalentAcquisition;