import { ComponentShowcase } from "../components/ui/component-showcase";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Mail, Lock, Search, User, CreditCard } from "lucide-react";

export function InputPage() {
  return (
    <ComponentShowcase
      title="Input"
      description="Displays a form input field or a component that looks like an input field."
      category="Forms"
      
      preview={
        <div className="grid gap-4 max-w-sm">
          <Input type="text" placeholder="Text input" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Number" />
          <Input type="tel" placeholder="Phone" />
          <Input type="url" placeholder="URL" />
        </div>
      }
      
      code={`import { Input } from "@/components/ui/input";

export function InputDemo() {
  return (
    <div className="grid gap-4 max-w-sm">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="tel" placeholder="Phone" />
      <Input type="url" placeholder="URL" />
    </div>
  );
}`}
      
      props={[
        {
          name: "type",
          type: '"text" | "email" | "password" | "number" | "tel" | "url" | "date" | "time" | "file" | ...',
          default: '"text"',
          description: "Tipo de input HTML nativo",
        },
        {
          name: "placeholder",
          type: "string",
          description: "Texto placeholder que se muestra cuando el input está vacío",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Deshabilita el input y previene interacción",
        },
        {
          name: "value",
          type: "string",
          description: "Valor controlado del input (componente controlado)",
        },
        {
          name: "defaultValue",
          type: "string",
          description: "Valor inicial del input (componente no controlado)",
        },
        {
          name: "onChange",
          type: "(e: ChangeEvent<HTMLInputElement>) => void",
          description: "Callback que se ejecuta cuando cambia el valor",
        },
        {
          name: "onBlur",
          type: "(e: FocusEvent<HTMLInputElement>) => void",
          description: "Callback que se ejecuta cuando el input pierde el foco",
        },
        {
          name: "className",
          type: "string",
          description: "Clases CSS adicionales para el input",
        },
        {
          name: "id",
          type: "string",
          description: "ID del input (útil para asociar con Label)",
        },
        {
          name: "required",
          type: "boolean",
          default: "false",
          description: "Marca el input como requerido en formularios HTML",
        },
      ]}
      
      examples={[
        {
          title: "With Label",
          description: "Input con label y texto de ayuda",
          preview: (
            <div className="grid gap-2 max-w-sm">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
              <p className="text-sm text-muted-foreground">
                We'll never share your email with anyone else.
              </p>
            </div>
          ),
          code: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<div className="grid gap-2 max-w-sm">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
  <p className="text-sm text-muted-foreground">
    We'll never share your email with anyone else.
  </p>
</div>`
        },
        {
          title: "Disabled",
          description: "Input en estado deshabilitado",
          preview: (
            <div className="grid gap-2 max-w-sm">
              <Label htmlFor="disabled">Disabled Input</Label>
              <Input id="disabled" disabled placeholder="Disabled input" />
            </div>
          ),
          code: `<Input disabled placeholder="Disabled input" />`
        },
        {
          title: "With Icon Prefix",
          description: "Input con icono al inicio usando posicionamiento relativo",
          preview: (
            <div className="grid gap-4 max-w-sm">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Email" className="pl-10" type="email" />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Password" className="pl-10" type="password" />
              </div>
            </div>
          ),
          code: `import { Mail, Lock } from "lucide-react";

<div className="relative">
  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
  <Input placeholder="Email" className="pl-10" type="email" />
</div>`
        },
        {
          title: "With Icon Suffix",
          description: "Input con icono al final",
          preview: (
            <div className="grid gap-4 max-w-sm">
              <div className="relative">
                <Input placeholder="Search..." className="pr-10" />
                <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              <div className="relative">
                <Input placeholder="Username" className="pr-10" />
                <User className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          ),
          code: `import { Search } from "lucide-react";

<div className="relative">
  <Input placeholder="Search..." className="pr-10" />
  <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
</div>`
        },
        {
          title: "Error State",
          description: "Input con estado de error y mensaje",
          preview: (
            <div className="grid gap-2 max-w-sm">
              <Label htmlFor="error">Username</Label>
              <Input 
                id="error" 
                placeholder="Enter username"
                className="border-destructive focus-visible:ring-destructive"
              />
              <p className="text-sm text-destructive">
                Username is required
              </p>
            </div>
          ),
          code: `<div className="grid gap-2 max-w-sm">
  <Label htmlFor="error">Username</Label>
  <Input 
    id="error" 
    placeholder="Enter username"
    className="border-destructive focus-visible:ring-destructive"
  />
  <p className="text-sm text-destructive">
    Username is required
  </p>
</div>`
        },
        {
          title: "Success State",
          description: "Input con estado de éxito",
          preview: (
            <div className="grid gap-2 max-w-sm">
              <Label htmlFor="success">Email</Label>
              <Input 
                id="success" 
                type="email"
                placeholder="you@example.com"
                className="border-primary focus-visible:ring-primary"
                defaultValue="user@example.com"
              />
              <p className="text-sm text-primary">
                Email is valid ✓
              </p>
            </div>
          ),
          code: `<Input 
  className="border-primary focus-visible:ring-primary"
  defaultValue="user@example.com"
/>`
        },
        {
          title: "File Upload",
          description: "Input de tipo file para subir archivos",
          preview: (
            <div className="grid gap-2 max-w-sm">
              <Label htmlFor="file">Upload File</Label>
              <Input id="file" type="file" />
            </div>
          ),
          code: `<div className="grid gap-2 max-w-sm">
  <Label htmlFor="file">Upload File</Label>
  <Input id="file" type="file" />
</div>`
        },
        {
          title: "Date and Time",
          description: "Inputs de tipo date, time y datetime-local",
          preview: (
            <div className="grid gap-4 max-w-sm">
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="datetime">Date & Time</Label>
                <Input id="datetime" type="datetime-local" />
              </div>
            </div>
          ),
          code: `<Input type="date" />
<Input type="time" />
<Input type="datetime-local" />`
        },
        {
          title: "With Validation Patterns",
          description: "Inputs con validación HTML5 nativa",
          preview: (
            <div className="grid gap-4 max-w-sm">
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone (US Format)</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="card">Credit Card</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="card" 
                    type="text" 
                    pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                    placeholder="1234-5678-9012-3456"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          ),
          code: `<Input 
  type="tel" 
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  placeholder="123-456-7890"
/>`
        },
        {
          title: "Form Integration",
          description: "Ejemplo completo de input en un formulario con validación",
          preview: (
            <form className="grid gap-4 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-2">
                <Label htmlFor="form-email">Email *</Label>
                <Input 
                  id="form-email" 
                  type="email" 
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="form-password">Password *</Label>
                <Input 
                  id="form-password" 
                  type="password" 
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
                <p className="text-xs text-muted-foreground">
                  Minimum 8 characters
                </p>
              </div>
              <button 
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Submit
              </button>
            </form>
          ),
          code: `<form onSubmit={handleSubmit}>
  <div className="grid gap-2">
    <Label htmlFor="email">Email *</Label>
    <Input 
      id="email" 
      type="email" 
      required
    />
  </div>
  <div className="grid gap-2">
    <Label htmlFor="password">Password *</Label>
    <Input 
      id="password" 
      type="password" 
      required
      minLength={8}
    />
  </div>
  <button type="submit">Submit</button>
</form>`
        }
      ]}
    />
  );
}
