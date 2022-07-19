import React, { Fragment, useState } from "react";

// Link for Image Icons: https://www.flaticon.com/

import { Dialog, Transition } from "@headlessui/react";

import Skill from "./subComponents/Skill";
import { Link } from "react-scroll";
import { BsChevronDoubleDown } from "react-icons/bs";

const SkillSet = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const Development = [
    {
      id: 1,
      Url: "/assets/Logo_Icons/react.png",
      Name: "ReactJs",
      Style: "shadow-blue-600",
    },
    {
      id: 2,
      Url: "/assets/Logo_Icons/javascript.png",
      Name: "JavaScript",
      Style: "shadow-yellow-500",
    },
    {
      id: 3,
      Url: "/assets/Logo_Icons/SQL.png",
      Name: "SQL",
      Style: "shadow-yellow-400",
    },
    {
      id: 4,
      Url: "/assets/Logo_Icons/Java.png",
      Name: "Java",
      Style: "shadow-orange-400",
    },
  ];

  const Design = [
    {
      id: 1,
      Url: "/assets/Logo_Icons/Photoshop.png",
      Name: "Photoshop",
      Style: "shadow-blue-400",
    },
    {
      id: 2,
      Url: "/assets/Logo_Icons/Illustrator.png",
      Name: "Illustrator",
      Style: "shadow-orange-600",
    },
  ];

  const MoreTech = [
    {
      id: 1,
      Url: "/assets/Logo_Icons/html.png",
      Name: "HTML",
      Style: "shadow-orange-500",
    },
    {
      id: 2,
      Url: "/assets/Logo_Icons/css.png",
      Name: "CSS",
      Style: "shadow-blue-500",
    },
    {
      id: 3,
      Url: "/assets/Logo_Icons/C++.png",
      Name: "C++",
      Style: "shadow-blue-500",
    },
    {
      id: 4,
      Url: "/assets/Logo_Icons/node.png",
      Name: "NodeJs",
      Style: "shadow-green-400",
    },
    {
      id: 5,
      Url: "/assets/Logo_Icons/git.png",
      Name: "Git",
      Style: "shadow-orange-500",
    },
    {
      id: 6,
      Url: "/assets/Logo_Icons/Premiere.png",
      Name: "Premiere",
      Style: "shadow-purple-400",
    },
    {
      id: 7,
      Url: "/assets/Logo_Icons/firebase.png",
      Name: "Firebase",
      Style: "shadow-orange-400",
    },
    {
      id: 8,
      Url: "/assets/Logo_Icons/tailwind.png",
      Name: "Tailwind",
      Style: "shadow-sky-400",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full h-screen bg-experience-page bg-center bg-fixed bg-cover"
    >
      <div className="bg-gradient-to-tr from-black to-[#252629] w-full h-screen opacity-95">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white opacity-100">
          <div>
            <p className="text-4xl uppercase font-bold border-b-4 border-white inline w-auto">
              Experience
            </p>
          </div>

          <div className="flex items-center">
            <p className="pt-6">
              My Current Techstacks -{" "}
              <button
                onClick={openModal}
                className="text-gray-400 tracking-widest hover:cursor-pointer hover:text-[#ffac3f] duration-400"
              >
                See More?
              </button>
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {Development.map(({ id, Url, Name, Style }) => (
              <div key={id}>
                <Skill Url={Url} Name={Name} Style={Style} />
              </div>
            ))}
            {Design.map(({ id, Url, Name, Style }) => (
              <div key={id}>
                <Skill Url={Url} Name={Name} Style={Style} />
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <Link to={"portfolio"} smooth={true} duration={500}>
              <button className="text-white uppercase group border-b-2 px-4 py-3 my-2 flex items-center border-b-white hover:border-b-[#ffac3f] duration-300">
                Portfolio
                <span className="group-hover:scale-125 duration-300">
                  <BsChevronDoubleDown className="ml-3 group-hover:text-[#ffac3f]" />
                </span>
              </button>
            </Link>
          </div>

          {/* Dialog Box */}
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gradient-to-tr from-black to-[#252629] bg-opacity-70 blur-md" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-[1000px] transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center p-4 sm:px-0">
                        {MoreTech.map(({ id, Url, Name, Style }) => (
                          <div key={id}>
                            <Skill Url={Url} Name={Name} Style={Style} />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-4 space-x-5">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-lg font-medium text-white hover:border-b-[#ffac3f] duration-500"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
