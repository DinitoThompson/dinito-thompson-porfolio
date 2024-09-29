import React, { useState } from "react";
import { Send, Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-t from-black via-gray-900 to-blue-900 text-white flex items-center justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          Let&apos;s Connect
        </motion.h2>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-2/5 bg-gradient-to-br from-blue-900 to-purple-900 p-8 lg:p-12"
            >
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="mb-8 text-gray-300">
                I&apos;m always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="mr-4 h-6 w-6 text-blue-400" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 h-6 w-6 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-4 h-6 w-6 text-blue-400" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="mr-4 h-6 w-6 text-blue-400" />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-white hover:text-blue-400"
                      >
                        Start a Chat
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Chat with Me</DialogTitle>
                        <DialogDescription>
                          This is a placeholder for a chat interface. In a real
                          application, you&apos;d implement a live chat feature
                          here.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <p>Chat functionality coming soon!</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="lg:w-3/5 p-8 lg:p-12 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="bg-gray-700/50 border-gray-600 focus:border-blue-500 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-700/50 border-gray-600 focus:border-blue-500 text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  className="bg-gray-700/50 border-gray-600 focus:border-blue-500 text-white placeholder-gray-400 min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
