import React, { useEffect } from "react";
import { useStripeCheckoutPage } from "./services";
import { useSelector } from "react-redux";

const useCheckoutController = () => {
  const getCheckoutPageFromStripe = useStripeCheckoutPage();

  const user = useSelector((store) => store.user.userDetails);
  console.log(user);
  useEffect(() => {
    getCheckoutPageFromStripe.mutate(user?.uId);
  }, []);

  useEffect(() => {
    if (
      getCheckoutPageFromStripe?.isSuccess &&
      getCheckoutPageFromStripe?.data &&
      getCheckoutPageFromStripe?.data?.url?.length > 0
    ) {
      window.location.href = getCheckoutPageFromStripe?.data?.url;
    }
  }, [getCheckoutPageFromStripe?.isSuccess, getCheckoutPageFromStripe?.data]);
};

export default useCheckoutController;
