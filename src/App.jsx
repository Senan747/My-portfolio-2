import Profile from "../src/Components/Profile";
import Right from "../src/Components/Right";
import Main from "../src/Components/Main";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import HomeburgerMenu from "../src/Components/HomburgerMenu";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import "./App.css";
function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const toggleMode = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="dark:bg-gega-black bg-gega-white dark:text-gega-white text-gega-black min-h-screen font-Inter">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-inherit">
          <ClimbingBoxLoader loading={loading} color={"#28E98C"} size={30} />
        </div>
      ) : (
        <>
          <AnimatedCursor
            color="255,255,255"
            innerSize={8}
            outerSize={40}
            innerScale={1}
            outerScale={2}
            outerAlpha={1}
            hasBlendMode={true}
            outerStyle={{
              mixBlendMode: "exclusion",
            }}
            innerStyle={{
              backgroundColor: "#fff",
              mixBlendMode: "exclusion",
            }}
          />
          <div className="hidden max-xl:flex absolute z-20 bg-inherit text-inherit">
            <HiOutlineMenuAlt4
              className="text-6xl border-2 fixed bg-gega-black rounded-full border-gega-light text-gega-white  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2 p-4 cursor-pointer mt-10"
              onClick={handleMenuToggle}
            />
          </div>
          <div className="absolute z-20 -top-6 left-8 dark:bg-gega-black bg-gega-white">
            {theme == "dark" ? (
              <MdDarkMode
                onClick={toggleMode}
                className="text-6xl text-inherit max-xl:hidden border-2 fixed bg-inherit rounded-full border-gega-light text-gega-white  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2 p-4 cursor-pointer mt-10"
              />
            ) : (
              <CiLight
                onClick={toggleMode}
                className="text-6xl text-inherit max-xl:hidden border-2 fixed bg-inherit rounded-full border-gega-light text-gega-white  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2 p-4 cursor-pointer mt-10"
              />
            )}
          </div>

          <div className="bg-inherit text-inherit w-full h-full flex flex-row max-xl:flex-col max-xl:items-center max-xl:px-20 max-md:px-5 items-start animate-[pulse_1s_ease-in-out]">
            <div className="container basis-1/3 max-xl:basis-1/2 flex h-screen items-center justify-center">
              <Profile />
            </div>

            <div className="basis-1/2 max-xl:basis-5/6 mt-5">
              <Main />
            </div>
            <div className="basis-1/6 max-xl:hidden">
              <Right />
            </div>
          </div>
        </>
      )}
      <HomeburgerMenu open={showMenu} onClose={handleMenuToggle} />
    </div>
  );
}

export default App;
