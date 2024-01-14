import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import Header from "./Header";

function Introduce() {
  const { t } = useTranslation();
  return (
    <div className="pt-5 h-screen pl-3" id="introduce">
      <Header>
        <AiOutlineHome className="text-white mx-2" />
        <p className="pr-2">{t("introduce")}</p>
      </Header>
      <div className="flex flex-col justify-between">
        <div className="w-full flex flex-col mb-10 max-md:mb-0 text-gega-light">
          <p className="text-7xl pb-8 max-md:text-5xl">
            {t("me")}{" "}
            <span className="text-gega-green">{t("full-name")}, </span>
            Front-end Developer.
          </p>
          <p className="text-gega-light font-Inter">{t("info1")}</p>
        </div>

        <div className="flex justify-end pb-20 mt-20">
          <div className="relative inline-block">
            <Link
              to="#projects"
              smooth={true}
              offset={50}
              duration={550}
              className="inline-block text-center"
            >
              <img
                src="../round-text.png"
                alt=""
                className="block animate-[spin_4s_linear_infinite]"
              />
              <BsArrowDown className="text-gega-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
