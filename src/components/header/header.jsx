import React from "react";
import useHeaderController from "./header-controller";
import { NETFLIX_LOGO_URL, PROFILE_IMAGE_URL } from "../../constants/constants";

const Header = ({ isLoginPage, isPlayPage, isSearchPage }) => {
  const { userDetails, onSignOut, navigateToHomePage, navigateToSearchPage } =
    useHeaderController();
  return (
    <div
      className={`absolute flex justify-between z-30 w-full bg-gradient-to-b from-black ${
        isPlayPage && `bg-black`
      }`}
    >
      <img
        onClick={navigateToHomePage}
        className="w-48 ml-40 mt-4"
        src={NETFLIX_LOGO_URL}
        alt="logo"
      />
      {!isLoginPage && (
        <div className="flex justify-between gap-6 mr-16">
          <h1 className="text-white text-2xl font-bold mt-9">
            Welcome{" "}
            <span className="text-red-600">
              {userDetails?.displayName?.split(" ")[0]} !
            </span>
          </h1>
          <img
            className="w-12 h-12 mt-6 rounded-md"
            src={PROFILE_IMAGE_URL.DEFAULT}
            alt="profile"
          />
          <button
            onClick={isSearchPage ? navigateToHomePage : navigateToSearchPage}
            className="bg-gray-500 h-10 px-2 mt-7 text-sm font-semibold text-white rounded-md hover:bg-red-700"
          >
            {isSearchPage ? `Go To Home` : `Explore Movies`}
          </button>
          <button
            onClick={onSignOut}
            className="bg-red-600 h-10 px-2 mt-7 text-sm font-semibold text-white rounded-md hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
