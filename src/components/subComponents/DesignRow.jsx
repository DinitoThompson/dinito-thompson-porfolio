import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import GettingFit from "../../assets/Design/GettingFit.png";
import Poshbytoya from "../../assets/Design/Poshbytoya.png";
import ChelseaJo from "../../assets/Design/ChelseaJo.png";
import CrownOfEster from "../../assets/Design/CrownOfEster.png";
import Fllego from "../../assets/Design/Fllego.jpeg";

const DesignRow = ({ rowID, Name }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
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
  ];
  return (
    <>
      <div className="relative flex items-center group -z-5">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-green-500 left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {DesignProjects.map((DesignItems) => (
            <div className="w-[300px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                src={DesignItems.Url}
                alt={DesignItems.Name}
                className="block"
              />
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-green-500 right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default DesignRow;
