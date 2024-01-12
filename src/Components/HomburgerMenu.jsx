import React from "react";
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

function HombugerMenu({ open, onClose }) {
  const { t, i18n } = useTranslation();
  const handleLangClick = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("az");
    } else {
      i18n.changeLanguage("en");
    }
  };
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
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
              <AiOutlineHome className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 cursor-pointer mr-4" />{" "}
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
              <CgProfile className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 cursor-pointer mr-4" />{" "}
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
              <BsFillBriefcaseFill className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 cursor-pointer mr-4" />{" "}
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
              <FaShapes className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 cursor-pointer mr-4" />{" "}
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
              <FaGripVertical className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 cursor-pointer mr-4" />{" "}
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
              <FaSheetPlastic className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 cursor-pointer mr-4" />{" "}
              <p className="text-gega-light group-hover:text-gega-white">
                {t("blogs")}
              </p>
            </Link>
          </li>
          <li className="pb-8 flex flex-row group">
            <IoLanguage
              className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 cursor-pointer mr-4"
              onClick={handleLangClick}
            />{" "}
            <p
              className="text-gega-light group-hover:text-gega-white cursor-pointer"
              onClick={handleLangClick}
            >
              {i18n.language == "en" ? "EN" : "AZ"}
            </p>
          </li>
        </ul>
      </div>
    </Drawer>
  );
}

export default HombugerMenu;
