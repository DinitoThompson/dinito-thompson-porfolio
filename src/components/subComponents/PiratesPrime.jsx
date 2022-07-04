/* eslint-disable no-unused-vars */
import React from "react";

// React Icons
import { IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss, SiThemoviedatabase } from "react-icons/si";
import { DiReact, DiJava, DiCss3, DiHtml5 } from "react-icons/di";

//HeadlessUI
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

// Project Images
import PiratesPrimeBG from "../../assets/fullstack/Pirates Prime/Pirates Prime Landing Page.png";
import SignInPage from "../../assets/fullstack/Pirates Prime/Pirates Prime Sign  In.png";
import UserMovieSection from "../../assets/fullstack/Pirates Prime/Pirates Prime Movie Area.png";

//Swipper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";

const FullstackProjects = () => {
  SwiperCore.use([Autoplay]);
  let [demoOpen, setDemoOpen] = useState(false);

  function closeDemo() {
    setDemoOpen(false);
  }
  function openDemo() {
    setDemoOpen(true);
  }

  return (
    <div>
      <p className="my-4 text-white font-extralight tracking-widest">
        <span className="text-green-400">Pirates Prime</span> - React
      </p>
      {/* Image */}
      <div className="shadow-md shadow-gray-600 rounded-lg hover:cursor-pointer">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 5000,
          }}
          loop={true}
        >
          <SwiperSlide className="my-auto">
            <img
              onClick={openDemo}
              src={PiratesPrimeBG}
              alt="/"
              className="rounded-md w-full h-[9.5rem] duration-200 hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto">
            <img
              onClick={openDemo}
              src={SignInPage}
              alt="/"
              className="rounded-md w-full h-[9.5rem] duration-200 hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto">
            <img
              onClick={openDemo}
              src={UserMovieSection}
              alt="/"
              className="rounded-md w-full h-[9.5rem] duration-200 hover:scale-105"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Buttons */}
      <div>
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={openDemo}
            className="w-auto px-6 py-1 m-4 duration-200 hover:scale-105"
          >
            Demo
          </button>
          <a
            href="https://github.com/DinitoThompson/ReactJS-Pirates-Prime"
            alt="Github - Pirates Prime"
            target="__blank"
            className="w-auto px-6 py-1 m-4 duration-200 hover:scale-105"
          >
            Github
          </a>
        </div>
      </div>

      {/* Dialog Box */}
      <Transition appear show={demoOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDemo}>
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
                        <span className="text-green-400">Pirates Prime</span> -
                        Netflix Clone -
                      </p>
                      <div className="pl-5 flex space-x-5 text-3xl">
                        <IoLogoFirebase className="text-orange-400" />
                        <DiReact className="text-blue-400" />
                        <SiTailwindcss className="text-blue-500" />
                        <SiThemoviedatabase className="text-blue-500" />
                      </div>
                    </div>

                    <iframe
                      className="mx-auto rounded-t-[1.5rem] sm:scale-90"
                      width="960"
                      height="715"
                      src="https://www.youtube.com/embed/8kSEmysnpbM"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />

                    <div className="flex flex-row justify-center mt-4 space-x-30">
                      <a
                        href="https://github.com/DinitoThompson/ReactJS-Pirates-Prime"
                        alt="Github - Pirates Prime"
                        target="__blank"
                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-lg font-medium text-white hover:border-b-white duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      >
                        View Code
                      </a>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-lg font-medium text-white hover:border-b-white duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        onClick={closeDemo}
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
