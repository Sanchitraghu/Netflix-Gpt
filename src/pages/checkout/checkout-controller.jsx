import React, { useEffect } from "react";
import { useStripeCheckoutPage } from "./services";

const useCheckoutController = () => {
  const getCheckoutPageFromStripe = useStripeCheckoutPage();

  useEffect(() => {
    getCheckoutPageFromStripe.mutate();
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
