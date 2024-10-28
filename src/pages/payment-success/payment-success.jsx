import React from "react";
import usePaymentSuccessController from "./payment-success-controller";

const PaymentSuccess = () => {
  const { userSubscribedSuccessfully } = usePaymentSuccessController();
  return (
    <div
      className={`w-full h-screen flex flex-col gap-3 justify-center items-center -mt-14 ${
        userSubscribedSuccessfully.code === "loading" && "bg-gray-50"
      }`}
    >
      <img
        className="w-80"
        src={userSubscribedSuccessfully.loaderUrl}
        alt="Imgg"
      />
      <h3 className="text-2xl">{userSubscribedSuccessfully.message}</h3>
    </div>
  );
};

export default PaymentSuccess;
