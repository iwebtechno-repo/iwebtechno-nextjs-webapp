"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "@phosphor-icons/react";

const DemoForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    role: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, role: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
            <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
            Thank You!
          </span>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Your demo request has been received. One of our representatives will
          contact you within 24 hours to schedule your personalized demo.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          effect="glass"
          showRipple
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Phone Number
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div>
          <label
            htmlFor="institution"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Institution Name <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            id="institution"
            name="institution"
            required
            value={formState.institution}
            onChange={handleChange}
            placeholder="University of Innovation"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Your Role <span className="text-red-500">*</span>
        </label>
        <Select
          name="role"
          required
          value={formState.role}
          onValueChange={handleSelectChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Vice Chancellor">Vice Chancellor</SelectItem>
            <SelectItem value="Dean">Dean</SelectItem>
            <SelectItem value="Principal">Principal</SelectItem>
            <SelectItem value="IT Director">IT Director</SelectItem>
            <SelectItem value="Administrator">Administrator</SelectItem>
            <SelectItem value="Faculty">Faculty</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Additional Information
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={formState.message}
          onChange={handleChange}
          placeholder="Tell us about your specific requirements or questions..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        variant="gradient"
        effect="fill"
        showRipple
        className="w-full"
      >
        {isSubmitting ? "Submitting..." : "Schedule My Demo"}
      </Button>

      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        By submitting this form, you agree to our{" "}
        <a
          href="/privacy-policy"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default DemoForm;
