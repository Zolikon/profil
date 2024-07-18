import { AnimatePresence } from "framer-motion";
import SideNavigation from "./components/SideMenu";
import { Outlet } from "react-router-dom";
import ColorThemeSelector from "./components/ColorThemeSelector";

function App() {
  return (
    <>
      <div className="flex h-full w-full bg-gradient-to-b relative from-light-bg-from to-light-bg-to dark:from-dark-bg-from dark:to-dark-bg-to text-light-text dark:text-dark-text overflow-y-auto">
        <header className="h-full flex w-14 items-center justify-center">
          <SideNavigation
            content={[
              {
                elements: [
                  <span key={11} className="text-sm sm:text-lg md:text-2xl material-symbols-outlined">
                    person
                  </span>,
                  <p key={12} className="text-sm sm:text-lg md:text-2xl">
                    About
                  </p>,
                ],
                to: "/",
              },
              {
                elements: [
                  <span key={21} className="text-sm sm:text-lg md:text-2xl material-symbols-outlined">
                    computer
                  </span>,
                  <p key={22} className="text-sm sm:text-lg md:text-2xl">
                    Skills
                  </p>,
                ],
                to: "/skills",
              },
              {
                elements: [
                  <span key={31} className="text-sm sm:text-lg md:text-2xl material-symbols-outlined">
                    code_blocks
                  </span>,
                  <p key={32} className="text-sm sm:text-lg md:text-2xl">
                    Projects
                  </p>,
                ],
                to: "/projects",
              },
            ]}
          />
        </header>
        <main className=" flex items-center justify-center mx-[30px] sm:mx-[60px] w-full">
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </main>
      </div>
      <ColorThemeSelector />
    </>
  );
}

export default App;
