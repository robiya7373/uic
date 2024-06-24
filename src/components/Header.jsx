import React, { useEffect, useRef, useState } from "react";
import logo from "../../src/assets/logo.svg";
import { FaGlobeAmericas } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [sitebar, setSitebar] = useState(false);
  const navRef = useRef();
  const handleClick = () => {
    setSitebar(!sitebar);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 10) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };

    // Debounce the scroll event handler
    const debounce = (fn, wait) => {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), wait);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 50);

    window.addEventListener("scroll", debouncedHandleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={`fixed w-full ${sitebar ? "" : "py-5"} z-[9999] top-0`}
    >
      {sitebar && (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center relative bg-[#1e1e20]">
          <IoMdClose
            className="absolute top-[30px] left-[20px] hover:text-red-500 text-[35px] text-white"
            onClick={handleClick}
          />
          {/* <div className="flex flex-col gap-2">
            <li>
              <NavLink
                to="/aboutItems"
                className="font-medium text-[20px] lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex  hover:transition hover:duration-500 hover:ease-in-out"
              >
                About US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brief"
                className="font-medium text-[20px] lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex  hover:transition hover:duration-500 hover:ease-in-out"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="font-medium text-[20px] lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex  hover:transition hover:duration-500 hover:ease-in-out"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vacancy"
                className="font-medium text-[20px] lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex  hover:transition hover:duration-500 hover:ease-in-out"
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="font-medium text-[20px] lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex  hover:transition hover:duration-500 hover:ease-in-out"
              >
                Blogs
              </NavLink>
            </li>
            <ul className="flex gap-8">
              <li>
                <NavLink
                  to="/aboutItmes"
                  className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
                >
                  About US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/brief"
                  className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vacancy"
                  className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
                >
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div> */}
        </div>
      )}

      <div className="max-w-[1200px] w-full flex justify-between items-center mx-auto px-5">
        <div className="block lg:hidden">
          <button className="border-[1px] hover:text-red-500 text-[18px] bg-[#4b4b4d] py-1 uppercase font-bold text-[#fff] px-3 flex gap-1 items-center rounded-lg">
            <CgMenuLeft onClick={handleClick} />
          </button>
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8">
            <li>
              <NavLink
                to="/about"
                className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                About US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brief"
                className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vacancy"
                className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                Blogs
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-10">
            <a
              href="tel:+998712007007"
              className="text-[18px] xl:text-[24px] font-bold text-[#fff] border-bottom hover:text-white duration-300"
            >
              <span className="text-[#9AAFB2]">+998 71</span> 200 70 07
            </a>
            <div className="flex  peer group  items-center gap-1 border border-[#9caaac] px-2 py-1 duration-300 transition-all rounded-lg ">
            <FaGlobeAmericas className="text-[#9caaac] text-[24px] " />
            <span className="text-[#9caaac] mr-2 hidden group-hover:block duration-300 text-[18px] ">
              Language:
            </span>
            <span className="flex gap-3">
              <span className="text-white font-semibold text-[18px] cursor-pointer ">EN</span>
              <span className="hover:text-white duration-300 hidden group-hover:block text-[#9caaac] cursor-pointer font-semibold text-[18px] ">
                RU
              </span>
              <span className="hover:text-white duration-300 hidden group-hover:block text-[#9caaac] cursor-pointer font-semibold text-[18px] ">
                UZ
              </span>
            </span>
          </div>
          </div>
        </div>
        <div className="block lg:hidden">
        <div className="flex  peer group  items-center gap-1 border border-[#9caaac] px-2 py-1 duration-300 transition-all rounded-lg ">
            <FaGlobeAmericas className="text-[#9caaac] text-[24px] " />
            <span className="text-[#9caaac] mr-2 hidden group-hover:block duration-300 text-[18px] ">
              Language:
            </span>
            <span className="flex gap-3">
              <span className="text-white font-semibold text-[18px] cursor-pointer ">EN</span>
              <span className="hover:text-white duration-300 hidden group-hover:block text-[#9caaac] cursor-pointer font-semibold text-[18px] ">
                RU
              </span>
              <span className="hover:text-white duration-300 hidden group-hover:block text-[#9caaac] cursor-pointer font-semibold text-[18px] ">
                UZ
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
