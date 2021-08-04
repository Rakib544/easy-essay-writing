import React, { useState } from "react";

const About = (props) => {
  console.log(props.aboutData);
  const [title, setTitle] = useState(props.aboutData.title);
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
          <p className="fs-22 fw-bold">{props.aboutData?.title}</p>
          <button
            className="btn-style"
            data-bs-toggle="modal"
            data-bs-target="#titleModal"
          >
            Edit
          </button>
        </div>

        <p className="border fs-22 fw-bold rounded d-inline-block py-2 px-4">
          Header - Details
        </p>
        <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
          <p className="fs-16">{props.aboutData?.headerDetails}</p>
          <button className="btn-style">Edit</button>
        </div>

        <h5 className="border rounded d-inline-block py-2 px-4">Button</h5>
        <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
          <p className="text-primary fs-18">{props.aboutData?.buttonText}</p>
          <button className="btn-style">Edit</button>
        </div>
      </div>

      <div
        className="modal fade"
        id="titleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <input
                  className="form-control"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
