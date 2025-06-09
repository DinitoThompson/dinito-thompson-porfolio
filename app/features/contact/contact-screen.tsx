"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  Mail,
  Phone,
  FileText,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Link } from "next-view-transitions";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { cn } from "@/lib/utils";

export default function ContactScreen() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canSendEmail, setCanSendEmail] = useState(true);
  const [countdown, setCountdown] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

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
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
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
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSendEmail) {
      toast({
        title: "Rate Limit Exceeded",
        description: `Please wait ${countdown} seconds before sending another message.`,
        variant: "destructive",
      });
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description:
            "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        setCanSendEmail(false);
        setCountdown(60);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.error || "Failed to send email");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Subtle background */}
      <BubblesBackground className="opacity-60" />

      <div className="relative z-10 py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Refined header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200">
              Let&apos;s Connect
            </h1>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss opportunities, collaborations, or just say hello?
              I&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Main content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={cn(
              "bg-gray-900/40 backdrop-blur-sm rounded-lg",
              "border border-gray-800/50 shadow-xl overflow-hidden"
            )}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Contact Information Panel */}
              <motion.div
                variants={itemVariants}
                className="w-full lg:w-2/5 bg-gradient-to-br from-gray-900/60 to-gray-800/60 p-8 lg:p-12"
              >
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100 mb-3">
                      Get in Touch
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      I&apos;m always open to discussing new opportunities,
                      interesting projects, or potential collaborations.
                      Let&apos;s create something amazing together.
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    <motion.div
                      className="flex items-center group cursor-default"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 mr-4">
                        <Mail className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <a
                          href="mailto:dinitothompson@gmail.com"
                          className="text-gray-200 hover:text-blue-300 transition-colors"
                        >
                          dinitothompson@gmail.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center group cursor-default"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 mr-4">
                        <Phone className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <a
                          href="tel:+18763571273"
                          className="text-gray-200 hover:text-green-300 transition-colors"
                        >
                          +1 (876) 357-1273
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center group cursor-default"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 mr-4">
                        <MapPin className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <span className="text-gray-200">Kingston, Jamaica</span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center group cursor-default"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 mr-4">
                        <Clock className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Response Time</p>
                        <span className="text-gray-200">Within 24 hours</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Resume Download */}
                  <div className="pt-6 border-t border-gray-700/30">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="https://drive.google.com/drive/folders/1gewsLO8TAwmCM2ugSrGCNH1zWaQfGVBl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-center gap-3",
                            "bg-gray-800/50 border-gray-700/50 text-gray-200",
                            "hover:bg-gray-800/80 hover:border-gray-600/50 hover:text-white",
                            "transition-all duration-200"
                          )}
                        >
                          <FileText className="h-4 w-4" />
                          Download Resume
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                variants={itemVariants}
                className="w-full lg:w-3/5 p-8 lg:p-12"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className={cn(
                          "bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder-gray-500",
                          "focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50",
                          "transition-all duration-200",
                          formErrors.name && "border-red-500/50"
                        )}
                        required
                      />
                      {formErrors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className={cn(
                          "bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder-gray-500",
                          "focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50",
                          "transition-all duration-200",
                          formErrors.email && "border-red-500/50"
                        )}
                        required
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      className={cn(
                        "bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder-gray-500",
                        "focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50",
                        "transition-all duration-200 min-h-[120px]",
                        formErrors.message && "border-red-500/50"
                      )}
                      required
                    />
                    {formErrors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      className={cn(
                        "w-full gap-2 py-3",
                        "bg-gradient-to-r from-blue-600 to-blue-700",
                        "hover:from-blue-500 hover:to-blue-600",
                        "disabled:from-gray-600 disabled:to-gray-700",
                        "transition-all duration-300",
                        "shadow-lg hover:shadow-xl"
                      )}
                      disabled={isSubmitting || !canSendEmail}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : !canSendEmail ? (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          Sent! Wait {countdown}s
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  {/* Subtle form footer */}
                  <motion.div
                    variants={itemVariants}
                    className="pt-4 text-center"
                  >
                    <p className="text-xs text-gray-500">
                      I typically respond within 24 hours. Looking forward to
                      connecting!
                    </p>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
