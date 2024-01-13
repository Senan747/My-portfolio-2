import React, { useState } from "react";
import { FaGripVertical } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Projects() {
  const { t } = useTranslation();
  const style = {
    animation: "new 3s infinite",
  };

  return (
    <div className="mt-24 h-auto mx-10 max-md:mx-2" id="projects">
      <div className="flex flex-row flex-start items-center mb-10">
        <div className="flex flex-row items-center border-1 border-gega-light p-1 rounded-xl space-x-1">
          <FaGripVertical className="text-white mx-2" />
          <p className="pr-2">{t("projects")}</p>
        </div>
      </div>
      <Carousel autoPlay showThumbs={false}>
        <div className="bg-trendsway-project bg-cover w-full h-[450px] max-md:h-[300px] rounded-xl relative mb-10">
          <span className="absolute bottom-10 left-8 bg-gega-green text-gega-white px-4 py-1 font-bold rounded-lg text-xs">
            React
          </span>
          <span className="absolute bottom-10 left-28 bg-gega-green text-gega-white px-4 py-1 font-bold rounded-lg text-xs">
            TailwindCSS
          </span>
          <div
            className="w-full h-[450px] max-md:h-[300px] absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000 rounded-xl"
            style={style}
          >
            <a href="https://github.com/Senan747/trendsway" target="_blank">
              <AiFillGithub className="text-5xl ml-5" />
            </a>
            <a href="https://trendsway.vercel.app/" target="_blank">
              <AiOutlineLink className="text-5xl ml-5 " />
            </a>
          </div>
        </div>

        <div className="bg-dashboard-project bg-cover w-full h-[450px] max-md:h-[300px] rounded-xl relative mb-10">
          <span className="absolute bottom-10 left-8 bg-gega-green text-gega-white px-4 py-1 font-bold rounded-lg text-xs">
            Next.js
          </span>
          <span className="absolute bottom-10 left-28 bg-gega-green text-gega-white px-4 py-1 font-bold rounded-lg text-xs">
            MUI
          </span>
        </div>
        <div className="bg-web-search-project bg-cover w-full h-[450px] max-md:h-[300px] rounded-xl relative mb-10 max-md:w-full">
          <span className="absolute bottom-10 left-8 bg-gega-green text-gega-white px-4 py-1 font-bold rounded-lg text-xs">
            React
          </span>
          <span className="absolute bottom-10 left-28 bg-gega-green text-gega-white px-4 py-1 font-bold rounded-lg text-xs">
            TailwindCSS
          </span>
          <div
            className="w-full h-[450px] max-md:h-[300px] absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000 rounded-xl"
            style={style}
          >
            <a href="https://github.com/Senan747/web-search" target="_blank">
              <AiFillGithub className="text-5xl ml-5" />
            </a>
            <a href="https://web-search-mu.vercel.app/" target="_blank">
              <AiOutlineLink className="text-5xl ml-5 " />
            </a>
          </div>
        </div>

        <div className="bg-artist-project bg-cover w-full h-[450px] max-md:h-[300px]  rounded-xl relative mb-10">
          <span className="absolute bottom-10 left-8 bg-gega-green text-gega-white px-4 py-1 font-bold rounded-lg text-xs">
            React
          </span>
          <span className="absolute bottom-10 left-28 bg-gega-green text-gega-white px-4 py-1 font-bold rounded-lg text-xs">
            MUI
          </span>
          <span className="absolute bottom-1 left-8 bg-gega-green text-gega-white px-4 py-1 font-bold rounded-lg text-xs">
            TailwindCSS
          </span>
          <div
            className="w-full h-[450px] max-md:h-[300px] absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000 rounded-xl"
            style={style}
          >
            <a
              href="https://github.com/Senan747/artist-portfolio"
              target="_blank"
            >
              <AiFillGithub className="text-5xl ml-5" />
            </a>
            <a
              href="https://artist-portfolio-swart.vercel.app/"
              target="_blank"
            >
              <AiOutlineLink className="text-5xl ml-5 " />
            </a>
          </div>
        </div>
        <div className="bg-compiler-project  bg-cover relative w-full h-[450px] max-md:h-[300px] max-md:w-full rounded-xl">
          <span className="absolute bottom-10 left-8 bg-gega-green text-gega-white px-4 py-1  font-bold rounded-lg text-xs">
            React
          </span>
          <span className="absolute bottom-10 left-28 bg-gega-green text-gega-white px-4 py-1 font-bold rounded-lg text-xs">
            TailwindCSS
          </span>
          <div
            className="w-full h-[450px] max-md:h-[300px] absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000 rounded-xl"
            style={style}
          >
            <a href="https://github.com/Senan747/compiler/" target="_blank">
              <AiFillGithub className="text-4xl ml-5" />
            </a>
            <a href="https://compiler-ashen.vercel.app/" target="_blank">
              <AiOutlineLink className="text-4xl ml-5 " />
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center w-full h-[450px] max-md:h-[300px]">
          <a
            href="https://github.com/Senan747?tab=repositories"
            className="flex flex-row justify-center items-center rounded-[100%] border-2 py-12 px-3 hover:border-gega-green group transition duration-300"
          >
            <p className="group-hover:text-gega-green transition duration-300">
              For more
            </p>
            <FaArrowRight className="text-white ml-4 group-hover:text-gega-green transition duration-300" />
          </a>
        </div>
      </Carousel>
    </div>
  );
}

export default Projects;
