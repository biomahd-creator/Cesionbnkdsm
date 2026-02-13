import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { 
  GripVertical, 
  Trash2, 
  Type, 
  Mail, 
  Phone, 
  Calendar, 
  CheckSquare,
  List,
  FileText,
  Plus,
  Columns,
  Hash,
  Lock,
  Link,
  Upload,
  Sliders,
  Circle,
  Clock,
  Search,
  Star,
  CalendarClock,
  X
} from "lucide-react";
import { cn } from "../ui/utils";

/**
 * 🔒 ADVANCED COMPONENT - Form Builder
 * 
 * Visual form builder with drag & drop.
 * Allows creating forms dynamically by dragging fields.
 * 
 * Location: /components/advanced/FormBuilder.tsx
 * Category: Advanced Forms - Medium Priority
 * Usage: Form creation tools, admin panels, survey builders
 */

const FIELD_TYPES = [
  { type: "text", label: "Text Input", icon: Type },
  { type: "email", label: "Email", icon: Mail },
  { type: "password", label: "Password", icon: Lock },
  { type: "number", label: "Number", icon: Hash },
  { type: "phone", label: "Phone", icon: Phone },
  { type: "url", label: "URL", icon: Link },
  { type: "search", label: "Search", icon: Search },
  { type: "date", label: "Date", icon: Calendar },
  { type: "time", label: "Time", icon: Clock },
  { type: "datetime", label: "Date & Time", icon: CalendarClock },
  { type: "textarea", label: "Text Area", icon: FileText },
  { type: "checkbox", label: "Checkbox", icon: CheckSquare },
  { type: "radio", label: "Radio Group", icon: Circle },
  { type: "select", label: "Select", icon: List },
  { type: "file", label: "File Upload", icon: Upload },
  { type: "range", label: "Range Slider", icon: Sliders },
  { type: "rating", label: "Rating", icon: Star },
];

interface FormField {
  id: string;
  type: "text" | "email" | "password" | "number" | "phone" | "url" | "search" | "date" | "time" | "datetime" | "textarea" | "checkbox" | "radio" | "select" | "file" | "range" | "rating";
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  columns: number; // Number of columns to span (3, 4, 6, 12)
  min?: number;
  max?: number;
  step?: number;
}

interface FieldTypeItemProps {
  type: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

function FieldTypeItem({ type, label, icon: Icon }: FieldTypeItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "FIELD_TYPE",
    item: { fieldType: type, label },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={cn(
        "flex items-center gap-3 p-3 border rounded-lg cursor-move transition-all hover:border-primary hover:bg-accent/50",
        isDragging && "opacity-50"
      )}
    >
      <Icon className="h-5 w-5 text-muted-foreground" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

interface FormFieldItemProps {
  field: FormField;
  index: number;
  moveField: (fromIndex: number, toIndex: number) => void;
  deleteField: (id: string) => void;
  updateField: (id: string, updates: Partial<FormField>) => void;
}

function FormFieldItem({ field, index, moveField, deleteField, updateField }: FormFieldItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "FORM_FIELD",
    item: { index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "FORM_FIELD",
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveField(item.index, index);
        item.index = index;
      }
    },
  }));

  const columnWidths = [
    { value: 12, label: "Full" },
    { value: 6, label: "Half" },
    { value: 4, label: "1/3" },
    { value: 3, label: "1/4" },
  ];

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={cn(
        "group flex items-start gap-3 p-4 border rounded-lg bg-card transition-all hover:border-primary",
        isDragging && "opacity-50"
      )}
    >
      <GripVertical className="h-5 w-5 text-muted-foreground cursor-move mt-1" />
      
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Label className="font-medium">{field.label}</Label>
          {field.required && (
            <Badge variant="secondary" className="text-xs">Required</Badge>
          )}
          {field.columns < 12 && (
            <Badge variant="outline" className="text-xs">
              <Columns className="h-3 w-3 mr-1" />
              {columnWidths.find(w => w.value === field.columns)?.label || `${field.columns}/12`}
            </Badge>
          )}
        </div>

        {/* Column Width Selector */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground">Width:</span>
          <div className="flex gap-1">
            {columnWidths.map((width) => (
              <Button
                key={width.value}
                variant={field.columns === width.value ? "default" : "outline"}
                size="sm"
                className="h-7 px-2 text-xs"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  updateField(field.id, { columns: width.value });
                }}
              >
                {width.label}
              </Button>
            ))}
          </div>
        </div>
        
        {field.type === "text" && (
          <Input placeholder={field.placeholder || "Enter text..."} disabled />
        )}
        {field.type === "email" && (
          <Input type="email" placeholder={field.placeholder || "email@example.com"} disabled />
        )}
        {field.type === "password" && (
          <Input type="password" placeholder={field.placeholder || "Enter password..."} disabled />
        )}
        {field.type === "number" && (
          <Input type="number" placeholder={field.placeholder || "Enter number..."} disabled />
        )}
        {field.type === "phone" && (
          <Input type="tel" placeholder={field.placeholder || "+1 (555) 000-0000"} disabled />
        )}
        {field.type === "url" && (
          <Input type="url" placeholder={field.placeholder || "https://example.com"} disabled />
        )}
        {field.type === "search" && (
          <Input type="search" placeholder={field.placeholder || "Search..."} disabled />
        )}
        {field.type === "date" && (
          <Input type="date" disabled />
        )}
        {field.type === "time" && (
          <Input type="time" disabled />
        )}
        {field.type === "datetime" && (
          <Input type="datetime-local" disabled />
        )}
        {field.type === "textarea" && (
          <Textarea placeholder={field.placeholder || "Enter details..."} disabled />
        )}
        {field.type === "checkbox" && (
          <div className="space-y-2">
            {field.options?.map((option, optIndex) => (
              <div key={optIndex} className="flex items-center gap-2">
                <input type="checkbox" disabled className="h-4 w-4" />
                <Input
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...(field.options || [])];
                    newOptions[optIndex] = e.target.value;
                    updateField(field.id, { options: newOptions });
                  }}
                  className="flex-1 h-8"
                  placeholder="Option text"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    const newOptions = field.options?.filter((_, i) => i !== optIndex);
                    updateField(field.id, { options: newOptions });
                  }}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-3 w-3 text-destructive" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                const newOptions = [...(field.options || []), `Option ${(field.options?.length || 0) + 1}`];
                updateField(field.id, { options: newOptions });
              }}
              className="w-full h-8 text-xs"
            >
              <Plus className="h-3 w-3 mr-1" />
              Add Option
            </Button>
          </div>
        )}
        {field.type === "radio" && (
          <div className="space-y-2">
            {field.options?.map((option, optIndex) => (
              <div key={optIndex} className="flex items-center gap-2">
                <input type="radio" disabled className="h-4 w-4" name={field.id} />
                <Input
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...(field.options || [])];
                    newOptions[optIndex] = e.target.value;
                    updateField(field.id, { options: newOptions });
                  }}
                  className="flex-1 h-8"
                  placeholder="Option text"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    const newOptions = field.options?.filter((_, i) => i !== optIndex);
                    updateField(field.id, { options: newOptions });
                  }}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-3 w-3 text-destructive" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                const newOptions = [...(field.options || []), `Option ${(field.options?.length || 0) + 1}`];
                updateField(field.id, { options: newOptions });
              }}
              className="w-full h-8 text-xs"
            >
              <Plus className="h-3 w-3 mr-1" />
              Add Option
            </Button>
          </div>
        )}
        {field.type === "select" && (
          <select disabled className="w-full p-2 border rounded-md bg-muted">
            <option>Select an option...</option>
            {field.options?.map((opt, i) => (
              <option key={i}>{opt}</option>
            ))}
          </select>
        )}
        {field.type === "file" && (
          <Input type="file" disabled />
        )}
        {field.type === "range" && (
          <div className="space-y-2">
            <Input type="range" min={field.min || 0} max={field.max || 100} step={field.step || 1} disabled />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{field.min || 0}</span>
              <span>{field.max || 100}</span>
            </div>
          </div>
        )}
        {field.type === "rating" && (
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 text-muted-foreground" />
            ))}
          </div>
        )}
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          deleteField(field.id);
        }}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 className="h-4 w-4 text-destructive" />
      </Button>
    </div>
  );
}

interface FormCanvasProps {
  onDrop: (fieldType: string, label: string) => void;
  fields: FormField[];
  moveField: (fromIndex: number, toIndex: number) => void;
  deleteField: (id: string) => void;
  updateField: (id: string, updates: Partial<FormField>) => void;
}

function FormCanvas({ onDrop, fields, moveField, deleteField, updateField }: FormCanvasProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "FIELD_TYPE",
    drop: (item: { fieldType: string; label: string }) => {
      onDrop(item.fieldType, item.label);
    },
    collect: (monitor: any) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={cn(
        "min-h-[400px] rounded-lg transition-all p-4",
        isOver && "bg-primary/5 ring-2 ring-primary ring-inset"
      )}
    >
      {fields.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[380px] border-2 border-dashed rounded-lg border-muted">
          <Plus className="h-12 w-12 mb-4 text-muted-foreground" />
          <p className="text-muted-foreground text-center">
            Drag and drop fields here to build your form
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4">
          {fields.map((field, index) => {
            // Map columns to Tailwind classes
            const colSpanClass = 
              field.columns === 3 ? "col-span-12 md:col-span-3" :
              field.columns === 4 ? "col-span-12 md:col-span-4" :
              field.columns === 6 ? "col-span-12 md:col-span-6" :
              "col-span-12";
            
            return (
              <div key={field.id} className={colSpanClass}>
                <FormFieldItem
                  field={field}
                  index={index}
                  moveField={moveField}
                  deleteField={deleteField}
                  updateField={updateField}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function FormBuilder() {
  const [fields, setFields] = useState<FormField[]>([]);

  const addField = (fieldType: string, label: string) => {
    const newField: FormField = {
      id: `field-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type: fieldType as FormField["type"],
      label,
      placeholder: `Enter ${label.toLowerCase()}...`,
      required: false,
      columns: 12, // Default: full width
    };
    
    // Add default options for radio, checkbox, and select
    if (fieldType === "radio") {
      newField.options = ["Yes", "No"];
    } else if (fieldType === "checkbox") {
      newField.options = ["Option 1", "Option 2", "Option 3"];
    } else if (fieldType === "select") {
      newField.options = ["Option 1", "Option 2", "Option 3"];
    }
    
    setFields((prevFields) => [...prevFields, newField]);
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields((prevFields) => 
      prevFields.map((field) => 
        field.id === id ? { ...field, ...updates } : field
      )
    );
  };

  const deleteField = (id: string) => {
    setFields((prevFields) => prevFields.filter(f => f.id !== id));
  };

  const moveField = (fromIndex: number, toIndex: number) => {
    setFields((prevFields) => {
      if (fromIndex < 0 || toIndex < 0 || fromIndex >= prevFields.length || toIndex >= prevFields.length) {
        return prevFields;
      }
      const updatedFields = [...prevFields];
      const [movedField] = updatedFields.splice(fromIndex, 1);
      updatedFields.splice(toIndex, 0, movedField);
      return updatedFields;
    });
  };

  const clearForm = () => {
    setFields([]);
  };

  const generateCode = () => {
    const code = `// Generated Form Code
const MyForm = () => {
  return (
    <form className="space-y-4">
${fields.map(field => {
  if (field.type === "textarea") {
    return `      <div>
        <Label htmlFor="${field.id}">${field.label}${field.required ? ' *' : ''}</Label>
        <Textarea id="${field.id}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''} />
      </div>`;
  } else if (field.type === "checkbox") {
    return `      <div className="space-y-2">
        ${field.options?.map((option, optIndex) => `
          <div key="${optIndex}" className="flex items-center gap-2">
            <input type="checkbox" id="${field.id}-${optIndex}" ${field.required ? 'required' : ''} />
            <Label htmlFor="${field.id}-${optIndex}">${option}</Label>
          </div>
        `).join('\n        ') || ''}
      </div>`;
  } else if (field.type === "select") {
    return `      <div>
        <Label htmlFor="${field.id}">${field.label}${field.required ? ' *' : ''}</Label>
        <Select ${field.required ? 'required' : ''}>
          <SelectTrigger id="${field.id}">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            ${field.options?.map(opt => `<SelectItem value="${opt.toLowerCase()}">${opt}</SelectItem>`).join('\n            ') || '<SelectItem value="option1">Option 1</SelectItem>'}
          </SelectContent>
        </Select>
      </div>`;
  } else {
    return `      <div>
        <Label htmlFor="${field.id}">${field.label}${field.required ? ' *' : ''}</Label>
        <Input id="${field.id}" type="${field.type}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''} />
      </div>`;
  }
}).join('\n')}
      <Button type="submit">Submit</Button>
    </form>
  );
};`;
    
    alert(code); // In production, this could copy to clipboard or display in a modal
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Field Types Palette */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Field Types</CardTitle>
              <CardDescription>Drag fields to build your form</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {FIELD_TYPES.map((fieldType) => (
                <FieldTypeItem
                  key={fieldType.type}
                  type={fieldType.type}
                  label={fieldType.label}
                  icon={fieldType.icon}
                />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Form Canvas */}
        <div className="lg:col-span-9 space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Form Builder</CardTitle>
                  <CardDescription>
                    {fields.length === 0 
                      ? "Start by dragging fields from the left panel" 
                      : `${fields.length} field${fields.length !== 1 ? 's' : ''} added`
                    }
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  {fields.length > 0 && (
                    <>
                      <Button variant="outline" onClick={generateCode}>
                        Generate Code
                      </Button>
                      <Button variant="outline" onClick={clearForm}>
                        Clear All
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <FormCanvas
                onDrop={addField}
                fields={fields}
                moveField={moveField}
                deleteField={deleteField}
                updateField={updateField}
              />
            </CardContent>
          </Card>

          {/* Preview */}
          {fields.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Live Preview</CardTitle>
                <CardDescription>How your form will look with column layout</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-12 gap-4">
                    {fields.map((field) => {
                      // Map columns to Tailwind classes (col-span must be complete class names)
                      const colSpanClass = 
                        field.columns === 3 ? "col-span-12 md:col-span-3" :
                        field.columns === 4 ? "col-span-12 md:col-span-4" :
                        field.columns === 6 ? "col-span-12 md:col-span-6" :
                        "col-span-12";
                      
                      return (
                        <div key={field.id} className={cn("space-y-2", colSpanClass)}>
                          <Label>
                            {field.label}
                            {field.required && <span className="text-destructive ml-1">*</span>}
                          </Label>
                          {field.type === "text" && (
                            <Input placeholder={field.placeholder} />
                          )}
                          {field.type === "email" && (
                            <Input type="email" placeholder={field.placeholder} />
                          )}
                          {field.type === "password" && (
                            <Input type="password" placeholder={field.placeholder} />
                          )}
                          {field.type === "number" && (
                            <Input type="number" placeholder={field.placeholder} />
                          )}
                          {field.type === "phone" && (
                            <Input type="tel" placeholder={field.placeholder} />
                          )}
                          {field.type === "url" && (
                            <Input type="url" placeholder={field.placeholder} />
                          )}
                          {field.type === "search" && (
                            <Input type="search" placeholder={field.placeholder} />
                          )}
                          {field.type === "date" && (
                            <Input type="date" />
                          )}
                          {field.type === "time" && (
                            <Input type="time" />
                          )}
                          {field.type === "datetime" && (
                            <Input type="datetime-local" />
                          )}
                          {field.type === "textarea" && (
                            <Textarea placeholder={field.placeholder} />
                          )}
                          {field.type === "checkbox" && (
                            <div className="space-y-2">
                              {field.options?.map((option, optIndex) => (
                                <div key={optIndex} className="flex items-center gap-2">
                                  <input type="checkbox" className="h-4 w-4" />
                                  <span className="text-sm">{option}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {field.type === "radio" && (
                            <div className="space-y-2">
                              {field.options?.map((option, optIndex) => (
                                <div key={optIndex} className="flex items-center gap-2">
                                  <input type="radio" className="h-4 w-4" name={field.id} />
                                  <span className="text-sm">{option}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {field.type === "select" && (
                            <select className="w-full p-2 border rounded-md">
                              <option>Select an option...</option>
                              {field.options?.map((opt, i) => (
                                <option key={i}>{opt}</option>
                              ))}
                            </select>
                          )}
                          {field.type === "file" && (
                            <Input type="file" />
                          )}
                          {field.type === "range" && (
                            <div className="space-y-2">
                              <Input type="range" min={field.min || 0} max={field.max || 100} step={field.step || 1} />
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>{field.min || 0}</span>
                                <span>{field.max || 100}</span>
                              </div>
                            </div>
                          )}
                          {field.type === "rating" && (
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star 
                                  key={star} 
                                  className="h-5 w-5 cursor-pointer transition-colors hover:fill-primary hover:text-primary text-muted-foreground" 
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                    <div className="col-span-12 mt-2">
                      <Button type="submit">Submit Form</Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </DndProvider>
  );
}