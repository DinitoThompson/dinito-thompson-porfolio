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
    <div className="fixed w-full h-[70px] flex justify-between items-center px-5 bg-transparent text-gray-300 z-10">
      {/* Logo */}
      <div className="hidden md:flex">
        <Link to={"home"} smooth={true} duration={500}>
          <img
            src={"/assets/Logo_Icons/Dinito - Logo.png"}
            alt="/"
            style={{ width: "60px" }}
            className="mt-2 hover:cursor-pointer hover:scale-110 duration-300 animate-pulse"
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
              <div className="hover:text-[#ffac3f] duration-300">{link}</div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-50 ml-auto hover:cursor-pointer text-[#ffac3f] hover:scale-110 duration-300"
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
            : "fixed top-0 left-0 w-full h-screen bg-gradient-to-t from-gray-900 to-black flex flex-col justify-center items-center z-40"
        }
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="py-6 text-gray-500 scale-90 capitalize text-4xl hover:cursor-pointer hover:scale-105 hover:text-[#ffac3f] duration-500"
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
