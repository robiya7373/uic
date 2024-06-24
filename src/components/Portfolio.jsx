import React from "react";
// import { BiArrowToRight } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="bg-[#141415] py-[80px]">
      <div className="w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between py-[30px]">
          <h1 className="bg-[#141415] font-bold uppercase text-[32px] md:text-[64px] text-white leading-[130%]">
            portfolio{" "}
          </h1>
          <div className="">
            <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
              Branding
            </button>{" "}
            <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
              Mobile app
            </button>{" "}
            <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
              CRM
            </button>{" "}
            <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
              Website
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <motion.div
            whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
            transition={{ duration: 1 }}
            className="relative h-[430px] group rounded-2xl "
            style={{
              backgroundImage:
                'url("https://uic.group/media/cache/0c/39/0c392b9a99ead3fb208087f2a1e1e145.jpg")',
              backgroundSize: "100% 100%",
            }}
          >
            <span className="absolute p-5">
              <h1
                className="lg:text-[38px] lg:leading-[45px] lg:mb-2 !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3
                "
              >
                Uzbekistan's Club
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
          <div className="grid grid-cols-2 gap-5">
            <motion.a
              whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
              transition={{ duration: 1 }}
              href="#"
              className="relative group rounded-2xl "
              style={{
                backgroundImage:
                  'url("https://uic.group/media/cache/29/88/29883e26588ac429b3ca86b3ac39efa6.jpg")',
                backgroundSize: "100% 100%",
              }}
            >
              <span className="absolute p-5">
                <h1
                  className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3
                "
                >
                  Anatomica
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
              className="relative group rounded-2xl"
              style={{
                backgroundImage:
                  'url("https://uic.group/media/cache/cc/39/cc392cc7e6083d974df22bdf3f7baae3.jpg")',
                backgroundSize: "100% 100%",
              }}
            >
              <span className="absolute p-5">
                <h1
                  className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3
                "
                >
                  Anatomica App
                </h1>
                <p className="text-xs font-semibold leading-3  text-white/60 lg:text-sm sm:leading-5 uppercase">
                  WEBSITE
                </p>
              </span>
              <div className=" group-hover:bg-custom-gradient h-full rounded-2xl w-full"></div>
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
                  'url("https://uic.group/media/cache/59/f1/59f1ca58bab7263f9c5eaff3033d5951.jpg")',
                backgroundSize: "100% 100%",
              }}
            >
              <span className="absolute p-5">
                <h1 className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                  Express24
                </h1>
                <p className="text-xs font-semibold leading-3  text-white/60 lg:text-sm sm:leading-5 uppercase">
                  Mobile app
                </p>
              </span>
              <div className=" group-hover:bg-custom-gradient h-full  rounded-2xl w-full"></div>
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
                  'url("https://uic.group/media/cache/b6/27/b6273a3cbd3fe1e5ad0e9b9acdccdfc4.jpg")',
                backgroundSize: "100% 100%",
              }}
            >
              <span className="absolute p-5">
                <h1
                  className="lg:text-2xl lg:leading-[49px]  lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base  md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3
                "
                >
                  Toshkent Parfum
                </h1>
                <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                  WEBSITE
                </p>
              </span>
              <div className=" group-hover:bg-custom-gradient rounded-2xl  h-full w-full"></div>
              <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition bg-[#dbdbdb81] rounded-full">
                <IoIosArrowRoundForward size={40} />
              </div>
            </motion.a>
          </div>
        </div>
        <div className="flex gap-5 mt-5 justify-between">
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
            </motion.a>{" "}
            <motion.a
              whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
              transition={{ duration: 1 }}
              href="#"
              className="relative group  rounded-2xl"
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
              className="relative group  rounded-2xl"
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
      </div>
    </div>
  );
};

export default Portfolio;
