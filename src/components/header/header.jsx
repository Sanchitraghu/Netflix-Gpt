import React from "react";
import useHeaderController from "./header-controller";
import { PROFILE_IMAGE_URL } from "../../constants/constants";

const Header = ({ isLoginPage }) => {
  const { userDetails, onSignOut, navigateToHomePage } = useHeaderController();
  return (
    <div className="absolute flex justify-between z-30 w-full bg-gradient-to-b from-black ">
      <img
        onClick={navigateToHomePage}
        className="w-48 ml-40 mt-4"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
