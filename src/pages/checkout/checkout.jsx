import React from "react";
import useCheckoutController from "./checkout-controller";

const Checkout = () => {
  useCheckoutController();
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center -mt-16 items-center bg-gray-50">
      <img
      className="w-72"
        src={
          "https://i.pinimg.com/originals/b2/d4/b2/b2d4b2c0f0ff6c95b0d6021a430beda4.gif"
        }
        alt="Imgg"
      />
    </div>
  );
};

export default Checkout;
