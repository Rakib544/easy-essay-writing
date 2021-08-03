import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import bannerImg from "../images/login-img.png";
import logo from "../images/logo.png";

const Signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
            <div className="text-center ">
              <p className="fw-bold text-secondary fs-50">Sign in to Clever</p>
              <div className="p-3 d-inline icon-bg cursor-pointer">
                <FcGoogle size={24} />
              </div>
              <div className="p-3 d-inline ms-2 icon-bg cursor-pointer">
                <CgFacebook
                  size={24}
                  className="fb-icon-color cursor-pointer"
                />
              </div>
            </div>
            <p className="beforeAfter mt-4 fs-15">or do it via email</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-md-5 mx-md-5 px-3"
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
                  {...register("email")}
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
                  {...register("password", { required: true })}
                />
              </div>
              <small
                style={{ cursor: "pointer" }}
                className="text-primary fs-6 d-block text-end"
              >
                Forget password
              </small>
              {errors.exampleRequired && <span>This field is required</span>}
              <button className="btn btn-primary w-100 mt-3" type="submit">
                log in
              </button>
            </form>
            <small className="text-center d-block mt-1">
              <strong>
                Don't have any account?{" "}
                <Link href="/signup" className="text-primary">
                  <a>singup</a>
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
