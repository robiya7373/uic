import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
const Section2 = () => {
  return (
    <div className="flex gap-5 flex-col md:flex-row mt-5 justify-between">
      <div className="flex-[.25] grid grid-rows-2 gap-5">
        <motion.a
          whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          href="#"
          className="relative group rounded-2xl "
          style={{
            backgroundImage:
              "url('https://uic.group/media/cache/b3/6b/b36bc02390ec157e4a4a99eb5c0643b2.jpg')",
            backgroundSize: "100% 100%",
          }}
        >
          {" "}
          <span className="absolute p-5">
            <h1 className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
              Toshkent Parfum
            </h1>
            <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
              WEBSITE
            </p>
          </span>
          <div className=" group-hover:bg-custom-gradient rounded-2xl h-full w-full"></div>
          <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition bg-[#dbdbdb81] rounded-full">
            <IoIosArrowRoundForward size={40} />
          </div>
        </motion.a>
        <motion.a
          whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          href="#"
          className="relative group  h-[205px] rounded-2xl"
          style={{
            backgroundImage:
              'url("https://uic.group/media/cache/bf/05/bf057b6e96af88ea2c68d1da6a1ee07e.jpg")',
            backgroundSize: "100% 100%",
          }}
        >
          {" "}
          <span className="absolute p-5">
            <h1
              className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3
            "
            >
              Uzbekistan's club App
            </h1>
            <p className="text-xs font-semibold leading-3  text-white/60 lg:text-sm sm:leading-5 uppercase">
              Mobile app
            </p>
          </span>
          <div className=" group-hover:bg-custom-gradient h-full rounded-2xl w-full"></div>
          <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition bg-[#dbdbdb81] rounded-full">
            <IoIosArrowRoundForward size={40} />
          </div>
        </motion.a>
      </div>
      <div className="flex-[.5]">
        <motion.div
          whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          className="relative h-[430px] group  rounded-2xl"
          style={{
            backgroundImage:
              'url("https://uic.group/media/cache/77/4d/774ddc33fda844b44bb597539531dec6.jpg")',
            backgroundSize: "100% 100%",
          }}
        >
          {" "}
          <span className="absolute p-5">
            <h1
              className="lg:text-[38px] lg:leading-[45px] lg:mb-2 !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3
            "
            >
              WAYU
            </h1>
            <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
              WEBSITE
            </p>
          </span>
          <div className=" group-hover:bg-custom-gradient1 rounded-2xl h-full w-full"></div>
          <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition flex items-center gap-4 font-semibold ">
            <p>VIEW MORE</p>
            <IoIosArrowRoundForward
              size={50}
              className="bg-[#dbdbdb81] rounded-full "
            />
          </div>
        </motion.div>
      </div>
      <div className="flex-[.245]  grid grid-rows-2  gap-5">
        <motion.a
          whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          href="#"
          className="relative group  h-[205px] rounded-2xl"
          style={{
            backgroundImage:
              'url("https://uic.group/media/cache/30/da/30da918dacc113dd034fb5dbb8063282.jpg")',
            backgroundSize: "100% 100%",
          }}
        >
          {" "}
          <span className="absolute p-5">
            <h1
              className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3
            "
            >
              Ricomel
            </h1>
            <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
              WEBSITE
            </p>
          </span>
          <div className=" group-hover:bg-custom-gradient rounded-2xl h-full w-full"></div>
          <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition bg-[#dbdbdb81] rounded-full">
            <IoIosArrowRoundForward size={40} />
          </div>
        </motion.a>{" "}
        <motion.a
          whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          href="#"
          className="relative group rounded-2xl "
          style={{
            backgroundImage:
              'url("https://uic.group/media/cache/d4/e7/d4e7073d362f8d5a16efbb3e656fc4ee.jpg")',
            backgroundSize: "100% 100%",
          }}
        >
          <span className="absolute p-5">
            <h1
              className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3
                "
            >
              Infomax freight
            </h1>
            <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
              WEBSITE
            </p>
          </span>
          <div className=" group-hover:bg-custom-gradient rounded-2xl h-full w-full"></div>

          <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition bg-[#dbdbdb81] rounded-full">
            <IoIosArrowRoundForward size={40} />
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default Section2;
