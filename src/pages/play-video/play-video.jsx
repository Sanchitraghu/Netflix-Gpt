import React from "react";
import { Header } from "../../components";
import usePlayVideoController from "./play-video-controller";
import { PAYMENT_LOADER_GIF_URL } from "../../constants/constants";
import { isError } from "react-query";

const PlayVideo = () => {
  const { trailorKey, trailorKeyLoading, isErrorInFetching } =
    usePlayVideoController();
  return (
    <div>
      <Header isPlayPage={true} />
      <div>
        {!trailorKeyLoading && !!trailorKey ? (
          <iframe
            id="ytplayer-play"
            className="w-full h-screen"
            src={`https://www.youtube.com/embed/${trailorKey}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`}
            title="YouTube video player"
          ></iframe>
        ) : isErrorInFetching ? (
          <div>
            <h1>Cannot Get the trailor got this Moviee</h1>
          </div>
        ) : (
          <img
            className="w-72 flex justify-center items-center"
            src={PAYMENT_LOADER_GIF_URL}
            alt="Imgg"
          />
        )}
      </div>
    </div>
  );
};

export default PlayVideo;
