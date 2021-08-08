import { useRouter } from "next/router";
import React, { useContext } from "react";
import Signin from "../../pages/signin";
import { UserContext } from "../../pages/_app";

const withAdminAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const [signedUser] = useContext(UserContext);
    console.log(signedUser);

    if (!signedUser.email) {
      return <Signin />;
    } else if (signedUser.userType !== "admin") {
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

export default withAdminAuth;
