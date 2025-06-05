import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import { useNavigate } from "react-router-dom";
import { logout } from "../Firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fix: Ensure hamburger is visible on all small screens and sidebar overlay is above all
  return (
    <div className="w-full fixed h-16 flex justify-between items-center px-4 md:px-12 font-medium text-white z-50">
      <div className="flex items-center gap-4 md:gap-8 z-20">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Logo"
          className="h-15 w-30 cursor-pointer"
        />
        <ul className="hidden md:flex gap-6 text-sm">
          <li className="hover:cursor-pointer hover:text-red-400">Home</li>
          <li className="hover:cursor-pointer hover:text-red-400">TV Shows</li>
          <li className="hover:cursor-pointer hover:text-red-400">Movies</li>
          <li className="hover:cursor-pointer hover:text-red-400">
            New & Popular
          </li>
          <li className="hover:cursor-pointer hover:text-red-400">My List</li>
          <li className="hover:cursor-pointer hover:text-red-400">
            Browse by Languages
          </li>
        </ul>
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="block md:hidden focus:outline-none  cursor-pointer"
          aria-label="Open sidebar menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={search_icon}
          alt="Search"
          className="hidden md:block  h-5 w-5 cursor-pointer"
        />
        <div>
          <button className="text-sm cursor-pointer hover:bg-red-400">
            <select
              id="cas"
              className="flex justify-center items-center cursor-pointer bg-gray-800 rounded-lg border-none   text-white p-2 outline-none"
            >
              <option value="cas">Parent</option>
              <option value="cas">Children</option>
            </select>
          </button>
        </div>
        <img
          src={bell_icon}
          alt="Bell"
          className="h-5 w-5 cursor-pointer hidden md:block"
        />
        <div className="relative group">
          <button
            onClick={() => logout()}
            className="text-white px-2 py-1 cursor-pointer bg-red-600 rounded mt-2 hover:bg-red-500 border-none"
          >
            Sign Out
          </button>
        </div>
      </div>
      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0  bg-transparent bg-opacity-40  z-50 flex">
          <div className="flex flex-col w-64 h-full bg-gray-900 p-6 transform transition-transform duration-300 translate-x-0">
            <button
              className="self-end mb-6 text-white text-3xl cursor-pointer"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar menu"
            >
              &times;
            </button>
            <ul className="flex flex-col gap-6 text-lg">
              <li
                className="hover:cursor-pointer hover:text-red-400"
                onClick={() => setSidebarOpen(false)}
              >
                Home
              </li>
              <li
                className="hover:cursor-pointer hover:text-red-400"
                onClick={() => setSidebarOpen(false)}
              >
                TV Shows
              </li>
              <li
                className="hover:cursor-pointer hover:text-red-400"
                onClick={() => setSidebarOpen(false)}
              >
                Movies
              </li>
              <li
                className="hover:cursor-pointer hover:text-red-400"
                onClick={() => setSidebarOpen(false)}
              >
                New & Popular
              </li>
              <li
                className="hover:cursor-pointer hover:text-red-400"
                onClick={() => setSidebarOpen(false)}
              >
                My List
              </li>
              <li
                className="hover:cursor-pointer hover:text-red-400"
                onClick={() => setSidebarOpen(false)}
              >
                Browse by Languages
              </li>
            </ul>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setSidebarOpen(false)}></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
