import React from "react";
import { useQuery } from "react-query";
import apiClient from "../../../../apis/api-client";

const getSearchedMovies = async (movieTitle) => {
  if (!movieTitle) return;
  const response = await apiClient.get(
    `/search/movie?query=${movieTitle}&page=1`
  );
  return response?.data?.results;
};

const useGetSearchedMovies = (movieTitle) => {
  return useQuery(
    ["searchedMovies", movieTitle],
    () => getSearchedMovies(movieTitle),
    { cacheTime: 0 }
  );
};

export default useGetSearchedMovies;
