import React from "react";
import { Believe } from "../data/data";
import { motion } from "framer-motion";
const Believer = () => {
  return (
    <div className=" bg-[#141415] py-[80px]">
      <div className="w-[1200px] mx-auto px-5">
        <motion.span
          whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          className="flex  gap-3 "
        >
          <p className="text xs:text-[13px] md:!text-base text-[#00A795] uppercase font-bold leading-[19px] pb-2 md:pb-5 about-us aos-init aos-animate">
            our partners
          </p>
        </motion.span>
        <motion.h3
          whileInView={{ translateX: ["-60px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          className="text-white xs:text-[28px] mb-[20px] md:!text-5xl xs:pb-3 lg:!pb-8  font-bold "
        >
          Companies that believe in us
        </motion.h3>
        <motion.div
          whileInView={{ translateX: ["100px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          className="grid grid-cols-5 gap-5"
        >
          {Believe.map((item) => (
            <div class="flex group items-center p-[20px] h-[130px] justify-center bg-[#252525]">
              <img
                src={item.img}
                alt="logo"
                class="object-contain w-full grayscale transition duration-300 group-hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Believer;
