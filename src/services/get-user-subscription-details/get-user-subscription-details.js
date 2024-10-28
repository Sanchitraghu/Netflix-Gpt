import React from "react";
import { useQuery } from "react-query";

const getUserSubscriptionDetails = async () => {
  const response = await apiClient.get(
    API_ROUTES.GET_USER_SUBSCRIPTION_DETAILS
  );
  return response.data;
};

const useGetUserSubscriptionDetails = () => {
  return useQuery(
    ["get-user-subscription-details"],
    getUserSubscriptionDetails,
    { cacheTime: 0 }
  );
};

export default useGetUserSubscriptionDetails;
