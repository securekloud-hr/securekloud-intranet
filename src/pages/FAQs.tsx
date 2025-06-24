
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { HelpCircle, Search, Users, FileText, Mail, Lock, Globe } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'hr' | 'it' | 'general' | 'security' | 'benefits';
}

const faqs: FAQ[] = [
  {
    id: "1",
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. Follow the instructions sent to your email to create a new password.",
    category: "it"
  },
  {
    id: "2",
    question: "How do I request time off?",
    answer: "Time off requests can be submitted through the HR Portal. Navigate to the 'Time Off' section and click 'New Request'. Fill out the required information and submit for approval.",
    category: "hr"
  },
  {
    id: "3",
    question: "Where can I find company holidays?",
    answer: "Company holidays are listed on the Holidays page of the intranet. You can access this from the main navigation menu or through the Quick Links section on the dashboard.",
    category: "general"
  },
  {
    id: "4",
    question: "How do I report a security incident?",
    answer: "Security incidents should be reported immediately to the IT Security team. You can do this by emailing security@securekloud.com or by calling the IT help desk at extension 1234.",
    category: "security"
  },
  {
    id: "5",
    question: "How do I enroll in benefits?",
    answer: "Benefit enrollment is handled through the HR Portal. Navigate to the 'Benefits' section to view your options and make selections during the open enrollment period or when you experience a qualifying life event.",
    category: "benefits"
  },
  {
    id: "6",
    question: "How do I access company email from my personal device?",
    answer: "You can access company email from your personal device using the Outlook mobile app or through the web browser at mail.securekloud.com. Multi-factor authentication is required for security purposes.",
    category: "it"
  },
  {
    id: "7",
    question: "Where can I find information about training opportunities?",
    answer: "Training opportunities are available on the Learning & Development page. You can browse available courses, register for upcoming training sessions, and access online learning resources.",
    category: "hr"
  },
  {
    id: "8",
    question: "How do I update my personal information?",
    answer: "You can update your personal information through the HR Portal. Navigate to the 'My Profile' section to make changes to your contact information, emergency contacts, and other personal details.",
    category: "hr"
  },
  {
    id: "9",
    question: "What should I do if I lose my company laptop or mobile device?",
    answer: "If you lose a company device, report it immediately to the IT Security team at security@securekloud.com or by calling the IT help desk at extension 1234. Provide details about when and where the device was lost or stolen.",
    category: "security"
  },
  {
    id: "10",
    question: "How do I access the VPN?",
    answer: "To access the VPN, use the SecureConnect application installed on your company device. Enter your company credentials and follow the two-factor authentication prompts. For issues, contact the IT help desk.",
    category: "it"
  }
];

const FAQs = () => {
  // Filter FAQs by category
  const hrFaqs = faqs.filter(faq => faq.category === 'hr');
  const itFaqs = faqs.filter(faq => faq.category === 'it');
  const securityFaqs = faqs.filter(faq => faq.category === 'security');
  const benefitsFaqs = faqs.filter(faq => faq.category === 'benefits');
  const generalFaqs = faqs.filter(faq => faq.category === 'general');

  return (
    
      <div className="space-y-8">
        {/*<div>
          <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">Find answers to common questions about working at SecureKloud</p>
        </div>*/}
        
       {/* <Card>
          <CardHeader>
            <CardTitle>Search FAQs</CardTitle>
            <CardDescription>Find answers quickly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search frequently asked questions..." className="pl-8" />
            </div>
          </CardContent>
        </Card>*/}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/*<Card className="col-span-1 md:col-span-3">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-securekloud-100 flex items-center justify-center">
                  <HelpCircle className="h-5 w-5 text-securekloud-700" />
                </div>
                <CardTitle>Popular Questions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.slice(0, 5).map((faq, index) => (
                  <AccordionItem key={faq.id} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>/*}
          
          {/*<Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-securekloud-100 flex items-center justify-center">
                  <Users className="h-4 w-4 text-securekloud-700" />
                </div>
                <CardTitle className="text-lg">HR & Benefits</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {[...hrFaqs, ...benefitsFaqs].slice(0, 3).map((faq, index) => (
                  <AccordionItem key={faq.id} value={`hr-${index}`}>
                    <AccordionTrigger className="text-left text-sm">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Button variant="link" className="px-0 mt-2">View all HR FAQs</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-securekloud-100 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-securekloud-700" />
                </div>
                <CardTitle className="text-lg">IT Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {itFaqs.slice(0, 3).map((faq, index) => (
                  <AccordionItem key={faq.id} value={`it-${index}`}>
                    <AccordionTrigger className="text-left text-sm">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Button variant="link" className="px-0 mt-2">View all IT FAQs</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-securekloud-100 flex items-center justify-center">
                  <Lock className="h-4 w-4 text-securekloud-700" />
                </div>
                <CardTitle className="text-lg">Security</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {securityFaqs.slice(0, 3).map((faq, index) => (
                  <AccordionItem key={faq.id} value={`security-${index}`}>
                    <AccordionTrigger className="text-left text-sm">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Button variant="link" className="px-0 mt-2">View all Security FAQs</Button>
            </CardContent>
          </Card>*/}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Didn't find what you're looking for?</CardTitle>
            <CardDescription>Contact us for more help</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 text-center">
                <Mail className="h-8 w-8 mx-auto mb-2 text-securekloud-600" />
                <h3 className="font-medium mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Email our support team for assistance
                </p>
                <Button variant="outline" size="sm" className="w-full">Email Support</Button>
              </div>
              
              <div className="border rounded-lg p-4 text-center">
                <HelpCircle className="h-8 w-8 mx-auto mb-2 text-securekloud-600" />
                <h3 className="font-medium mb-2">Submit a Ticket</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Create a support ticket for tracking
                </p>
                <Button variant="outline" size="sm" className="w-full">Create Ticket</Button>
              </div>
              
              <div className="border rounded-lg p-4 text-center">
                <Globe className="h-8 w-8 mx-auto mb-2 text-securekloud-600" />
                <h3 className="font-medium mb-2">Knowledge Base</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse our detailed knowledge base
                </p>
                <Button variant="outline" size="sm" className="w-full">Browse Articles</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
   
  );
};

export default FAQs;
