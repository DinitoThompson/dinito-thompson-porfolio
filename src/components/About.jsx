import React from "react";
import { RiContactsLine } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-tl from-orange-900 via-black to-black text-white"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl tracking-widest uppercase font-bold inline border-b-4 border-[white]">
            About
          </p>
        </div>
        <div>
          <p className="text-xl sm:text-2xl mt-10 tracking-wide">
            Greetings ! <br />
            My name is Dinito Thompson. <br />A {""}
            <span className="font-medium tracking-wider">
              <span className="text-[#ffac3f]">Software Developer</span> &{" "}
              <span className="text-[#ffac3f]">Graphic Designer</span>
            </span>{" "}
            with a history of working with modern technologies to solve complex
            design & computational problems.
          </p>
        </div>
        <div className="flex flex-row space-x-10 mt-5">
          <button className="text-white uppercase group border-b-2 hover:border-b-[#ffac3f] px-0.5 py-3 my-7 flex items-center duration-500">
            <Link
              to={"experience"}
              smooth={true}
              duration={500}
              className="flex flex-row items-center"
            >
              Experience{" "}
              <span className="px-4 group-hover:scale-[1.3] duration-300">
                <MdAssignment className="w-5 h-7 group-hover:text-[#ffac3f] duration-500 my-auto" />
              </span>
            </Link>
          </button>
          <button className="text-white uppercase group border-b-2 hover:border-b-[#ffac3f] px-0.5 py-3 my-7 flex items-center duration-500">
            <Link
              to={"portfolio"}
              smooth={true}
              duration={500}
              className="flex flex-row items-center"
            >
              Portfolio{" "}
              <span className="px-4 group-hover:scale-[1.3] duration-300">
                <RiContactsLine className="w-5 h-7 group-hover:text-[#ffac3f] duration-500 my-auto" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
