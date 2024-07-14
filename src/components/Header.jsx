import React from "react";
import { navLists } from "../constants";

const Header = () => {
  return (
    <header className="w-full py-4 px-5 sm:px-10 flex justify-between items-center font-Roboto text-gray-400 bg-gray-100">
      <nav className="flex w-full screen-max-width justify-between">
        <div>
          <h1 className=" font-medium">Factory Space AI</h1>
        </div>
        <div className="flex  justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
