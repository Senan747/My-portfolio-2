import React, { useState } from "react";
import { FaGripVertical } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  const [isHover, setIsHover] = useState(false);

  const style = {
    animation: isHover ? "new 3s infinite" : " ",
  };

  return (
    <div className="mt-24 mb-96 h-auto" id="projects">
      <div className="flex flex-row flex-start items-center mb-14 ">
        <div className="flex flex-row items-center border-1 border-gega-light p-1 rounded-xl space-x-1">
          <FaGripVertical className="text-white mx-2" />
          <p className="pr-2">Projects</p>
        </div>
      </div>
      <div
        className="mb-10"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex flex-row justify-between items-center w-full flex-wrap">
          <div className="bg-web-search-project w-[48%]  bg-cover h-96 rounded-xl relative mb-10">
            <span className="absolute bottom-10 left-10 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg text-xs">
              React
            </span>
            <span className="absolute bottom-10 left-40 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg text-xs">
              TailwindCSS
            </span>
            <div
              className="w-full h-full absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000 rounded-xl"
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
          <div className="bg-artist-project w-[48%]  bg-cover h-96 rounded-xl relative mb-10">
            <span className="absolute bottom-10 left-10 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg text-xs">
              React
            </span>
            <span className="absolute bottom-10 left-40 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg text-xs">
              TailwindCSS
            </span>
            <span className="absolute bottom-1 left-10 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg text-xs">
              MUI
            </span>
            <div
              className="w-full h-full absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000 rounded-xl"
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
        </div>

        <div className="bg-trendsway-project bg-cover h-96 rounded-xl relative mb-10">
          <span className="absolute bottom-10 left-10 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg text-xs">
            React
          </span>
          <span className="absolute bottom-10 left-40 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg text-xs">
            TailwindCSS
          </span>
          <div
            className="w-full h-full absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000 rounded-xl"
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
      </div>
      <div className="flex flex-row justify-between w-full flex-wrap">
        <div className="bg-compiler-project h-96 w-[50%] bg-cover relative max-xl:max-h-[370px] max-md:w-full rounded-xl">
          <span className="absolute bottom-10 left-10 bg-gega-green text-gega-white px-8 py-1  font-bold rounded-lg text-xs">
            React
          </span>
          <span className="absolute bottom-10 left-40 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg text-xs">
            TailwindCSS
          </span>
          <div
            className="w-full h-full absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000 rounded-xl"
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
        <div className="flex flex-row justify-center items-center">
          <a
            href="https://github.com/Senan747?tab=repositories"
            className="flex flex-row justify-center items-center rounded-[100%] border-2 mr-20 py-12 px-3 hover:border-gega-green group transition duration-300"
          >
            <p className="group-hover:text-gega-green transition duration-300">
              For more
            </p>
            <FaArrowRight className="text-white ml-4 group-hover:text-gega-green transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
