import Profile from "../src/Components/Profile";
import Right from "../src/Components/Right";
import Main from "../src/Components/Main";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import HomeburgerMenu from "../src/Components/HomburgerMenu";
import { useEffect, useState } from "react";

import "./App.css";
function App() {
  const [loading, setLoading] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="bg-gega-black min-h-screen font-Inter">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <ClimbingBoxLoader loading={loading} color={"#28E98C"} size={30} />
        </div>
      ) : (
        <>
          <div className="hidden max-xl:flex absolute z-20">
            <HiOutlineMenuAlt4
              className="text-6xl border-2 fixed bg-gega-black rounded-full border-gega-light text-gega-white  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2 p-4 cursor-pointer mt-10"
              onClick={handleMenuToggle}
            />
            <HomeburgerMenu open={showMenu} onClose={handleMenuToggle} />
          </div>

          <div className="bg-gega-black w-full h-full flex flex-row max-xl:flex-col max-xl:items-center max-xl:px-20 max-md:px-5 items-start animate-[pulse_1s_ease-in-out]">
            <div className="container basis-1/3 max-xl:basis-1/2 flex h-screen items-center justify-center">
              <Profile />
            </div>

            <div className="basis-1/2 max-xl:basis-5/6">
              <Main />
            </div>
            <div className="basis-1/6 max-xl:hidden">
              <Right />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
