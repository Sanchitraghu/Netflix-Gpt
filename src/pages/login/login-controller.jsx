import { useMemo, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase.js";
import { validateEmail, validatePassword } from "../../utils/validate.js";
import { openNotification } from "../../constants/show-toast.js";
import Cookies from "js-cookie";
import { SHOW_TOAST, USER_ACCESS_KEY } from "../../constants/constants.js";
import { useNavigate } from "react-router-dom";
import { useError } from "../../hooks";

const useLoginController = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState({ code: "" });
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const isUserLoggedIn = Cookies.get(USER_ACCESS_KEY.ACCESS_TOKEN);
  useError(error);
  const inputArray = useMemo(
    () => [
      {
        name: "username",
        type: "text",
        placeholder: "User Name",
      },
      {
        name: "email",
        type: "text",
        placeholder: "Email Address",
      },
      {
        name: "password",
        type: "password",
        placeholder: "Password",
      },
    ],
    []
  );

  const signUpUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      if (user?.user?.accessToken && user?.user?.refreshToken) {
        Cookies.set(USER_ACCESS_KEY.ACCESS_TOKEN, user.user.accessToken);
        Cookies.set(USER_ACCESS_KEY.REFRESH_TOKEN, user.user.refreshToken);
        Cookies.set(USER_ACCESS_KEY.EXPIRES_IN, user.user.accessTokenExpiresIn);
        Cookies.set(USER_ACCESS_KEY.USER_ID, user.user.id);
        navigate("/");
      }
    } catch (error) {
      setError({ ...error });
    }
  };

  const signInUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      if (user?.user?.accessToken && user?.user?.refreshToken) {
        Cookies.set(USER_ACCESS_KEY.ACCESS_TOKEN, user.user.accessToken);
        Cookies.set(USER_ACCESS_KEY.REFRESH_TOKEN, user.user.refreshToken);
        Cookies.set(USER_ACCESS_KEY.EXPIRES_IN, user.user.accessTokenExpiresIn);
        Cookies.set(USER_ACCESS_KEY.USER_ID, user.user.uid);
        navigate("/");
      }
    } catch (error) {
      setError({ ...error });
    }
  };

  const authenticateUser = () => {
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    if (userEmail === "") {
      openNotification(SHOW_TOAST.ERROR, "Email is required");
      return;
    }
    if (userPassword === "") {
      openNotification(SHOW_TOAST.ERROR, "Password is required");
      return;
    }

    if (!validateEmail(userEmail)) {
      openNotification(SHOW_TOAST.ERROR, "Email is not valid");
      return;
    }
    if (!validatePassword(userPassword)) {
      openNotification(SHOW_TOAST.ERROR, "Password is not valid");
      return;
    }

    if (isSignUp) {
      signUpUser();
    } else {
      signInUser();
    }
  };

  return {
    email,
    password,
    isSignUp,
    inputArray,
    isUserLoggedIn,
    setIsSignUp,
    authenticateUser,
  };
};

export default useLoginController;
