import React from "react";
import { FaShapes } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiMui } from "react-icons/si";

function Skills() {
  const listStyle =
    "w-[150px] border-1 border-gega-light p-6 rounded-30 flex items-center flex-col mb-8 group hover:border-gega-green transition duration-300 max-md:w-[120px] max-md:p-3";

  const iconStyle =
    "text-7xl text-gega-white group-hover:text-gega-green transition duration-300 max-md:text-5xl";

  return (
    <div className="mt-60" id="skills">
      <div className="flex flex-row flex-start items-center ">
        <div className="flex flex-row items-center border-1 border-gega-light p-1 rounded-xl space-x-1">
          <FaShapes className="text-white mx-2" />
          <p className="pr-2">My skills</p>
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap my-20 items-center justify-center gap-5 max-md:my-10">
          <li className={`${listStyle}`}>
            <AiFillHtml5 className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm">HTML</p>
          </li>
          <li className={`${listStyle}`}>
            <FaCss3Alt className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm">CSS</p>
          </li>
          <li className={`${listStyle}`}>
            <SiJavascript className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm">JS</p>
          </li>{" "}
          <li className={`${listStyle}`}>
            <FaReact className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm">React</p>
          </li>
          <li className={`${listStyle}`}>
            <TbBrandNextjs className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm">Next.js</p>
          </li>
          <li className={`w-[200px] ${listStyle}`}>
            <SiRedux className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm">RTK & RTKQ</p>
          </li>
          <li className={`${listStyle}`}>
            <FaVuejs className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm">VueJS</p>
          </li>
          <li className={`${listStyle}`}>
            <SiTypescript className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm">TypeScript</p>
          </li>
          <li className={`${listStyle}`}>
            <SiTailwindcss className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm">TailwindCSS</p>
          </li>
          <li className={`${listStyle}`}>
            <SiMui className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm">Material UI</p>
          </li>
          <li className={`${listStyle}`}>
            <FiFigma className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm">Figma</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;