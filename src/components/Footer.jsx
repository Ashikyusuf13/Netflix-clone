import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-base md:text-xl h-full flex justify-center items-center flex-col pt-3 px-2">
      {/* Social Icons */}
      <div className="flex gap-6 md:gap-10 mb-4 flex-wrap justify-center">
        <a href="/">
          <i className="bx bxl-instagram text-2xl md:text-3xl"></i>
        </a>
        <a href="/">
          <i className="bx bxl-youtube text-2xl md:text-3xl"></i>
        </a>
        <a href="/">
          <i className="bx bxl-facebook text-2xl md:text-3xl rounded-lg"></i>
        </a>
      </div>
      {/* Menu Links */}
      <div className="w-full flex justify-center mt-2 md:mt-6">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-6 text-xs md:text-sm gap-4 md:gap-10 italic cursor-pointer w-fit">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Action</li>
          <li>Comedy</li>
          <li>Drama</li>
          <li>Documentaries</li>
          <li>Kids</li>
          <li>Originals</li>
          <li>Trending Now</li>
          <li>Top Rated</li>
          <li>Recently Added</li>
          <li>Settings</li>
        </ul>
      </div>
      {/* Copyright */}
      <div className="flex flex-col md:flex-row text-xs md:text-sm italic justify-center mt-3 mb-5 items-center gap-2 text-center">
        <p>Created By ASHIK</p>
        <p>© 2025 Netflix Clone. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
