import React, { Component, useEffect, useState } from "react";
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
import { FiDownload, FiEye } from "react-icons/fi";

interface Policy {
  name: string;
  fileUrl: string;
  updated: string;
}

// Error Boundary Component
class ErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p className="text-center text-red-500">Something went wrong. Please try again later.</p>;
    }
    return this.props.children;
  }
}

const Policies = () => {
  const [categories, setCategories] = useState<{ [key: string]: Policy[] }>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [docToView, setDocToView] = useState<string | null>(null);
  const [showDocModal, setShowDocModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/policies");
        if (!res.ok) throw new Error("Failed to load policies");
        const data = await res.json();
        console.log("Fetched categories:", data); // Log response for debugging
        setCategories(data);
      } catch (err) {
        console.error("❌ Error fetching policies:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPolicies();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading policies...</p>;

  // Filter valid category keys (only those with array values)
  const categoryKeys = Object.keys(categories).filter((key) => Array.isArray(categories[key]));

  if (!categoryKeys.length) {
    return <p className="text-center text-gray-500">No policies available.</p>;
  }

  return (
    <ErrorBoundary>
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

        <Tabs defaultValue={categoryKeys[0]?.toLowerCase().replace(/\s+/g, "-")}>
          <TabsList className="mb-4 flex flex-wrap gap-2">
            {categoryKeys.map((key) => (
              <TabsTrigger
                key={key}
                value={key.toLowerCase().replace(/\s+/g, "-")}
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>

          {categoryKeys.map((key) => (
            <TabsContent
              key={key}
              value={key.toLowerCase().replace(/\s+/g, "-")}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {(Array.isArray(categories[key]) ? categories[key] : []).filter((policy) =>
                  policy.name.toLowerCase().includes(searchTerm.toLowerCase())
                ).map((policy, index) => (
                  <Card
                    key={index}
                    className="p-2 text-xs space-y-0.5 shadow-sm border rounded-md h-full flex flex-col"
                  >
                    <CardHeader className="pb-2 flex-grow">
                      <CardTitle>{policy.name}</CardTitle>
                      <CardDescription>
                        Last updated: {policy.updated}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-shrink-0 pt-0">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => {
                            setDocToView(`http://localhost:8000${policy.fileUrl}`);
                            setShowDocModal(true);
                          }}
                          className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-md flex items-center"
                          title="View"
                        >
                          <FiEye className="w-4 h-4" />
                        </button>
                        <a
                          href={`http://localhost:8000${policy.fileUrl}`}
                          download
                          className="text-sm px-2 py-1 bg-gray-100 text-gray-800 rounded-md flex items-center"
                          title="Download"
                        >
                          <FiDownload className="w-4 h-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

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
    </ErrorBoundary>
  );
};

export default Policies;