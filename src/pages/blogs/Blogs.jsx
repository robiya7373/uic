import React, { useState } from "react";
import Slider from "../../components/slider/SliderIcon";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { BlogData } from "../../data/data";
import Pagination from "./Pagination";
import { motion } from "framer-motion";
const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(BlogData.map((item) => item.category))];

  const searchFiltered = BlogData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const categoryFiltered =
    category === "All"
      ? searchFiltered
      : searchFiltered.filter((item) => item.category === category);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(categoryFiltered.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentItems = categoryFiltered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#1e1e20] pt-[100px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="h-[252px] flex items-center justify-center">
          <h1
            className="absolute text-[56px] uppercase text-[#1e1e20] lg:text-[210px] md:text-[100px] font-bold tracking-wide"
            style={{ WebkitTextStroke: "1px #333335" }}
          >
            Blog
          </h1>
          <h1 className="relative text-white mt-10 text-[40px] md:text-[56px] lg:text-[78px] uppercase font-bold">
            Blog
          </h1>
        </div>
        <div className="flex flex-wrap py-[30px] w-[70%] gap-4">
          {categories.map((cat) => (
            <motion.div
              className=""
              whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
              transition={{ duration: 1 }}
            >
              <button
                onClick={() => setCategory(cat)}
                className={`py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] ${
                  category === cat ? "border-[#00a795]" : "border-[#434344]"
                }`}
              >
                {cat}
              </button>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 rounded-[10px] bg-[#171717] text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-y-10 gap-x-16 pt-[30px]">
          {currentItems.map((item, index) => (
            <motion.div
              whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
              transition={{ duration: 1 }}
              key={index}
              className="group flex gap-5 h-[220px] bg-[#2b2b2e] rounded-md"
            >
              <div className="relative w-[220px] flex-[.4]">
                <img
                  className="absolute -top-5 duration-300 transition-all rounded-lg -left-5 group-hover:left-0 group-hover:top-0 w-[210px] h-[210px]"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="py-[20px] pr-[20px] flex-[.6]">
                <h2 className="text-[#fff]">{item.title}</h2>
                <p className="font-normal text-xs !leading-140 text-[gray] line-clamp-1 sm:line-clamp-3 sm:my-4 mt-2 mb-3">
                  {item.desc}
                </p>
                <div className="w-full h-[1px] bg-[#505052] mt-[30px]" />
                <span className="flex py-2 gap-[30px] pt-[20px]">
                  <p className="flex gap-2 items-center text-[14px] font-light line-clamp-1 text-[#ffffff]">
                    <div className="w-[22px] h-[22px] duration-300 rounded-full flex items-center justify-center bg-[#49494c] group-hover:bg-[#00a795]">
                      <FaRegCalendarAlt />
                    </div>
                    20.03.2024
                  </p>
                  <p className="flex gap-2 items-center text-[14px] font-light line-clamp-1 text-[#fff]">
                    <div className="w-[20px] h-[20px] rounded-full flex items-center duration-300 justify-center bg-[#49494c] group-hover:bg-[#00a795]">
                      <FiEye />
                    </div>
                    513
                  </p>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="py-[40px] flex justify-end">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <div className="bg-[#141415] py-[80px]">
        <h1 className="text-center text-[18px] uppercase font-bold text-[#00a795] section-title_green mb-9 md:mb-11">
          Client Opinion
        </h1>
        <Slider />
      </div>
    </div>
  );
};

export default Blogs;
