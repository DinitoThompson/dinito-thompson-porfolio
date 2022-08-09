/* eslint-disable no-unused-vars */
import { React, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

//SubComponents - Templates
import Development from "./subComponents/DevelopmentTemplate";
import DesignTemplate from "./subComponents/DesignTemplate";

const ProjectsSection = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeGallery() {
    setIsOpen(false);
  }

  function openGallery() {
    setIsOpen(true);
  }

  // Development Projects
  const DevelopmentProjects = [
    {
      Name: "Pirates Prime",
      Link: "https://youtu.be/8kSEmysnpbM",
      iFrame: (
        <iframe
          width="850"
          height="550"
          className="mx-auto rounded-[1.5rem] sm:scale-90"
          src="https://www.youtube.com/embed/8kSEmysnpbM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      ),
      Github: "https://github.com/DinitoThompson/ReactJS-Pirates-Prime",
      Cover: "/assets/Development/PiratesPrime.png",
      TextColor: "text-green-400",
    },
    {
      Name: "Weather App",
      Link: "https://youtu.be/u2mFi9kcABg",
      iFrame: (
        <iframe
          className="mx-auto rounded-[1.5rem] sm:scale-90"
          width="850"
          height="550"
          src="https://www.youtube.com/embed/u2mFi9kcABg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      ),
      Github: "https://github.com/DinitoThompson/React-Weather-App",
      Cover: "/assets/Development/WeatherApp.png",
      TextColor: "text-orange-400",
    },
    {
      Name: "Todo List",
      Link: "https://youtu.be/A3Knf9vIgJA",
      iFrame: (
        <iframe
          className="mx-auto rounded-[1.5rem] sm:scale-90"
          width="850"
          height="550"
          src="https://www.youtube.com/embed/A3Knf9vIgJA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      ),
      Github: "https://github.com/DinitoThompson/React-Editable-Todo-List",
      Cover: "/assets/Development/EditableTodoList.png",
      TextColor: `text-blue-400`,
    },
  ];

  //Design Projects
  const RecentDesign = [
    {
      Url: "/assets/Design/CrownOfEster.png",
      Name: "Crown Of Ester",
    },
    {
      Url: "/assets/Design/GettingFit.png",
      Name: "Getting Fit",
    },
    {
      Url: "/assets/Design/ChelseaJo.png",
      Name: "ChelseaJo",
    },
    {
      Url: "/assets/Design/Fllego.jpeg",
      Name: "Fllego",
    },
  ];

  // Disgin Gallery
  const DesignGallery = [
    {
      Url: "/assets/Design/Poshbytoya.png",
      Name: "Poshbytoya",
    },
    {
      Url: "/assets/Design/BodyIn.png",
      Name: "Body In ",
    },
    {
      Url: "/assets/Design/Pengin.png",
      Name: "Pengin",
    },
    {
      Url: "/assets/Design/D&J-Life-Coaches.png",
      Name: "D & J Life Coaches",
    },
    {
      Url: "/assets/Design/MomisHomes.JPG",
      Name: "Momis Homes",
    },
    {
      Url: "/assets/Design/NellaStyles.JPG",
      Name: "Nella Styles",
    },
    {
      Url: "/assets/Design/Wolferic-Security.png",
      Name: "Wolferic Security Inc",
    },
    {
      Url: "/assets/Design/Lux&Lot.JPG",
      Name: "Lux & Lot",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full h-screen bg-gradient-to-tl from-orange-900 via-black to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="pb-2">
          <p className="text-4xl uppercase font-bold border-b-4 border-white inline">
            Portfolio
          </p>
          <div className="py-4">
            {/* Development Projects */}
            <p className="pt-4 uppercase">Development Projects </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-[0.9rem] px-2 sm:px-0">
              {DevelopmentProjects.map(
                ({ id, Name, iFrame, Github, Cover, TextColor, Link }) => (
                  <div key={id}>
                    <Development
                      Name={Name}
                      iFrame={iFrame}
                      Github={Github}
                      Cover={Cover}
                      TextColor={TextColor}
                      Link={Link}
                    />
                  </div>
                )
              )}
            </div>
          </div>
          {/* Design Projects */}
          <p className="pt-4 pb-2">
            <span className="uppercase">Design Projects</span> -{" "}
            <button
              onClick={openGallery}
              className="text-gray-400 tracking-widest hover:cursor-pointer hover:text-[#ffac3f] duration-400"
            >
              See More?
            </button>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-0">
            {RecentDesign.map(({ id, Url, Name }) => (
              <div key={id} className="flex items-center">
                <DesignTemplate Url={Url} Name={Name} />
              </div>
            ))}
          </div>

          {/* Gallery Preview */}
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeGallery}>
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
                      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 sm:px-0">
                        {DesignGallery.map(({ id, Url, Name }) => (
                          <div key={id} className="flex items-center">
                            <DesignTemplate Url={Url} Name={Name} />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-4 space-x-5">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-lg font-medium text-white hover:border-b-white duration-500"
                          onClick={closeGallery}
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

export default ProjectsSection;
