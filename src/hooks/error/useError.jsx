import { useEffect } from "react";
import { openNotification } from "../../constants/show-toast";
import { SHOW_TOAST } from "../../constants/constants";

const useError = (error) => {
  useEffect(() => {
    if (error?.code === "auth/invalid-credential") {
      openNotification(SHOW_TOAST.ERROR, "User does not exist");
    } else if (error?.code === "auth/email-already-in-use") {
      openNotification(SHOW_TOAST.ERROR, "User already exist");
    } else if (error?.code === "already_subscribed") {
      openNotification(SHOW_TOAST.INFO, "Already Subscribed");
    }
  }, [error]);
};

export default useError;
