import React, { useEffect } from "react";
import logo from "../../src/assets/hero.webp";
import mount from "../../src/assets/maoun.webp";
import { TiArrowRight } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";
// import ReactCurvedText from "react-curved-text";
import { FaPlay } from "react-icons/fa";
const Hero = () => {
  useEffect(() => {
    const text = document.querySelector(".text");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
      )
      .join("");
  }, []);
  return (
    <div
      className="h-[100vh] hero relative  mb-[300px] "
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[1200px] mx-auto px-5 flex z-[999] items-center relative h-[100vh]">
        <div className="w-[500px]">
          <h2 className="text-white lg:text-[48px] lg:leading-[58px] md:text-[40px] md:leading-[50px] sm:text-[32px] sm:leading-[40px] text-[28px] leading-[34px] pb-[15px] font-bold aos-init aos-animate">
            We offer digital solutions
          </h2>
          <h3 className="text-[#ffffff99] uppercase tracking-[0.03em] lg:leading-[22px] lg:text-[18px] md:leading-[20px] md:text-[16px] sm:leading-[18px] sm:text-[14px] leading-[16px] text-[13px] font-medium sm:mb-[52px] mb-[32px] aos-init aos-animate">
            In any difficulty
          </h3>
          <div className="flex items-center gap-[16px] aos-init aos-animate">
            <button className="s-button bg-[#1a8377] border-[2px] rounded-2xl border-[#00a795] hover:bg-[#00a795] rounded-12 lg:text-[16px] text-[13px] py-[10px] lg:!pl-6 text-[#fff] sm:pl-4 pl-4 pr-3  md:text-[16px] sm:text-[13px] md:py-[11px] sm:py-[10px] flex items-center justify-center cursor-pointer transition duration-300 group">
              <div className="font-semibold flex items-center gap-4">
                <span className="sm:text-[16px] text-[13px] cursor-pointer">
                  Portfolio
                </span>
                <span className="bg-[#4CC1B5] rounded-full w-[24px] h-[24px] flex items-center justify-center transition duration-300 -rotate-45 group-hover:rotate-0  ">
                  <TiArrowRight size={20} />
                </span>
              </div>
            </button>
            <button className="s-button bg-transparent border-[2px] rounded-2xl border-[#fff] hover:bg-[#00a795] rounded-12 lg:text-[16px] hover:border-[#00a795] text-[13px] py-[10px] pl-6 pr-3  text-[#fff] flex items-center gap-4 justify-center cursor-pointer transition duration-300 group">
              <span className="font-medium"> Call</span>
              <span className="bg-[#b9b9b9] group-hover:bg-[#4CC1B5] w-6 h-6 rounded-full flex justify-center items-center ">
                <FiPhoneCall size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <motion.div
        whileInView={{ translateY: ["-100px", 0], opacity: [0.9, 1] }}
        transition={{ duration: 1 }}
        className="absolute z-30 bottom-[-350px] w-full"
      >
        <img src={mount} alt="" />
        <div className="relative">
          <div className=" absolute bottom-[0px] gradiant  w-full "></div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ translateY: ["60px", 0], opacity: [0.9, 1] }}
        transition={{ duration: 1 }}
        className="absolute top-[33%] left-[40%] "
      >
        <h1 className="text-[450px] font-[900] text-[#ffffff3d] uppercase tracking-[0.03em] lg:leading-[22px]  md:leading-[20px]  sm:leading-[18px] leading-[16px]   sm:mb-[52px] mb-[32px] aos-init aos-animate">
          UIC
        </h1>
      </motion.div>
      <div className="absolute  bottom-0 left-[45%]  z-[99]">
        <div class="circle  text-[#fff]">
          <div class="">
            <FaPlay size={50} />
          </div>
          <div class="text">
            <p>SHOWREEL SHOWREEL </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
