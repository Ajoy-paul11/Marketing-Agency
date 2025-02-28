import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import CtaButton from "./CtaButton.jsx";
import logo from "../assets/Logo.png";

function NavList() {

  return (
    <ul className=" cta-text-color my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 relative top-[4px]">
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="p-1 font-medium primary-font"
      >
        <Link
          to="/"
          className="flex items-center hover:text-blue-500 lg:hover:scale-110 duration-300 transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="p-1 font-medium primary-font"
      >
        <Link
          to="/about"
          className="flex items-center hover:text-blue-500 lg:hover:scale-110 duration-300 transition-colors"
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className=" p-1  font-medium leading-normal primary-font antialiased relative group"
      >
        <button className="cta-text-color hover:text-blue-700 font-medium flex items-center justify-between w-full md:w-auto">
          Services
          <svg
            className="w-4 h-4 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {/* Add invisible area to prevent gap */}
        <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute w-full h-4 left-0"></div>
        <div className="hidden group-hover:block absolute bg-black/70 text-base z-10 list-none divide-y divide-gray-100 rounded shadow left-24 lg:left-0 w-80 top-[-75px] lg:top-[35px]">
          {/* lg:block */}
          <ul className="py-1 grid grid-cols-2 lg:grid-cols-2 cta-text-color">
            <li>
              <Link
                to="/digital-service"
                className=" text-sm hover:text-blue-500 block px-2 lg:px-4 py-2 lg:hover:scale-110 duration-300 transition-colors"
              >
                Digital
              </Link>
            </li>
            <li>
              <Link
                to="/radio-service"
                className=" text-sm hover:text-blue-500 block px-2 lg:px-4 py-2 lg:hover:scale-110 duration-300 transition-colors"
              >
                Radio
              </Link>
            </li>
            <li>
              <Link
                to="/magazine-service"
                className=" text-sm hover:text-blue-500 block px-2 lg:px-4 py-2 lg:hover:scale-110 duration-300 transition-colors"
              >
                Magazine
              </Link>
            </li>
            <li>
              <Link
                to="/newspaper-service"
                className=" text-sm hover:text-blue-500 block px-2 lg:px-4 py-2 lg:hover:scale-110 duration-300 transition-colors"
              >
                Newspaper
              </Link>
            </li>
            <li>
              <Link
                to="/television-service"
                className=" text-sm hover:text-blue-500 block px-2 lg:px-4 py-2 lg:hover:scale-110 duration-300 transition-colors"
              >
                Television
              </Link>
            </li>
            <li>
              <Link
                to="/outdoor-service"
                className=" text-sm hover:text-blue-500 block px-2 lg:px-4 py-2 lg:hover:scale-110 duration-300 transition-colors"
              >
                Outdoor
              </Link>
            </li>
            <li>
              <Link
                to="/nontraditional-service"
                className=" text-sm hover:text-blue-500 block px-2 lg:px-4 py-2 lg:hover:scale-110 duration-300 transition-colors"
              >
                Non-traditional
              </Link>
            </li>
            <li>
              <Link
                to="/airline-service"
                className=" text-sm hover:text-blue-500 block px-2 lg:px-4 py-2 lg:hover:scale-110 duration-300 transition-colors"
              >
                Airline
              </Link>
            </li>
            <li>
              <Link
                to="/cinema-service"
                className=" text-sm hover:text-blue-500 block px-2 lg:px-4 py-2 lg:hover:scale-110 duration-300 transition-colors"
              >
                Cinema
              </Link>
            </li>
            <li>
              <Link
                to="/influencer-service"
                className=" text-sm hover:text-blue-500 block px-2 lg:px-4 py-2 lg:hover:scale-110 duration-300 transition-colors"
              >
                Influencer
              </Link>
            </li>
            
            <li>
              <Link
                to="/hyperlocal-service"
                className=" text-sm hover:text-blue-500 block px-2 lg:px-4 py-2 lg:hover:scale-110 duration-300 transition-colors"
              >
                Hyperlocal
              </Link>
            </li>
            <li>
              <Link
                to="/deals-service"
                className=" text-sm hover:text-blue-500 block px-2 lg:px-4 py-2 lg:hover:scale-110 duration-300 transition-colors"
              >
                Deals
              </Link>
            </li>
          </ul>
          
        </div>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="p-1 font-medium primary-font"
      >
        <ScrollLink
          to="services"
          smooth={true}
          duration={1000}
          className="flex items-center hover:text-blue-500 lg:hover:scale-110 duration-300 transition-colors"
        >
          Events
        </ScrollLink>
      </Typography>
      <Link to="/contact">
        <CtaButton name={"Contact"} />
      </Link>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className={`w-full xl:mx-auto px-4 py-2 lg:px-8 lg:py-[0px] bg-black rounded-none relative z-10  shadow-lg shadow-black/50 border-0 ${openNav ? "bg-black/90" : ""}`}>
      <div className="w-full flex items-center justify-between relative top-[-5px]">
        <Typography
          variant="h3"
          className="mr-4 cursor-pointer primary-font text-primary relative top-[-3px]"
        >
          <Link to={"/"}>
            <img src={logo} alt="logo-icon" className=" pt-1 mix-blend-luminosity hover:mix-blend-normal" />
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden top-[-5px]"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 cta-text" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 cta-text" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav} className=" bg-black/50">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
