"use client";

import { motion } from "framer-motion";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-gray-100 relative px-4">
      <BubblesBackground className="opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center p-8 bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 max-w-md"
      >
        <div className="text-6xl font-bold text-blue-500 mb-4">404</div>
        <h1 className="text-2xl font-semibold mb-2">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button
            onClick={() => router.push("/home")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
