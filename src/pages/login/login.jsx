import React from "react";
import Header from "../../components/header/header";
import useLoginController from "./login-controller";

const Login = () => {
  const { isSignIn, inputArray, setIsSignIn } = useLoginController();
  return (
    <div className=" max-h-screen">
      <Header isLoginPage={true} />
      <div className="absolute rounded-lg flex flex-col gap-4 left-1/3 ml-32 top-44 w-96 text-white p-10 bg-black bg-opacity-80">
        <h1 className="text-4xl font-bold">
          {isSignIn ? "Sign Up" : "Sign In"}
        </h1>
        <form className="flex flex-col gap-4">
          {inputArray.length > 0 &&
            inputArray.map((item) => {
              if (item.name === "username" && !isSignIn) return null;
              return (
                <input
                  className="px-3 py-4 bg-transparent border border-gray-500"
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                />
              );
            })}
          <div className="flex gap-1">
            <span>
              {isSignIn ? "Already have an account?" : "Don't have an account?"}
            </span>
            <span
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-red-500 cursor-pointer"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </span>
          </div>
          <button className="bg-red-600 py-3 rounded-lg">
            {!isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
      <div className="bg-opacity-50">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="bg-img"
          aria-hidden="true"
          class="default-ltr-cache-19j6xtr"
        />
      </div>
    </div>
  );
};

export default Login;
