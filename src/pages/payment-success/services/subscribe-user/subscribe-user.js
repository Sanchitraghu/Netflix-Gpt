import { useMutation } from "react-query";
import { MUATATION_KEYS } from "../../../../enums";
import apiClientStripe from "../../../../apis/api-stripe";

const subscribeUserAfterPayment = async (uuid) => {
  try {
    if (uuid) {
      const userSubscribed = await apiClientStripe.post(
        "/api/v1/checkout/subscribe-user",
        {
          uuid,
        }
      );
      return userSubscribed;
    }
  } catch (err) {
    return err.message;
  }
};

const useSubscribeUser = () => {
  return useMutation(
    [MUATATION_KEYS.SUBSCRIBE_USER_AFTER_PAYMENT],
    subscribeUserAfterPayment
  );
};

export default useSubscribeUser;
