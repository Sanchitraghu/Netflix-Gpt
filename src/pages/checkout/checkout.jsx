import React from "react";
import useCheckoutController from "./checkout-controller";
import { PAYMENT_LOADER_GIF_URL } from "../../constants/constants";

const Checkout = () => {
  useCheckoutController();
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center -mt-16 items-center bg-gray-50">
      <img className="w-72" src={PAYMENT_LOADER_GIF_URL} alt="Imgg" />
    </div>
  );
};

export default Checkout;
