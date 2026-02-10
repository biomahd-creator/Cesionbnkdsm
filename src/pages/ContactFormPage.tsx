import { ComponentShowcase } from "../components/ui/component-showcase";
import { ContactForm } from "../components/widgets/ContactForm";

const contactFormCode = `import { ContactForm } from "@/components/widgets/ContactForm";

export function ContactFormDemo() {
  return <ContactForm />;
}`;

export function ContactFormPage() {
  return (
    <ComponentShowcase
      title="Contact Form"
      description="Formulario de contacto profesional con validación y estados."
      category="Business Component"
      preview={
        <div className="w-full max-w-2xl border rounded-lg p-6 bg-card">
          <ContactForm />
        </div>
      }
      code={contactFormCode}
      props={[
        { name: "onSubmit", type: "(data: ContactFormData) => void", description: "Callback con los datos del formulario al enviar exitosamente." },
        { name: "showCompany", type: "boolean", default: "true", description: "Muestra el campo de empresa." },
        { name: "showSubject", type: "boolean", default: "true", description: "Muestra el campo de asunto." },
        { name: "submitButtonText", type: "string", default: "\"Enviar Mensaje\"", description: "Texto del botón de envío." },
      ]}
      examples={[
        {
          title: "Formulario mínimo",
          description: "Solo campos esenciales sin empresa ni asunto.",
          preview: (
            <div className="w-full max-w-2xl border rounded-lg p-6 bg-card">
              <ContactForm showCompany={false} showSubject={false} submitButtonText="Enviar consulta" />
            </div>
          ),
          code: `<ContactForm
  showCompany={false}
  showSubject={false}
  submitButtonText="Enviar consulta"
  onSubmit={(data) => console.log(data)}
/>`,
        },
        {
          title: "Con callback de envío",
          description: "Formulario completo con handler de submit.",
          preview: (
            <div className="w-full max-w-2xl border rounded-lg p-6 bg-card">
              <ContactForm submitButtonText="Solicitar demo" />
            </div>
          ),
          code: `<ContactForm
  submitButtonText="Solicitar demo"
  onSubmit={async (data) => {
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
    toast.success("Solicitud enviada");
  }}
/>`,
        },
      ]}
    />
  );
}