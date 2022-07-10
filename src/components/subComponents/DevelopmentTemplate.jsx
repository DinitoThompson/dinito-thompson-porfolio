import React from "react";

//HeadlessUI
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const DevelopmentTemplate = ({ Name, iFrame, Github, Cover, Color, Link }) => {
  let [preview, setPreview] = useState(false);

  function closePreview() {
    setPreview(false);
  }
  function openPreview() {
    setPreview(true);
  }

  return (
    <div class>
      {/* Project Name */}
      <p className="my-4 text-white font-extralight tracking-widest">
        <span className={`text-${Color}`}>{Name}</span> React
      </p>
      {/* Project Cover Image */}
      <div className="shadow-md shadow-gray-600 rounded-lg hover:cursor-pointer">
        <img
          onClick={openPreview}
          className="rounded-md duration-200 hover:scale-105 w-[500px] h-[170px]"
          src={Cover}
          alt={Name}
        />
      </div>
      {/* Project Buttons */}
      <div>
        <div className="flex items-center justify-center text-center">
          <button
            onClick={openPreview}
            className="w-1/2 px-6 py-1 m-4 border border-transparent hover:border-b-[#ffac3f] hover:scale-105 duration-500"
          >
            Preview
          </button>
          <a
            href={Github}
            target="_blank"
            rel="noreferrer"
            className="w-1/2 px-6 py-1 m-4 border border-transparent hover:border-b-[#ffac3f] hover:scale-105 duration-500"
          >
            Github
          </a>
        </div>
      </div>
      {/* Application Preview*/}
      <Transition appear show={preview} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closePreview}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gradient-to-bl from-[#0a192f] to-black bg-opacity-70 blur-md" />
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
                <div className="flex justify-center items-center w-full bg-gradient-to-tr from-black to-gray-900 rounded-lg">
                  <Dialog.Panel className="w-full max-w-[1000px] transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                    <div className="text-white flex flex-row items-center">
                      <p className="my-4 text-center mx-auto text-white font-extralight text-3xl tracking-widest">
                        {Name}
                      </p>
                    </div>

                    <div className="flex items-center">{iFrame}</div>

                    <div className="flex flex-row justify-center mt-4 space-x-10">
                      <a
                        href={Github}
                        alt={Name}
                        target="__blank"
                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-lg font-medium text-white hover:border-b-white duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      >
                        Github
                      </a>
                      <a
                        href={Link}
                        alt={Name}
                        target="__blank"
                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-lg font-medium text-white hover:border-b-white duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      >
                        Youtube
                      </a>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-lg font-medium text-white hover:border-b-white duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        onClick={closePreview}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DevelopmentTemplate;
