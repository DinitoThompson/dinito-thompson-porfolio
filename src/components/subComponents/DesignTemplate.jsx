import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const DesignTemplate = ({ Url, Name }) => {
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
      <div className="shadow-md shadow-gray-600 rounded-lg my-auto hover:cursor-pointer">
        {/* Hover Effect */}
        <img
          onClick={openModal}
          className="rounded-md duration-200 hover:scale-105"
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
            <div className="fixed inset-0 bg-gradient-to-bl from-orange-900 via-black to-black bg-opacity-70 blur-md" />
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
                  <p className="my-4 text-center text-white font-extralight text-3xl">
                    {Name}
                  </p>
                  <img
                    onClick={openModal}
                    className="mx-auto rounded-md "
                    src={Url}
                    alt={Name}
                  />
                  <div className="flex justify-center mt-4 space-x-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-lg font-medium text-white hover:border-b-white duration-500"
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
  );
};

export default DesignTemplate;
