import Resume from "../assets/document/Dinito R. Thompson - Resume.pdf";
import { BsChevronDoubleDown } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-scroll";
import Typed from "react-typed";
import React from "react";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className=" text-white max-w-[1240px] h-screen mx-auto px-8 flex flex-col justify-center">
        <h1 className="md:text-5xl sm:text-4xl text-3xl md:py-6">
          <span className="text-4xl text-gray-400 sm:text-3xl">Hi, I'm</span>{" "}
          <span className="text-4xl text-gray-400 sm:text-3xl">{" < > "}</span>
          <span className="tracking-widest uppercase">
            <span className="font-bold">DinitoThompson</span>
          </span>
          <span className="text-4xl text-gray-400 sm:text-3xl">{" < /> "}</span>
        </h1>
        <div className="flex justify-start items-center">
          <p className="uppercase tracking-wider md:text-3xl sm:text-2xl text-xl font-bold py-4">
            FullStack Developer
            <span className=" font-normal text-gray-400"> / </span> Graphic
            Designer
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">
          <span>Skills: </span>
          <Typed
            className="text-white z-0"
            strings={[
              "React.js",
              "Adobe Photoshop",
              "Adobe Illustrator",
              "Next.js",
              "HTML",
              "Adobe Premier",
              "CSS",
              "Node.js",
              "JavaScript",
              "TailwindCSS",
            ]}
            typeSpeed={80}
            backSpeed={80}
            backDelay={500}
            loop
          />
        </p>
        <div className="flex flex-row space-x-10">
          <button className="text-white uppercase group border-b-2 px-4 py-3 my-7 flex items-center duration-500">
            <Link
              to={"about"}
              smooth={true}
              duration={500}
              className="flex flex-row items-center"
            >
              About Me{" "}
              <span className=" px-4 -rotate-90 group-hover:rotate-0 group-hover:text-green-400 duration-300">
                <BsChevronDoubleDown className=" my-auto" />
              </span>
            </Link>
          </button>
          <a
            href={Resume}
            download={true}
            target="_blank"
            alt="Resume"
            rel="noreferrer"
            className="text-white uppercase group border-b-2 px-3 py-3 my-7 flex items-center duration-500"
          >
            Resume
            <span className=" px-4 -rotate-90 group-hover:scale-[1.3] group-hover:text-blue-400 duration-300">
              <AiOutlineDownload className="rotate-90 my-auto w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
