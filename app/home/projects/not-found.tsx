"use client";

import { motion } from "framer-motion";
import { BubblesBackground } from "@/app/components/animated-background/bubbles-animated-bg";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProjectNotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-gray-100 relative px-4">
      <BubblesBackground className="opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center p-8 bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-2">Project Not Found</h1>
        <p className="text-gray-400 mb-6">
          Sorry, we couldn&apos;t find the project you&apos;re looking for. It
          might have been moved or doesn&apos;t exist.
        </p>
        <Button
          onClick={() => router.push("/home/projects")}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
      </motion.div>
    </div>
  );
}
