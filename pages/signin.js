import { yupResolver } from "@hookform/resolvers/yup";
import firebase from "firebase/app";
import "firebase/auth";
import jwt_encode from "jwt-encode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import bannerImg from "../images/login-img.png";
import logo from "../images/logo.png";
import { firebaseConfig } from "../src/components/firebaseConfig/firebase.config";
import GoogleLogin from "../src/components/googleLogin/googleLogin";
import { UserContext } from "./_app";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Signin = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [signedUser, setSignedUser] = useContext(UserContext);

  const onSubmit = (data) => {
    setShowSpinner(true);
    const email = data.email;
    const password = data.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const googleLoggedUser = {
          name: displayName,
          email: email,
          photoURL: photoURL,
        };
        fetch("https://api.easyessaywriting.com/admin", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(googleLoggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            setSignedUser(data);
            setShowSpinner(false);
            const token = jwt_encode(data, "secret");
            localStorage.removeItem("info");
            localStorage.setItem("info", JSON.stringify(token));
            if (data.userType === "user") {
              router.push("/profile");
            } else {
              router.push("/admin");
            }
          });
      })
      .catch((error) => {
        setShowSpinner(false);
        const errorMessage = error.message;
        toast.error(errorMessage);
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

              <small
                style={{ cursor: "pointer" }}
                className="text-primary fs-6 d-block text-end"
              >
                <Link href="/resetPassword" className="text-primary">
                  <a>Forget password</a>
                </Link>{" "}
              </small>

              <button className="btn btn-primary w-100 mt-3" type="submit">
                Sign In
              </button>
            </form>

            <small className="text-center d-block mt-1">
              <strong>
                Don't have any account?{" "}
                <Link href="/signup">
                  <a className="text-primary">Sign Up</a>
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
