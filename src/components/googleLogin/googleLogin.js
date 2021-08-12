import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import jwt_encode from "jwt-encode";
import { firebaseConfig } from "../firebaseConfig/firebase.config";
import { UserContext } from "../../../pages/_app";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          photoURL: photoURL,
        };
        fetch("https://essay-essay-writing.herokuapp.com/admin", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            const loggedUser = {
              name: data.username,
              email: data.userEmail,
              userType: data.userType,
              photoURL: data.photoURL,
              id: data._id,
            };
            setSignedUser(loggedUser);
            setShowSpinner(false);
            const token = jwt_encode(data, "secret");
            localStorage.clear();
            localStorage.setItem("info", JSON.stringify(token));
            if (data.userType === "user") {
              router.push("/orderlist");
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
        <p className="fw-bold text-secondary fs-50">Sign in to Clever</p>
        <div
          className="p-3 d-inline icon-bg cursor-pointer"
          onClick={googleSignin}
        >
          <FcGoogle size={24} />
        </div>
      </div>
      <p className="beforeAfter mt-4 fs-15">or do it via email</p>
    </>
  );
};

export default GoogleLogin;
