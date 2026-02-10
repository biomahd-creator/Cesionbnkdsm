import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Mail, Phone, User, Building, MessageSquare, Send, CheckCircle } from "lucide-react";

/**
 * 🔒 BUSINESS PATTERN - Contact Form
 * 
 * Formulario de contacto profesional con validación
 * Incluye campos personalizables, validación y estados de éxito/error
 * 
 * Ubicación: /components/widgets/ContactForm.tsx
 * Categoría: Business Components - Alta Prioridad
 * Uso: Landing pages, páginas de contacto, formularios de lead generation
 */

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  showCompany?: boolean;
  showSubject?: boolean;
  submitButtonText?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  acceptTerms: boolean;
}

export function ContactForm({
  onSubmit,
  showCompany = true,
  showSubject = true,
  submitButtonText = "Enviar Mensaje"
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    acceptTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Debes aceptar los términos y condiciones";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    if (onSubmit) {
      onSubmit(formData);
    }

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        acceptTerms: false
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  if (submitSuccess) {
    return (
      <Card className="w-full max-w-2xl">
        <CardContent className="pt-12 pb-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">¡Mensaje Enviado!</h3>
              <p className="text-muted-foreground">
                Gracias por contactarnos. Te responderemos pronto.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Formulario de Contacto
            </CardTitle>
            <CardDescription>
              Completa el formulario y nos pondremos en contacto contigo
            </CardDescription>
          </div>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
            Respuesta en 24h
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Nombre completo *
              </Label>
              <Input
                id="name"
                placeholder="Juan Pérez"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="juan@empresa.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Phone and Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Teléfono
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+57 300 123 4567"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            {showCompany && (
              <div className="space-y-2">
                <Label htmlFor="company" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Empresa
                </Label>
                <Input
                  id="company"
                  placeholder="Nombre de la empresa"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                />
              </div>
            )}
          </div>

          {/* Subject */}
          {showSubject && (
            <div className="space-y-2">
              <Label htmlFor="subject">Asunto *</Label>
              <Select
                value={formData.subject}
                onValueChange={(value) => handleChange("subject", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un tema" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">Consulta General</SelectItem>
                  <SelectItem value="factoring">Servicios de Factoring</SelectItem>
                  <SelectItem value="demo">Solicitar Demo</SelectItem>
                  <SelectItem value="soporte">Soporte Técnico</SelectItem>
                  <SelectItem value="ventas">Ventas</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje *</Label>
            <Textarea
              id="message"
              placeholder="Cuéntanos en qué podemos ayudarte..."
              rows={5}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={errors.message ? "border-red-500" : ""}
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Mínimo 10 caracteres
            </p>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="terms"
              checked={formData.acceptTerms}
              onCheckedChange={(checked) => handleChange("acceptTerms", checked as boolean)}
              className={errors.acceptTerms ? "border-red-500" : ""}
            />
            <div className="space-y-1">
              <Label 
                htmlFor="terms" 
                className="text-sm font-normal cursor-pointer"
              >
                Acepto los{" "}
                <a href="#" className="text-primary hover:underline">
                  términos y condiciones
                </a>{" "}
                y la{" "}
                <a href="#" className="text-primary hover:underline">
                  política de privacidad
                </a>
              </Label>
              {errors.acceptTerms && (
                <p className="text-sm text-red-500">{errors.acceptTerms}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>Enviando...</>
            ) : (
              <>
                <Send className="h-4 w-4" />
                {submitButtonText}
              </>
            )}
          </Button>

          {/* Footer Note */}
          <p className="text-xs text-center text-muted-foreground">
            * Campos requeridos. Responderemos en un máximo de 24 horas hábiles.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
