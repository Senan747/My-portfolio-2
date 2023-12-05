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
    "w-[150px] border-1 border-gega-light p-6 ml-10 rounded-30 flex items-center flex-col mb-8 group hover:border-gega-green transition duration-300";

  const iconStyle =
    "text-7xl text-gega-white group-hover:text-gega-green transition duration-300";

  return (
    <div className="mt-60" id="skills">
      <div className="flex flex-row flex-start items-center ">
        <div className="flex flex-row items-center border-1 border-gega-light p-1 rounded-xl space-x-1">
          <FaShapes className="text-white mx-2" />
          <p className="pr-2">My skills</p>
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap my-20 items-center justify-center">
          <li className={`${listStyle}`}>
            <AiFillHtml5 className={`${iconStyle}`} />
            <p className="mt-2 text-lg">HTML</p>
          </li>
          <li className={`${listStyle}`}>
            <FaCss3Alt className={`${iconStyle}`} />
            <p className="mt-2 text-lg">CSS</p>
          </li>
          <li className={`${listStyle}`}>
            <SiJavascript className={`${iconStyle}`} />
            <p className="mt-2 text-lg">JS</p>
          </li>{" "}
          <li className={`${listStyle}`}>
            <FaReact className={`${iconStyle}`} />
            <p className="mt-2 text-lg">React</p>
          </li>
          <li className={`${listStyle}`}>
            <TbBrandNextjs className={`${iconStyle}`} />
            <p className="mt-2 text-lg">Next.js</p>
          </li>
          <li className={`w-[200px] ${listStyle}`}>
            <SiRedux className={`${iconStyle}`} />
            <p className="mt-2 text-lg">RTK & RTK query</p>
          </li>
          <li className={`${listStyle}`}>
            <FaVuejs className={`${iconStyle}`} />
            <p className="mt-2 text-lg">VueJS</p>
          </li>
          <li className={`${listStyle}`}>
            <SiTypescript className={`${iconStyle}`} />
            <p className="mt-2 text-lg">TypeScript</p>
          </li>
          <li className={`${listStyle}`}>
            <SiTailwindcss className={`${iconStyle}`} />
            <p className="mt-2 text-lg">TailwindCSS</p>
          </li>
          <li className={`${listStyle}`}>
            <SiMui className={`${iconStyle}`} />
            <p className="mt-2 text-lg">Material UI</p>
          </li>
          <li className={`${listStyle}`}>
            <FiFigma className={`${iconStyle}`} />
            <p className="mt-2 text-lg">Figma</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
