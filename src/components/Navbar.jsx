import React, { useState } from "react";
//React icons
import { FaBars, FaTimes } from "react-icons/fa";
//Smooth Scroll
import { Link } from "react-scroll";
//HeaderSocials
import HeaderSocials from "./HeaderSocials";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleClick = () => setMobileNav(!mobileNav);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-gray-300">
      {/* Logo */}
      <div className="hidden md:flex">
        <Link to={"home"} smooth={true} duration={500}>
          <img
            src={"/assets/Logo_Icons/Dinito - Logo.png"}
            alt="/"
            style={{ width: "80px" }}
            className="mt-8 hover:cursor-pointer"
          />
        </Link>
      </div>

      {/* NavBar */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer uppercase font-medium text-gray-500 hover:scale-105 duration-500"
          >
            <Link to={link} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-50 ml-auto hover:cursor-pointer"
      >
        {!mobileNav ? (
          <FaBars className="w-5 h-8" />
        ) : (
          <FaTimes className="w-5 h-8" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !mobileNav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-40"
        }
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="py-6 text-gray-500 scale-90 capitalize text-4xl hover:cursor-pointer hover:scale-105 hover:text-white duration-500"
          >
            {" "}
            <Link onClick={handleClick} to={link} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
        {/* Logo */}
        <div className="animate-pulse">
          <img
            src={"/assets/Logo_Icons/Dinito - Logo.png"}
            alt="/"
            style={{ width: "120px" }}
            className="mt-2"
          />
        </div>
        <HeaderSocials State={null} />
      </ul>
    </div>
  );
};

export default Navbar;
