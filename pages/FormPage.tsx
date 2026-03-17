import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "sonner";
import { ComponentShowcase } from "../components/ui/component-showcase";

export function FormPage() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username.length < 2) {
      setError("Username must be at least 2 characters.");
      return;
    }
    setError("");
    toast.success("You submitted the following values:", {
      description: JSON.stringify({ username }, null, 2),
    });
  }

  return (
    <ComponentShowcase
      title="Form"
      description="Building forms with React Hook Form and Zod."
      category="Forms"
      atomicLevel="Pattern"
      preview={
        <form onSubmit={handleSubmit} className="space-y-8 w-2/3">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="shadcn"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (error) setError("");
              }}
            />
            <p className="text-muted-foreground text-sm">
              This is your public display name.
            </p>
            {error && <p className="text-destructive text-sm">{error}</p>}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      }
      code={`"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success("You submitted the following values:", {
      description: JSON.stringify(data, null, 2),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`}
      props={[
        {
          name: "Form",
          type: "Component",
          default: "-",
          description: "Root provider component (FormProvider from react-hook-form)",
        },
        {
          name: "FormField",
          type: "Component",
          default: "-",
          description: "Wrapper for controlled inputs (Controller)",
        },
        {
          name: "FormItem",
          type: "Component",
          default: "-",
          description: "Container for a single field with label, control, description, message",
        },
        {
          name: "FormLabel",
          type: "Component",
          default: "-",
          description: "Accessible label wired to the field via useFormField",
        },
        {
          name: "FormControl",
          type: "Component",
          default: "-",
          description: "Slot that passes id, aria-describedby, aria-invalid to input",
        },
        {
          name: "FormDescription",
          type: "Component",
          default: "-",
          description: "Helper text shown below the input",
        },
        {
          name: "FormMessage",
          type: "Component",
          default: "-",
          description: "Validation error message (auto-reads from field state)",
        },
      ]}
      examples={[]}
    />
  );
}
