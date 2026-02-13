import { ComponentShowcase } from "../components/ui/component-showcase";
import { UserProfileCard } from "../components/patterns/UserProfileCard";

const code = `import { UserProfileCard } from "@/components/patterns/UserProfileCard";

export function UserProfileDemo() {
  return (
    <UserProfileCard 
      user={{
        name: "Maria Gonzalez",
        role: "Financial Manager",
        initials: "MG",
        email: "maria.gonzalez@company.com",
        company: "Tech Solutions SAS",
        status: "active",
        tags: ["Finance", "Approver", "Admin"],
        stats: [
          { label: "Operations", value: "145" },
          { label: "Approved", value: "98%" },
          { label: "Team", value: "12" },
        ]
      }}
    />
  );
}`;

export function UserProfilePage() {
  return (
    <ComponentShowcase
      title="User Profile Card"
      description="User profile card with statistics and tags."
      category="Business Pattern"
      preview={
        <UserProfileCard 
          user={{
            name: "Maria Gonzalez",
            role: "Financial Manager",
            initials: "MG",
            email: "maria.gonzalez@company.com",
            company: "Tech Solutions SAS",
            status: "active",
            tags: ["Finance", "Approver", "Admin"],
            stats: [
              { label: "Operations", value: "145" },
              { label: "Approved", value: "98%" },
              { label: "Team", value: "12" },
            ]
          }}
        />
      }
      code={code}
    />
  );
}
