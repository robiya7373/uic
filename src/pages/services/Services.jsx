import React from "react";
import { motion } from "framer-motion";
import { ServicesData } from "../../data/data";
const Services = () => {
  return (
    <div className="bg-[#1e1e20]">
      <div className="max-w-[1200px] w-full mx-auto pt-[180px] px-5 ">
        <motion.span
          whileInView={{ translateY: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          className="flex  gap-3"
        >
          <p className="text xs:text-[13px] md:!text-base text-[#00A795] uppercase font-bold leading-[19px] pb-2 md:pb-5 about-us aos-init aos-animate">
            IS THERE A PROBLEM?
          </p>
          {/* <div className="w-[30px] h-[2px] bg-[#8f8c8c] mt-[10px]" /> */}
        </motion.span>
        <motion.h3
          whileInView={{ translateY: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          className="text-white xs:text-[28px] md:!text-5xl xs:pb-3 lg:!pb-8  font-bold "
        >
          What solution do you want?
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mt-[30px]">
          {ServicesData.map((item) => (
            <motion.div
              whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
              transition={{ duration: 1 }}
              className="rounded-xl  p-[32px] bg-[#252527]"
            >
              <h3 className="text-white sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-[gray] font-sans font-normal text-[14px]  sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
