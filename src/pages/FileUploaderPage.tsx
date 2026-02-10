import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { FileUploader } from "../components/advanced/FileUploader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { toast } from "sonner@2.0.3";

export function FileUploaderPage() {
  const handleUpload = (files: File[]) => {
    console.log("Files uploaded:", files);
    toast.success(`${files.length} files successfully uploaded!`);
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">File Uploader</h2>
          <Badge>Advanced</Badge>
          <Badge variant="outline" className="border-green-500 text-green-500">New</Badge>
        </div>
        <p className="text-muted-foreground">
          Advanced file upload component with drag & drop, previews, and progress tracking.
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Invoice Upload Zone</CardTitle>
          <CardDescription>
            Upload your invoices and supporting documents (PDF, PNG, JPG)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FileUploader 
            maxFiles={5}
            maxSize={5 * 1024 * 1024}
            accept={["image/png", "image/jpeg", "application/pdf"]}
            onUpload={handleUpload}
          />
          
          <Separator />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Drag and Drop zone</li>
                <li>✓ Image previews</li>
                <li>✓ File type & size validation</li>
                <li>✓ Upload progress simulation</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Constraints:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Max 5 files per batch</li>
                <li>• Max 5MB per file</li>
                <li>• Allowed: PDF, PNG, JPG</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
