import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { AlertCircle, CheckCircle2 } from "lucide-react";

/**
 * 🔒 ADVANCED COMPONENT - Conditional Form
 * 
 * Form with conditional logic that dynamically shows/hides fields
 * based on user responses in real time.
 * 
 * Location: /components/advanced/ConditionalForm.tsx
 * Category: Advanced Forms - Medium Priority
 * Usage: Surveys, applications, smart forms, dynamic questionnaires
 */

interface FormData {
  userType?: string;
  businessType?: string;
  companyName?: string;
  industry?: string;
  employeeCount?: string;
  hasWebsite?: boolean;
  websiteUrl?: string;
  monthlyRevenue?: string;
  fundingStage?: string;
  yearsInBusiness?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ConditionalForm() {
  const [formData, setFormData] = useState<FormData>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const resetForm = () => {
    setFormData({});
    setSubmitted(false);
  };

  // Conditional logic helpers
  const isBusinessUser = formData.userType === "business";
  const isIndividualUser = formData.userType === "individual";
  const isStartup = formData.businessType === "startup";
  const isEnterprise = formData.businessType === "enterprise";
  const hasWebsite = formData.hasWebsite === true;

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Conditional Form Example</CardTitle>
        <CardDescription>
          Fields appear/disappear based on your selections
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="h-16 w-16 mx-auto text-green-500" />
            <h3 className="font-bold">Form Submitted Successfully!</h3>
            <p className="text-sm text-muted-foreground">
              Thank you for your submission. We'll get back to you soon.
            </p>
            <Button onClick={resetForm}>Submit Another Response</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: User Type Selection */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                I am a... <span className="text-destructive">*</span>
              </Label>
              <RadioGroup
                value={formData.userType}
                onValueChange={(value) => updateField("userType", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="individual" id="individual" />
                  <Label htmlFor="individual" className="font-normal cursor-pointer">
                    Individual
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="business" id="business" />
                  <Label htmlFor="business" className="font-normal cursor-pointer">
                    Business
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Conditional: Business Fields */}
            {isBusinessUser && (
              <div className="space-y-6 p-4 border rounded-lg bg-accent/20">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Business Information</Badge>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </div>

                {/* Business Type */}
                <div className="space-y-2">
                  <Label htmlFor="businessType">
                    Business Type <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.businessType}
                    onValueChange={(value) => updateField("businessType", value)}
                  >
                    <SelectTrigger id="businessType">
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="smb">Small/Medium Business</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                      <SelectItem value="nonprofit">Non-Profit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName">
                    Company Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    value={formData.companyName || ""}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    placeholder="Acme Inc."
                  />
                </div>

                {/* Industry */}
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => updateField("industry", value)}
                  >
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Conditional: Startup-specific fields */}
                {isStartup && (
                  <div className="space-y-4 p-4 border-l-4 border-primary bg-primary/5 rounded">
                    <p className="text-sm font-medium">Startup Information</p>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fundingStage">Funding Stage</Label>
                      <Select
                        value={formData.fundingStage}
                        onValueChange={(value) => updateField("fundingStage", value)}
                      >
                        <SelectTrigger id="fundingStage">
                          <SelectValue placeholder="Select funding stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bootstrap">Bootstrapped</SelectItem>
                          <SelectItem value="seed">Seed</SelectItem>
                          <SelectItem value="seriesA">Series A</SelectItem>
                          <SelectItem value="seriesB">Series B+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Conditional: Enterprise-specific fields */}
                {isEnterprise && (
                  <div className="space-y-4 p-4 border-l-4 border-blue-500 bg-blue-500/5 rounded">
                    <p className="text-sm font-medium">Enterprise Information</p>
                    
                    <div className="space-y-2">
                      <Label htmlFor="employeeCount">Number of Employees</Label>
                      <Select
                        value={formData.employeeCount}
                        onValueChange={(value) => updateField("employeeCount", value)}
                      >
                        <SelectTrigger id="employeeCount">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500-1000">500-1,000</SelectItem>
                          <SelectItem value="1000-5000">1,000-5,000</SelectItem>
                          <SelectItem value="5000+">5,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="yearsInBusiness">Years in Business</Label>
                      <Input
                        id="yearsInBusiness"
                        type="number"
                        value={formData.yearsInBusiness || ""}
                        onChange={(e) => updateField("yearsInBusiness", e.target.value)}
                        placeholder="10"
                        min="0"
                      />
                    </div>
                  </div>
                )}

                {/* Website checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasWebsite"
                    checked={formData.hasWebsite}
                    onCheckedChange={(checked) => updateField("hasWebsite", checked)}
                  />
                  <Label htmlFor="hasWebsite" className="font-normal cursor-pointer">
                    I have a company website
                  </Label>
                </div>

                {/* Conditional: Website URL */}
                {hasWebsite && (
                  <div className="space-y-2 pl-6">
                    <Label htmlFor="websiteUrl">Website URL</Label>
                    <Input
                      id="websiteUrl"
                      type="url"
                      value={formData.websiteUrl || ""}
                      onChange={(e) => updateField("websiteUrl", e.target.value)}
                      placeholder="https://example.com"
                    />
                  </div>
                )}

                {/* Monthly Revenue */}
                <div className="space-y-2">
                  <Label htmlFor="monthlyRevenue">Estimated Monthly Revenue</Label>
                  <Select
                    value={formData.monthlyRevenue}
                    onValueChange={(value) => updateField("monthlyRevenue", value)}
                  >
                    <SelectTrigger id="monthlyRevenue">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                      <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k+">$100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Common Fields (always visible after user type selection) */}
            {formData.userType && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName || ""}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone || ""}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message || ""}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell us about your needs..."
                    rows={4}
                    required
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            {formData.userType && (
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  Submit Form
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Reset
                </Button>
              </div>
            )}

            {/* Helper text */}
            {!formData.userType && (
              <div className="text-center py-6 text-sm text-muted-foreground">
                <AlertCircle className="h-5 w-5 mx-auto mb-2" />
                Select your user type to continue
              </div>
            )}
          </form>
        )}
      </CardContent>
    </Card>
  );
}