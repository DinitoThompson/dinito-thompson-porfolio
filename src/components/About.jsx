import React from "react";
import { RiContactsLine } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl tracking-widest uppercase font-bold inline border-b-4 border-white">
            About
          </p>
        </div>
        <p className="text-2xl mt-10 py-2">
          Hello! My name is Dinito Thompson, <br /> A{" "}
          <span className="text-green-400">Fullstack Developer</span> &{" "}
          <span className="text-green-400">Graphic Designer</span> with a
          history of working with <br /> modern technologies to solve complex
          design & computational problems.
        </p>

        <div className="flex flex-row space-x-10">
          <button className="text-white uppercase group border-b-2 px-4 py-3 my-7 flex items-center duration-500">
            <Link
              to={"experience"}
              smooth={true}
              duration={500}
              className="flex flex-row items-center"
            >
              Experience{" "}
              <span className="px-4 group-hover:scale-[1.3] duration-300">
                <MdAssignment className=" w-5 h-7 group-hover:text-green-400 duration-500 my-auto" />
              </span>
            </Link>
          </button>
          <button className="text-white uppercase group border-b-2 px-3 py-3 my-7 flex items-center duration-500">
            <Link
              to={"contact"}
              smooth={true}
              duration={500}
              className="flex flex-row items-center"
            >
              Get In Touch{" "}
              <span className=" px-4 -rotate-90 group-hover:scale-[1.3] duration-300">
                <RiContactsLine className="rotate-90 my-auto group-hover:text-green-400 duration-500 w-5 h-5" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
