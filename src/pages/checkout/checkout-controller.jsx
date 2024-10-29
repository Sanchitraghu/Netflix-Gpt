import React, { useEffect } from "react";
import { useStripeCheckoutPage } from "./services";
import { useNavigate, useParams } from "react-router-dom";

const useCheckoutController = () => {
  const getCheckoutPageFromStripe = useStripeCheckoutPage();
  const navigate = useNavigate();

  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
    getCheckoutPageFromStripe.mutate(userId);
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
