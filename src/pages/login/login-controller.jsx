import { useEffect, useMemo, useState } from "react";

const useLoginController = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const inputArray = useMemo(
    () => [
      {
        name: "username",
        type: "text",
        placeholder: "User Name",
      },
      {
        name: "email",
        type: "text",
        placeholder: "Email Address",
      },
      {
        name: "password",
        type: "password",
        placeholder: "Password",
      },
    ],
    []
  );

  return { isSignIn, inputArray, setIsSignIn };
};

export default useLoginController;
