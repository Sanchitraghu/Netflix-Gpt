import React from "react";
import MovieCard from "../movie-card/movie-card";
import { Link } from "react-router-dom";

const MoviesList = ({
  movieGenre,
  movieList,
  isSearchPage,
  alreadySubscribeToNetflixMonthlyPlan,
  userId,
}) => {
  return (
    <div
      className={`relative z-40 top-[48rem] ml-16 ${
        isSearchPage && "bg-black bg-opacity-60 pl-10 py-5 rounded-lg"
      }`}
    >
      <div className="flex flex-col">
        <h1 className="text-3xl font-medium text-white my-6">
          {movieGenre?.split(" ")?.[0]}{" "}
          <span className="text-red-600">{movieGenre?.split(" ")?.[1]}</span>
        </h1>
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          {movieList?.map((movie) => {
            return (
              <Link
                key={`${movie?.id}`}
                to={
                  alreadySubscribeToNetflixMonthlyPlan
                    ? `/play-video/${movie?.id}`
                    : `/checkout/${userId}`
                }
              >
                <MovieCard
                  moviePoster={movie?.poster_path}
                  movieTitle={movie?.title}
                  isSearchPage={isSearchPage}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
