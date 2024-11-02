import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  addSubscriptionExpiresOn,
  addUserToStore,
  removeUserFromStore,
} from "../../store/slices/user-slice/user-slice";
import { PROFILE_IMAGE_URL, USER_ACCESS_KEY } from "../../constants/constants";
import { auth } from "../../utils/firebase";
import { removeMovieDetails } from "../../store/slices/movie-slice/movie-slice";
import { useGetUserSubscriptionDetails } from "../../services";

const useHeaderController = () => {
  const userDetails = useSelector((store) => store.user.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserSubscriptionExpireDetails = useGetUserSubscriptionDetails(
    userDetails?.uId
  );

  const navigateToHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    // It triggers when user logs in or logs out on component mount
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userDetailsToAddInStore = {
          uId: user.uid,
          email: user.email,
          displayName: user.displayName ? user.displayName : "",
          photoURL: user.photoURL ? user.photoURL : PROFILE_IMAGE_URL.DEFAULT,
        };
        if (
          user?.stsTokenManager?.accessToken &&
          user?.stsTokenManager?.refreshToken
        ) {
          Cookies.set(
            USER_ACCESS_KEY.ACCESS_TOKEN,
            user.stsTokenManager?.accessToken
          );
          Cookies.set(
            USER_ACCESS_KEY.REFRESH_TOKEN,
            user.stsTokenManager?.refreshToken
          );
          Cookies.set(USER_ACCESS_KEY.USER_ID, user.uid);
          dispatch(addUserToStore(userDetailsToAddInStore));
          if (window.location.href.split("/")?.length <= 4) {
            navigateToHomePage();
          }
        }
        dispatch(addUserToStore(userDetailsToAddInStore));
        if (window.location.href.split("/")?.length <= 4) {
          navigateToHomePage();
        }
      } else {
        Cookies.remove(USER_ACCESS_KEY.ACCESS_TOKEN);
        Cookies.remove(USER_ACCESS_KEY.REFRESH_TOKEN);
        Cookies.remove(USER_ACCESS_KEY.USER_ID);
        dispatch(removeUserFromStore());
        dispatch(removeMovieDetails());
        navigate("/login");
      }
    });
    return () => unSubscribe();
  }, []);

  const onSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      getUserSubscriptionExpireDetails?.isSuccess &&
      getUserSubscriptionExpireDetails?.data &&
      getUserSubscriptionExpireDetails?.data?.subscriptionExpiresOn?.length > 0
    ) {
      dispatch(
        addSubscriptionExpiresOn(
          getUserSubscriptionExpireDetails?.data?.subscriptionExpiresOn
        )
      );
    }
  }, [
    getUserSubscriptionExpireDetails?.isSuccess,
    getUserSubscriptionExpireDetails?.data,
  ]);

  return { userDetails, onSignOut, navigateToHomePage };
};

export default useHeaderController;
