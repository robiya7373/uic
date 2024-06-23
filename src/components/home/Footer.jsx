import React from "react";
import arrow from "../../../src/assets/arrow.svg";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
  FaYelp,
} from "react-icons/fa";
import img1 from "../../../src/assets/email.svg";
import img2 from "../../../src/assets/phone.svg";
import img3 from "../../../src/assets/footer1.svg";
import logo from "../../../src/assets/logo2.svg";
import logo2 from "../../../src/assets/logo3.svg";
import { IoMdStar } from "react-icons/io";
const Footer = () => {
  return (
    <div className="bg-[#1e1e20]">
      <div className="w-[1200px] mx-auto px-5">
        <div className="pb-[10px] flex justify-between items-center">
          <ul className=" flex gap-[20px]">
            <li>
              <a
                href="#"
                className="cursor-pointer uppercase text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base  xs:text-[13px] font-semibold lg:!text-base"
              >
                About US
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
              >
                Services
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base  xs:text-[13px] font-semibold uppercase lg:!text-base"
              >
                Portfolio
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold  lg:!text-base"
              >
                Career
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base "
              >
                blog
              </a>
            </li>
          </ul>
          <a href="#" className="">
            <img
              src={arrow}
              alt=""
              className="border rounded-full w-[50px] h-[50px]  p-2"
            />
          </a>
        </div>
        <div className="flex gap-10 pb-[30px]">
          <ul className="flex gap-4">
            <li>
              <a href="#">
                <FaFacebookF className="w-[40px] h-[40px] rounded-full border p-2 text-white" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter className="w-[40px] h-[40px] rounded-full border p-2 text-white" />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <FaInstagram className="w-[40px] h-[40px] rounded-full border p-2 text-white" />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <FaTelegramPlane className="w-[40px] h-[40px] rounded-full border p-2 text-white" />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <FaLinkedinIn className="w-[40px] h-[40px] rounded-full border p-2 text-white" />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <FaBehance className="w-[40px] h-[40px] rounded-full border p-2 text-white" />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <FaDribbble className="w-[40px] h-[40px] rounded-full border p-2 text-white" />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <IoMdStar className="w-[40px] h-[40px] rounded-full border p-2 text-white" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYelp className="w-[40px] h-[40px] rounded-full border p-2 text-white" />
              </a>
            </li>
          </ul>
          <div className="flex gap-6">
            <div className="flex gap-2 items-center text-[#fff]">
              <img src={img1} alt="footer" />
              <p>info@uic.group</p>
            </div>
            <div className="flex gap-2 items-center text-[#fff]">
              <img src={img2} alt="footer" />
              <p>+998 71 200 70 07</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-[30px] grid grid-cols-2">
          <div className="flex gap-[150px] items-center text-[#fff]">
            <p>© UIC GROUP 2024</p>
            <div className="flex group items-center gap-3">
              <img src={logo} alt="" />
              <img
                src={logo2}
                className="group-hover:translate-x-0 group-hover:opacity-100 duration-500 transition translate-x-7 opacity-0  "
                alt=""
              />
            </div>
          </div>
          <div className="group">
            <div className="px-4 py-2 flex justify-between  gap-1 group-hover:border-[#1a8377] border rounded-xl items-center">
              <img src={img3} alt="" className="px-2" />
              <p className="text-[#a5a5a6] flex-wrap text-base font-medium opacity-[0.6] text-[13px] lg:!text-[14px] leading-[19px]">
                Tashkent city. Shayxontoxur district. Adkham Rakhmat street -
                15/1
              </p>
              <button className="p-2 group-hover:bg-[#1a8377] bg-[#424244] rounded-xl text-[#fff]">
                Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
