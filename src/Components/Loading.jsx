import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

function Loading() {
  return (
    <div className="dark:bg-gega-black bg-gega-white flex items-center justify-center min-h-screen bg-inherit">
      <ClimbingBoxLoader color={"#28E98C"} size={30} />
    </div>
  );
}

export default Loading;
