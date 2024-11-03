import React from "react";
import { API_ROUTES } from "../../enums";

const MovieCard = ({ moviePoster, movieTitle, isSearchPage }) => {
  return (
    <div className={`w-40 ${isSearchPage && "mr-20"}`}>
      <img
        className="w-40 max-w-none cursor-pointer hover:scale-110 duration-300"
        src={API_ROUTES.GET_THUMNAIL_OF_MOVIE + moviePoster}
        alt={"movie"}
      />
      {isSearchPage && movieTitle && (
        <h1 className="text-white text-xl font-bold mt-4">{movieTitle}</h1>
      )}
    </div>
  );
};

export default MovieCard;
