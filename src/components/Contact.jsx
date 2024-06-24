import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#1e1e20] pt-[80px] pb-[50px]">
      <div className="w-[1200px] mx-auto px-5">
        <div className="flex bg-[#2e2e30] p-[50px] rounded-xl">
          <div className="">
            <h2 className="font-bold text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:!leading-[120%] text-white line-clamp-3 md:line-clamp-2 max-w-[631px] mb-4 md:mb-8">
              You can also be among this team :)
            </h2>
            <p className=" text-center md:text-left font-normal text-sm sm:text-base !leading-[120%] sm:!leading-[140%] text-[#e0e0e099] line-clamp-3 sm:line-clamp-2 max-w-[622px] tracking-[0.2px]">
              Do you want to growth with us? Now prove to us that you need it!
              Become an integral part of the team
            </p>
          </div>
          <div className="">
            <a href="#" className="flex group  gap-3">
              <div className="w-[30px] h-[2px] bg-[#585859] mt-[10px]" />
              <p className="text xs:text-[13px] text-[#fff] md:!text-base group-hover:text-[#00A795] uppercase font-bold leading-[19px] pb-2 md:pb-5 about-us aos-init aos-animate">
                Flutter developer
              </p>
            </a>
            <a href="#" className="flex  group gap-3">
              <div className="w-[30px] h-[2px] bg-[#585859] mt-[10px]" />
              <p className="text xs:text-[13px] text-[#fff] md:!text-base group-hover:text-[#00A795] uppercase font-bold leading-[19px] pb-2 md:pb-5 about-us aos-init aos-animate">
                UI/UX designer
              </p>
            </a>{" "}
            <a href="#" className="flex group  gap-3">
              <div className="w-[30px] h-[2px] bg-[#585859] mt-[10px]" />
              <p className="text xs:text-[13px] text-[#fff] md:!text-base group-hover:text-[#00A795] uppercase font-bold leading-[19px] pb-2 md:pb-5 about-us aos-init aos-animate">
                AI Engineer
              </p>
            </a>{" "}
            <a href="#" className="flex  group gap-3">
              <div className="w-[30px] h-[2px] bg-[#585859] mt-[10px]" />
              <p className="text xs:text-[13px] text-[#fff] md:!text-base group-hover:text-[#00A795] uppercase font-bold leading-[19px] pb-2 md:pb-5 about-us aos-init aos-animate">
                HR manager
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
