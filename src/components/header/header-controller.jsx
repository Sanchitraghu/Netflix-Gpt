import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  addUserToStore,
  removeUserFromStore,
} from "../../store/slices/user-slice/user-slice";
import { PROFILE_IMAGE_URL, USER_ACCESS_KEY } from "../../constants/constants";
import { auth } from "../../utils/firebase";

const useHeaderController = () => {
  const userDetails = useSelector((store) => store.user.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          navigate("/");
        }
        dispatch(addUserToStore(userDetailsToAddInStore));
        navigate("/");
      } else {
        Cookies.remove(USER_ACCESS_KEY.ACCESS_TOKEN);
        Cookies.remove(USER_ACCESS_KEY.REFRESH_TOKEN);
        Cookies.remove(USER_ACCESS_KEY.USER_ID);
        dispatch(removeUserFromStore());
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
  return { userDetails, onSignOut };
};

export default useHeaderController;
