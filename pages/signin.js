import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";

const Signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="overflow-hidden">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <img
            className="vh-100"
            src="https://us.123rf.com/450wm/taira42/taira421802/taira42180200127/94682210-mystical-night-sky-background-with-full-moon-clouds-and-stars-moonlight-night-with-copy-space-for-wi.jpg?ver=6"
            alt=""
          />
        </div>
        <div className="col-md-6 ">
          <div className="container ">
            <div className="text-center ">
              <h2>Sign in to Clever</h2>
              <div className="icon-style d-inline">
                <FcGoogle />
              </div>
              <div className="icon-style d-inline">
                <CgFacebook />
              </div>
            </div>
            <p className="beforeAfter">or do it via email</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input autoComplete = "off"
                  className="form-control input-background"
                  type="email"
                  id="email"
                  placeholder="@mail.com"
                  {...register("email")}
                />
              </div>
              <div className="mb-2">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input autoComplete = "off"
                  className="form-control input-background"
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="d-flex justify-content-end mt-2">
                <p style={{ color: "blue" }}>Forget password</p>
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              <button
                className="btn btn-lg btn-primary w-100 mt-3"
                type="submit"
              >
                log in
              </button>
            </form>
            <small
              style={{ color: "#868B99" }}
              className="d-block mt-4 text-center"
            >
              &#169; 2021 Dribble All right reserved
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
