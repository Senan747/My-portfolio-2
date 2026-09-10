import Profile from "../src/Components/Profile";
import Right from "../src/Components/Right";
import Main from "../src/Components/Main";
import HamburgerMenu from "../src/Components/HamburgerMenu";
import { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "./hooks/useTheme";

import "./App.css";
function App() {
  const { theme, toggleTheme } = useTheme();

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="dark:bg-gega-black bg-gega-white dark:text-gega-white text-gega-black min-h-screen font-Inter">
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

        <div className="bg-inherit text-inherit w-full h-full flex flex-row max-xl:flex-col max-xl:items-center max-xl:px-12 max-md:px-6 max-sm:px-3 items-start animate-[pulse_1s_ease-in-out]">
          <div className="container basis-1/3 max-xl:basis-1/2 flex h-screen items-center justify-center">
            <Profile
              theme={theme}
              toggleTheme={toggleTheme}
              onMenuToggle={handleMenuToggle}
            />
          </div>

          <div className="basis-1/2 max-xl:basis-5/6 mt-5">
            <Main />
          </div>
          <div className="basis-1/6 max-xl:hidden">
            <Right />
          </div>
        </div>
      </>
      <HamburgerMenu open={showMenu} onClose={handleMenuToggle} />
    </div>
  );
}

export default App;
