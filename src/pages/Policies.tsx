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
import { Input } from "@/components/ui/input";
import {
Dialog,
DialogContent,
DialogHeader,
DialogTitle,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";

const Policies = () => {
const [searchTerm, setSearchTerm] = useState("");
const [docToView, setDocToView] = useState<string | null>(null);
const [showDocModal, setShowDocModal] = useState(false);

const policyCategories = [
{
name: "HR Policies",
policies: [
{
id: 1,
title: "Learning & Development Policy",
updated: "May 10, 2025",
pdfUrl: "/learning-development-policy-v3.pdf",
},
{
id: 2,
title: "Referral Policy & Process",
updated: "Apr 15, 2025",
pdfUrl: "/Referral-Policy-ProcessV2.0.pdf",
},
{
id: 3,
title: "Rewards & Recognition Policy & Process",
updated: "Mar 22, 2025",
pdfUrl: "/Rewards-Recognition-Policy-ProcessV1.0.pdf",
},
{
id: 4,
title: "Disciplinary & Whistleblower Policy",
updated: "Feb 05, 2025",
pdfUrl: "/Disciplinary-Whistleblower Policy.pdf",
},
{
id: 5,
title: "Recruitment Policy & Process",
updated: "May 10, 2025",
pdfUrl: "/Recruitment-Policy-ProcessV3.1.pdf",
},
{
id: 6,
title: "Leave Policy & Process",
updated: "Apr 15, 2025",
pdfUrl: "/Leave-Policy-ProcessV4.1.pdf",
},
{
id: 7,
title: "Performance Evaluation Policy & Process",
updated: "Mar 22, 2025",
pdfUrl: "/Performance-Evaluation-Policy-ProcessV2.0.pdf",
},
{
id: 8,
title: "Separation Policy & Process",
updated: "Feb 05, 2025",
pdfUrl: "/Separation-Policy-ProcessV4.0.pdf",
},
{
id: 9,
title: "Sexual Harrasment Prevention Policy & Process",
updated: "May 10, 2025",
pdfUrl: "/Sexual-Harrasment-Prevention-Policy-ProcessV3.3.pdf",
},
{
id: 10,
title: "Welfare Policy & Process",
updated: "Apr 15, 2025",
pdfUrl: "/Welfare-Policy -ProcessV2.0.pdf",
},
],
},
{
name: "IT Policies",
policies: [
{
id: 5,
title: "IT Tech Standard Operating Procedure SK",
updated: "Jun 01, 2025",
pdfUrl: "/IT_Tech_Standard_Operating_Procedure_SK.docx",
},
{
id: 6,
title: "SK Incident Management Procedure",
updated: "May 20, 2025",
pdfUrl: "/SK-Incident-Management-Procedure.docx",
},
{
id: 7,
title: "SK InfoSec Policy",
updated: "Apr 30, 2025",
pdfUrl: "/SK-InfoSec-Policy.docx",
},
],
},
/*finace */
{
name: "Admin Policies",
policies: [
{
id: 5,
title: "Domestic Travel Policy & Process",
updated: "Jun 01, 2025",
pdfUrl: "/Domestic-Travel-Policy&ProcessV0.1(1).pdf",
},
{
id: 10,
title: "Procurement Policy-Admin",
updated: "Apr 12, 2025",
pdfUrl: "/Vendor-Procurement-Policy-Admin.pdf",

},
{
id: 10,
title: "Procurement Policy-IT",
updated: "Apr 12, 2025",
pdfUrl: "/Vendor-Procurement-Policy-IT.pdf",

},


{
id: 6,
title: "Expense Reimbursement Form",
updated: "Jun 01, 2025",
pdfUrl: "/Expense-Reimbursement-Form-2.docx",
},
],
},
];

return (
<div className="space-y-6">
<div>
<h1 className="text-3xl font-bold text-skcloud-dark-purple">Company Policies</h1>
<p className="text-muted-foreground mt-1">
Access and review all current company policies
</p>
</div>

<div className="relative">
<Search className="absolute left-2 top-2.5 h-5 w-5 text-muted-foreground" />
<Input
placeholder="Search policies..."
className="pl-9 max-w-md"
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/>
</div>

<Tabs defaultValue={policyCategories[0].name.toLowerCase().replace(/\s+/g, "-")}>
<TabsList className="mb-4">
{policyCategories.map((category) => (
<TabsTrigger
key={category.name}
value={category.name.toLowerCase().replace(/\s+/g, "-")}
>
{category.name}
</TabsTrigger>
))}
</TabsList>

{policyCategories.map((category) => (
<TabsContent
key={category.name}
value={category.name.toLowerCase().replace(/\s+/g, "-")}
>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
{category.policies
.filter((policy) =>
policy.title.toLowerCase().includes(searchTerm.toLowerCase())
)
.map((policy) => (
<Card
key={policy.id}
className="p-2 text-xs space-y-0.5 shadow-sm border rounded-md"
>
<CardHeader className="pb-2">
<CardTitle>{policy.title}</CardTitle>
<CardDescription>Last updated: {policy.updated}</CardDescription>
</CardHeader>
<CardContent>
<div className="flex space-x-2">
{policy.pdfUrl && (
<>
{policy.pdfUrl.endsWith(".pdf") && (
<button
onClick={() => {
setDocToView(policy.pdfUrl);
setShowDocModal(true);
}}
className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-md"
>
View
</button>
)}
<a
href={policy.pdfUrl}
download
className="text-sm px-2 py-1 bg-gray-100 text-gray-800 rounded-md"
>
Download
</a>
</>
)}
</div>
</CardContent>
</Card>
))}
</div>
</TabsContent>
))}
</Tabs>

{/* PDF Viewer Modal */}
<Dialog open={showDocModal} onOpenChange={setShowDocModal}>
<DialogContent className="max-w-5xl h-[90vh] p-0 overflow-hidden">

<DialogHeader>
<DialogTitle>Document Preview</DialogTitle>
</DialogHeader>
{docToView ? (
<iframe
src={`${docToView}#toolbar=1&navpanes=0&view=fitH`}
title="PDF Preview"
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

export default Policies;