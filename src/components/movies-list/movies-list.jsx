import React from "react";
import MovieCard from "../movie-card/movie-card";
import { Link } from "react-router-dom";

const MoviesList = ({ movieGenre, movieList }) => {
  return (
    <div className="relative z-40 top-[48rem] ml-16">
      <div className="flex flex-col">
        <h1 className="text-3xl font-medium text-white my-6">{movieGenre}</h1>
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          {movieList?.map((movie) => {
            return (
              <Link key={`${movie?.id}`} to={`/play-video/${movie?.id}`}>
                <MovieCard
                  moviePoster={movie?.poster_path}
                  movieName={movie?.title}
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
