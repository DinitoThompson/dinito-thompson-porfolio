import React from "react";

// Link for Image Icons: https://www.flaticon.com/
import HTML from "../assets/logo_icons/html.png";
import CSS from "../assets/logo_icons/css.png";
import JavaScript from "../assets/logo_icons/javascript.png";
import ReactJs from "../assets/logo_icons/react.png";
import Firebase from "../assets/logo_icons/firebase.png";
import Photoshop from "../assets/logo_icons/Photoshop.png";
import Illustrator from "../assets/logo_icons/Illustrator.png";
import Tailwind from "../assets/logo_icons/tailwind.png";
import Premiere from "../assets/logo_icons/Premiere.png";

import Skill from "./subComponents/Skill";

const SkillSet = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-900 to-black w-full h-screen text-white"
    >
      {/* Container */}
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold py-2 inline">
            <span className="border-b-4 tracking-widest uppercase">
              Experience
            </span>
          </p>
          <p className="pt-8 tracking-widest uppercase">
            Fullstack Development
          </p>
        </div>
        {/* Fullstack Development Section */}
        <div className="my-4">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            <Skill Url={`${HTML}`} Name="HTML" Style={"shadow-orange-500"} />
            <Skill Url={`${CSS}`} Name="CSS" Style={"shadow-blue-500"} />
            <Skill
              Url={`${JavaScript}`}
              Name="JavaScript"
              Style={"shadow-yellow-500"}
            />
            <Skill Url={`${ReactJs}`} Name="React" Style={"shadow-blue-600"} />
            <Skill
              Url={`${Firebase}`}
              Name="Firebase"
              Style={"shadow-orange-400"}
            />
            <Skill
              Url={`${Tailwind}`}
              Name="Tailwind"
              Style={"shadow-blue-400"}
            />
          </div>
          {/* Graphic Designer Section */}
          <div>
            <p className="py-4 uppercase tracking-widest">Graphic Design</p>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8">
              <Skill
                Url={`${Photoshop}`}
                Name="Photoshop"
                Style={"shadow-blue-400"}
              />
              <Skill
                Url={`${Illustrator}`}
                Name="Illustrator"
                Style={"shadow-orange-600"}
              />
              <Skill
                Url={`${Premiere}`}
                Name="Premiere"
                Style={"shadow-purple-600"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
