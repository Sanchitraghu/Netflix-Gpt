import React from "react";
import { useMutation } from "react-query";
import { MUATATION_KEYS } from "../../../../enums";
import apiClientStripe from "../../../../apis/api-stripe";

const getCheckoutPageFromStripe = async () => {
  try {
    const { data } = await apiClientStripe.post("/create-checkout-session", {
      item: {
        name: "Netflix Subscription",
        description: "Subscription to netflix",
        quantity: 1,
        price: 499,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message, "Error in checkout");
    return { data: { url: "" } };
  }
};

const useStripeCheckoutPage = () => {
  return useMutation(
    [MUATATION_KEYS.GET_CHECKOUT_PAGE_FROM_STRIPE],
    getCheckoutPageFromStripe
  );
};

export default useStripeCheckoutPage;
