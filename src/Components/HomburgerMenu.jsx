import React, { useState } from "react";
import { FaGripVertical } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { Drawer } from "@mui/material";
import { FaSheetPlastic } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import AnimatedCursor from "react-animated-cursor";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function HombugerMenu({ open, onClose }) {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState("dark");
  const handleLangClick = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("az");
    } else {
      i18n.changeLanguage("en");
    }
  };

  const toggleMode = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={40}
        innerScale={1}
        outerScale={2}
        outerAlpha={1}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "exclusion",
        }}
      />
      <div className="w-full h-full bg-gega-black px-28 max-md:px-14">
        <p className="pb-20 pt-20">Menu</p>
        <ul>
          <li className="pb-8">
            <Link
              to="#introduce"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="flex flex-row group"
            >
              <AiOutlineHome className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 mr-4" />{" "}
              <p className="text-gega-light group-hover:text-gega-white">
                {t("introduce")}
              </p>
            </Link>
          </li>
          <li className="pb-8">
            <Link
              to="#about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="flex flex-row group"
            >
              <CgProfile className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 mr-4" />{" "}
              <p className="text-gega-light group-hover:text-gega-white">
                {t("about")}
              </p>
            </Link>
          </li>
          <li className="pb-8">
            <Link
              to="#education"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="flex flex-row group"
            >
              <BsFillBriefcaseFill className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 mr-4" />{" "}
              <p className="text-gega-light group-hover:text-gega-white">
                {t("education")}
              </p>
            </Link>
          </li>
          <li className="pb-8">
            <Link
              to="#skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="flex flex-row group"
            >
              <FaShapes className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 mr-4" />{" "}
              <p className="text-gega-light group-hover:text-gega-white">
                {t("skills")}
              </p>
            </Link>
          </li>
          <li className="pb-8">
            <Link
              to="#projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="flex flex-row group"
            >
              <FaGripVertical className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 mr-4" />{" "}
              <p className="text-gega-light group-hover:text-gega-white">
                {t("projects")}
              </p>
            </Link>
          </li>
          <li className="pb-8">
            <Link
              to="#blogs"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="flex flex-row group"
            >
              <FaSheetPlastic className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 mr-4" />{" "}
              <p className="text-gega-light group-hover:text-gega-white">
                {t("blogs")}
              </p>
            </Link>
          </li>
          <li className="pb-8 flex flex-row group">
            <IoLanguage
              className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 mr-4"
              onClick={handleLangClick}
            />{" "}
            <p
              className="text-gega-light group-hover:text-gega-white"
              onClick={handleLangClick}
            >
              {i18n.language == "en" ? "EN" : "AZ"}
            </p>
          </li>
          <li className="hidden max-xl:flex text-gega-white">
            {theme == "dark" ? (
              <CiLight
                onClick={toggleMode}
                className="text-6xl text-inherit border-2 fixed rounded-full border-gega-light text-gega-white  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2 p-4 cursor-pointer mt-10"
              />
            ) : (
              <MdDarkMode
                onClick={toggleMode}
                className="text-6xl text-inherit border-2 fixed rounded-full border-gega-light text-gega-white  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2 p-4 cursor-pointer mt-10"
              />
            )}
          </li>
        </ul>
      </div>
    </Drawer>
  );
}

export default HombugerMenu;
