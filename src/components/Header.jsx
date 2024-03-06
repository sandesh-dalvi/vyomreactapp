import { useState } from "react";

import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

import logo from "../assets/images/logo.png";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  console.log(openSidebar);

  return (
    <>
      <header className="flex items-center justify-between py-4 relative px-10 border-b">
        {/* left */}
        <div className="flex items-center">
          <div
            className=" cursor-pointer mr-2 inline-block min-[991px]:hidden"
            onClick={() => setOpenSidebar((prev) => !prev)}
          >
            <RiMenu2Fill className=" w-6 h-5 " />
          </div>
          <Link
            to={"/"}
            className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-0 max-[991px]:ml-14 block min-[991px]:hidden"
          >
            <img
              src={logo}
              alt="VyomTrails Logo"
              className=" w-24 object-cover max-w-xs h-auto"
            />
          </Link>
          <Link
            to={"/"}
            className=" absolute top-1/2 left-[5%] -translate-y-1/2 ml-0 max-[991px]:ml-14 hidden min-[991px]:block"
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
          <div
            className={` fixed h-full w-full bg-[#00000031] z-[99] top-0 left-0 ${
              openSidebar ? " block" : " hidden"
            }`}
          ></div>
          <nav
            className={`fixed ${
              openSidebar ? "left-0" : "left-[-150%]"
            } top-0 bg-white max-w-xs h-full overflow-auto z-[999999] transition-all duration-300`}
          >
            <button
              className={`bg-neutral-50 w-full pt-2 px-5 text-2xl block cursor-pointer text-neutral-900 `}
              onClick={() => setOpenSidebar((prev) => !prev)}
            >
              <IoIosArrowBack />
            </button>
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
          </nav>
          <ul
            className={` ${
              openSidebar ? "flex" : "hidden"
            } justify-start fixed left-0 w-full max-w-xs bottom-0 px-5 z-[99999999] mb-3`}
          >
            <li>
              <button>Log Out</button>
            </li>
          </ul>
          <ul className={`hidden min-[991px]:block relative`}>
            <li className="inline-block">
              <Link
                to={"/"}
                className="pt-8 pr-6 pb-8 pl-3 block text-base font-bold leading-[20px] relative"
              >
                Home
              </Link>
            </li>
            <li className="inline-block">
              <Link
                to={"/about"}
                className="pt-8 pr-6 pb-8 pl-3 block text-base font-bold leading-[20px] relative"
              >
                About
              </Link>
            </li>
            <li className="inline-block">
              <Link
                to={"/stays"}
                className="pt-8 pr-6 pb-8 pl-3 block text-base font-bold leading-[20px] relative"
              >
                Stays
              </Link>
            </li>
            <li className="inline-block">
              <Link
                to={"/activities"}
                className="pt-8 pr-6 pb-8 pl-3 block text-base font-bold leading-[20px] relative"
              >
                Activities
              </Link>
            </li>
            <li className="inline-block">
              <Link
                to={"/transport"}
                className="pt-8 pr-6 pb-8 pl-3 block text-base font-bold leading-[20px] relative"
              >
                Transport
              </Link>
            </li>
            <li className="inline-block">
              <Link
                to={"/contact"}
                className="pt-8 pr-6 pb-8 pl-3 block text-base font-bold leading-[20px] relative"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* right */}
        <div>
          <ul className=" items-center flex-wrap flex">
            <li className="ml-5">
              <button
                className="flex items-center justify-center text-xl"
                data-dialog-target="sign-in-dialog"
                type="button"
              >
                <FaRegCircleUser className="w-8 h-8" />
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
