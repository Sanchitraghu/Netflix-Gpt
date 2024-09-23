import React from "react";
import { Header } from "../../components";
import useHomeController from "./home-controller";

const Home = () => {
  const { trailorKey, movieDetailForTrailor } = useHomeController();
  return (
    <div>
      <Header />
      <div className="absolute w-full h-screen bg-gradient-to-br from-black z-20">
        <div>
          {trailorKey && (
            <iframe
              className="w-full h-screen -z-10"
              src={`https://www.youtube.com/embed/${trailorKey}?autoplay=1&mute=1&controls=0`}
              title="YouTube video player"
            ></iframe>
          )}
        </div>
        <div className="text-white absolute top-0 bg-gradient-to-br from-black py-[22rem] pb-[18.36rem] pl-40 ">
          <h1 className="text-5xl text-red-600 font-bold">
            {movieDetailForTrailor?.original_title}
          </h1>
          <p className="w-1/4 mt-5 text-lg">
            {movieDetailForTrailor?.overview}
          </p>
          <div className="flex gap-4 mt-4 font-bold">
            <button className="text-3xl bg-gray-200 text-black rounded-lg px-10 py-4">
              &#9658; Play
            </button>
            <button className="bg-gray-600 text-3xl text-white rounded-lg px-2">
              &#9432; More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
