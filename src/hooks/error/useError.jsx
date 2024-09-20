import React, { useEffect } from "react";
import { openNotification } from "../../constants/show-toast";
import { SHOW_TOAST } from "../../constants/constants";

const useError = (error) => {
  useEffect(() => {
    if (error.code === "auth/invalid-credential") {
      openNotification(SHOW_TOAST.ERROR, "User does not exist");
    } else if (error.code === "auth/email-already-in-use") {
      openNotification(SHOW_TOAST.ERROR, "User already exist");
    }
  }, [error]);
};

export default useError;
