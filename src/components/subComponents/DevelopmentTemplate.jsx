import React from "react";

//HeadlessUI
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const DevelopmentTemplate = ({
  Name,
  iFrame,
  Github,
  Cover,
  TextColor,
  Link,
}) => {
  let [preview, setPreview] = useState(false);

  function closePreview() {
    setPreview(false);
  }
  function openPreview() {
    setPreview(true);
  }

  return (
    <div>
      {/* Project Cover Image */}
      <div className="shadow-md shadow-gray-600 rounded-lg hover:cursor-pointer">
        {/* Project Name */}
        <p className="m-2 font-medium tracking-widest text-center">
          <span className={TextColor}>{Name}</span>
        </p>
        <img
          onClick={openPreview}
          className="rounded-md duration-200 hover:scale-105 w-[480px] h-[100px] sm:h-[150px]"
          src={Cover}
          alt={Name}
        />
        {/* Project Buttons */}
        <div className="flex justify-center">
          <button
            onClick={openPreview}
            className="m-2 border border-transparent tracking-widest hover:border-b-white hover:scale-105 duration-500"
          >
            Preview
          </button>
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
                <div className="flex justify-center items-center w-full rounded-lg">
                  <Dialog.Panel className="w-full max-w-[1000px] transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                    <div className="text-white flex flex-row items-center">
                      <p className="my-4 text-center mx-auto text-white font-extralight text-3xl tracking-widest">
                        <span className={TextColor}>{Name}</span>
                      </p>
                    </div>

                    <div className="flex items-center">{iFrame}</div>

                    <div className="flex flex-row justify-center mt-4">
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
