import React from "react";
import { FaSheetPlastic } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Header from "./Header";

function Blogs() {
  const { t } = useTranslation();
  const imageStyle = { width: "100%", height: "100%", objectFit: "cover" };
  return (
    <div className="mt-10 mb-96 mx-10" id="blogs">
      <Header>
        <FaSheetPlastic className="text-inherit mx-2" />
        <p className="pr-2 text-inherit">{t("blogs")}</p>
      </Header>
      <div className="flex flex-row max-md:flex-wrap max-md:flex-col gap-10 w-full mt-10 items-center justify-between">
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          style={{ width: "60%", height: "200px", marginRight: "30px" }}
        >
          <a href="https://medium.com/@1senanmemmedov/rtk-query-82f95cfdc52c">
            <img
              src="/rtk-query-blog.webp"
              style={imageStyle}
              alt=""
              className="cursor-pointer rounded-[15px]"
            />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          style={{ width: "60%", height: "200px", marginRight: "20px" }}
        >
          <a href="https://medium.com/@1senanmemmedov/masonry-layoutlar-909afc6c4b78">
            <img
              src="/masonary-layout-blog.webp"
              style={imageStyle}
              alt=""
              className="cursor-pointer rounded-[15px]"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Blogs;
