import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="bg-gray-900 text-gray-200 py-3 px-8 drop-shadow-md flex justify-between items-center text-xl font-serif">
        <a href="#">
          <h1 className="text-3xl hover:scale-105 transition-all">DisCuss</h1>
        </a>

        <ul className="hidden xl:flex items-center gap-12 font-semibold">
          <li className="p-3 hover:bg-gray-700 hover:text-sky-500 rounded-md transition-all cursor-pointer">
            Home
          </li>
          <li className="p-3 hover:bg-gray-700 hover:text-sky-500 rounded-md transition-all cursor-pointer">
            Posts
          </li>
          <li className="p-3 hover:bg-gray-700 hover:text-sky-500 rounded-md transition-all cursor-pointer">
            Trending
          </li>
          <li className="p-3 hover:bg-gray-700 hover:text-sky-500 rounded-md transition-all cursor-pointer">
            Explore
          </li>
        </ul>

        <div className="relative hidden md:flex items-center gap-2">
          <i className="bx bx-search text-gray-400 text-2xl absolute left-2"></i>
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white pl-10 py-2 px-3 rounded-xl focus:outline-sky-300 focus:ring-2 border-blue-300 focus:ring-sky-500"
          />
        </div>

        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        ></i>

        <div
          className={`fixed top-24 left-0 w-full bg-gray-900 text-gray-200 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[400px] py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 font-semibold text-lg py-6">
            <li
              className="w-full text-center p-4 bg-sky-800 hover:bg-sky-950 hover:text-white transition-all cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Home
            </li>
            <li
              className="w-full text-center p-4 bg-sky-800 hover:bg-sky-950 hover:text-white transition-all cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Posts
            </li>
            <li
              className="w-full text-center p-4 bg-sky-800 hover:bg-sky-950 hover:text-white transition-all cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Trending
            </li>
            <li
              className="w-full text-center p-4 bg-sky-800 hover:bg-sky-950 hover:text-white transition-all cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Explore
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
