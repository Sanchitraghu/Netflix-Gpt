import React from "react";
import {
  NETFLIX_BACKGROUND_IMAGE,
  SEARCH_LOADER,
} from "../../constants/constants";
import { Header, MoviesList } from "../../components";
import useSearchMoviePageController from "./search-movie-page-controller";

const SearchMoviePage = () => {
  const {
    movieTitle,
    searchedMovieList,
    alreadySubscribeToNetflixMonthlyPlan,
    userId,
    isSearchLoaderVisible,
    onSearchedButtonClick,
  } = useSearchMoviePageController();

  return (
    <div>
      <Header isSearchPage={true} />
      <div className="absolute rounded-lg flex flex-col gap-4 left-96 ml-32 top-36 w-1/2 text-white p-10 bg-black bg-opacity-80">
        <h1 className="text-4xl font-bold">
          Search <span className="text-red-600">Movie</span>
        </h1>
        <div className="flex gap-2">
          <input
            ref={movieTitle}
            className="w-3/4 h-10 rounded-md text-white p-3 bg-black border border-red-700"
            type="text"
            placeholder="Search Movie"
          />
          <button
            onClick={onSearchedButtonClick}
            className="w-1/4 h-10 rounded-md bg-red-600"
          >
            Search
          </button>
        </div>
      </div>

      {isSearchLoaderVisible ? (
        <div className="absolute top-[28rem] left-[55rem] rounded-lg bg-black bg-opacity-80 w-24 h-24 ">
          <img src={SEARCH_LOADER} alt="search-loader" />
        </div>
      ) : (
        <div className="absolute rounded-lg flex flex-col gap-4 left-60 ml-32 text-white p-10 bg-black bg-opacity-80 z-50 -top-[28rem]">
          {searchedMovieList && searchedMovieList?.length > 0 && (
            <MoviesList
              movieGenre="Searched Movies"
              movieList={searchedMovieList}
              isSearchPage={true}
              alreadySubscribeToNetflixMonthlyPlan={
                alreadySubscribeToNetflixMonthlyPlan
              }
              userId={userId}
            />
          )}
        </div>
      )}

      <div className="bg-opacity-50">
        <img
          src={NETFLIX_BACKGROUND_IMAGE}
          alt="bg-img"
          aria-hidden="true"
          className="default-ltr-cache-19j6xtr h-screen w-full"
        />
      </div>
    </div>
  );
};

export default SearchMoviePage;
