import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const HR = () => {
  const [showPayrollModal, setShowPayrollModal] = useState(false);
  const [showBenefitsModal, setShowBenefitsModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [activeTab, setActiveTab] = useState("resources");
  const [activeFormTab, setActiveFormTab] = useState("onboarding");
   const fileMap = {
    "Access Request Form": "Access_Request_Form.pdf",
    "Employee Information Form": "Employee_Information_Form.pdf",
    "Form11": "Form11.pdf",
    "Gratuity Nomination Form": "Gratuity_Nomination_Form.pdf",
    "Insurance Enrolment Form": "Insurance_Enrolment_Form.pdf",
    "Letter of Undertaking_Onboarding": "Letter_of_Undertaking_Onboarding.pdf",

    "Candidate Information form_BGV": "Candidate_Information_form_BGV.pdf",
    "Letter of Authorization_BGV": "Letter_of_Authorization_BGV.pdf",

    "Nomination Form - Associate of the Year": "Nomination_Associate_Year.pdf",
    "Nomination Form - Star of the Quarter": "Nomination_Star_Quarter.pdf",
    "Nomination Form - Team of the Quarter": "Nomination_Team_Quarter.pdf",
    "Nomination Form - Team of the Year": "Nomination_Team_Year.pdf",

    "Associate Clearance Form": "Associate_Clearance_Form.pdf",
    "Exit Interview Template": "Exit_Interview_Template.pdf",
    "Gratuity Declaration Form": "Gratuity_Declaration_Form.pdf",
    "Leave Encashment Declaration Form": "Leave_Encashment_Declaration_Form.pdf",
    "Letter of Undertaking": "Letter_of_Undertaking.pdf",

    "Contract Invoice Template ": "Contract_Invoice_Template.pdf",
    "Contract Timesheet Template": "Contract_Timesheet_Template.pdf",
    "Expense Reimbursement Form 3": "Expense_Reimbursement_Form_3.pdf",
    "Induction Feedback Form": "Induction_Feedback_Form.pdf",
    "Intern to Onroll Movement Template": "Intern_to_Onroll_Template.pdf",
    "PIP Letter Template 2": "PIP_Letter_Template_2.pdf",
  };


  const team = [
    {
      name: "Sivakumar Natarajan",
      role: "Head - People & Culture",
      email: "siva.kumar@securekloud.com",
      phone: "9940103400",
    },
    {
      name: "Cynthia V",
      role: "Manager - H.R.",
      email: "cynthia.v@securekloud.com",
      phone: "9841550407",
    },
    {
      name: "Ezhilarasi S",
      role: "Lead - H.R.",
      email: "ezhilarasi.sekar@securekloud.com",
      phone: "8610841056",
    },
  ];
  const [docToView, setDocToView] = useState(null);
const [showDocModal, setShowDocModal] = useState(false);

const handleView = (formName) => {
  const fileName = fileMap[formName];
  if (fileName) {
    setDocToView(`/files/${fileName}`);
    setShowDocModal(true);
  } else {
    alert("File not found for: " + formName);
  }
};

const handleDownload = (formName) => {
  const fileName = fileMap[formName];
  if (fileName) {
    const link = document.createElement("a");
    link.href = `/files/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert("File not found for: " + formName);
  }
};


  const renderBGVSubTabs = () => (
    <div className="pt-6">
      <div className="flex flex-col gap-6">
        {[
          "Candidate Information form_BGV",
          "Letter of Authorization_BGV",
        ].map((formName) => (
          <div key={formName} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p className="text-sm">{formName}</p>
            <div className="flex gap-2">
              <Button onClick={() => handleView(formName)}>View</Button>
              <Button variant="outline" onClick={() => handleDownload(formName)}>Download</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFormTabs = () => (
    <Tabs value={activeFormTab} onValueChange={setActiveFormTab} className="mt-6">
      <TabsList className="grid w-full sm:w-[600px] grid-cols-5">
        <TabsTrigger value="onboarding">On board Forms</TabsTrigger>
        <TabsTrigger value="bgv">BGV Forms</TabsTrigger>
        <TabsTrigger value="rewards">Rewards & Recognition</TabsTrigger>
        <TabsTrigger value="others">Others</TabsTrigger>
        <TabsTrigger value="separation">Separation</TabsTrigger>
      </TabsList>
      <TabsContent value="onboarding" className="pt-6">
        <div className="flex flex-col gap-6">
          {[
            "Access Request Form",
            "Employee Information Form",
            "Form11",
            "Gratuity Nomination Form",
            "Insurance Enrolment Form",
            "Letter of Undertaking_Onboarding",
          ].map((formName) => (
            <div key={formName} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <p className="text-sm">{formName}</p>
              <div className="flex gap-2">
                <Button onClick={() => handleView(formName)}>View</Button>
                <Button variant="outline" onClick={() => handleDownload(formName)}>Download</Button>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="bgv">{renderBGVSubTabs()}</TabsContent>
      <TabsContent value="rewards" className="pt-6">
        <div className="flex flex-col gap-6">
          {[
            "Nomination Form - Associate of the Year",
            "Nomination Form - Star of the Quarter",
            "Nomination Form - Team of the Quarter",
            "Nomination Form - Team of the Year",
           
          ].map((formName) => (
            <div key={formName} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <p className="text-sm">{formName}</p>
              <div className="flex gap-2">
                <Button onClick={() => handleView(formName)}>View</Button>
                <Button variant="outline" onClick={() => handleDownload(formName)}>Download</Button>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="others" className="pt-6">
        <div className="flex flex-col gap-6">
          {[
            "Contract Invoice Template ",
            "Contract Timesheet Template",
            "Expense Reimbursement Form 3",
            "Induction Feedback Form",
            "Intern to Onroll Movement Template",
            "PIP Letter Template 2",
          ].map((formName) => (
            <div key={formName} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <p className="text-sm">{formName}</p>
              <div className="flex gap-2">
                <Button onClick={() => handleView(formName)}>View</Button>
                <Button variant="outline" onClick={() => handleDownload(formName)}>Download</Button>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="separation" className="pt-6">
        <div className="flex flex-col gap-6">
          {[
            "Associate Clearance Form",
            "Exit Interview Template",
            "Gratuity Declaration Form",
            "Leave Encashment Declaration Form",
            "Letter of Undertaking",
            
          ].map((formName) => (
            <div key={formName} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <p className="text-sm">{formName}</p>
              <div className="flex gap-2">
                <Button onClick={() => handleView(formName)}>View</Button>
                <Button variant="outline" onClick={() => handleDownload(formName)}>Download</Button>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-skcloud-dark-purple">Human Resources</h1>
        <p className="text-muted-foreground mt-1">Access HR resources, tools, and information</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full sm:w-[600px] grid-cols-3">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="team">HR Team</TabsTrigger>
          <TabsTrigger value="forms">HR Forms</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Employee Handbook",
                description: "Company policies and procedures",
                content: "Access the latest employee handbook containing all company policies, procedures, and guidelines.",
              },
              {
                title: "Benefits Information",
                description: "Health, retirement, and more",
                content: "Learn about your benefits package, including health insurance, retirement plans, and additional perks.",
              },
              {
                title: "Leave Management",
                description: "Request and track time off",
                content: "Submit leave requests, view your balance, and track approval status for time off.",
              },
              {
                title: "Payroll Information",
                description: "Pay slips and tax documents",
                content: "Access your pay slips, tax documents, and manage your payment details.",
              },
              {
                title: "Employee Directory",
                description: "Find and connect with colleagues",
                content: "Search for employees, view contact information, and organization structure.",
              },
            ].map((card, i) => (
              <Card key={i} className="sk-card">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{card.content}</p>
                  <Button
                    variant="outline"
                    className="w-full border-skcloud-purple text-skcloud-purple hover:bg-skcloud-purple hover:text-white"
                    onClick={() => {
                      if (card.title === "Payroll Information") {
                        setShowPayrollModal(true);
                      } else if (card.title === "Benefits Information") {
                        setShowBenefitsModal(true);
                      } else if (card.title === "Leave Management") {
                        setShowLeaveModal(true);
                      }
                    }}
                  >
                    View {card.title.split(" ")[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="team" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <Card key={idx} className="sk-card">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-skcloud-purple/20 mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-skcloud-purple">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <CardTitle className="text-center mt-3">{member.name}</CardTitle>
                  <CardDescription className="text-center">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm mb-2">Email: {member.email}</p>
                  <p className="text-sm">Phone: {member.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="forms" className="mt-6">
          {renderFormTabs()}
        </TabsContent>
      </Tabs>

      {/* Payroll Modal */}
      <Dialog open={showPayrollModal} onOpenChange={setShowPayrollModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payroll Information</DialogTitle>
            <DialogDescription>
              <ul className="list-disc space-y-2 pl-5 mt-4 text-sm text-left text-muted-foreground">
                <li>The payroll cycle for a month is 21st of previous month to the 20th of the current month.</li>
                <li>Associates must apply for Leaves, Compensatory Leave and On Duty in ADP by 20th.</li>
                <li>Manager approvals are required by the 20th; else system auto-approves.</li>
                <li>Timesheets validated by managers and department heads are essential for allowance claims.</li>
                <li>Late inputs after the 20th won’t be processed for payroll.</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Benefits Modal */}
      {/* Benefits Modal */}
<Dialog open={showBenefitsModal} onOpenChange={setShowBenefitsModal}>
  <DialogContent className="max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle>Benefits Information</DialogTitle>
      <DialogDescription className="text-left text-sm space-y-6 mt-4 text-muted-foreground">

        <div>
          <h2 className="font-semibold text-base">Group Mediclaim Insurance (Oct-24 to Oct-25)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Name of the Insurer:</strong> Bajaj Allianz General Insurance Co Ltd</li>
            <li><strong>Name of the Broker:</strong> Spot Solutions</li>
            <li><strong>Emergency Contact:</strong> Ms. Dhanalakshmi – 9710444021</li>
            <li><strong>Coverage:</strong> ₹2 Lakhs (1+5 – Employee, Spouse, 2 Kids & Parents/In-Laws)</li>
            <li><strong>Newly married spouse / new born:</strong> Add within 30 days</li>
            <li><strong>Co-Payment:</strong> No Co-pay</li>
            <li><strong>Pre-Existing Disease:</strong> Covered</li>
            <li><strong>Maternity:</strong> Covered up to ₹50,000</li>
            <li><strong>New born baby:</strong> Covered up to floater Sum Insured</li>
            <li><strong>Pre-Hospitalization:</strong> 30 Days</li>
            <li><strong>Post-Hospitalization:</strong> 60 Days</li>
            <li><strong>Room Rent:</strong> ₹12,000/day for ICU</li>
            <li><strong>Ambulance:</strong> ₹2,000 per hospitalization</li>
            <li><strong>Claim Intimation:</strong> Within 24 hrs via email</li>
            <li><strong>Claim Submission:</strong> Within 15 days</li>
            <li><strong>Chemotherapy:</strong> Covered</li>
            <li><strong>Oral Chemotherapy:</strong> Not covered</li>
            <li><strong>AYUSH:</strong> Covered in govt. hospitals up to ₹25,000 (max 25% SI)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base">Group Personal Accident Insurance (Nov-24 to Nov-25)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Insurer:</strong> ICICI Lombard</li>
            <li><strong>Broker:</strong> E-Medlife Insurance Broking</li>
            <li><strong>Emergency Contact:</strong> Mr. Siva Raman - 9840088954, Ms. Srividhya - 9840001568</li>
            <li><strong>Sum Insured:</strong> 5x Annual Fixed CTC</li>
            <li><strong>Coverage:</strong> Total/Partial/Temporary Disablement, Death Cover</li>
            <li><strong>Weekly Compensation:</strong> 1% of CSI up to 104 weeks (max ₹5,000/week)</li>
            <li><strong>Accident Medical Expenses:</strong> 40% of claim or 10% SI or actual (whichever is less)</li>
            <li><strong>Ambulance Charges:</strong> ₹2,000</li>
            <li><strong>Education Funds:</strong> ₹10,000 per child (max 2, up to 25 years)</li>
            <li><strong>Repatriation:</strong> ₹10,000 or actual</li>
            <li><strong>Dead Body Carriage:</strong> 2% of SI or max ₹2,500</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base">Certification Reimbursement</h2>
          <p>
            Certification costs are reimbursed upon prior approval from both SBU Head and HR Head. Associates must email the certificate, invoice, and reimbursement form after completing the course. Team HR and People & Culture Head will review and forward approval to Team Accounts. Reimbursement is credited post-approval.
          </p>
          <p>
            <strong>Note:</strong> Employee must serve at least 1 year after claiming reimbursement, else amount is recovered from F&F.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base">Working in Night Shift / On-call Support</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Night Shift Allowance:</strong> ₹300/night for working between 9:00 PM to 7:00 AM (not for regular night shift roles)</li>
            <li><strong>On-call Support:</strong> ₹300/day beyond normal hours</li>
            <li>Manager must submit validated data to <a href="mailto:hr@securekloud.com" className="underline">hr@securekloud.com</a> by 20th of each month</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base">Local Travel</h2>
          <p>
            Business travel expenses reimbursed upon prior approval. Submit expense form with bills to Team Accounts after Manager/Dept. Head approval.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>₹8/km for two-wheelers</li>
            <li>₹12/km for four-wheelers</li>
            <li>Reimbursement within 2 weeks of claim submission</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base">Team Outing Allowance</h2>
          <p>
            ₹1,500 is allowed twice a year for organized team lunches/dinners. Expenses must be pre-approved and follow reimbursement procedures.
          </p>
        </div>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

      {/* Leave Modal */}
      {/* Leave Modal */}
<Dialog open={showLeaveModal} onOpenChange={setShowLeaveModal}>
  <DialogContent className="max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle>Leave Management</DialogTitle>
      <DialogDescription className="text-left mt-4 space-y-6 text-muted-foreground text-sm">
        <div>
          <h2 className="font-semibold mb-1">Sick and Casual Leave</h2>
          <p><strong>Applicability:</strong> To all employees</p>
          <p><strong>Eligibility:</strong> 24 working days</p>
          <p><strong>Remarks:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>No carry forward for next year</li>
            <li>No encashment</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-1">Earned / Privilege Leave</h2>
          <p><strong>Applicability:</strong> To all confirmed employees</p>
          <p><strong>Eligibility:</strong> 12 working days</p>
          <p><strong>Remarks:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Can carry forward maximum 45 days</li>
            <li>Encashment at the time of relieving</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-1">Maternity Leave</h2>
          <p><strong>Applicability:</strong> Female employees who have worked for 80 days</p>
          <p><strong>Eligibility:</strong> 26 weeks (including all weekends and holidays)</p>
          <p><strong>Remarks:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Leave has to be availed 1 month before expected delivery</li>
            <li>6 weeks of miscarriage leave in lieu of maternity leave</li>
            <li>Only for first 2 deliveries</li>
            <li>No carry forward or encashed</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-1">Paternity Leave</h2>
          <p><strong>Applicability:</strong> Male employees who have worked for 80 days post confirmation</p>
          <p><strong>Eligibility:</strong> 5 working days</p>
          <p><strong>Remarks:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Only for first 2 children</li>
            <li>No carry forward or encashed</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-1">Marriage Leave</h2>
          <p><strong>Applicability:</strong> To all confirmed employees</p>
          <p><strong>Eligibility:</strong> 5 working days</p>
          <p><strong>Remarks:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Only for the first marriage</li>
            <li>Once in the lifetime of the employee</li>
            <li>No carry forward or encashed</li>
          </ul>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

      {/* Document View Modal */}
{/* Document View Modal */}
<Dialog open={showDocModal} onOpenChange={setShowDocModal}>
  <DialogContent className="max-w-5xl h-[90vh] p-0 overflow-hidden">
    <DialogHeader className="px-4 pt-4 pb-2">
      <DialogTitle>Document Preview</DialogTitle>
    </DialogHeader>
    {docToView ? (
      <iframe
        src={`${docToView}#toolbar=1&navpanes=0&view=fitH`}
        title="Document Viewer"
        className="w-full h-[90vh]"
      />
    ) : (
      <p className="text-sm text-muted-foreground">No document selected</p>
    )}
  </DialogContent>
</Dialog>

    </div>
  );
};

export default HR;