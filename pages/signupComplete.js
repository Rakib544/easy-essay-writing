import { yupResolver } from "@hookform/resolvers/yup";
import firebase from "firebase/app";
import "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

const SignupComplete = () => {
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

  const [email, setEmail] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");

  useEffect(() => {
    setEmail(JSON.parse(window.localStorage.getItem("emailForSignIn", email)));
    setReferrerEmail(JSON.parse(window.localStorage.getItem("referrerEmail")));
  }, []);

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

        const { email } = res.user;

        const userObj = {
          name: name,
          email: email,
          referrerEmail: referrerEmail,
        };

        if (referrerEmail) {
          fetch(
            "https://essay-essay-writing.herokuapp.com/create/affiliateUser",
            {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(userObj),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              doAfterSignUp(e);
            });
        } else {
          fetch("https://essay-essay-writing.herokuapp.com/create/user", {
            mode: "cors",
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name, email }),
          })
            .then((res) => res.json())
            .then((data) => {
              doAfterSignUp(e);
            });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const doAfterSignUp = (e) => {
    window.localStorage.removeItem("emailForSignIn");
    window.localStorage.removeItem("referrerEmail");
    e.target.reset();
    router.push("/signin");
  };

  const updateUserProfile = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      photoURL:
        "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM=",
    });
    return;
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
        <title>Easy Essay Writing | Complete Signup</title>
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

        <div className="row d-flex align-items-center">
          <div className="col-md-6 d-none d-md-block vh-100 position-relative">
            <Image src={bannerImg} alt="banner-img" />
          </div>

          <div className="col-md-6 mb-2">
            <div className="container ">
              <GoogleLogin />

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
    </>
  );
};

export default SignupComplete;
