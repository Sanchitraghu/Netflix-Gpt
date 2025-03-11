import React, { useEffect, useRef, useState } from "react";
import useGetSearchedMovies from "./services/get-searched-movies/get-searched-movies";
import { useSelector } from "react-redux";

const useSearchMoviePageController = () => {
  const movieTitle = useRef(null);
  const user = useSelector((store) => store.user);
  const [movieSearchedTitle, setMovieSearchedTitle] = useState("");
  const [searchedMovieList, setSearchedMovieList] = useState([]);
  const [isSearchLoaderVisible, setIsSearchLoaderVisible] = useState(false);
  const getSearchedMoviesDataList = useGetSearchedMovies(movieSearchedTitle);

  const onSearchedButtonClick = () => {
    if (!!movieTitle?.current?.value?.trim()) {
      setMovieSearchedTitle(movieTitle.current.value?.trim());
      setIsSearchLoaderVisible(true);
    }
  };

  useEffect(() => {
    if (
      getSearchedMoviesDataList?.data &&
      getSearchedMoviesDataList?.data?.length > 0
    ) {
      setSearchedMovieList(getSearchedMoviesDataList?.data?.slice(0, 4));
      setIsSearchLoaderVisible(false);
    }
  }, [getSearchedMoviesDataList?.data, getSearchedMoviesDataList?.isSuccess]);

  useEffect(() => {
    if (getSearchedMoviesDataList?.isError) {
      setIsSearchLoaderVisible(false);
    }
  }, [getSearchedMoviesDataList?.isError]);

  return {
    movieTitle,
    searchedMovieList,
    alreadySubscribeToNetflixMonthlyPlan:
      new Date(user?.subscriptionExpiresOn) > Date.now(),
    userId: user?.userDetails?.uId,
    isSearchLoaderVisible,
    onSearchedButtonClick,
  };
};

export default useSearchMoviePageController;
