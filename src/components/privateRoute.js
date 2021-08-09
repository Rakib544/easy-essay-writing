import { useRouter } from "next/router";
import React, { useContext } from "react";
import Signin from "../../pages/signin";
import { UserContext } from "../../pages/_app";

const withAuth = (Component) => {
  const Auth = (props) => {
    const [signedUser] = useContext(UserContext);
    const router = useRouter();

    if (!signedUser.email) {
      return <Signin />;
    } else if (signedUser.userType !== "user") {
      router.push("/");
      return null;
    }

    return <Component {...props} />;
  };

  if (Component.getInitialsProps) {
    Auth.getInitialsProps = Component.getInitialsProps;
  }

  return Auth;
};

export default withAuth;
