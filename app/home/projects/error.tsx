"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-gray-100 relative px-4">
      <BubblesBackground className="opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center p-8 bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-2">Project Error</h1>
        <p className="text-gray-400 mb-8">
          We&apos;ve encountered an error while loading the project. Please try
          again or return to the projects page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => reset()}
            variant="outline"
            className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button
            onClick={() => router.push("/home/projects")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
