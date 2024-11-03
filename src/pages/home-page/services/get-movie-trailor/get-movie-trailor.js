import { useQuery } from "react-query";
import apiClient from "../../../../apis";
import { API_ROUTES } from "../../../../enums";

const getMovieTrailorByMovieId = async (movieId) => {
  if (!movieId) return;
  const response = await apiClient.get(
    `/movie/${movieId}/${API_ROUTES.GET_MOVIE_TRAILOR}`
  );
  return response.data;
};

const useGetMovieTrailor = (movieId) => {
  return useQuery(
    ["movieTrailor", movieId],
    () => getMovieTrailorByMovieId(movieId),
    {
      cacheTime: 0,
    }
  );
};

export default useGetMovieTrailor;
