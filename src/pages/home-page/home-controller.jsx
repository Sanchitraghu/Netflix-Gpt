import { useEffect, useMemo } from "react";
import { useGetMovieTrailor, useGetMoviesData } from "./services";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllNowPlayingMovies,
  addAllPopularMovies,
  addAllTopRatedMovies,
  addAllUpcomingMovies,
  addMovieDetailForTrailor,
  addMovieTrailorYoutubeKey,
} from "../../store/slices/movie-slice/movie-slice";
import { API_ROUTES } from "../../enums";

const useHomeController = () => {
  const movieDetails = useSelector((store) => store.movie);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const getPopularMovies = useGetMoviesData(API_ROUTES.GET_POPULAR_MOVIES, 1);
  const getNowPlayingMovies = useGetMoviesData(
    API_ROUTES.GET_NOW_PLAYING_MOVIES,
    2
  );
  const getTopRatedMovies = useGetMoviesData(
    API_ROUTES.GET_TOP_RATED_MOVIES,
    3
  );
  const getUpcomingMovies = useGetMoviesData(API_ROUTES.GET_UPCOMING_MOVIES, 4);
  const getMovieTrailor = useGetMovieTrailor(
    movieDetails?.movieDetailForTrailor?.id
  );

  const movieListToShowOnSuggestions = [
    {
      name: "Now Playing",
      data: movieDetails?.allNowPlayingMovies,
    },
    {
      name: "Popular",
      data: movieDetails?.allPopularMovies,
    },
    {
      name: "Top Rated",
      data: movieDetails?.allTopRatedMovies,
    },
    {
      name: "Upcoming",
      data: movieDetails?.allUpcomingMovies,
    },
  ];

  useEffect(() => {
    if (
      getPopularMovies?.isSuccess &&
      getPopularMovies?.data &&
      getPopularMovies?.data?.results?.length > 0
    ) {
      dispatch(addAllPopularMovies(getPopularMovies?.data?.results));
      dispatch(addMovieDetailForTrailor(getPopularMovies?.data?.results?.[3]));
    }
  }, [getPopularMovies?.isSuccess, getPopularMovies?.data]);

  useEffect(() => {
    if (
      getNowPlayingMovies?.isSuccess &&
      getNowPlayingMovies?.data &&
      getNowPlayingMovies?.data?.results?.length > 0
    ) {
      dispatch(addAllNowPlayingMovies(getNowPlayingMovies?.data?.results));
    }
  }, [getNowPlayingMovies?.isSuccess, getNowPlayingMovies?.data]);

  useEffect(() => {
    if (
      getUpcomingMovies?.isSuccess &&
      getUpcomingMovies?.data &&
      getUpcomingMovies?.data?.results?.length > 0
    ) {
      dispatch(addAllUpcomingMovies(getUpcomingMovies?.data?.results));
    }
  }, [getUpcomingMovies?.isSuccess, getUpcomingMovies?.data]);

  useEffect(() => {
    if (
      getTopRatedMovies?.isSuccess &&
      getTopRatedMovies?.data &&
      getTopRatedMovies?.data?.results?.length > 0
    ) {
      dispatch(addAllTopRatedMovies(getTopRatedMovies?.data?.results));
    }
  }, [getTopRatedMovies?.isSuccess, getTopRatedMovies?.data]);

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
    movieListToShowOnSuggestions,
    alreadySubscribeToNetflixMonthlyPlan:
      new Date(user?.subscriptionExpiresOn) > Date.now(),
    userId: user?.userDetails?.uId,
    isSubscriptionDetailsAvailable: user?.subscriptionExpiresOn,
  };
};

export default useHomeController;
