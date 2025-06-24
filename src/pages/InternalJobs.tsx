import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Mail, Briefcase, Search, MapPin, Clock, Building, Filter } from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  experience: string;
  postedDate: string;
  description: string;
  requirements: string[];
  featured?: boolean;
}

const jobs: Job[] = [
  {
    id: "2024-108",
    title: `Inside Sales Representative – APAC`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `•	Hands-on experience in SaaS, partner relationships, renewals and cybersecurity in the APAC market.`,
    requirements: ['Cold Calling', 'Lead Generation & APAC Market Connect']
  },
  {
    id: "2024-216",
    title: `Manager – Sales (IT Staffing)`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `•	Should have experience in acquiring clients in India for their IT Staffing (Contract & Permanent) needs in software development / consulting.`,
    requirements: ['IT Stafing (Contract & Permanent)']
  },
  {
    id: "2024-276",
    title: `Inside Sales Representative – Middle East & Africa (MEA)`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `•	Hands-on experience in SaaS, partner relationships, renewals and cybersecurity in the MEA market.`,
    requirements: ['Cold Calling', 'Lead Generation & MEA Market Connect']
  },
  {
    id: "2025-006",
    title: `AI Product Manager`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `15+ Years`,
    postedDate: `May 30, 2025`,
    description: `Demonstrate expertise in Cloud Engineering, Data Analytics and Artificial Intelligence`,
    requirements: ['AI', 'Product Road Map', 'Data Analytics', 'Cloud']
  },
  {
    id: "2025-036",
    title: ` Data Scientist – Senior`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `10 Years`,
    postedDate: `May 30, 2025`,
    description: `•	Develop and implement advanced machine learning models, including neural networks and generative AI.`,
    requirements: ['Neural Networks and GenAI/LLM', 'Python & R']
  },
  {
    id: "2025-037",
    title: `Data Scientist – Mid Level`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `5 Years`,
    postedDate: `May 30, 2025`,
    description: `•	Develop and implement machine learning models, including neural networks and generative AI.`,
    requirements: ['Python', 'Neural Networks and GenAI/LLM', 'Prompt']
  },
  {
    id: "2025-038",
    title: `Python Developer – Senior`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `8 Years`,
    postedDate: `May 30, 2025`,
    description: `•	Develop and maintain Python-based applications and systems.`,
    requirements: ['Python', 'SQL', 'API', 'Data &Image Processing']
  },
  {
    id: "2025-039",
    title: `UI Developer – Senior`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `8 Years`,
    postedDate: `May 30, 2025`,
    description: `•	Design and develop user interfaces using Angular and React, or React with Python.`,
    requirements: ['UI Design', 'Angular and React or React with Python']
  },
  {
    id: "2025-050",
    title: `Channel Leader - PAN India`,
    department: `Not Specified`,
    location: `Chnennai, Mumbai, Bangalore`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `•	Identify and onboard new channel partners`,
    requirements: ['Channel Partner Acquisition / Management', 'B2B Sales', 'Market Expansion', 'Relationship Building']
  },
  {
    id: "2025-060",
    title: `Finance Executive`,
    department: `Not Specified`,
    location: `Chnennai`,
    type: "full-time",
    experience: `2+ Years`,
    postedDate: `May 30, 2025`,
    description: `Profitability Analysis: Conduct detailed profitability analysis across products, customers, and channels.`,
    requirements: ['Profitability analysis (product/customer/channel)\nCost analysis and benchmarking\nVariance and trend analysis']
  },
  {
    id: "2025-063",
    title: `Inside Sales - US Market`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `Creating and maintaining a list/database of prospects`,
    requirements: ['Cloud (AWS', 'Azure', 'GCP)', 'SAAS', 'Sales', 'US Market']
  },
  {
    id: "2025-064",
    title: `Inside Sales - India Market`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `Creating and maintaining a list/database of prospects`,
    requirements: ['Cloud (AWS', 'Azure', 'GCP)', 'SAAS', 'Sales', 'India Market']
  },
  {
    id: "2025-066",
    title: `SAP CPI`,
    department: `Not Specified`,
    location: `Hyderabad`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Integration exposure with extensive SAP CPI interface development.`,
    requirements: ['SAP CPI']
  },
  {
    id: "2025-067",
    title: `IDMC Admin Role`,
    department: `Not Specified`,
    location: `Hyderabad`,
    type: "full-time",
    experience: `7+ Years`,
    postedDate: `May 30, 2025`,
    description: `Install, configure, and maintain the IDMC platform.`,
    requirements: ['IDMC Admin']
  },
  {
    id: "2025-069",
    title: `SAP SD`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `7+ Years`,
    postedDate: `May 30, 2025`,
    description: `S4 Hana Hands on Experience is mandatory.`,
    requirements: ['SAP SD']
  },
  {
    id: "2025-070",
    title: `BT/BLE FW/Host development`,
    department: `Not Specified`,
    location: `Pune`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `5+ years of experience on BT/BLE FW/Host development activity.`,
    requirements: ['BT/BLE FW/Host development']
  },
  {
    id: "2025-071",
    title: `Full Stack Developer`,
    department: `Not Specified`,
    location: `Pune`,
    type: "full-time",
    experience: `12+ Years`,
    postedDate: `May 30, 2025`,
    description: `Must Have: Java and React.js, front-end technologies (HTML, CSS, JavaScript), RESTful APIs and web services, Spring Framework and Spring Boot , Redux or other state management libraries , CI/CD pipelines and tools , testing frameworks (e.g., Jest, Mocha).`,
    requirements: ['Java & React']
  },
  {
    id: "2025-072",
    title: `SAP MM Consultant`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `SAP MM development, roles and responsibilities encompass configuring and customizing the Materials Management module, managing procurement and inventory, providing end-user support, and participating in system upgrades and enhancements to optimize material management Process.`,
    requirements: ['SAP MM', 'S/4 HANA']
  },
  {
    id: "2025-073",
    title: `SAP S/4 HANA Controlling`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `8+ Years`,
    postedDate: `May 30, 2025`,
    description: `Deep expertise on SAP S4 HANA CO application functionality, design and implementation. `,
    requirements: ['SAP S/4 HANA', 'CO PA']
  },
  {
    id: "2025-074",
    title: `Cyber Security Admin`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `2+ Years`,
    postedDate: `May 30, 2025`,
    description: `Manage network and system activity for unusual behaviour or security breaches.`,
    requirements: ['Cyber Security Admin']
  },
  {
    id: "2025-075",
    title: `GCP Data Engineer`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Lead the lift and refactor efforts for full data migration. Drive business adoption of the new GCP platform. Oversee the decommissioning of Teradata and related technologies. Collaborate with technical leads, program managers, and other stakeholders to execute the migration plan within an Agile framework. Qualifications: Hands-on experience with GCP services, data pipelines, BigQuery, SQL, and Python. Proven ability to manage technical and process-related requests to maintain project timelines. Strong collaboration and communication skills`,
    requirements: ['GCP', 'Python', 'Big Query', 'Kubernetes', 'SQL']
  },
  {
    id: "2025-076",
    title: `Automation Engineer`,
    department: `Not Specified`,
    location: `Hyderabad, Pune`,
    type: "full-time",
    experience: `8+ Years`,
    postedDate: `May 30, 2025`,
    description: `Automation testing using QTP (UFT) and Selenium (WebDriver), BDD,CUCUMBER,MAVEN.`,
    requirements: ['Automation testing using QTP (UFT) and Selenium (WebDriver)', 'BDD', 'CUCUMBER', 'MAVEN.']
  },
  {
    id: "2025-077",
    title: `Data Architect`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `8+ Years`,
    postedDate: `May 30, 2025`,
    description: `Designing end-to-end SAP integration architectures, including systems like SAP BW, SAP S/4HANA, SAP PaPM , SAC and third-party applications.`,
    requirements: ['SAP BW', 'S/4 HANA', 'PAPM']
  },
  {
    id: "2025-078",
    title: ` Senior SAP Development Consultant`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `8+ Years`,
    postedDate: `May 30, 2025`,
    description: `Designing end-to-end SAP integration architectures, including systems like SAP BW, SAP S/4HANA, SAP PaPM , SAC and third-party applications.`,
    requirements: ['SAP ABAP', 'S/4 HANA', 'RAP', 'CAP', 'BRF']
  },
  {
    id: "2025-079",
    title: `Business Analyst`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `5-7 Years`,
    postedDate: `May 30, 2025`,
    description: `Collaborate with cross-functional teams (PMs, Architects, Engineers, Designers) to define scope, solutions, and risks`,
    requirements: ['Business Analyst', 'Agile', 'Confluence', 'JIRA']
  },
  {
    id: "2025-080",
    title: `Manager Sales - North`,
    department: `Not Specified`,
    location: `Anywhere in North India`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop and execute a go-to-market (GTM) strategy to grow the CMS business.`,
    requirements: ['Sales', 'Market Expansion', 'Relationship Building']
  },
  {
    id: "2025-081",
    title: `Manager Sales - Mumbai`,
    department: `Not Specified`,
    location: `Mumbai`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `Develop and execute a go-to-market (GTM) strategy to grow the CMS business.`,
    requirements: ['Sales', 'Market Expansion', 'Relationship Building']
  },
  {
    id: "2025-083",
    title: `IT Systems Administrator`,
    department: `Not Specified`,
    location: `Chennai`,
    type: "full-time",
    experience: `2-10 Years`,
    postedDate: `May 30, 2025`,
    description: `PowerShell Scripting: Develop automation scripts for system management, deployment tasks, and operational efficiencies.`,
    requirements: ['PSADT', 'SCCM/MCEM', 'MSI', 'Active Directory', 'Windows Server 2022/2019']
  },
  {
    id: "2025-084",
    title: `IT Systems Administrator`,
    department: `Not Specified`,
    location: `Pune`,
    type: "full-time",
    experience: `5-12 Years`,
    postedDate: `May 30, 2025`,
    description: `PowerShell Scripting: Develop automation scripts for system management, deployment tasks, and operational efficiencies.`,
    requirements: ['PSADT', 'SCCM/MCEM', 'MSI', 'Active Directory', 'Windows Server 2022/2019']
  },
  {
    id: "2025-087",
    title: ` Senior SAP PP Consultant`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `7+ Years`,
    postedDate: `May 30, 2025`,
    description: `PP/MM functional consultant with minimum 8- 9 years of work experience in multiple implementations, Production Support and Enhancement projects for Manufacturing, Automotive and other Discrete/Repetitive Production Industries. `,
    requirements: ['SAP PP/ Logistics Functional']
  },
  {
    id: "2025-088",
    title: ` Full stack Developer`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `Candidate will be responsible for developing new features within the application, which includes end-to-end code implementation. He / She should involve in deployment, release activity, and contribute some effort for production related issues. `,
    requirements: ['Frameworks like Angular (v8-14)', 'HTML', 'CSS', 'JavaScript\nBackend Technology:  Strong JAVA programming (preferred JDK 8 or later) with Spring framework']
  },
  {
    id: "2025-089",
    title: `AWS Data Engineer`,
    department: `Not Specified`,
    location: `Bangalore, Hyderabad, Mumbai, Pune, Kolkata, Chennai`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Hands-on experience with AWS services including S3, Lambda,Glue, API Gateway, and SQS. `,
    requirements: ['AWS services including S3', 'Lambda', 'Glue', 'API Gateway', 'and SQS']
  },
  {
    id: "2025-090",
    title: `Azure Data bricks`,
    department: `Not Specified`,
    location: `Bangalore, Hyderabad, Mumbai, Pune, Kolkata, Chennai`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `As a Azure Databricks Data engineer, you will lead and implement advanced data analytics and engineering solutions using Databricks on Azure. This role requires a deep understanding of big data technologies, cloud services, and data architecture strategies. You will be instrumental in transforming data into actionable insights that drive business decisions. `,
    requirements: ['Databricks', 'Azure']
  },
  {
    id: "2025-091",
    title: `AI & Data Testing`,
    department: `Not Specified`,
    location: `Bangalore, Hyderabad, Mumbai, Pune, Kolkata, Chennai`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `An ETL Tester is responsible for testing and validating the accuracy and completeness of data being extracted, transformed, and loaded (ETL) from various sources into the target systems. These target systems can be On Cloud or on Premise `,
    requirements: ['ETL and BI']
  },
  {
    id: "2025-092",
    title: `Appian Developer`,
    department: `Not Specified`,
    location: `Hyderabad`,
    type: "full-time",
    experience: `4+ Years`,
    postedDate: `May 30, 2025`,
    description: `4+ years of relevant Appian development/design experience `,
    requirements: ['Appian', 'L1& L2 Certification']
  },
  {
    id: "2025-093",
    title: `Azure DevOps`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Design, implement, and manage Azure DevOps pipelines optimized for deploying and managing applications on Azure PaaS services (e.g., Azure App Service, Azure Functions, Azure Container Apps, Azure SQL Database, Azure Cosmos DB).`,
    requirements: ['Azure', 'DevOps Kubernetes']
  },
  {
    id: "2025-094",
    title: `Senior Backend Developer`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `6+ years of experience `,
    requirements: ['Java', 'Spring Boot', 'object databases', 'ElasticSearch/Solr']
  },
  {
    id: "2025-095",
    title: `Senior Frontend Developer`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `6+ years of experience `,
    requirements: ['TypeScript', 'JavaScript', 'Stencil.js', 'Svelte', 'CSS', 'and HTML']
  },
  {
    id: "2025-096",
    title: `Senior QA Engineer`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `6+ Years`,
    postedDate: `May 30, 2025`,
    description: `Requirements: `,
    requirements: ['Manual and automated testing methodologies']
  },
  {
    id: "2025-097",
    title: `Middleware expert`,
    department: `Not Specified`,
    location: `PAN India`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `Responsibilities: `,
    requirements: ['GCAI', 'ETL', 'royalty calculation engine (Prime and SAP)']
  },
  {
    id: "2025-098",
    title: `Pyspark Developer`,
    department: `Not Specified`,
    location: `PAN India`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Required Skills  `,
    requirements: ['Big Data systems using PySpark', 'database migration']
  },
  {
    id: "2025-099",
    title: `Looker Developer`,
    department: `Not Specified`,
    location: `Bangalore, Hyderabad`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `1. Design and develop LookML data models with advanced proficiency `,
    requirements: ['Looker', 'Lookml']
  },
  {
    id: "2025-100",
    title: `SAP ABAP Developer`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `8+ Years`,
    postedDate: `May 30, 2025`,
    description: `Individual is responsible in maintaining the quality of S/4HANA solution across landscape, Review of the Technical design for WRICEFs by the Implementation Team and ensure best practices for development are followed and are aligned latest SAP recommendations for S/4HANA Implementations.  `,
    requirements: ['SAP ABAP']
  },
  {
    id: "2025-101",
    title: `Java Backend`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Must have Skills: `,
    requirements: ['Spring boot and Microservices']
  },
  {
    id: "2025-102",
    title: `Full stack developer`,
    department: `Not Specified`,
    location: `Gurgaon`,
    type: "full-time",
    experience: `4+ Years`,
    postedDate: `May 30, 2025`,
    description: `Strong coding aptitude with 4-6 years of full-stack development experience. `,
    requirements: ['Javascript', 'Node', 'React']
  },
  {
    id: "2025-103",
    title: `ENTRAI ID `,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Technologies: `,
    requirements: ['ENTRAI ID']
  },
  {
    id: "2025-104",
    title: `Software Engineer `,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Key Responsibilities: `,
    requirements: ['PLSQL', 'Java', 'C']
  },
  {
    id: "2025-105",
    title: `Specialist - Oracle EBS `,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `Primary Skills `,
    requirements: ['Oracle EBS']
  },
  {
    id: "2025-106",
    title: `SAP Architect`,
    department: `Not Specified`,
    location: `Chennai, Pune, Bangalore, Hyderabad, Chandigarh, Gurgaon, Kolkata`,
    type: "full-time",
    experience: `10+ Years`,
    postedDate: `May 30, 2025`,
    description: `Integration Strategy & Roadmap: `,
    requirements: ['SAP BTP', 'PI', 'CPI']
  },
  {
    id: "2025-107",
    title: `Big Data Developer`,
    department: `Not Specified`,
    location: `PAN India`,
    type: "full-time",
    experience: `8+ Years`,
    postedDate: `May 30, 2025`,
    description: `Must Have:- `,
    requirements: ['Spark', 'Scala', 'and Big Data']
  },
  {
    id: "2025-108",
    title: `Python Developer`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `4+ Years`,
    postedDate: `May 30, 2025`,
    description: `Must-Have Skills:`,
    requirements: ['SQl & Minimal Viz basic']
  },
  {
    id: "2025-109",
    title: `QA`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `4-7 Years`,
    postedDate: `May 30, 2025`,
    description: `Strong Quality Assurance Background, with knowledge of QA techniques and tools. `,
    requirements: ['Automation testing using QTP (UFT) and Selenium (WebDriver)', 'BDD', 'CUCUMBER', 'MAVEN.']
  },
  {
    id: "2025-110",
    title: `BE - Salesforce Developer`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5-7 Years`,
    postedDate: `May 30, 2025`,
    description: `Design and develop customized solutions within the Salesforce platform using Apex, Visualforce, Lightning Web Components (LWC), and other Salesforce tools. `,
    requirements: ['Salesforce', 'LWC', 'Apex', 'Visualforce']
  },
  {
    id: "2025-111",
    title: `Full Satck - Web Developer`,
    department: `Not Specified`,
    location: `Bangalore`,
    type: "full-time",
    experience: `5-7 Years`,
    postedDate: `May 30, 2025`,
    description: `5-7yr of experience in full-stack development for building web applications. `,
    requirements: ['Typesript', 'Js', 'React', 'Nodejs', 'cloud', 'digital marketing domain.']
  },
  {
    id: "2025-112",
    title: `Mobile Automation tester`,
    department: `Not Specified`,
    location: `Chennai, Pune, Bangalore, Hyderabad, Chandigarh, Gurgaon, Kolkata`,
    type: "full-time",
    experience: `5+ Years`,
    postedDate: `May 30, 2025`,
    description: `Mandatory Skills:`,
    requirements: ['Mobile Automation testing using Appium/Perfecto(IOS and Android)', 'AEM', 'Selenium/Java', 'API']
  }

];

const InternalJobs = () => {
  // Filter jobs by type
  const fullTimeJobs = jobs.filter(job => job.type === 'full-time');
  const partTimeJobs = jobs.filter(job => job.type === 'part-time');
  const contractJobs = jobs.filter(job => job.type === 'contract');
  
  // Featured jobs
  const featuredJobs = jobs.filter(job => job.featured);

  return (
 
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Internal Job Openings</h1>
          <p className="text-muted-foreground">Explore career opportunities within SecureKloud</p>
        </div>
        
       {/* <Card>
          <CardHeader>
            <CardTitle>Search Jobs</CardTitle>
            <CardDescription>Find your next opportunity at SecureKloud</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Job title or keyword" className="pl-8" />
              </div>
              <div className="relative">
                <Building className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="text" placeholder="Department" className="pl-8" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="text" placeholder="Location" className="pl-8" />
              </div>
            </div>
            <div className="flex justify-between">
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search Jobs
              </Button>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>*/}
        
        {featuredJobs.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-securekloud-100 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-securekloud-700" />
              </div>
              <h2 className="text-2xl font-bold">Featured Opportunities</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {featuredJobs.map(job => (
                <JobCard key={job.id} job={job} featured />
              ))}
            </div>
          </div>
        )}
        
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4 max-w-[600px]">
            <TabsTrigger value="all">All Jobs</TabsTrigger>
            <TabsTrigger value="full-time">Full-Time</TabsTrigger>
            <TabsTrigger value="part-time">Part-Time</TabsTrigger>
            <TabsTrigger value="contract">Contract</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="space-y-6">
              {jobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="full-time" className="mt-6">
            <div className="space-y-6">
              {fullTimeJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="part-time" className="mt-6">
            <div className="space-y-6">
              {partTimeJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="contract" className="mt-6">
            <div className="space-y-6">
              {contractJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-securekloud-100 flex items-center justify-center">
                <Mail className="h-5 w-5 text-securekloud-700" />
              </div>
              <div>
                <CardTitle>Job Alerts</CardTitle>
                <CardDescription>Get notified about new opportunities</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative md:col-span-2">
                <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="email" placeholder="Your email address" className="pl-8" />
              </div>
              <Button className="w-full">Subscribe to Job Alerts</Button>
            </div>
            <p className="text-sm text-muted-foreground">
              You'll receive notifications about new job openings that match your interest. You can unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
       
  );
};

interface JobCardProps {
  job: Job;
  featured?: boolean;
}

const JobCard = ({ job, featured }: JobCardProps) => {
  // Determine badge color based on job type
  const getTypeBadgeVariant = (type: string) => {
    switch(type) {
      case 'full-time': return "bg-green-100 text-green-800 hover:bg-green-200";
      case 'part-time': return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case 'contract': return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      default: return "";
    }
  };
  
  return (
    <Card className={featured ? "border-securekloud-200 bg-securekloud-50/50" : ""}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{job.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <Building className="h-4 w-4 mr-1" /> 
              {job.department}
            </CardDescription>
          </div>
          <Badge className={getTypeBadgeVariant(job.type)}>
            {job.type === 'full-time' ? 'Full-Time' : 
              job.type === 'part-time' ? 'Part-Time' : 'Contract'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {job.experience} experience
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            Posted: {job.postedDate}
          </div>
        </div>
        
        <p className="text-sm">{job.description}</p>
        
        <div>
          <h4 className="font-medium mb-2">Requirements:</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-2">
          <Button>View Job Details</Button>
          <Button variant="outline">Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InternalJobs;
