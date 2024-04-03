import React from "react";
import {
  MdOutlineBrowserUpdated,
  MdOutlineDesignServices,
  MdOutlineShowChart,
} from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";
import { SiCraftcms, SiTaichigraphics } from "react-icons/si";

const Services = () => {
  return (
    <div className="restHeight flex items-center justify-center flex-col text-center px-4 sm:px-6 lg:px-[60px]">
      <h2 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl page-heading">
        Services I offer
      </h2>
      <div className="list-of-services mt-20 flex gap-x-10 gap-y-10 flex-wrap justify-center">
        <div className="service">
          <MdOutlineDesignServices className="service-icon text-5xl" />
          <span className="text-xl sm:text-2xl">Website Design</span>
        </div>
        <div className="service">
          <MdOutlineBrowserUpdated className="service-icon text-5xl" />
          <span className="text-xl sm:text-2xl">Website Update</span>
        </div>
        <div className="service">
          <RiAdvertisementLine className="service-icon text-5xl" />
          <span className="text-xl sm:text-2xl">Digital Marketing</span>
        </div>
        <div className="service">
          <MdOutlineShowChart className="service-icon text-5xl" />
          <span className="text-xl sm:text-2xl">SEO Solutions</span>
        </div>
        <div className="service">
          <SiTaichigraphics className="service-icon text-5xl" />
          <span className="text-xl sm:text-2xl">Graphic Design</span>
        </div>
        <div className="service">
          <SiCraftcms className="service-icon text-5xl" />
          <span className="text-xl sm:text-2xl">CMS Solutions</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
