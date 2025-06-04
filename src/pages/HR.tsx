
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const HR = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-skcloud-dark-purple">Human Resources</h1>
        <p className="text-muted-foreground mt-1">Access HR resources, tools, and information</p>
      </div>

      <Tabs defaultValue="resources">
        <TabsList className="grid w-full sm:w-[400px] grid-cols-2">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="team">HR Team</TabsTrigger>
        </TabsList>
        
        <TabsContent value="resources" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="sk-card">
              <CardHeader>
                <CardTitle>Employee Handbook</CardTitle>
                <CardDescription>Company policies and procedures</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Access the latest employee handbook containing all company policies, procedures, and guidelines.</p>
                <Button variant="outline" className="w-full border-skcloud-purple text-skcloud-purple hover:bg-skcloud-purple hover:text-white">View Handbook</Button>
              </CardContent>
            </Card>

            <Card className="sk-card">
              <CardHeader>
                <CardTitle>Benefits Information</CardTitle>
                <CardDescription>Health, retirement, and more</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Learn about your benefits package, including health insurance, retirement plans, and additional perks.</p>
                <Button variant="outline" className="w-full border-skcloud-purple text-skcloud-purple hover:bg-skcloud-purple hover:text-white">View Benefits</Button>
              </CardContent>
            </Card>

            <Card className="sk-card">
              <CardHeader>
                <CardTitle>Leave Management</CardTitle>
                <CardDescription>Request and track time off</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Submit leave requests, view your balance, and track approval status for time off.</p>
                <Button variant="outline" className="w-full border-skcloud-purple text-skcloud-purple hover:bg-skcloud-purple hover:text-white">Manage Leave</Button>
              </CardContent>
            </Card>

            <Card className="sk-card">
              <CardHeader>
                <CardTitle>Payroll Information</CardTitle>
                <CardDescription>Pay slips and tax documents</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Access your pay slips, tax documents, and manage your payment details.</p>
                <Button variant="outline" className="w-full border-skcloud-purple text-skcloud-purple hover:bg-skcloud-purple hover:text-white">View Payroll</Button>
              </CardContent>
            </Card>

            <Card className="sk-card">
              <CardHeader>
                <CardTitle>HR Forms</CardTitle>
                <CardDescription>Download and submit forms</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Access all HR forms for various requests and submissions.</p>
                <Button variant="outline" className="w-full border-skcloud-purple text-skcloud-purple hover:bg-skcloud-purple hover:text-white">View Forms</Button>
              </CardContent>
            </Card>

            <Card className="sk-card">
              <CardHeader>
                <CardTitle>Employee Directory</CardTitle>
                <CardDescription>Find and connect with colleagues</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Search for employees, view contact information, and organization structure.</p>
                <Button variant="outline" className="w-full border-skcloud-purple text-skcloud-purple hover:bg-skcloud-purple hover:text-white">View Directory</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="team" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Sarah Johnson", "Michael Chen", "Priya Patel", "David Kim"].map((person, idx) => (
              <Card key={idx} className="sk-card">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-skcloud-purple/20 mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-skcloud-purple">{person.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <CardTitle className="text-center mt-3">{person}</CardTitle>
                  <CardDescription className="text-center">HR {idx === 0 ? "Director" : "Specialist"}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm mb-4">Email: {person.toLowerCase().split(" ").join(".")}@securekloud.com</p>
                  <p className="text-sm">Phone: +1 (555) 123-45{idx+10}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HR;
