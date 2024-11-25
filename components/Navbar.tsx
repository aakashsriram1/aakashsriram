"use client"; // this is a client component
import React from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="flex justify-end items-center space-x-4 py-3">


        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/aakashsriram" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-100 p-2 rounded-xl"
        >
          <FaLinkedin size={25} color="black" />
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/aakashsriram1" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-100 p-2 rounded-xl"
        >
          <FaGithub size={25} color="black" />
        </a>
  {/* Light/Dark Mode Button */}
{currentTheme === "dark" ? (
  <button
    onClick={() => setTheme("light")}
    className="bg-gray-800 text-white p-2 rounded-xl hover:bg-gray-700 transition"
  >
    <RiSunLine size={25} />
  </button>
) : (
  <button
    onClick={() => setTheme("dark")}
    className="bg-gray-200 text-black p-2 rounded-xl hover:bg-gray-300 transition"
  >
    <RiMoonFill size={25} />
  </button>
)}

      </div>
    </header>
  );
}
