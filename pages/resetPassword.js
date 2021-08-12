import { yupResolver } from "@hookform/resolvers/yup";
import firebase from "firebase/app";
import "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import bannerImg from "../images/login-img.png";
import logo from "../images/logo.png";
import { firebaseConfig } from "../src/components/firebaseConfig/firebase.config";
import GoogleLogin from "../src/components/googleLogin/googleLogin";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Signin = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data, e) => {
    const email = data.email;
    const config = {
      url: process.env.redirect_signin,
      handleCodeInApp: true,
    };

    firebase
      .auth()
      .sendPasswordResetEmail(email, config)
      .then((res) => {
        toast.success(`Please check your email for password reset`);
        e.target.reset();
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
      <Head>
        <title>Easy Essay Writing | Reset Password</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="overflow-hidden position-relative">
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

        <div className="row d-flex vh-100 align-items-center">
          <div className="col-md-6 d-none d-md-block">
            <Image src={bannerImg} alt="banner-img" />
          </div>

          <div className="col-md-6 mb-5 pb-5">
            <div className="container ">
              {showSpinner ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              <GoogleLogin />

              <form onSubmit={handleSubmit(onSubmit)} className="px-md-5">
                <div className="mb-2">
                  <label className="form-label fs-14" htmlFor="email">
                    Email
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control input-background py-2"
                    type="email"
                    id="email"
                    defaultValue=""
                    placeholder="example@email.com"
                    {...register("email")}
                  />
                  <span role="alert" className="text-danger">
                    {errors.email?.message}
                  </span>
                </div>

                <button className="btn btn-primary w-100 mt-2" type="submit">
                  Submit
                </button>
              </form>

              <small className="text-center d-block mt-1">
                <strong>
                  Don't have any account?{" "}
                  <Link href="/signup" className="text-primary">
                    <a>Sign Up</a>
                  </Link>{" "}
                </strong>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
