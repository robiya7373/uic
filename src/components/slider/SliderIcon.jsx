import React from "react";
import CustomCarousel from "./CustomSlider";
import { SliderData } from "../../data/data";
import icon from "../../assets/slider/icon.svg";
const SliderIcon = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto  px-5">
      <CustomCarousel>
        {SliderData.map((item, index) => {
          return (
            <>
              {/* <img key={index} src={image.imgURL} alt={image.imgAlt} />; */}
              <div className="flex gap-5 flex-col md:flex-row h-[500px]   relative ">
                <div className="w-full md:w-1/2">
                  <div className="flex absolute md:relative top-[66%] md:top-0  left-[30%] md:left-0 gap-5">
                    <img
                      className="w-[60px]   h-[60px] rounded-[50%]  "
                      src={item.img1}
                      alt=""
                    />
                    <div className="mb-[50px]">
                      <h3 className=" font-bold sm:text-base text-[13px] text-white sm:!leading-[20.8px] !leading-[16px] uppercase line-clamp-1">
                        {item.name}
                      </h3>
                      <p className=" font-normal sm:text-base text-[13px] text-[#e0e0e099] sm:!leading-[22.4px] !leading-[18px] tracking-[0.2px] line-clamp-1">
                        {item.par}
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="" className="w-[50px]" />
                  <p className="py-[30px]  font-bold  text-[15px] text-white  ">
                    {item.title.slice(0, 250)}
                    {item.title.length > 250 ? "..." : ""}
                  </p>
                  <div className="flex gap-5">
                    <p className="font-sofia font-medium text-[#ffffff4d] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]">
                      {item.side1}
                    </p>{" "}
                    <a
                      className="font-medium text-[#00A795] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
                      href="#"
                    >
                      {item.side2}
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <p className=" lg-pt-[30px] font-roboto font-normal sm:text-base text-[13px] sm:!leading-[22px] !leading-[18px] tracking-[0.2px] text-[#e0e0e099] overflow-hidden">
                    {item.desc}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </CustomCarousel>
    </div>
  );
};

export default SliderIcon;
