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
import { FaSass } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiDevexpress } from "react-icons/si";
import { useTranslation } from "react-i18next";
import Header from "./Header";

function Skills() {
  const { t } = useTranslation();
  const listStyle =
    "w-[150px] text-inherit border-1 border-gega-light p-6 rounded-30 flex items-center flex-col mb-8 group hover:border-gega-green transition duration-300 max-md:w-[120px] max-md:p-3";

  const iconStyle =
    "text-7xl text-inherit group-hover:text-gega-green transition duration-300 max-md:text-5xl";

  return (
    <div className="mt-60" id="skills">
      <Header>
        <FaShapes className="text-inherit mx-2" />
        <p className="pr-2 text-inherit">{t("skills")}</p>
      </Header>
      <div>
        <ul className="flex flex-wrap my-20 items-center justify-center gap-5 max-md:my-10">
          <li className={`${listStyle}`}>
            <AiFillHtml5 className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">HTML</p>
          </li>
          <li className={`${listStyle}`}>
            <FaCss3Alt className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">CSS</p>
          </li>
          <li className={`${listStyle}`}>
            <SiJavascript className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">JS</p>
          </li>
          <li className={`${listStyle}`}>
            <SiTypescript className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">
              TypeScript
            </p>
          </li>
          <li className={`${listStyle}`}>
            <FaReact className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">React</p>
          </li>
          <li className={`${listStyle}`}>
            <TbBrandNextjs className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">Next.js</p>
          </li>
          <li className={`w-[200px] ${listStyle}`}>
            <SiRedux className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">
              RTK & RTKQ
            </p>
          </li>
          <li className={`${listStyle}`}>
            <FaVuejs className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">VueJS</p>
          </li>
          <li className={`${listStyle}`}>
            <SiTailwindcss className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">
              TailwindCSS
            </p>
          </li>
          <li className={`${listStyle}`}>
            <SiDevexpress className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">
              DevExtreme
            </p>
          </li>
          <li className={`${listStyle}`}>
            <FaSass className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">Sass</p>
          </li>
          <li className={`${listStyle}`}>
            <SiMui className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">
              Material UI
            </p>
          </li>
          <li className={`${listStyle}`}>
            <FaGithub className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">Git</p>
          </li>
          <li className={`${listStyle}`}>
            <FiFigma className={`${iconStyle}`} />
            <p className="mt-2 text-lg max-md:text-sm text-inherit">Figma</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
