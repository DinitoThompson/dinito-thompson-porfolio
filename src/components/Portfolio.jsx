/* eslint-disable no-unused-vars */
import React from "react";

//SubComponents - Templates
import Development from "./subComponents/DevelopmentTemplate";
import DesignTemplate from "./subComponents/DesignTemplate";

const ProjectsSection = () => {
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
      Cover: "/assets/Development/WeatherApp.png",
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
      Cover: "/assets/Development/EditableTodoList.png",
      Color: "blue",
    },
  ];
  //Design Projects
  const DesignProjects = [
    {
      Url: "/assets/Design/GettingFit.png",
      Name: "Getting Fit",
    },
    {
      Url: "/assets/Design/Poshbytoya.png",
      Name: "Poshbytoya",
    },
    {
      Url: "/assets/Design/ChelseaJo.png",
      Name: "ChelseaJo",
    },
    {
      Url: "/assets/Design/CrownOfEster.png",
      Name: "Crown Of Ester",
    },
    {
      Url: "/assets/Design/Fllego.jpeg",
      Name: "Fllego",
    },
    {
      Url: "/assets/Design/Lux&Lot.JPG",
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
