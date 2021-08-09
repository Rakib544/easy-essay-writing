import firebase from "firebase/app";
import "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { FcGoogle } from "react-icons/fc";
import bannerImg from "../images/login-img.png";
import logo from "../images/logo.png";
import { firebaseConfig } from "../src/components/firebaseConfig/firebase.config";
import { useState } from "react";

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

  const onSubmit = (data) => {
    setShowSpinner(true);
    const email = data.email;
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((res) => {
       console.log(res)
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return (
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
            <div className="text-center ">
              <p className="fw-bold text-secondary fs-50">Sign in to Clever</p>
              <div className="p-3 d-inline icon-bg cursor-pointer">
                <FcGoogle size={24} />
              </div>
            </div>
            <p className="beforeAfter mt-4 fs-15">or do it via email</p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-3 px-md-5 mx-md-5"
            >
              <div className="my-2">
                <label className="form-label fs-14" htmlFor="email">
                  Email
                </label>
                <input
                  autoComplete="off"
                  className="form-control input-background py-2"
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  defaultValue=""
                  {...register("email")}
                />
                <span role="alert" className="text-danger">
                  {errors.email?.message}
                </span>
              </div>

              <button className="btn btn-primary w-100 mt-3" type="submit">
                Send
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
  );
};

export default Signin;
