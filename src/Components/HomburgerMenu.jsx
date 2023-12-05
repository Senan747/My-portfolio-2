import React, { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaGripVertical } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Drawer } from "@mui/material";

function HombugerMenu({ open, onClose }) {
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
    </Drawer>
  );
}

export default HombugerMenu;
