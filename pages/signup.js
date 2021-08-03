import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import bannerImg from "../images/login-img.png";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="overflow-hidden">
      <div className="row d-flex align-items-center vh-100">
        <div className="col-md-6 d-none d-md-block vh-100 position-relative">
          <Image src={bannerImg} alt="banner-img" />
        </div>
        <div className="col-md-6">
          <div className="container ">
            <div className="text-center">
              <p className="fw-bold text-secondary mb-4">Sign in to Clever</p>
              <div className="p-3 d-inline icon-bg">
                <FcGoogle size={24} />
              </div>
              <div className="p-3 d-inline ms-2 icon-bg">
                <CgFacebook size={24} className="fb-icon-color" />
              </div>
            </div>
            <p className="beforeAfter fs-15 mt-4">or do it via email</p>
            <form onSubmit={handleSubmit(onSubmit)} className="px-md-5">
              <div className="row">
                <div className="mb-1 col-12 col-md-6">
                  <label className="form-label fs-20" htmlFor="firstName">
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
                </div>
                <div className="mb-2 col-12 col-md-6">
                  <label className="form-label fs-20" htmlFor="lastName">
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
                </div>
              </div>
              <div className="mb-2">
                <label className="form-label fs-20" htmlFor="email">
                  Email
                </label>
                <input
                  autoComplete="off"
                  className="form-control input-background py-2"
                  type="email"
                  id="email"
                  defaultValue=""
                  placeholder="@mail.com"
                  {...register("email")}
                />
              </div>
              <div className="mb-2">
                <label className="form-label fs-20" htmlFor="phone">
                  Phone
                </label>
                <input
                  autoComplete="off"
                  className="form-control input-background py-2"
                  id="phone"
                  defaultValue=""
                  placeholder="Phone"
                  {...register("Phone")}
                />
              </div>
              <div className="mb-2">
                <label className="form-label fs-20" htmlFor="password">
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
              </div>
              <div className="mb-2">
                <label className="form-label fs-20" htmlFor="password">
                  Confirm Password
                </label>
                <input
                  autoComplete="off"
                  className="form-control input-background py-2"
                  type="password"
                  id="confirm-password"
                  defaultValue=""
                  placeholder="Confirm Password"
                  {...register("confirm password", { required: true })}
                />
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              <button className="btn btn-primary w-100 mt-2" type="submit">
                Sign Up
              </button>
            </form>
            <small className="text-center d-block mt-1">
              <strong>
                Already have an account?{" "}
                <Link href="/signin" className="text-primary">
                  <a>Login</a>
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
