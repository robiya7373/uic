import React from "react";
import Slider from "../../components/slider/SliderIcon";
import { CareerData } from "../../data/data";
import { CareerIcon } from "../../assets/slider/career";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
const Career = () => {
  return (
    <div className="bg-[#1e1e20] pt-[100px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="h-[252px] flex items-center justify-center">
          <h1
            className="absolute  text-[56px] uppercase text-[#1e1e20] lg:text-[210px] md:text-[100px] font-bold tracking-wide"
            style={{ WebkitTextStroke: "1px #333335" }}
          >
            Career
          </h1>
          <h1 className="relative text-white mt-10 text-[40px] md:text-[56px]  lg:text-[78px]  uppercase font-bold">
            Career
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-14 py-[80px] ">
          {CareerData.map((item) => (
            <motion.div
              whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
              transition={{ duration: 1 }}
              className="p-[30px]  rounded-xl bg-[#2b2b2e] relative group"
            >
              <h1 className="pb-4 text-[18px] font-bold  text-white">
                {item.title}
              </h1>
              <hr className="pt-3" />
              <span className=" flex py-2 justify-between ">
                <p className="flex gap-2 items-center text-[14px] font-light line-clamp-1 text-[#ffffff] opacity-60">
                  <FaRegCalendarAlt />
                  Monday - Friday
                </p>
                <p className="flex gap-2 items-center text-[14px] font-light line-clamp-1 text-[#fff] opacity-60">
                  <MdOutlineAccessTime />
                  09:00 - 18:00{" "}
                </p>
              </span>
              <div className="absolute bg-[#252527] py-2 px-4   w-[90%] mx-auto left-4 -bottom-5 rounded-lg group-hover:bg-[#13b3a3] border-[1px] border-[#37373a] group-hover:border-[#8ceee4] flex justify-between">
                <CareerIcon />
                <span className=" flex items-center gap-2 font-bold text-white text-[14px] md:text-[18px]">
                  <p>{item.price1}</p> - <p>{item.price2}</p>
                </span>
                <div className="w-6 h-6 bg-[#6aeee1a9] rounded-full">
                  <IoIosArrowRoundForward className="text-[#fff]" size={25} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-[#141415] py-[80px]">
        <h1 className="text-center text-[18px] uppercase font-bold text-[#00a795] section-title_green mb-9 md:mb-11 ">
          Client Opinion
        </h1>
        <Slider />
      </div>
    </div>
  );
};

export default Career;
