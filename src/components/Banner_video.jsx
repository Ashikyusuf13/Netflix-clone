import React from "react";
import back_icon from "../assets/back_arrow_icon.png";
import { Navigate, useNavigate } from "react-router-dom";

const Banner_video = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col bg-black text-white w-full h-screen">
      <img
        onClick={() => navigate(-1)}
        className="w-10 h-10 self-start mt-4 ml-5"
        src={back_icon}
        alt="icon"
      />
      <h2 className="text-2xl mb-3">Watch Trailer</h2>

      <iframe
        width="90%"
        height="80%"
        src="https://www.youtube.com/embed/80dqOwAOhbo?si=L7O_3yAPvCcvoqCV"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="mb-7"
      ></iframe>
    </div>
  );
};

export default Banner_video;
