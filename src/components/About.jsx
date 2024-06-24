import React, { useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";
import aboutimg1 from "../../src/assets/react.svg";
import aboutimg2 from "../../src/assets/aboutImg.svg";
import icon from "../../src/assets/aboutIcon.svg";
import { motion } from "framer-motion";
// import { FaPlay } from "react-icons/fa";

const About = () => {
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
    <div className="h-[100vh]  bg-[#1e1e20]  ">
      <div className="w-[1200px] mx-auto px-5 py-[400px] relative flex items-center h-[100vh] justify-between gap-[100px]">
        <motion.div
          whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          className=" w-1/2 flex gap-5 items-end "
        >
          <div className="flex gap-[30px] flex-col">
            <div className="group relative">
              <div
                className="hover:bg-green-300 w-[300px] rounded-xl h-[500px]"
                style={{
                  backgroundImage:
                    'url("https://uic.group/media/cache/63/2a/632ae021916378d650ff3ffb98fcb7c1.jpg")',
                  backgroundSize: "cover",
                }}
              >
                <div className="h-[100%] w-full group-hover:bg-[#3cffce28] rounded-xl"></div>
                <div className="absolute top-[50%] left-[45%] hidden group-hover:block transition duration-300 ">
                  <img src={icon} alt="" />
                </div>
              </div>
            </div>
            <hr />
            <div className="flex gap-2 items-center -mt-3">
              <h3 className="font-bold text-white leading-[58px] text-5xl">
                10
              </h3>
              <p className="text-base text-[#00A795] leading-[19px] font-bold uppercase w-[180px]">
                Annual qualification team
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="hero"></div>
            <div className="group relative">
              <div
                className="hover:bg-green-300 w-[300px] rounded-xl h-[500px]"
                style={{
                  backgroundImage:
                    'url("https://uic.group/media/cache/1c/ac/1cac8a7441794ad91f2cc94093c84fd0.jpg")',
                  backgroundSize: "cover",
                }}
              >
                <div className="h-[100%] w-full group-hover:bg-[#3cffce28] rounded-xl"></div>
                <div className="absolute top-[50%] left-[45%] hidden group-hover:block transition duration-300 ">
                  <img src={icon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-1/2"
          whileInView={{ translateX: ["30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
        >
          <span className="flex  gap-3">
            <div className="w-[30px] h-[2px] bg-[#8f8c8c] mt-[10px]" />
            <p className="text xs:text-[13px] md:!text-base text-[#00A795] uppercase font-bold leading-[19px] pb-2 md:pb-5 about-us aos-init aos-animate">
              In the world
            </p>
          </span>
          <h3 className="text-white xs:text-[28px] md:!text-5xl xs:pb-3 lg:!pb-8 leading-[58px] font-bold ">
            About us
          </h3>
          <p className="text-[#E0E0E099] xs:text-[13px] md:!text-base font-normal xl:!w-[458px] font-roboto sm:w-full aos-init aos-animate">
            Every big company needs to thank not only itself, but also those who
            have stood beside it and believed in it. After all, the most
            important principle in our work is trust.
          </p>
          <p className="text-[#E0E0E099] xs:text-[13px] md:!text-base font-normal xl:!w-[458px] font-roboto sm:w-full aos-init aos-animate">
            Trust not only ensures the loyalty of customers and partners, but
            also increases our demand for ourselves. We cooperate on the basis
            of relations built on thousand-year human traditions.
          </p>
          <div className=" flex justify-between mb-[40px] mt-[15px] items-center">
            <div className="flex items-center gap-2">
              <img src={aboutimg1} alt="" />
              <p className="xs:text-[13px] md:!text-base xs:leading-140 text-[#E0E0E0] font-medium xs:w-[107px] md:!w-[105px]">
                Quick solutions
              </p>
            </div>
            <div className="flex justify-between items-center">
              <img src={aboutimg2} alt="" />
              <p className="xs:text-[13px] md:!text-base xs:leading-140 text-[#E0E0E0] font-medium xs:w-[107px] md:!w-[105px]">
                Unique projects
              </p>
            </div>
          </div>
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
        </motion.div>
      </div>
    </div>
  );
};

export default About;
