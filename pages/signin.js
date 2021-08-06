import firebase from "firebase/app";
import "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import bannerImg from "../images/login-img.png";
import logo from "../images/logo.png";
import { firebaseConfig } from "../src/components/firebaseConfig/firebase.config";
import { UserContext } from "./_app";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Signin = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [signedUser, setSignedUser] = useContext(UserContext);
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const googleSignin = () => {
    setShowSpinner(true);
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email, phoneNumber, photoURL } = res.user;
        const loggedUser = {
          name: displayName,
          email: email,
          phoneNumber: phoneNumber,
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
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  const onSubmit = (data) => {
    setShowSpinner(true);
    const email = data.email;
    const password = data.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        const { displayName, email, phoneNumber, photoURL } = res.user;
        const loggedUser = {
          name: displayName,
          email: email,
          phoneNumber: phoneNumber,
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
        setShowSpinner(false);
        var errorCode = error.code;
        var errorMessage = error.message;
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
              <div
                className="p-3 d-inline icon-bg cursor-pointer"
                onClick={googleSignin}
              >
                <FcGoogle size={24} />
              </div>
              <div
                className="p-3 d-inline ms-2 icon-bg cursor-pointer"
              >
                <CgFacebook
                  size={24}
                  className="fb-icon-color cursor-pointer"
                />
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
                  placeholder="@mail.com"
                  defaultValue=""
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span role="alert" className="text-danger">
                    {" "}
                    Email required{" "}
                  </span>
                )}
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
                  {...register("password", { required: true }, { min: 8 })}
                />
                {errors.password && (
                  <span role="alert" className="text-danger">
                    {" "}
                    Password required & must contain at least 8 character{" "}
                  </span>
                )}
              </div>

              <small
                style={{ cursor: "pointer" }}
                className="text-primary fs-6 d-block text-end"
              >
                Forget password
              </small>

              {errors.exampleRequired && <span>This field is required</span>}
              <button className="btn btn-primary w-100 mt-3" type="submit">
                Sign In
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
