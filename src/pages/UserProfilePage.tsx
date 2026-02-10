import { ComponentShowcase } from "../components/ui/component-showcase";
import { UserProfileCard } from "../components/patterns/UserProfileCard";

const code = `import { UserProfileCard } from "@/components/patterns/UserProfileCard";

export function UserProfileDemo() {
  return (
    <UserProfileCard 
      user={{
        name: "María González",
        role: "Gerente Financiera",
        initials: "MG",
        email: "maria.gonzalez@empresa.com",
        company: "Tech Solutions SAS",
        status: "active",
        tags: ["Finanzas", "Aprobador", "Admin"],
        stats: [
          { label: "Operaciones", value: "145" },
          { label: "Aprobadas", value: "98%" },
          { label: "Equipo", value: "12" },
        ]
      }}
    />
  );
}`;

export function UserProfilePage() {
  return (
    <ComponentShowcase
      title="User Profile Card"
      description="Tarjeta de perfil de usuario con estadísticas y tags."
      category="Business Pattern"
      preview={
        <UserProfileCard 
          user={{
            name: "María González",
            role: "Gerente Financiera",
            initials: "MG",
            email: "maria.gonzalez@empresa.com",
            company: "Tech Solutions SAS",
            status: "active",
            tags: ["Finanzas", "Aprobador", "Admin"],
            stats: [
              { label: "Operaciones", value: "145" },
              { label: "Aprobadas", value: "98%" },
              { label: "Equipo", value: "12" },
            ]
          }}
        />
      }
      code={code}
    />
  );
}
