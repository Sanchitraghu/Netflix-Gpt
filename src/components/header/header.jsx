import React from "react";

const Header = ({ isLoginPage }) => {
  return (
    <div className="absolute z-30 w-full bg-gradient-to-b from-black ">
      {isLoginPage && (
        <img
          className="w-48 ml-60 mt-4"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      )}
    </div>
  );
};

export default Header;
