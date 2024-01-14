import React, { useState, useEffect, useRef } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { FaGripVertical } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { HashLink as Link } from "react-router-hash-link";
import { FaSheetPlastic } from "react-icons/fa6";
import HombugerMenu from "./HomburgerMenu";
import { useTranslation } from "react-i18next";

function Right() {
  const [showMenu, setShowMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLangClick = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("az");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-between">
      <HiOutlineMenuAlt4
        className="text-6xl border-2 rounded-full border-gega-light text-inherit hover:border-gega-green hover:text-gega-green  transition duration-300 p-4 cursor-pointer mt-5"
        onClick={handleMenuToggle}
      />
      <ul className="flex flex-col justify-center items-center bg-gega-white dark:bg-gega-dark fixed top-[30%] border-1 border-gega-light rounded-3xl p-1">
        <Link to="#introduce" smooth={true} offset={50} duration={550}>
          <li className="text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer">
            <AiOutlineHome />{" "}
          </li>{" "}
        </Link>
        <Link to="#about" smooth={true} offset={50} duration={550}>
          <li className="text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer">
            <CgProfile />
          </li>
        </Link>
        <Link to="#education" smooth={true} offset={50} duration={550}>
          <li className="text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer">
            <BsFillBriefcaseFill />
          </li>
        </Link>
        <Link to="#skills" smooth={true} offset={50} duration={550}>
          <li className="text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer">
            <FaShapes />
          </li>
        </Link>
        <Link to="#projects" smooth={true} offset={50} duration={550}>
          <li className="text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer">
            <FaGripVertical />
          </li>
        </Link>
        <Link to="#blogs" smooth={true} offset={50} duration={550}>
          <li className="text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer">
            <FaSheetPlastic />
          </li>
        </Link>
      </ul>
      <div className="mb-5 text-inherit bg-inherit">
        <p
          className="text-xl border-2 rounded-full border-gega-light text-inherit bg-inherit  hover:border-gega-green hover:text-gega-green  transition duration-300 p-4 cursor-pointer"
          onClick={handleLangClick}
        >
          {i18n.language == "en" ? "EN" : "AZ"}
        </p>
      </div>
      <HombugerMenu open={showMenu} onClose={handleMenuToggle} />
    </div>
  );
}

export default Right;
