import React from "react";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoDocumentSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const HeaderSocials = ({ State }) => {
  return (
    <div className={`${State} md:flex`}>
      <div className=" fixed bottom-5 left-8 text-white flex flex-row items-center gap-4 gap-x-5">
        <a
          href="https://www.linkedin.com/in/dinito-thompson/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="w-7 h-7 hover:text-blue-400 duration-500" />
        </a>
        <a
          href="https://github.com/DinitoThompson/"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="w-7 h-7 hover:text-blue-400 duration-500" />
        </a>
      </div>
      <div className=" fixed bottom-5 right-8 text-white flex flex-row items-center gap-4 gap-x-5">
        <a
          href="mailto:dinitothompson@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail className="w-7 h-7 hover:text-blue-400 duration-500" />
        </a>

        <a
          href={"/assets/Documents/Dinito R. Thompson - Resume.pdf"}
          download={true}
          target="_blank"
          alt="Resume"
          rel="noreferrer"
        >
          <IoDocumentSharp className="w-7 h-7 hover:text-blue-400 duration-500" />
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
