import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../data/social";

function Profile({ theme, toggleTheme, onMenuToggle }) {
  const { t } = useTranslation();
  const linkStyle =
    "rounded-full border-2 border-spacing-2 border-zinc-300 text-zinc-500 dark:border-gega-light dark:text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2";

  return (
    <div className="h-screen dark:text-gega-white text-gega-black flex justify-center items-center font-Roboto max-xl:my-20">
      <div className="max-w-sm max-xl:max-w-lg h-auto border-1 border-gray-500 rounded-3xl p-8 fixed max-xl:relative">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="hidden xl:flex items-center justify-center absolute -top-5 -left-5 z-20 text-2xl dark:bg-gega-black bg-gega-white text-inherit border-2 border-zinc-300 dark:border-gega-light rounded-full hover:border-gega-green hover:text-gega-green transition duration-300 p-3 cursor-pointer"
        >
          {theme == "dark" ? <MdDarkMode /> : <CiLight />}
        </button>
        <button
          type="button"
          onClick={onMenuToggle}
          aria-label="Open menu"
          className="flex xl:hidden items-center justify-center absolute -top-5 -left-5 z-20 text-2xl bg-gega-black text-gega-white border-2 border-gega-light rounded-full hover:border-gega-green hover:text-gega-green transition duration-300 p-3 cursor-pointer"
        >
          <HiOutlineMenuAlt4 />
        </button>

        <div className="flex flex-row justify-between items-center mb-5 dark:text-gega-white text-gega-black">
          <p className="text-4xl font-bold text-inherit">{t("name")}</p>
          <div>
            <p className="text-right text-inherit">{t("roleLine1")}</p>
            <p className="text-xl text-inherit">{t("roleLine2")}</p>
          </div>
        </div>
        <div className="mb-2">
          <img
            src="/assets/senan1.jpeg"
            alt={t("full-name")}
            className="w-full grayscale rounded-3xl"
          />
        </div>
        <div className="flex justify-center flex-row w-full">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("tel:") ? undefined : "_blank"}
              rel="noreferrer"
              className={linkStyle}
              aria-label={label}
            >
              <Icon className="text-4xl p-2" />
            </a>
          ))}
        </div>

        <a
          href="mailto:1memmedovsenan@gmail.com"
          className="group flex justify-center m-4"
        >
          <button className="flex flex-row justify-center text-black items-center border-2 border-gega-green bg-gega-green hover:bg-transparent p-2 w-full rounded-2xl  transition duration-300 ">
            <p className="text-black pr-3 uppercase group-hover:text-gega-green  transition duration-300">
              {t("hire")}!
            </p>{" "}
            <AiOutlineMail className="group-hover:text-gega-green  transition duration-300 " />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Profile;
