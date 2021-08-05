import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const About = () => {
  const [aboutData, setAboutData] = useState({});
  const { _id, title, headerDetails, buttonText } = aboutData;
  const [number, setNumber] = useState(0);
  const titleValue = title;
  const headerDetailsValue = headerDetails;
  const buttonTextValue = buttonText;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("http://localhost:8080/about")
      .then((res) => res.json())
      .then((data) => setAboutData(data[0]));
  }, [number]);

  const onSubmit = (data) => {
    const title = data.title || titleValue;
    const headerDetails = data.headerDetails || headerDetailsValue;
    const buttonText = data.buttonText || buttonTextValue;

    fetch(`http://localhost:8080/about/update/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        headerDetails,
        buttonText,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setAboutData(result);
          setNumber(number + 1);
        }
      });
  };

  return (
    <>
      <p className="bg-white py-2 px-5 d-inline-block fs-26 fw-bold my-4 box-shadow">
        About
      </p>

      <div className="bg-white py-4 px-5 my-4 box-shadow">
        <p className="border rounded fs-22 fw-bold d-inline-block py-2 px-4">
          Title -
        </p>
        <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
          <p className="fs-22 fw-bold">{titleValue}</p>
          <button
            className="btn-style"
            data-bs-toggle="modal"
            data-bs-target="#aboutModal1"
          >
            Edit
          </button>
        </div>

        <p className="border fs-22 fw-bold rounded d-inline-block py-2 px-4">
          Header - Details
        </p>
        <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
          <p className="fs-16">{headerDetailsValue}</p>
          <button
            className="btn-style"
            data-bs-toggle="modal"
            data-bs-target="#aboutModal2"
          >
            Edit
          </button>
        </div>

        <h5 className="border rounded d-inline-block py-2 px-4">Button</h5>
        <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
          <p className="text-primary fs-18">{buttonTextValue}</p>
          <button
            className="btn-style"
            data-bs-toggle="modal"
            data-bs-target="#aboutModal3"
          >
            Edit
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="aboutModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={titleValue}
                  {...register("title")}
                  name="title"
                  id="title"
                  className="form-control mb-2"
                ></textarea>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save Changes"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="aboutModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Header - Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={headerDetailsValue}
                  {...register("headerDetails")}
                  name="headerDetails"
                  id="headerDetails"
                  className="form-control mb-2"
                ></textarea>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save Changes"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="aboutModal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Button
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={buttonTextValue}
                  {...register("buttonText")}
                  name="buttonText"
                  id="headerDetails"
                  className="form-control mb-2"
                ></textarea>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save Changes"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
