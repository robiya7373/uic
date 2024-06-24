import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
const Section3 = () => {
  return (
    <div className="flex gap-5 flex-col md:flex-row mt-5 justify-between">
      <div className="flex-[.5] grid grid-cols-1 lg:grid-rows-2 gap-5">
        <motion.a
          whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          href="#"
          className="relative group rounded-2xl "
          style={{
            backgroundImage:
              "url('https://uic.group/media/cache/30/da/30da918dacc113dd034fb5dbb8063282.jpg')",
            backgroundSize: "100% 100%",
          }}
        >
          {" "}
          <span className="absolute p-5">
            <h1 className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
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
        </motion.a>
        <motion.a
          whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          href="#"
          className="relative group   rounded-2xl"
          style={{
            backgroundImage:
              'url("https://uic.group/media/cache/a9/6e/a96ed6470476a8cacc4cde4a1d3a8ef6.jpg")',
            backgroundSize: "100% 100%",
          }}
        >
          {" "}
          <span className="absolute p-5">
            <h1
              className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3
            "
            >
              Xazna
            </h1>
            <p className="text-xs font-semibold leading-3  text-white/60 lg:text-sm sm:leading-5 uppercase">
              Branding
            </p>
          </span>
          <div className=" group-hover:bg-custom-gradient h-full rounded-2xl w-full"></div>
          <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition bg-[#dbdbdb81] rounded-full">
            <IoIosArrowRoundForward size={40} />
          </div>
        </motion.a>
      </div>
      <div className="flex-[.5] flex flex-col gap-5">
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-[25px]">
          <motion.div
            whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
            transition={{ duration: 1 }}
            className="relative h-[200px] group  rounded-2xl"
            style={{
              backgroundImage:
                'url("https://uic.group/media/cache/a8/77/a87702a9481ecefa9ba4b96e95167d43.jpg")',
              backgroundSize: "100% 100%",
            }}
          >
            {" "}
            <span className="absolute p-5">
              <h1 className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                Argos.uz
              </h1>
              <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                WEBSITE
              </p>
            </span>
            <div className=" group-hover:bg-custom-gradient1 rounded-2xl h-full w-full"></div>
            <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition flex items-center gap-4 font-semibold ">
              {/* <p>VIEW MORE</p> */}
              <IoIosArrowRoundForward
                size={50}
                className="bg-[#dbdbdb81] rounded-full "
              />
            </div>
          </motion.div>{" "}
          <motion.div
            whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
            transition={{ duration: 1 }}
            className="relative  group h-[205px] rounded-2xl"
            style={{
              backgroundImage:
                'url("https://uic.group/media/cache/f3/0c/f30c607df76522d92e14712217621ac9.jpg")',
              backgroundSize: "100% 100%",
            }}
          >
            {" "}
            <span className="absolute p-5">
              <h1 className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                One Net
              </h1>
              <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                WEBSITE
              </p>
            </span>
            <div className=" group-hover:bg-custom-gradient1 rounded-2xl h-full w-full"></div>
            <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition flex items-center gap-4 font-semibold ">
              {/* <p>VIEW MORE</p> */}
              <IoIosArrowRoundForward
                size={50}
                className="bg-[#dbdbdb81] rounded-full "
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          className="relative h-[430px] group  rounded-2xl"
          style={{
            backgroundImage:
              'url("https://uic.group/media/cache/06/93/06932db52dc70fee360b1432daafa68c.jpg")',
            backgroundSize: "100% 100%",
          }}
        >
          {" "}
          <span className="absolute p-5">
            <h1
              className="lg:text-[38px] lg:leading-[45px] lg:mb-2 !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3
            "
            >
              Sergelihokimiyati.uz
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
          <motion.div
            whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
            transition={{ duration: 1 }}
            className="relative h-[200px] group  rounded-2xl"
            style={{
              backgroundImage:
                'url("https://uic.group/media/cache/e3/5e/e35e25c15b8b80fd115f93867542e488.jpg")',
              backgroundSize: "100% 100%",
            }}
          >
            {" "}
            <span className="absolute p-5">
              <h1 className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                Jobhunt
              </h1>
              <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                WEBSITE
              </p>
            </span>
            <div className=" group-hover:bg-custom-gradient1 rounded-2xl h-full w-full"></div>
            <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition flex items-center gap-4 font-semibold ">
              {/* <p>VIEW MORE</p> */}
              <IoIosArrowRoundForward
                size={50}
                className="bg-[#dbdbdb81] rounded-full "
              />
            </div>
          </motion.div>{" "}
          <motion.div
            whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
            transition={{ duration: 1 }}
            className="relative h-[200px] group  rounded-2xl"
            style={{
              backgroundImage:
                'url("https://uic.group/media/cache/40/18/40184a46e212d8e0e613fc4c5536ca3a.jpg")',
              backgroundSize: "100% 100%",
            }}
          >
            {" "}
            <span className="absolute p-5">
              <h1 className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                TSUE
              </h1>
              <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                WEBSITE
              </p>
            </span>
            <div className=" group-hover:bg-custom-gradient1 rounded-2xl h-full w-full"></div>
            <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition flex items-center gap-4 font-semibold ">
              {/* <p>VIEW MORE</p> */}
              <IoIosArrowRoundForward
                size={50}
                className="bg-[#dbdbdb81] rounded-full "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
