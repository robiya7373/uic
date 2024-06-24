import React from "react";
import Section1 from "../../components/portfolio/Section1";
import Section2 from "../../components/portfolio/Section2";
import Section3 from "../../components/portfolio/Section3";
import Section4 from "../../components/portfolio/Section4";
import Section5 from "../../components/portfolio/Section5";
import Slider from "../../components/slider/SliderIcon";

const Portfolio = () => {
  return (
    <div className="bg-[#1e1e20] pt-[140px]">
      <div className="max-w-[1200px] flex  pb-[100px] flex-col gap-7 mx-auto px-5">
        <h3 className="bg-[#1E1E20] font-bold uppercase text-[32px] md:text-[64px] text-white leading-[130%]">
          Portfolio
        </h3>
        <div className="flex flex-wrap gap-5">
          <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
            Branding
          </button>
          <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
            Mobile app
          </button>
          <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
            CRM
          </button>
          <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
            Website
          </button>
        </div>

        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
      <div className="bg-[#141415] py-[80px]">
        <Slider />
      </div>
    </div>
  );
};

export default Portfolio;
