import { useEffect } from "react";
import { useGetMovieTrailor, useGetMoviesData } from "./services";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllPopularMovies,
  addMovieDetailForTrailor,
  addMovieTrailorYoutubeKey,
} from "../../store/slices/movie-slice/movie-slice";

const useHomeController = () => {
  const movieDetails = useSelector((store) => store.movie);
  const dispatch = useDispatch();
  const getPopularMovies = useGetMoviesData(1);
  const getMovieTrailor = useGetMovieTrailor(
    movieDetails?.movieDetailForTrailor?.id
  );

  useEffect(() => {
    if (
      getPopularMovies?.isSuccess &&
      getPopularMovies?.data &&
      getPopularMovies?.data?.results?.length > 0
    ) {
      dispatch(addAllPopularMovies(getPopularMovies?.data?.results));
      dispatch(addMovieDetailForTrailor(getPopularMovies?.data?.results?.[2]));
    }
  }, [getPopularMovies?.isSuccess, getPopularMovies?.data]);

  useEffect(() => {
    if (
      getMovieTrailor?.isSuccess &&
      getMovieTrailor?.data &&
      getMovieTrailor?.data?.results?.length > 0
    ) {
      const selectedMovieTrailor = getMovieTrailor?.data?.results?.find(
        (movie) => movie.type === "Trailer"
      );
      if (selectedMovieTrailor?.key) {
        dispatch(addMovieTrailorYoutubeKey(selectedMovieTrailor?.key));
      }
    }
  }, [getMovieTrailor?.isSuccess, getMovieTrailor?.data]);
  return {
    trailorKey: movieDetails?.movieTrailorYoutubeKey,
    movieDetailForTrailor: movieDetails?.movieDetailForTrailor,
  };
};

export default useHomeController;
