import React from "react";
import Navbar from "../components/Navbar";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative w-full h-screen">
        {/* Hero Banner Image */}
        <img
          src={hero_banner}
          alt="Hero Banner"
          className="w-full h-full object-cover absolute inset-0 z-5"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>

        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar className="fixed" />
        </div>

        {/* Hero Content Example */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-12 z-30 max-w-full md:max-w-xl pt-24 md:pt-16">
          <img
            src={hero_title}
            alt=""
            className="mb-4 w-3/4 max-w-xs md:mb-6 md:w-[400px]"
          />
          <p className="text-white text-base md:text-lg mb-4">
            Watch the latest movies and TV shows on our platform. Enjoy a wide
            range of genres and exclusive content.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2 md:mt-4">
            <Link to={"/banner-vid"}>
              <button className="w-full sm:w-30 bg-red-900 hover:bg-red-600 text-white rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out py-2">
                <img
                  src={play_icon}
                  alt=""
                  className="inline-block mr-2 h-8 md:h-8"
                />
                Play
              </button>
            </Link>
            <Link to={"https://www.imdb.com/title/tt10022384/"}>
              <button className="w-full sm:w-30 py-2 md:py-3 bg-red-900 hover:bg-red-600 text-white rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  src={info_icon}
                  alt=""
                  className="inline-block mr-2 h-8 md:h-6"
                />
                More Info
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Cards />
        <Cards title={"popular"} />
        <Cards title={"Avengers"} />
        <Cards title={"Iron man"} />
        <Cards title={"vijay"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
