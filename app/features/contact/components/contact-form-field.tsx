"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

export function ContactFormField({
  id,
  label,
  error,
  children,
}: ContactFormFieldProps) {
  return (
    <div className="min-w-0 space-y-2">
      <label
        htmlFor={id}
        className="block whitespace-nowrap text-sm font-medium text-welcome-foreground"
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          className={cn(
            "rounded-md border border-destructive/30 bg-destructive/5 px-2.5 py-1",
            "text-xs text-destructive"
          )}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export const contactInputClassName = cn(
  "h-11 border-welcome-surface-border/60 bg-welcome-surface/60 text-welcome-foreground",
  "placeholder:text-welcome-muted/70",
  "focus-visible:border-welcome-accent-blue/50 focus-visible:ring-2 focus-visible:ring-welcome-accent-blue/30",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "transition-colors duration-200"
);

export const contactTextareaClassName = cn(
  "min-h-[140px] resize-y border-welcome-surface-border/60 bg-welcome-surface/60 text-welcome-foreground",
  "placeholder:text-welcome-muted/70",
  "focus-visible:border-welcome-accent-blue/50 focus-visible:ring-2 focus-visible:ring-welcome-accent-blue/30",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "transition-colors duration-200"
);

export function ContactInput(
  props: React.ComponentProps<typeof Input> & { hasError?: boolean }
) {
  const { hasError, className, ...rest } = props;
  return (
    <Input
      className={cn(
        contactInputClassName,
        hasError && "border-destructive/50 focus-visible:ring-destructive/30",
        className
      )}
      {...rest}
    />
  );
}

export function ContactTextarea(
  props: React.ComponentProps<typeof Textarea> & { hasError?: boolean }
) {
  const { hasError, className, ...rest } = props;
  return (
    <Textarea
      className={cn(
        contactTextareaClassName,
        hasError && "border-destructive/50 focus-visible:ring-destructive/30",
        className
      )}
      {...rest}
    />
  );
}
