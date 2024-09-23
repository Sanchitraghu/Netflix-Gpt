import { useQuery } from "react-query";
import apiClient from "../../../../apis";
import { API_ROUTES } from "../../../../enums.js";

const getMoviesDataFromTMDB = async (pageNumber) => {
  const response = await apiClient.get(
    `${API_ROUTES.GET_MOVIES}&page=${pageNumber}`
  );
  return response.data;
};

const useGetMoviesData = (pageNumber) => {
  return useQuery(
    ["movies", pageNumber],
    () => getMoviesDataFromTMDB(pageNumber),
    {
      cacheTime: 0,
    }
  );
};

export default useGetMoviesData;
