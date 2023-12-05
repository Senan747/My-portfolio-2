import React, { useState, useEffect, useRef } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { FaGripVertical } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { HashLink as Link } from "react-router-hash-link";
import HombugerMenu from "./HomburgerMenu";

function Right() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="flex flex-col h-screen items-end relative">
        <div className="flex flex-col justify-center items-center w-full">
          <HiOutlineMenuAlt4
            className="text-6xl border-2 rounded-full border-gega-light text-gega-white  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2 p-4 cursor-pointer mt-10"
            onClick={handleMenuToggle}
          />
        </div>
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <ul className=" fixed border-1 border-gega-light rounded-3xl p-1">
            <Link
              to="#introduce"
              spy={true}
              smooth={true}
              offset={50}
              duration={550}
            >
              <li className="text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer">
                <AiOutlineHome />{" "}
              </li>{" "}
            </Link>
            <Link
              to="#about"
              spy={true}
              smooth={true}
              offset={50}
              duration={550}
            >
              <li className="text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer">
                <CgProfile />
              </li>
            </Link>
            <Link
              to="#education"
              spy={true}
              smooth={true}
              offset={50}
              duration={550}
            >
              <li className="text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer">
                <BsFillBriefcaseFill />
              </li>
            </Link>
            <Link
              to="#skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={550}
            >
              <li className="text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer">
                <FaShapes />
              </li>
            </Link>
            <Link
              to="#projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={550}
            >
              <li className="text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer">
                <FaGripVertical />
              </li>
            </Link>
          </ul>
        </div>
        <div className="fixed">
          <HombugerMenu open={showMenu} onClose={handleMenuToggle} />
        </div>
      </div>
    </div>
  );
}

export default Right;
