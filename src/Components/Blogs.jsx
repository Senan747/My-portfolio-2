import { FaSheetPlastic, FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Header from "./Header";
import { blogPosts } from "../data/blogs";

function Blogs() {
  const { t } = useTranslation();

  return (
    <div
      className="mt-10 mb-40 max-md:mb-20 mx-10 max-md:mx-4 max-sm:mx-2"
      id="blogs"
    >
      <Header>
        <FaSheetPlastic className="text-inherit mx-2" />
        <p className="pr-2 text-inherit">{t("blogs")}</p>
      </Header>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 mt-10">
        {blogPosts.map(({ image, href, titleKey, excerptKey }) => (
          <motion.a
            key={titleKey}
            href={href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group border-1 border-zinc-300 dark:border-gega-light rounded-2xl overflow-hidden hover:border-gega-green transition duration-300"
          >
            <div className="w-full aspect-video overflow-hidden">
              <img
                src={image}
                alt={t(titleKey)}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-5">
              <p className="text-lg text-inherit mb-2">{t(titleKey)}</p>
              <p className="text-sm text-zinc-600 dark:text-gega-light mb-4">{t(excerptKey)}</p>
              <span className="flex flex-row items-center text-gega-green text-sm">
                {t("readMore")}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition duration-300" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
