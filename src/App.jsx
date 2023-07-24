import Profile from "../src/Components/Profile";
import Right from "../src/Components/Right";
import Main from "../src/Components/Main";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import HomeburgerMenu from "../src/Components/HomburgerMenu";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="bg-gega-black min-h-screen ">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <ClimbingBoxLoader loading={loading} color={"#28E98C"} size={30} />
        </div>
      ) : (
        <>
          <div className="hidden max-xl:flex absolute z-20">
            <HomeburgerMenu className="" />
          </div>

          <div className="bg-gega-black w-full h-full flex flex-row max-xl:flex-col max-xl:items-center max-xl:pl-20 max-xl:pr-20 max-md:pl-5 max-md:pr-5 items-start animate-[pulse_1s_ease-in-out]">
            <div className="container basis-1/3 max-xl:basis-1/2">
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
