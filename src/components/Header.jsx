import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";

import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 relative px-10 border-b">
      {/* left */}
      <div className="flex items-center">
        <div className=" cursor-pointer mr-2">
          <RiMenu2Fill className=" w-6 h-5 " />
        </div>
        <Link
          to={"/"}
          className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-0 max-[991px]:ml-14 block"
        >
          <img
            src={logo}
            alt="VyomTrails Logo"
            className=" w-24 object-cover max-w-xs h-auto"
          />
        </Link>
      </div>

      {/* center */}
      <div>
        <nav
          className={`fixed left-[-150px] top-0 bg-white max-w-xs h-full overflow-auto z-[999999] transition-all duration-300`}
        >
          <div className=" bg-neutral-50 w-full pt-2 px-5 text-2xl block cursor-pointer text-gray-700 ">
            <IoIosArrowBack />
          </div>
          <ul className=" px-5 mb-0 relative ">
            <li className=" mt-0 w-full inline-block">
              <Link
                to={"/"}
                className=" py-4 pr-0 pl-4 block text-lg font-bold leading-[20px] text-neutral-950 relative"
              >
                Home
              </Link>
            </li>
            <li className=" mt-0 w-full inline-block">
              <Link
                to={"/about"}
                className=" py-4 pr-0 pl-4 block text-lg font-bold leading-[20px] text-neutral-950 relative"
              >
                About Us
              </Link>
            </li>
            <li className=" mt-0 w-full inline-block">
              <Link
                to={"/stays"}
                className=" py-4 pr-0 pl-4 block text-lg font-bold leading-[20px] text-neutral-950 relative"
              >
                Stays
              </Link>
            </li>
            <li className=" mt-0 w-full inline-block">
              <Link
                to={"/transport"}
                className=" py-4 pr-0 pl-4 block text-lg font-bold leading-[20px] text-neutral-950 relative"
              >
                Transport
              </Link>
            </li>
            <li className=" mt-0 w-full inline-block">
              <Link
                to={"/activities"}
                className=" py-4 pr-0 pl-4 block text-lg font-bold leading-[20px] text-neutral-950 relative"
              >
                Activities
              </Link>
            </li>
            <li className=" mt-0 w-full inline-block">
              <Link
                to={"/contact"}
                className=" py-4 pr-0 pl-4 block text-lg font-bold leading-[20px] text-neutral-950 relative"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className=" fixed h-full w-full bg-[#00000031] z-[9999] top-0 left-0"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
