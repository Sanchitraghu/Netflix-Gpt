import React, { useEffect, useRef, useState } from "react";
import useGetSearchedMovies from "./services/get-searched-movies/get-searched-movies";

const useSearchMoviePageController = () => {
  const movieTitle = useRef(null);
  const [movieSearchedTitle, setMovieSearchedTitle] = useState("");
  const [searchedMovieList, setSearchedMovieList] = useState([]);
  const getSearchedMoviesDataList = useGetSearchedMovies(movieSearchedTitle);
  const onSearchedButtonClick = () => {
    if (!!movieTitle?.current?.value?.trim()) {
      setMovieSearchedTitle(movieTitle.current.value?.trim());
    }
  };
  useEffect(() => {
    if (
      getSearchedMoviesDataList?.data &&
      getSearchedMoviesDataList?.data?.length > 0
    ) {
      setSearchedMovieList(getSearchedMoviesDataList?.data?.slice(0,4));
    }
  }, [getSearchedMoviesDataList?.data, getSearchedMoviesDataList?.isSuccess]);
  return { movieTitle, searchedMovieList, onSearchedButtonClick };
};

export default useSearchMoviePageController;
