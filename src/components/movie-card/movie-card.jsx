import React from "react";
import { API_ROUTES } from "../../enums";

const MovieCard = ({ moviePoster, movieName }) => {
  return (
    <div className="w-40">
      <img
        className="w-40 max-w-none cursor-pointer hover:scale-110 duration-300"
        src={API_ROUTES.GET_THUMNAIL_OF_MOVIE + moviePoster}
        alt={"movie"}
      />
    </div>
  );
};

export default MovieCard;
