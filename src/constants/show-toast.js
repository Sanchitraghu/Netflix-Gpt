import { toast } from "react-toastify";

export const openNotification = (toastType, message) => {
  toast[toastType](message);
};
