import React from "react";
import logo from "../../../src/assets/logo.svg";
import { FaGlobeAmericas } from "react-icons/fa";

const Header = () => {
    
  return (
    <div className="fixed w-full py-5 z-[9999] top-0">
      <div className="w-[1200px] flex justify-between items-center mx-auto px-5 ">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-14">
          <ul className="flex gap-8">
            <li>
              <a
                href="#"
                className="active font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                About
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="active font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                Services
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="active font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                portfolio
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="active font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                Career
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="active font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                blogs
              </a>
            </li>
          </ul>
          <div className="flex items-center  gap-10">
            <a
              href="tell"
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
      </div>
    </div>
  );
};

export default Header;
