import React from "react";
import { FaLaravel, FaPhp } from "react-icons/fa";
import { FaNode, FaReact } from "react-icons/fa6";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { TbBrandBootstrap } from "react-icons/tb";

import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="restHeight flex items-center justify-center flex-col text-center px-4 sm:px-6 lg:px-[60px] py-7">
      <h2 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl page-heading">
        Technologies I Work On
      </h2>

      <div className="tech-box relative mt-20 flex flex-wrap justify-center">
        <div className="tech">
          <AiOutlineHtml5 className="tech-icon" />
        </div>
        <div className="tech ">
          <DiCss3Full className="tech-icon" />
        </div>
        <div className="tech">
          <DiJavascript1 className="tech-icon" />
        </div>
        <div className="tech ">
          <FaReact className="tech-icon" />
        </div>
        <div className="tech">
          <FaNode className="tech-icon" />
        </div>
        <div className="tech ">
          <SiExpress className="tech-icon" />
        </div>
        <div className="tech">
          <SiMongodb className="tech-icon" />
        </div>
        <div className="tech ">
          <SiMysql className="tech-icon" />
        </div>
        <div className="tech">
          <FaPhp className="tech-icon" />
        </div>
        <div className="tech ">
          <FaLaravel className="tech-icon" />
        </div>
        <div className="tech">
          <SiTailwindcss className="tech-icon" />
        </div>
        <div className="tech ">
          <TbBrandBootstrap className="tech-icon" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
