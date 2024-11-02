import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetMovieTrailor } from "../home-page/services";

const usePlayVideoController = () => {
  const { movieId } = useParams();
  const [trailorKey, setTrailorKey] = useState("");
  const [isErrorInFetching, setIsErrorInFetching] = useState(false);
  const getMovieTrailor = useGetMovieTrailor(movieId);

  useEffect(() => {
    if (
      getMovieTrailor?.isSuccess &&
      getMovieTrailor?.data &&
      getMovieTrailor?.data?.results?.length > 0
    ) {
      const selectedMovieTrailor = getMovieTrailor?.data?.results?.find(
        (movie) => movie.type === "Trailer"
      );
      if (selectedMovieTrailor) {
        setTrailorKey(selectedMovieTrailor?.key);
      }
    } else {
      setIsErrorInFetching(true);
    }
  }, [getMovieTrailor?.data, getMovieTrailor?.isSuccess]);
  return {
    trailorKey,
    trailorKeyLoading:
      getMovieTrailor?.isLoading || getMovieTrailor?.isFetching,
    isErrorInFetching,
  };
};

export default usePlayVideoController;
