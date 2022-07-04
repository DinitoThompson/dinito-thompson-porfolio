/* eslint-disable no-unused-vars */
import React from "react";

// Graphic Designs - Images
import GettingFit from "../assets/graphic_design/GettingFit.png";
import Poshbytoya from "../assets/graphic_design/Poshbytoya.png";
import ChelseaJo from "../assets/graphic_design/ChelseaJo.png";
import CrownOfEster from "../assets/graphic_design/CrownOfEster.png";
import LifeCoach from "../assets/graphic_design/D&J-Life-Coaches.png";
import Fllego from "../assets/graphic_design/Fllego.jpeg";
import IvyHouse from "../assets/graphic_design/IvyHouse.JPG";
import LuxLot from "../assets/graphic_design/Lux&Lot.JPG";
import MomisHomes from "../assets/graphic_design/MomisHomes.JPG";
import NellaStyles from "../assets/graphic_design/NellaStyles.JPG";
import Pengin from "../assets/graphic_design/Pengin.png";
import Shermas from "../assets/graphic_design/ShermasOneStopShop.jpg";

// Software Development - Images
import PiratesPrimeBG from "../assets/fullstack/Pirates Prime/Pirates Prime Landing Page.png";
import WeatherAppBG from "../assets/fullstack/Weather App/React Weather App.png";
import TodoListBG from "../assets/fullstack/TodoList/React Editable Todo List.png";

//SubComponents - Templates
import Development from "./subComponents/Development-Template";
import Design from "./subComponents/Design Template";

//Swuipper JS
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";

const ProjectsSection = () => {
  SwiperCore.use([Autoplay]);

  // Development Projects
  const DevelopmentProjects = [
    {
      Name: "Pirates Prime",
      iFrame: (
        <iframe
          width="960"
          height="715"
          className="mx-auto rounded-t-[1.5rem]"
          src="https://www.youtube.com/embed/8kSEmysnpbM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      ),
      Github: "https://github.com/DinitoThompson/ReactJS-Pirates-Prime",
      Cover: PiratesPrimeBG,
      Color: "green",
    },
    {
      Name: "Open Weather App",
      iFrame: (
        <iframe
          className="mx-auto rounded-t-[1.5rem] sm:scale-90"
          width="960"
          height="715"
          src="https://www.youtube.com/embed/u2mFi9kcABg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      ),
      Github: "https://github.com/DinitoThompson/React-Weather-App",
      Cover: WeatherAppBG,
      Color: "orange",
    },
    {
      Name: "Editable Todo List",
      iFrame: (
        <iframe
          className="mx-auto rounded-t-[1.5rem] sm:scale-90"
          width="960"
          height="715"
          src="https://www.youtube.com/embed/A3Knf9vIgJA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      ),
      Github: "https://github.com/DinitoThompson/React-Editable-Todo-List",
      Cover: TodoListBG,
      Color: "blue",
    },
  ];
  //Design Projects
  const DesignProjects = [
    {
      Url: GettingFit,
      Name: "Getting Fit",
    },
    {
      Url: Poshbytoya,
      Name: "Poshbytoya",
    },
    {
      Url: ChelseaJo,
      Name: "ChelseaJo",
    },
    {
      Url: CrownOfEster,
      Name: "Crown Of Ester",
    },
    {
      Url: LifeCoach,
      Name: "Life Coach",
    },
    {
      Url: Fllego,
      Name: "Fllego",
    },
    {
      Url: IvyHouse,
      Name: "Ivy House",
    },
    {
      Url: LuxLot,
      Name: "Lux & Lot",
    },
    {
      Url: MomisHomes,
      Name: "Momis Homes",
    },
    {
      Url: NellaStyles,
      Name: "NellaStyles",
    },
    {
      Url: Pengin,
      Name: "Pengin",
    },
    {
      Url: Shermas,
      Name: "Shermas",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="pb-8">
          <p className="text-4xl uppercase tracking-widest font-bold inline border-b-4 text-white border-white">
            Portfolio
          </p>
        </div>

        <div className="py-2">
          {/* Fullstack Projects */}
          <p className="py-2 uppercase">
            <span className="border-b-2">Fullstack Development Projects</span>
          </p>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={40}
            slidesPerView={3}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
          >
            {DevelopmentProjects.map((developmentInfo) => (
              <SwiperSlide className="my-auto">
                <Development
                  Name={developmentInfo.Name}
                  iFrame={developmentInfo.iFrame}
                  Github={developmentInfo.Github}
                  Cover={developmentInfo.Cover}
                  Color={developmentInfo.Color}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Design Projects */}
          <p className="pb-8 pt-4 uppercase">
            <span className="border-b-2">Graphic Design Projects</span>
          </p>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={40}
            slidesPerView={3}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
          >
            {DesignProjects.map((designInfo) => (
              <SwiperSlide className="my-auto">
                <Design Url={designInfo.Url} Name={designInfo.Name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
