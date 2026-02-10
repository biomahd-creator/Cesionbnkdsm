import * as React from "react";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { RichTextEditor } from "../components/advanced/RichTextEditor";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

export function RichTextEditorPage() {
  const [content, setContent] = React.useState("<h3>Initial Content</h3><p>Try editing this text to see the <b>rich text</b> features in action.</p>");

  const handleSave = () => {
    console.log("Saved content:", content);
    toast.success("Content saved successfully!");
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Rich Text Editor</h2>
          <Badge>Advanced</Badge>
          <Badge variant="outline" className="border-green-500 text-green-500">New</Badge>
        </div>
        <p className="text-muted-foreground">
          WYSIWYG editor for rich content creation with formatting tools.
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Editor */}
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Content Editor</CardTitle>
              <CardDescription>
                Compose your document with rich formatting options.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Description / Notes</Label>
                <RichTextEditor 
                  value={content} 
                  onChange={setContent} 
                  className="min-h-[300px]"
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={handleSave}>Save Content</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Preview */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Live Preview (HTML Output)</CardTitle>
              <CardDescription>
                Real-time raw HTML rendering of the editor content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-md font-mono text-xs overflow-x-auto whitespace-pre-wrap break-all">
                {content}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
