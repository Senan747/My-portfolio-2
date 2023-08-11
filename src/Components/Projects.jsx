import React, { useState } from "react";
import { FaGripVertical } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";

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
        <div className="bg-web-search-project  bg-cover h-96 relative mb-10">
          <span className="absolute bottom-10 left-10 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg">
            React
          </span>
          <span className="absolute bottom-10 left-40 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg">
            TailwindCSS
          </span>
          <div
            className="w-full h-full absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000"
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

        <div className="bg-trendsway-project bg-cover h-96 relative mb-10">
          <span className="absolute bottom-10 left-10 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg">
            React
          </span>
          <span className="absolute bottom-10 left-40 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg">
            TailwindCSS
          </span>
          <div
            className="w-full h-full absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000"
            style={style}
          >
            <a
              href="https://github.com/Senan747/trendsway"
              target="_blank"
            >
              <AiFillGithub className="text-5xl ml-5" />
            </a>
            <a href="https://trendsway.vercel.app/" target="_blank">
              <AiOutlineLink className="text-5xl ml-5 " />
            </a>
          </div>
        </div>
        <div className="bg-quiz-project bg-hover h-96 relative">
          <span className="absolute bottom-10 left-10 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg">
            Vue
          </span>
          <span className="absolute bottom-10 left-40 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg">
            CSS
          </span>
          <div
            className="w-full h-full absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000"
            style={style}
          >
            <a
              href="https://github.com/Senan747/quiz-app-Vue.js"
              target="_blank"
            >
              <AiFillGithub className="text-5xl ml-5" />
            </a>
            <a href="https://quiz-app-vue-js-ashen.vercel.app/" target="_blank">
              <AiOutlineLink className="text-5xl ml-5 " />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full flex-wrap">
        <div className="bg-editor-project h-[370px] min-w-[370px] bg-cover relative mb-10 max-md:w-full">
          <span className="absolute bottom-10 left-10 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg">
            JS
          </span>
          <span className="absolute bottom-10 left-40 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg">
            HTML
          </span>
          <div
            className="w-full h-full absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000"
            style={style}
          >
            <a
              href="https://github.com/Senan747/developed-image-editor-v2.0-"
              target="_blank"
            >
              <AiFillGithub className="text-4xl ml-5" />
            </a>
            <a
              href="https://senan-dev-image-editor.netlify.app/"
              target="_blank"
            >
              <AiOutlineLink className="text-4xl ml-5 " />
            </a>
          </div>
        </div>
        <div className="bg-compiler-project h-[370px] min-w-[370px] bg-cover relative max-xl:max-h-[370px] max-md:w-full">
          <span className="absolute bottom-10 left-10 bg-gega-green text-gega-white px-8 py-1  font-bold rounded-lg">
            React
          </span>
          <span className="absolute bottom-10 left-40 bg-gega-green text-gega-white px-8 py-1 font-bold rounded-lg">
            TailwindCSS
          </span>
          <div
            className="w-full h-full absolute bg-gega-green flex items-center justify-center opacity-0 hover:opacity-100 transition duration-1000"
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
      </div>
    </div>
  );
}

export default Projects;
