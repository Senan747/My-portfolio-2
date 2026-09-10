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
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { getNextLanguage } from "../data/languages";
import { useTheme } from "../hooks/useTheme";

function HamburgerMenu({ open, onClose }) {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const handleLangClick = () => {
    i18n.changeLanguage(getNextLanguage(i18n.language));
  };

  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <div className="w-full h-full bg-gega-black px-28 max-md:px-14">
        <p className="pb-20 pt-20">{t("menu")}</p>
        <ul>
          <li className="pb-8">
            <Link
              to="#introduce"
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
          <li className="pb-8">
            <button
              type="button"
              onClick={handleLangClick}
              aria-label="Switch language"
              className="flex flex-row items-center group"
            >
              <IoLanguage className="text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 mr-4" />
              <p className="text-gega-light group-hover:text-gega-white">
                {i18n.language.toUpperCase()}
              </p>
            </button>
          </li>
          <li className="hidden max-xl:flex text-gega-white">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-6xl text-inherit border-2 fixed rounded-full border-gega-light text-gega-white  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2 p-4 cursor-pointer mt-10"
            >
              {theme == "dark" ? <MdDarkMode /> : <CiLight />}
            </button>
          </li>
        </ul>
      </div>
    </Drawer>
  );
}

export default HamburgerMenu;
