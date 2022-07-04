import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-transparent fixed">
      {/* Name/Logo */}
      <div>
        <Link to={"home"} smooth={true} duration={500}>
          <h1 className="lg:text-3xl md:text-2xl sm:text-xl group tracking-widest ml-2 hover:cursor-pointer hover:scale-105 duration-500">
            {"<"}
            <span className="font-bold group-hover:text-blue-400 duration-500">
              DINITO
            </span>
            {"/>"}
          </h1>
        </Link>
      </div>

      {/* Nav Links */}
      <ul className="flex sm:mr-2">
        {navLinks.flatMap(({ id, link }) => (
          <li
            key={id}
            className="px-8 lg:px-7 md:px-6 sm:px-4 uppercase cursor-pointer font-medium text-gray-500 hover:scale-110 hover:text-white duration-500"
          >
            <Link to={link} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
