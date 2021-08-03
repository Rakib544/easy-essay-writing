import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";

import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../src/components/firebaseConfig/firebase.config";

import bannerImg from "../images/login-img.png";
import logo from "../images/logo.png";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
else {
  firebase.app();
}

const Signup = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    const firstName = data.firstName;
    const lastName = data.lastName;
    const name = firstName + " " + lastName;
    const email = data.email;
    const phone = data.phone;
    const password1 = data.password;
    const confirmPassword = data.confirmPassword;

    let password;

    if (password1 === confirmPassword) {
      password = password1;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)

      .then(res => {
        updateUserProfile(name, phone);
        router.push('/signin');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  const updateUserProfile = (name, phone) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      photoURL: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      phoneNumber: phone
    })
  }

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

      <div className="row d-flex align-items-center">

        <div className="col-md-6 d-none d-md-block vh-100 position-relative">
          <Image src={bannerImg} alt="banner-img" />
        </div>

        <div className="col-md-6 mb-2">
          <div className="container ">
            <div className="text-center">
              <p className="fw-bold text-secondary mb-4">Sign up to Clever</p>
              <div className="p-3 d-inline icon-bg cursor-pointer">
                <FcGoogle size={24} />
              </div>
              <div className="p-3 d-inline ms-2 icon-bg cursor-pointer">
                <CgFacebook size={24} className="fb-icon-color" />
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
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (<span role="alert" className="text-danger"> First Name Required </span>)}
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
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (<span role="alert" className="text-danger"> Last Name Required </span>)}
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
                  defaultValue=""
                  placeholder="@mail.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (<span role="alert" className="text-danger"> Email Required </span>)}
              </div>

              <div className="mb-2">
                <label className="form-label fs-14" htmlFor="phone">
                  Phone
                </label>
                <input
                  autoComplete="off"
                  className="form-control input-background py-2"
                  id="phone"
                  defaultValue=""
                  placeholder="Phone"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (<span role="alert" className="text-danger"> Phone Number Required </span>)}
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
                  {...register("password", { required: true })}
                />
                {errors.password && (<span role="alert" className="text-danger"> Password Required </span>)}
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
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (<span role="alert" className="text-danger"> Confirm Password Required </span>)}
              </div>

              <button
                className="btn btn-primary w-100 mt-2"
                type="submit"
              >
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
