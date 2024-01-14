import React from "react";
import { CgProfile } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import Header from "./Header";

function About() {
  const { t } = useTranslation();
  return (
    <div
      className="pl-3 animate-[fadeIn_4s_ease-in-out] font-Roboto text-inherit"
      id="about"
    >
      <Header>
        <CgProfile className=" mr-2 ml-2" />
        <p className="pr-2 text-inherit">{t("about")}</p>
      </Header>
      <div className="flex flex-col flex-start items-center ">
        <div>
          <p className="text-5xl pb-8 max-md:text-4xl text-inherit">
            {t("start")} <span className="text-gega-green">{t("start2")}</span>
          </p>

          <p className="whitespace-normal text-lg text-gega-light max-md:text-base text-justify text-wrap pr-3 font-Inter">
            {t("about2")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
