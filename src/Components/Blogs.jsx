import React from "react";
import { FaSheetPlastic } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function Blogs() {
  const { t } = useTranslation();
  const imageStyle = { width: "100%", height: "100%", objectFit: "cover" };
  return (
    <div className="mt-10 mb-96 mx-10" id="blogs">
      <div className="flex flex-row flex-start items-center ">
        <div className="flex flex-row items-center justify-start border-1 border-gega-light p-1 rounded-xl space-x-1">
          <FaSheetPlastic className="text-white mx-2" />
          <p className="pr-2">{t("blogs")}</p>
        </div>
      </div>

      <div className="flex flex-row max-md:flex-wrap max-md:flex-col gap-10 w-full mt-10 items-center justify-between">
        <div style={{ width: "60%", height: "200px", marginRight: "20px" }}>
          <a href="https://medium.com/@1senanmemmedov/rtk-query-82f95cfdc52c">
            <img
              src="/rtk-query-blog.webp"
              style={imageStyle}
              alt=""
              className="cursor-pointer rounded-[15px]"
            />
          </a>
        </div>
        <div style={{ width: "60%", height: "200px", marginRight: "20px" }}>
          <a href="https://medium.com/@1senanmemmedov/masonry-layoutlar-909afc6c4b78">
            <img
              src="/masonary-layout-blog.webp"
              style={imageStyle}
              alt=""
              className="cursor-pointer rounded-[15px]"
            />
          </a>
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="https://medium.com/@1senanmemmedov">
            <p className="text-xl font-Inter hover:text-gega-green transition duration-300">
              Is writing...
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
