import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Alert, AlertDescription } from "../ui/alert";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import {
  Upload,
  File,
  FileText,
  Image,
  X,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const mockFiles = [
  {
    name: "factura_001.pdf",
    size: "2.4 MB",
    status: "success",
    type: "pdf",
    progress: 100,
  },
  {
    name: "contrato_firmado.pdf",
    size: "1.8 MB",
    status: "success",
    type: "pdf",
    progress: 100,
  },
  {
    name: "documento_respaldo.jpg",
    size: "3.2 MB",
    status: "uploading",
    type: "image",
    progress: 65,
  },
];

export function UploadZone() {
  const [files, setFiles] = useState(mockFiles);
  const [isDragging, setIsDragging] = useState(false);

  const handleRemoveFile = (fileName: string) => {
    setFiles(files.filter((f) => f.name !== fileName));
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return FileText;
      case "image":
        return Image;
      default:
        return File;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Upload</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Area */}
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-muted-foreground/50"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
          }}
        >
          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <div className="space-y-2">
            <p className="font-medium">
              Drag and drop your files here
            </p>
            <p className="text-sm text-muted-foreground">
              or click to select files
            </p>
          </div>
          <Button variant="outline" className="mt-4">
            Select files
          </Button>
          <input
            type="file"
            multiple
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        {/* File Requirements */}
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Allowed formats: PDF, JPG, PNG. Max size: 10 MB per
            file
          </AlertDescription>
        </Alert>

        <Separator />

        {/* File List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Uploaded files</h4>
            <Badge variant="secondary">{files.length} files</Badge>
          </div>

          {files.map((file) => {
            const FileIcon = getFileIcon(file.type);
            const isUploading = file.status === "uploading";

            return (
              <Card key={file.name}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          <FileIcon className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0 space-y-1">
                          <p className="font-medium truncate">{file.name}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{file.size}</span>
                            <Separator
                              orientation="vertical"
                              className="h-4"
                            />
                            {isUploading ? (
                              <span className="text-primary">
                                Uploading... {file.progress}%
                              </span>
                            ) : (
                              <div className="flex items-center gap-1 text-green-500">
                                <CheckCircle className="h-3 w-3" />
                                <span>Completed</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveFile(file.name)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    {isUploading && (
                      <Progress value={file.progress} className="h-2" />
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button className="flex-1">Continue</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );
}