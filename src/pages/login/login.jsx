import React from "react";
import Header from "../../components/header/header";
import useLoginController from "./login-controller";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="bg-img"
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
