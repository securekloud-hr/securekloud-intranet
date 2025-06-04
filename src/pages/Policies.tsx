
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Policies = () => {
  const policyCategories = [
    {
      name: "HR Policies",
      policies: [
        { id: 1, title: "Code of Conduct", updated: "May 10, 2025" },
        { id: 2, title: "Anti-Harassment Policy", updated: "Apr 15, 2025" },
        { id: 3, title: "Employee Grievance Policy", updated: "Mar 22, 2025" },
        { id: 4, title: "Diversity and Inclusion Policy", updated: "Feb 05, 2025" },
      ]
    },
    {
      name: "IT Policies",
      policies: [
        { id: 5, title: "Acceptable Use Policy", updated: "Jun 01, 2025" },
        { id: 6, title: "Data Protection Policy", updated: "May 20, 2025" },
        { id: 7, title: "Information Security Policy", updated: "Apr 30, 2025" },
        { id: 8, title: "Remote Work IT Guidelines", updated: "Mar 15, 2025" },
      ]
    },
    {
      name: "Finance Policies",
      policies: [
        { id: 9, title: "Travel and Expense Policy", updated: "May 05, 2025" },
        { id: 10, title: "Procurement Policy", updated: "Apr 12, 2025" },
        { id: 11, title: "Corporate Card Usage Policy", updated: "Mar 10, 2025" },
        { id: 12, title: "Financial Controls Policy", updated: "Feb 22, 2025" },
      ]
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-skcloud-dark-purple">Company Policies</h1>
        <p className="text-muted-foreground mt-1">Access and review all current company policies</p>
      </div>

      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search policies..." className="pl-9 max-w-md" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.policies.map((policy) => (
                <Card key={policy.id} className="sk-card">
                  <CardHeader className="pb-2">
                    <CardTitle>{policy.title}</CardTitle>
                    <CardDescription>Last updated: {policy.updated}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-2">
                      <div className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-md">View</div>
                      <div className="text-sm px-2 py-1 bg-gray-100 text-gray-800 rounded-md">Download PDF</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Policies;
