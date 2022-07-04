import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Design = ({ Url, Name }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      {/* Image */}
      <div className="shadow-md shadow-gray-600 rounded-lg">
        {/* Hover Effect */}
        <img
          onClick={openModal}
          className="hover:cursor-pointer mx-auto rounded-md hover:scale-110 duration-500"
          src={Url}
          alt={Name}
        />
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
                <div className="flex justify-center items-center w-full h-screen bg-[#0e1113] rounded-lg">
                  <Dialog.Panel className="w-full max-w-[1000px] transform overflow-hidden rounded-2xl bg-[#0e1113] p-6 text-left align-middle shadow-xl transition-all">
                    <img
                      onClick={openModal}
                      className="mx-auto rounded-md "
                      src={Url}
                      alt={Name}
                    />
                    <p className="my-4 text-center text-white font-extralight text-3xl">
                      {Name}
                    </p>
                    <div className="flex justify-center mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-lg font-medium text-white hover:border-b-white duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        onClick={closeModal}
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

export default Design;
