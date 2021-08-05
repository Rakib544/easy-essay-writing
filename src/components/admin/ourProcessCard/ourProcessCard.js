import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import OurProcessCard from "../ourProcessCard/ourProcessCard";

const OurProcess = () => {
  const [processData, setProcessData] = useState({});
  const { _id, title, headerDetails } = processData;
  const [number, setNumber] = useState(0);
  const titleValue = title;
  const headerDetailsValue = headerDetails;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [processCardsData, setProcessCardsData] = useState([]);

  useEffect(() => {
    fetch("https://essay-essay-writing.herokuapp.com/process")
      .then((res) => res.json())
      .then((data) => setProcessData(data[0]));
  }, [number]);

  const onSubmit = (data) => {
    const title = data.title || titleValue;
    const headerDetails = data.headerDetails || headerDetailsValue;

    fetch(`https://essay-essay-writing.herokuapp.com/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        headerDetails,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
          setProcessData(result);
          setNumber(number + 1);
        }
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/processCard")
      .then((res) => res.json())
      .then((data) => setProcessCardsData(data));
  }, [number]);

  return (
    <>
      <p className="bg-white py-2 px-5 d-inline-block fs-26 fw-bold fw-bold my-4 box-shadow">
        Our Process
      </p>

      <div className="bg-white py-4 px-5 my-4 box-shadow">
        <p className="border rounded d-inline-block py-2 fs-22 fw-bold px-4">
          Title -
        </p>
        <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
          <p className="fs-22 fw-bold">{titleValue}</p>
          <button
            className="btn-style"
            data-bs-toggle="modal"
            data-bs-target="#processModal1"
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
            data-bs-target="#processModal2"
          >
            Edit
          </button>
        </div>

        <p className="text-primary fs-22 fw-bold mb-5">Items</p>
        <div className="row mt-2">
          {processCardsData.map((processCardData, index) => (
            <OurProcessCard
              processCardData={processCardData}
              key={processCardData._id}
              index={index}
              setNumber={setNumber}
              number={number}
            />
          ))}
        </div>
      </div>

      <div
        class="modal fade"
        id="processModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={titleValue}
                  {...register("title")}
                  name="title"
                  id="title"
                  class="form-control mb-2"
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
        class="modal fade"
        id="processModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Header - Details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={headerDetailsValue}
                  {...register("headerDetails")}
                  name="headerDetails"
                  id="headerDetails"
                  class="form-control mb-2"
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

export default OurProcess;
