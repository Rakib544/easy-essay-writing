import { yupResolver } from "@hookform/resolvers/yup";
import firebase from "firebase/app";
import "firebase/auth";
import jwt_encode from "jwt-encode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import bannerImg from "../images/login-img.png";
import logo from "../images/logo.png";
import { firebaseConfig } from "../src/components/firebaseConfig/firebase.config";
import { UserContext } from "./_app";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const SignupComplete = () => {
  const router = useRouter();
  const [showSpinner, setShowSpinner] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
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
            localStorage.setItem("info", token);
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
    const email = data.email;
    const config = {
      url: "http://localhost:3000/signupComplete",
      handleCodeInApp: true,
    };

    firebase
      .auth()
      .sendSignInLinkToEmail(email, config)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        toast.success(`Please check your email for complete your Registration`);
        e.target.reset();
      })
      .catch((error) => {
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

export default SignupComplete;
