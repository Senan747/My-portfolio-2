import React, { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaGripVertical } from "react-icons/fa";

import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";

function HombugerMenu() {
  const [showMenu, setShowMenu] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <BrowserRouter>
      <div className="w-full hidden max-xl:flex max-xl:fixed ">
        <HiOutlineMenuAlt4
          className="text-6xl border-2 rounded-full border-gega-light text-gega-white bg-gega-black  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2 p-4 cursor-pointer mt-10"
          onClick={handleMenuToggle}
        />
      </div>

      {showMenu && (
        <div
          className="bg-gega-dark w-96 h-screen pl-[90px] transition duration-1000 relative left-0 top-0 animate-[wiggle_2s_ease-in-out_2] animate-[pulse_1s_ease-in-out] max-xl:fixed z-50 max-md:w-64"
          ref={menuRef}
        >
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
                  Home
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
                  About
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
                  Education
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
                  Skills
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
                  Projects
                </p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </BrowserRouter>
  );
}

export default HombugerMenu;
