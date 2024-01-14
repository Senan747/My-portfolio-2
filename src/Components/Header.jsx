import React from "react";

function Header({ children }) {
  return (
    <div className="flex flex-row flex-start items-center mb-20">
      <div className="flex flex-row items-center border-1 border-gega-light p-1 rounded-xl space-x-1 dark:text-gega-white text-gega-black">
        {children}
      </div>
    </div>
  );
}

export default Header;
