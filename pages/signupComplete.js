import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../src/components/firebaseConfig/firebase.config";

import bannerImg from "../images/login-img.png";
import logo from "../images/logo.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./_app";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Signup = () => {
  const router = useRouter();
  const [showSpinner, setShowSpinner] = useState(false);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [setSignedUser] = useContext(UserContext);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForSignIn", email));
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
          photoURL: photoURL,
        };
        fetch("https://essay-essay-writing.herokuapp.com/admin", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            setSignedUser(data);
            setShowSpinner(false);
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

  const onSubmit = (data, e) => {

    data.email = email;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const name = firstName + " " + lastName;

    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        updateUserProfile(name);
        window.localStorage.removeItem("emailForSignIn");
        e.target.reset();
        router.push("/signin");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const updateUserProfile = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      photoURL:
        "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    });
  };

  return (
    <div className="overflow-hidden position-relative">
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
      <div
        className="position-absolute top-0 left-0 m-5 d-none d-md-block"
        style={{ zIndex: "999999" }}
      >
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" height="50px" width="130px" />
          </a>
        </Link>
      </div>

      <div className="row d-flex align-items-center">
        <div className="col-md-6 d-none d-md-block vh-100 position-relative">
          <Image src={bannerImg} alt="banner-img" />
        </div>

        <div className="col-md-6 mb-2">
          <div className="container ">
            <div className="text-center">
              <p className="fw-bold text-secondary mb-4">Sign up to Clever</p>
              <div
                className="p-3 d-inline icon-bg cursor-pointer"
                onClick={googleSignin}
              >
                <FcGoogle size={24} />
              </div>
            </div>
            <p className="beforeAfter fs-15 mt-4">or do it via email</p>

            <form onSubmit={handleSubmit(onSubmit)} className="px-md-5">
              <div className="row">
                <div className="mb-1 col-12 col-md-6">
                  <label className="form-label fs-14" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control input-background py-2"
                    id="firstName"
                    type="text"
                    defaultValue=""
                    placeholder="First Name"
                    {...register("firstName")}
                  />
                  <span role="alert" className="text-danger">
                    {errors.firstName?.message}
                  </span>
                </div>

                <div className="mb-2 col-12 col-md-6">
                  <label className="form-label fs-14" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control input-background py-2"
                    type="text"
                    id="lastName"
                    defaultValue=""
                    placeholder="Last Name"
                    {...register("lastName")}
                  />
                  <span role="alert" className="text-danger">
                    {errors.lastName?.message}
                  </span>
                </div>
              </div>

              <div className="mb-2">
                <label className="form-label fs-14" htmlFor="email">
                  Email
                </label>
                <input
                  autoComplete="off"
                  className="form-control input-background py-2"
                  type="email"
                  id="email"
                  value={email}
                  placeholder="email"
                  disabled
                />
              </div>

              <div className="mb-2">
                <label className="form-label fs-14" htmlFor="password">
                  Password
                </label>
                <input
                  autoComplete="off"
                  className="form-control input-background py-2"
                  type="password"
                  id="password"
                  defaultValue=""
                  placeholder="Password"
                  {...register("password")}
                />
                <span role="alert" className="text-danger">
                  {errors.password?.message}
                </span>
              </div>

              <div className="mb-2">
                <label className="form-label fs-14" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  autoComplete="off"
                  className="form-control input-background py-2"
                  type="password"
                  id="confirmPassword"
                  defaultValue=""
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
                <span role="alert" className="text-danger">
                  {errors.confirmPassword?.message}
                </span>
              </div>

              <button className="btn btn-primary w-100 mt-2" type="submit">
                Sign Up
              </button>
            </form>

            <small className="text-center d-block mt-1">
              <strong>
                Already have an account?{" "}
                <Link href="/signin" className="text-primary">
                  <a>Sign In</a>
                </Link>{" "}
              </strong>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
