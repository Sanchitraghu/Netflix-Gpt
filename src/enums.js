export const API_ROUTES = {
  GET_POPULAR_MOVIES: "/popular?language=en-US",
  GET_NOW_PLAYING_MOVIES: "/now_playing?language=en-US",
  GET_TOP_RATED_MOVIES: "/top_rated?language=en-US",
  GET_UPCOMING_MOVIES: "/upcoming?language=en-US",
  GET_MOVIE_TRAILOR: "videos?language=en-US",
  GET_THUMNAIL_OF_MOVIE: "https://image.tmdb.org/t/p/w500",
  GET_USER_SUBSCRIPTION_DETAILS:
    "/api/v1/checkout/get-user-subscription-details",
};

export const MUATATION_KEYS = {
  GET_CHECKOUT_PAGE_FROM_STRIPE: "get-checkout-page-from-stripe",
  SUBSCRIBE_USER_AFTER_PAYMENT: "subscribe-user-after-payment",
};
