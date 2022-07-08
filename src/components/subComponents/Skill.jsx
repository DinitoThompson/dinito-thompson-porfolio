import React from "react";

const Skill = ({ Url, Name, Style }) => {
  return (
    <div>
      <div
        className={`shadow-md text-white hover:scale-105 group duration-500 py-2 rounded-lg ${Style}`}
      >
        <img
          src={Url}
          alt=""
          className="w-20 mx-auto group-hover:scale-[1.25] duration-500"
        />
        <p className="mt-4 font-extralight tracking-widest">{Name}</p>
      </div>
    </div>
  );
};

export default Skill;
