import React, { useContext } from "react";
import Signin from "../../pages/signin";
import { UserContext } from "../../pages/_app";

const withAdminAuth = (Component) => {
  const Auth = (props) => {
    const [signedUser] = useContext(UserContext);

    if (!signedUser.email) {
      return <Signin />;
    } else if (!signedUser.userType === "admin") {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return <Component {...props} />;
  };

  if (Component.getInitialsProps) {
    Auth.getInitialsProps = Component.getInitialsProps;
  }

  return Auth;
};

export default withAdminAuth;
