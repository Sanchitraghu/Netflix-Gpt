import { useMemo, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Cookies from "js-cookie";
import { auth } from "../../utils/firebase.js";
import { validateEmail, validatePassword } from "../../utils/validate.js";
import { openNotification } from "../../constants/show-toast.js";
import {
  PROFILE_IMAGE_URL,
  SHOW_TOAST,
  USER_ACCESS_KEY,
} from "../../constants/constants.js";
import { useError } from "../../hooks";

const useLoginController = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState({ code: "" });
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
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

  const updateUserNameOfUser = async (user) => {
    try {
      await updateProfile(user, {
        displayName: userName.current?.value ? userName.current.value : "",
        photoURL: PROFILE_IMAGE_URL.DEFAULT,
      });
    } catch (error) {
      setError({ ...error });
    }
  };

  const signUpUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      await updateUserNameOfUser(user.user);
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
    userName,
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
