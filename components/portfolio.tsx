"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function PortfolioComponent() {
  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Designs />
      <Contact />
    </>
  );
}

function Intro() {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center text-center p-4"
    >
      <div>
        <h1 className="text-5xl font-bold mb-4">Dinito Thompson</h1>
        <h2 className="text-3xl mb-6">
          Fullstack Software Developer & Graphic Designer
        </h2>
        <p className="max-w-2xl mx-auto text-xl mb-8">
          Crafting beautiful digital experiences through code and design.
        </p>
        <Button asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto text-center">
          I am a passionate Fullstack Software Developer and Graphic Designer
          with a keen eye for detail and a love for creating beautiful,
          functional digital experiences. With expertise in both development and
          design, I bring a unique perspective to every project, bridging the
          gap between aesthetics and functionality.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Git",
    "Adobe Creative Suite",
    "UI/UX Design",
    "Responsive Design",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4 text-center">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with React and Node.js",
    },
    {
      title: "Task Management App",
      description: "A responsive web app for managing tasks and projects",
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Programming Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Designs() {
  const designs = [
    {
      title: "Brand Identity",
      description: "Complete brand identity design for a tech startup",
    },
    {
      title: "UI/UX Design",
      description: "User interface and experience design for a mobile app",
    },
    { title: "Print Design", description: "Magazine layout and cover design" },
  ];

  return (
    <section id="designs" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Graphic Designs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{design.title}</h3>
              <p>{design.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <Textarea placeholder="Your Message" />
          </div>
          <Button className="w-full">
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}
