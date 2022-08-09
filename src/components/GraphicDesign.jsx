import React from "react";
import FetchDesign from "./subComponents/FetchDesign";

const GraphicDesign = () => {
  return (
    <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-2">
      {FetchDesign.Design.map((Design, index) => (
        <div className=" flex items-center relative cursor-pointer">
          <div className="absolute inset-0 z-10 flex transition duration-300 ease-in hover:opacity-0">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="mx-auto text-white z-10 self-center tracking-widest uppercase">
              {Design.title}
            </div>
          </div>
          <img key={index} src={Design.src} alt="/" />
        </div>
      ))}
    </div>
  );
};

export default GraphicDesign;
