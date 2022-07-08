/* eslint-disable no-unused-vars */
import React from "react";

// Graphic Designs - Images
import GettingFit from "../assets/Design/GettingFit.png";
import Poshbytoya from "../assets/Design/Poshbytoya.png";
import ChelseaJo from "../assets/Design/ChelseaJo.png";
import CrownOfEster from "../assets/Design/CrownOfEster.png";
import Fllego from "../assets/Design/Fllego.jpeg";
import LuxNLot from "../assets/Design/Lux&Lot.JPG";

// Software Development - Images
import PiratesPrimeBG from "../assets/Development/PiratesPrime.png";
import WeatherAppBG from "../assets/Development/WeatherApp.png";
import TodoListBG from "../assets/Development/EditableTodoList.png";

//SubComponents - Templates
import Development from "./subComponents/DevelopmentTemplate";
import DesignTemplate from "./subComponents/DesignTemplate";

import SliderJS from "./subComponents/SliderJS";
import DesignRow from "./subComponents/DesignRow";

//Swuipper JS
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Autoplay,
// } from "swiper";
// import "swiper/css";

const ProjectsSection = () => {
  //SwiperCore.use([Autoplay]);

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
      Cover: PiratesPrimeBG,
      Color: "green",
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
      Cover: WeatherAppBG,
      Color: "orange",
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
      Url: Fllego,
      Name: "Fllego",
    },
    {
      Url: LuxNLot,
      Name: "Lux & Lot",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-[#0a192f] w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="pb-2">
          <p className="text-4xl uppercase font-bold border-b-4 border-white inline">
            Portfolio
          </p>
          {/* Development Projects */}
          <p className="pb-2 pt-8 uppercase">
            <span className="border-b-2">Fullstack Development Projects</span>
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {DevelopmentProjects.map(
              ({ id, Name, iFrame, Github, Cover, Color, Link }) => (
                <div key={id}>
                  <Development
                    Name={Name}
                    iFrame={iFrame}
                    Github={Github}
                    Cover={Cover}
                    Color={Color}
                    Link={Link}
                  />
                </div>
              )
            )}
          </div>
          {/* Design Projects */}
          <p className="pb-2 pt-8 uppercase">
            <span className="border-b-2">Graphic Design Projects</span>
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {DesignProjects.map(({ id, Url, Name }) => (
              <div key={id} className="flex items-center">
                <DesignTemplate Url={Url} Name={Name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
