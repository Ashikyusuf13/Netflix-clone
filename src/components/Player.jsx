import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import back_icon from "../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the title from the query string, fallback to id if not present
  const params = new URLSearchParams(location.search);
  const title = params.get("title") || id;

  // YouTube search for trailer using the movie title
  const youtubeSearchUrl = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
    title + " trailer"
  )}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <img
        src={back_icon}
        onClick={() => navigate(-1)}
        alt="Back"
        className="w-15 h-15 cursor-pointer mb-4 self-start ml-8"
      />
      <h2 className="text-white text-2xl mb-4">Watch Trailer</h2>
      <div className="w-full max-w-3xl aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={youtubeSearchUrl}
          title="YouTube Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
      <div className="mt-4">
        <p className="text-white text-lg">Title: {title}</p>
      </div>
    </div>
  );
};

export default Player;
