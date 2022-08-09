import { React, Fragment, useState } from "react";
//React icons
import { FaBars, FaTimes } from "react-icons/fa";
//Smooth Scroll
import { Link } from "react-scroll";
//HeaderSocials
import HeaderSocials from "./HeaderSocials";

import { Dialog, Transition } from "@headlessui/react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleClick = () => setMobileNav(!mobileNav);

  let [isOpen, setIsOpen] = useState(false);

  function toggleMobileMenu() {
    setIsOpen(!isOpen);
  }

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
            className="px-4 cursor-pointer uppercase font-medium text-gray-400 hover:scale-105 duration-500"
          >
            <Link to={link} smooth={true} duration={500}>
              <div className="hover:text-[#ffac3f] duration-300">{link}</div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div
        onClick={toggleMobileMenu}
        className="md:hidden z-50 ml-auto hover:cursor-pointer text-[#ffac3f] hover:scale-110 duration-300"
      >
        <FaBars className="w-5 h-8" />
      </div>

      {/* Mbile Menu */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggleMobileMenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gradient-to-bl from-orange-900 via-black to-black bg-opacity-70 blur-md" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-[100vh] items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[1000px] h-[100vh] flex flex-col justify-evenly items-center transform overflow-hidden p-2 shadow-xl transition-all">
                  <div
                    onClick={toggleMobileMenu}
                    className="w-full flex justify-end text-[#ffac3f]"
                  >
                    <FaTimes className="w-5 h-8 hover:cursor-pointer hover:scale-110 duration-300" />
                  </div>
                  <div>
                    {/* Mobile menu */}
                    <ul>
                      {links.map(({ id, link }) => (
                        <li
                          key={id}
                          className="py-6 text-gray-500 scale-90 capitalize text-4xl hover:cursor-pointer hover:scale-105 hover:text-[#ffac3f] duration-500"
                        >
                          {" "}
                          <Link
                            onClick={() => {
                              toggleMobileMenu();
                              handleClick();
                            }}
                            to={link}
                            smooth={true}
                            duration={500}
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Logo */}
                  <div className="animate-pulse">
                    <img
                      src={"/assets/Logo_Icons/Dinito - Logo.png"}
                      alt="/"
                      style={{ width: "120px" }}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <HeaderSocials State={null} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Navbar;
