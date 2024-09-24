import { useQuery } from "react-query";
import apiClient from "../../../../apis";

const getMoviesDataFromTMDB = async (movieTypeRoute, pageNumber) => {
  const response = await apiClient.get(`${movieTypeRoute}&page=${pageNumber}`);
  return response.data;
};

const useGetMoviesData = (movieTypeRoute, pageNumber) => {
  return useQuery(
    ["movies", pageNumber],
    () => getMoviesDataFromTMDB(movieTypeRoute, pageNumber),
    {
      cacheTime: 0,
    }
  );
};

export default useGetMoviesData;
