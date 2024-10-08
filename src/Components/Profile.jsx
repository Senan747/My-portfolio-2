import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";
import { FaMedium } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();
  const linkStyle =
    "rounded-full border-2 border-spacing-2 border-gega-light text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2";
  return (
    <div className="h-screen dark:text-gega-white text-gega-black flex justify-center items-center font-Roboto max-xl:my-20">
      <div className="max-w-sm max-xl:max-w-lg h-auto border-1 border-gray-500 rounded-3xl p-8 fixed max-xl:relative">
        <div className="flex flex-row justify-between items-center mb-5 dark:text-gega-white text-gega-black">
          <p className="text-4xl font-bold text-inherit">{t("name")}</p>
          <div>
            <p className="text-right text-inherit">Front-end</p>
            <p className="text-xl text-inherit">Developer</p>
          </div>
        </div>
        <div className="mb-2">
          <img
            src="../senan1.jpeg"
            alt=""
            className="w-full grayscale rounded-3xl"
          />
        </div>
        <div className="flex justify-center flex-row w-full">
          <a
            href="https://www.linkedin.com/in/senan-memmedov/"
            target="_blank"
            className={`${linkStyle}`}
          >
            <AiFillLinkedin className="text-4xl p-2" />
          </a>
          <a
            href="https://www.instagram.com/senanthesad/?igshid=ZDdkNTZiNTM%3D"
            className={`${linkStyle}`}
            target="_blank"
          >
            <AiFillInstagram className="text-4xl p-2" />
          </a>
          <a
            href="https://github.com/Senan747"
            target="_blank"
            className={`${linkStyle}`}
          >
            <AiFillGithub className="text-4xl p-2" />
          </a>
          <a
            href="https://medium.com/@1senanmemmedov"
            target="_blank"
            className={`${linkStyle}`}
          >
            <FaMedium className="text-4xl p-2" />
          </a>
          <a
            href="tel:+994507832995"
            className="rounded-full border-2 border-spacing-2 border-gega-light text-gega-light hover:border-gega-green hover:text-gega-green  transition duration-300 m-2"
          >
            <IoMdCall className="text-4xl p-2" />
          </a>
        </div>

        <a
          href="mailto: 1senanmemmedov@gmail.com"
          className="group flex justify-center m-4"
        >
          <button className="flex flex-row justify-center text-black items-center border-2 border-gega-green bg-gega-green hover:bg-transparent p-2 w-full rounded-2xl  transition duration-300 ">
            <p className="text-black pr-3 uppercase group-hover:text-gega-green  transition duration-300">
              {t("hire")}!
            </p>{" "}
            <AiOutlineMail className="group-hover:text-gega-green  transition duration-300 " />
          </button>
        </a>
        <a
          href="../Sanan-Mammadov-CV.pdf"
          className="group flex justify-center mx-4 my-1"
          target="_blank"
        >
          <button className="flex flex-row justify-center text-black items-center border-2 bg-transparent border-gega-green bg-gega-green hover:border-gega-green hover:bg-gega-green p-2 w-full rounded-2xl  transition duration-300 ">
            <p className="text-gega-green pr-3 uppercase group-hover:text-black  transition duration-300">
              {t("cv")}!
            </p>{" "}
            <IoMdOpen className="text-gega-green transition duration-300 group-hover:text-black " />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Profile;
