import React from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "../../components";
import useLoginController from "./login-controller";
import "react-toastify/dist/ReactToastify.css";
import { NETFLIX_BACKGROUND_IMAGE } from "../../constants/constants";

const Login = () => {
  const {
    userName,
    email,
    password,
    isSignUp,
    inputArray,
    isUserLoggedIn,
    setIsSignUp,
    authenticateUser,
  } = useLoginController();

  if (isUserLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className=" max-h-screen">
      <Header isLoginPage={true} />
      <div className="absolute rounded-lg flex flex-col gap-4 left-1/3 ml-32 top-44 w-96 text-white p-10 bg-black bg-opacity-80">
        <h1 className="text-4xl font-bold">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            authenticateUser();
          }}
          className="flex flex-col gap-4"
        >
          {inputArray.length > 0 &&
            inputArray.map((item) => {
              if (item.name === "username" && !isSignUp) return null;
              return (
                <input
                  key={item.name}
                  ref={
                    item.name === "email"
                      ? email
                      : item.name === "password"
                      ? password
                      : userName
                  }
                  className="px-3 py-4 bg-transparent border border-gray-500"
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                />
              );
            })}
          <div className="flex gap-1">
            <span>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </span>
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-red-500 cursor-pointer"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </div>
          <button type="submit" className="bg-red-600 py-3 rounded-lg">
            {!isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
      <div className="bg-opacity-50">
        <img
          src={NETFLIX_BACKGROUND_IMAGE}
          aria-hidden="true"
          className="default-ltr-cache-19j6xtr"
        />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};

export default Login;
