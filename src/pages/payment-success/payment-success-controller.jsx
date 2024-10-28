import React, { useEffect, useState } from "react";
import { useSubscribeUser } from "./services";
import { useNavigate, useParams } from "react-router-dom";
import { PAYMENT_LOADER_GIF_URL } from "../../constants/constants";
import { paymentSuccessLoader } from "../../assets";
import { useDispatch } from "react-redux";
import { addSubscriptionExpiresOn } from "../../store/slices/user-slice/user-slice";

const usePaymentSuccessController = () => {
  const [userSubscribedSuccessfully, setuserSubscribedSuccessfully] = useState({
    loaderUrl: PAYMENT_LOADER_GIF_URL,
    message: "Payment processing...",
    code: "loading",
  });
  const subscribeUserToNetflixMonthlyPlan = useSubscribeUser();
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      subscribeUserToNetflixMonthlyPlan?.isSuccess &&
      subscribeUserToNetflixMonthlyPlan?.data
    ) {
      const subscriptionExpiresOn =
        subscribeUserToNetflixMonthlyPlan.data?.data?.subscriptionExpiresOn;
      dispatch(addSubscriptionExpiresOn(subscriptionExpiresOn));
      console.log(subscriptionExpiresOn, "subscriptionExpiresOn");
      setTimeout(() => {
        setuserSubscribedSuccessfully({
          loaderUrl: paymentSuccessLoader,
          message: "Payment done",
          code: "success",
        });
      }, 2000);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [
    subscribeUserToNetflixMonthlyPlan?.isSuccess,
    subscribeUserToNetflixMonthlyPlan?.data,
  ]);

  useEffect(() => {
    if (userId && userId.length > 0) {
      subscribeUserToNetflixMonthlyPlan.mutate(userId);
    }
  }, []);
  return { userSubscribedSuccessfully };
};

export default usePaymentSuccessController;
