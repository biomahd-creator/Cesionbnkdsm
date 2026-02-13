import React, { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  Plus,
  ArrowRight,
  FileCode,
} from "lucide-react";
import { ComponentShowcase } from "../components/ui/component-showcase";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { FileUploader } from "../components/advanced/FileUploader";

function InvoiceUploadDemo() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("files");
  const [cufes, setCufes] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCufeSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setUploadStatus("success");
      setTimeout(() => {
        setUploadStatus("idle");
        setOpen(false);
        setCufes("");
      }, 2000);
    }, 1500);
  };

  const handleFileUpload = (files: File[]) => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setUploadStatus("success");
      setTimeout(() => {
        setUploadStatus("idle");
        setOpen(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Bulk Upload</CardTitle>
          <CardDescription>
            Start the invoice upload process for factoring or confirming.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/30 p-4 rounded-lg border border-dashed flex flex-col items-center justify-center h-48 gap-4 text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="font-medium">Upload new invoices</p>
              <p className="text-sm text-muted-foreground">Supports XML, PDF and CUFE codes</p>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  New Upload
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col p-0 gap-0">
                <DialogHeader className="p-6 pb-2">
                  <DialogTitle>Upload Invoices</DialogTitle>
                  <DialogDescription>
                    Select the upload method for your electronic documents.
                  </DialogDescription>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto p-6 pt-2">
                  <Tabs defaultValue="files" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 max-w-lg mb-6">
                      <TabsTrigger value="files" className="gap-2">
                        <FileText className="h-4 w-4" />
                        Files
                      </TabsTrigger>
                      <TabsTrigger value="cufes" className="gap-2">
                        <FileCode className="h-4 w-4" />
                        CUFE Codes
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="files" className="mt-0 space-y-4">
                      <Alert className="bg-blue-50/50 border-blue-200 text-blue-800 dark:bg-blue-950/20 dark:border-blue-800 dark:text-blue-300">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Recommendation</AlertTitle>
                        <AlertDescription>
                          Upload XML files for faster and more accurate processing.
                        </AlertDescription>
                      </Alert>
                      <FileUploader
                        maxFiles={10}
                        maxSize={10 * 1024 * 1024}
                        accept={["application/pdf", "text/xml", "application/xml"]}
                        onUpload={handleFileUpload}
                      />
                    </TabsContent>

                    <TabsContent value="cufes" className="mt-0 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cufes">Enter CUFE / CUDE codes</Label>
                        <Textarea
                          id="cufes"
                          placeholder={"Paste codes here (one per line or comma-separated)...\ncufe1...\ncufe2..."}
                          className="min-h-[200px] font-mono text-xs leading-relaxed resize-none"
                          value={cufes}
                          onChange={(e) => setCufes(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground flex justify-between">
                          <span>Supports multiple codes</span>
                          <span>{cufes.split(/\n|,/).filter((s) => s.trim().length > 0).length} codes detected</span>
                        </p>
                      </div>
                      <Alert>
                        <CheckCircle2 className="h-4 w-4" />
                        <AlertTitle>Automatic Validation</AlertTitle>
                        <AlertDescription>
                          The system will validate the existence and status of each invoice.
                        </AlertDescription>
                      </Alert>
                    </TabsContent>
                  </Tabs>
                </div>

                <DialogFooter className="p-6 pt-2 border-t bg-muted/20">
                  <div className="flex w-full justify-between items-center">
                    {uploadStatus === "success" ? (
                      <div className="flex items-center gap-2 text-green-600 font-medium animate-in fade-in slide-in-from-bottom-2">
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Upload successful</span>
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        {activeTab === "files" ? "Formats: PDF, XML" : "Real-time validation"}
                      </span>
                    )}
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                      {activeTab === "cufes" && (
                        <Button onClick={handleCufeSubmit} disabled={!cufes.trim() || isProcessing}>
                          {isProcessing ? "Processing..." : "Upload Codes"}
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>Recent invoice processing history.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-4 p-3 rounded-lg border bg-muted/10 hover:bg-muted/30 transition-colors">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm truncate">Invoice Batch #{202400 + i}</p>
                    <span className="text-xs text-muted-foreground">{i * 2}h ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Imported via {i === 2 ? "Manual CUFE" : "XML File"} - 15 documents
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function InvoiceUploadPage() {
  return (
    <ComponentShowcase
      title="Invoice Upload"
      description="Unified module for invoice loading via XML/PDF file upload or manual CUFE/CUDE code entry. Features a tabbed dialog with file drag-and-drop, code validation, processing status, and upload history. Designed for factoring and confirming workflows."
      category="Patterns"
      preview={<InvoiceUploadDemo />}
      code={`import { FileUploader } from "@/components/advanced/FileUploader";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Two upload modes: Files (XML/PDF) or CUFE codes
<Dialog>
  <DialogTrigger asChild>
    <Button>New Upload</Button>
  </DialogTrigger>
  <DialogContent>
    <Tabs defaultValue="files">
      <TabsList>
        <TabsTrigger value="files">Files</TabsTrigger>
        <TabsTrigger value="cufes">CUFE Codes</TabsTrigger>
      </TabsList>
      <TabsContent value="files">
        <FileUploader
          maxFiles={10}
          accept={["application/pdf", "text/xml"]}
          onUpload={(files) => processFiles(files)}
        />
      </TabsContent>
      <TabsContent value="cufes">
        <Textarea placeholder="Paste CUFE codes..." />
      </TabsContent>
    </Tabs>
  </DialogContent>
</Dialog>`}
      props={[
        {
          name: "(pattern)",
          type: "—",
          description: "This is a composed pattern using Dialog, Tabs, FileUploader, and Textarea. Customize by composing these primitives.",
        },
      ]}
      examples={[
        {
          title: "Upload Methods",
          description: "The two supported upload methods for electronic invoices.",
          preview: (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  File Upload
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Drag & drop zone</li>
                  <li>XML and PDF support</li>
                  <li>Up to 10 files, 10MB each</li>
                  <li>Progress tracking per file</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <FileCode className="h-4 w-4 text-primary" />
                  CUFE / CUDE Codes
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Paste multiple codes</li>
                  <li>One per line or comma-separated</li>
                  <li>Auto-count detected codes</li>
                  <li>Real-time validation</li>
                </ul>
              </div>
            </div>
          ),
          code: `// File mode
<FileUploader accept={["application/pdf", "text/xml"]} />

// CUFE mode
<Textarea placeholder="Paste codes..." />`,
        },
      ]}
    />
  );
}
