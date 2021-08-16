import firebase from "firebase/app";
import "firebase/auth";
import jwt_encode from "jwt-encode";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../pages/_app";
import { firebaseConfig } from "../firebaseConfig/firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const GoogleLogin = () => {
  const router = useRouter();
  const [showSpinner, setShowSpinner] = useState(false);
  const [signedUser, setSignedUser] = useContext(UserContext);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const [referrerEmail, setReferrerEmail] = useState(null);

  useEffect(() => {
    setReferrerEmail(JSON.parse(window.localStorage.getItem("referrerEmail")));
  }, []);

  const googleSignin = () => {
    setShowSpinner(true);
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;

        const loggedUser = {
          name: displayName,
          email: email,
          referrerEmail: referrerEmail,
        };

        fetch("https://essay-essay-writing.herokuapp.com/create/googleUser", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            data.photoURL = photoURL;
            setSignedUser(data);
            setShowSpinner(false);
            const token = jwt_encode(data, "secret");
            localStorage.clear();
            localStorage.setItem("info", JSON.stringify(token));
            if (data.userType === "user") {
              router.push("/profile");
            } else {
              router.push("/admin");
            }
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="text-center ">
        <p className="fw-bold fs-50" style={{ color: "#313151" }}>
          Sign in to Clever
        </p>
        <div
          className="p-3 d-inline icon-bg cursor-pointer"
          onClick={googleSignin}
        >
          <FcGoogle size={24} />
        </div>
      </div>
      <p className="beforeAfter mt-4 fs-15" style={{ color: "#315A9E" }}>
        or do it via email
      </p>
    </>
  );
};

export default GoogleLogin;
