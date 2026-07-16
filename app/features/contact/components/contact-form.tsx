"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  ContactFormField,
  ContactInput,
  ContactTextarea,
} from "./contact-form-field";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canSendEmail, setCanSendEmail] = useState(true);
  const [countdown, setCountdown] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setCanSendEmail(true);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!canSendEmail) {
      toast({
        title: "Please wait",
        description: `Try again in ${countdown} seconds.`,
        variant: "destructive",
      });
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent",
          description: "I'll get back to you within 24 hours.",
        });
        setCanSendEmail(false);
        setCountdown(60);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Couldn't send message",
        description:
          error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        <ContactFormField id="name" label="Full Name" error={formErrors.name}>
          <ContactInput
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            hasError={!!formErrors.name}
            autoComplete="name"
          />
        </ContactFormField>

        <ContactFormField
          id="email"
          label="Email"
          error={formErrors.email}
        >
          <ContactInput
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
            hasError={!!formErrors.email}
            autoComplete="email"
          />
        </ContactFormField>
      </div>

      <ContactFormField id="message" label="Message" error={formErrors.message}>
        <ContactTextarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Project details, opportunity, or a quick hello..."
          hasError={!!formErrors.message}
        />
      </ContactFormField>

      <div className="space-y-3 pt-1">
        <Button
          type="submit"
          disabled={isSubmitting || !canSendEmail}
          className={cn(
            "h-11 w-full cursor-pointer gap-2 whitespace-nowrap sm:w-auto sm:min-w-[180px]",
            "bg-welcome-accent-blue text-white shadow-[0_4px_20px_hsl(var(--welcome-accent-blue)/0.35)]",
            "hover:bg-welcome-accent-blue/90",
            "focus-visible:ring-2 focus-visible:ring-welcome-accent-blue/40",
            "disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none"
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 shrink-0 animate-spin" />
              Sending…
            </>
          ) : !canSendEmail ? (
            <>
              <CheckCircle className="h-4 w-4 shrink-0" />
              Sent · {countdown}s
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4 shrink-0" />
            </>
          )}
        </Button>

        <p className="text-xs text-welcome-muted">
          Typical response within 24 hours.
        </p>
      </div>
    </form>
  );
}
