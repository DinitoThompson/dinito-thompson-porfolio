import React from "react";
import { RiContactsLine } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black to-[#0a192f] text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl tracking-widest uppercase font-bold inline border-b-4 border-white">
            About
          </p>
        </div>
        <p className="text-2xl sm:text-1xl mt-10">
          Greetings ! <br />
          My name is Dinito Thompson, <br /> A{" "}
          <span className="text-blue-400">Fullstack Developer</span> &{" "}
          <span className="text-blue-400">Graphic Designer</span> with a history
          of working with modern technologies to solve complex design &
          computational problems.
        </p>
        <div className="flex flex-row space-x-10 mt-5">
          <button className="text-white uppercase group border-b-2 hover:border-b-blue-400 px-4 py-3 my-7 flex items-center duration-500">
            <Link
              to={"experience"}
              smooth={true}
              duration={500}
              className="flex flex-row items-center"
            >
              Experience{" "}
              <span className="px-4 group-hover:scale-[1.3] duration-300">
                <MdAssignment className="w-5 h-7 group-hover:text-blue-400 duration-500 my-auto" />
              </span>
            </Link>
          </button>
          <button className="text-white uppercase group border-b-2 hover:border-b-blue-400 px-3 py-3 my-7 flex items-center duration-500">
            <Link
              to={"portfolio"}
              smooth={true}
              duration={500}
              className="flex flex-row items-center"
            >
              Portfolio{" "}
              <span className="px-4 group-hover:scale-[1.3] duration-300">
                <RiContactsLine className="w-5 h-7 group-hover:text-blue-400 duration-500 my-auto" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
