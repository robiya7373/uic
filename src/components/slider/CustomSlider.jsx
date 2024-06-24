import React, { useState, useEffect } from "react";

import "../../../src/index.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => {
        return (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="absolute bottom-5 left-[50%] md:left-[8.5%] translate-x-[-50%]">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={` relative w-[30px] sm:w-[30px] h-[2px] outline-none transition right-12
                ${activeIndex === index ? "bg-[#fff]" : " bg-[#4f4f50] "}
            `}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>

      <button
        className="absolute left-[93%] md:left-[70px] bottom-[50px]"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {<IoIosArrowRoundForward className=" text-[#1a8377]" />}
      </button>
      <button
        className="absolute left-[0px] bottom-[50px]"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {<IoIosArrowRoundBack className=" text-[#1a8377]"/>}
      </button>
    </div>
  );
}

export default CustomCarousel;
