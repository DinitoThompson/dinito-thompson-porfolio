import React from "react";

const Skill = ({ Url, Name, Style }) => {
  return (
    <div>
      <div className={`rounded-lg shadow-lg ${Style} group `}>
        <img
          className="w-20 mx-auto group-hover:scale-[1.25] duration-500"
          src={Url}
          alt={Name}
        />
        <p className="my-4 font-extralight">{Name}</p>
      </div>
    </div>
  );
};

export default Skill;
