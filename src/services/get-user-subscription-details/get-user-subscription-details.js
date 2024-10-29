import React from "react";
import { useQuery } from "react-query";
import apiClientStripe from "../../apis/api-stripe";
import { API_ROUTES } from "../../enums";

const getUserSubscriptionDetails = async (uuid) => {
  if (!uuid) return;
  const response = await apiClientStripe.get(
    API_ROUTES.GET_USER_SUBSCRIPTION_DETAILS,
    {
      params: { uuid },
    }
  );
  return response.data;
};

const useGetUserSubscriptionDetails = (uuid) => {
  return useQuery(
    ["get-user-subscription-details", uuid],
    () => getUserSubscriptionDetails(uuid),
    { cacheTime: 0 }
  );
};

export default useGetUserSubscriptionDetails;
