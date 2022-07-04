import React from "react";

//HeadlessUI
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const FullstackProjects = ({ Name, iFrame, Github, Cover, Color }) => {
  let [preview, setPreview] = useState(false);

  function closePreview() {
    setPreview(false);
  }
  function openPreview() {
    setPreview(true);
  }

  return (
    <div>
      {/* Project Name */}
      <p className="my-4 text-white font-extralight tracking-widest">
        <span className={`text-${Color}-400`}>{Name}</span> React
      </p>
      {/* Project Cover Image */}
      <div className="shadow-md shadow-gray-600 rounded-lg hover:cursor-pointer">
        <img
          onClick={openPreview}
          className="rounded-md w-full h-[9.5rem] duration-200 hover:scale-105"
          src={Cover}
          alt={Name}
        />
      </div>
      {/* Project Buttons */}
      <div>
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={openPreview}
            className="w-auto px-6 py-1 m-4 duration-200 hover:scale-105"
          >
            Preview
          </button>
          <a
            href={Github}
            alt={Name}
            target="__blank"
            className="w-auto px-6 py-1 m-4 duration-200 hover:scale-105"
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                      <p className="my-4 text-center text-white font-extralight text-3xl tracking-widest">
                        {Name}
                      </p>
                    </div>

                    <div className="flex items-center">{iFrame}</div>

                    <div className="flex flex-row justify-center mt-4 space-x-30">
                      <a
                        href={Github}
                        alt={Name}
                        target="__blank"
                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-lg font-medium text-white hover:border-b-white duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      >
                        Github
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

export default FullstackProjects;
