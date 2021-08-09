import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BannerInfo = () => {
  const [bannerData, setBannerDate] = useState({});
  const { _id, title, headerDetails } = bannerData;
  const [number, setNumber] = useState(0);
  const titleValue = title;
  const headerDetailsValue = headerDetails;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("https://essay-essay-writing.herokuapp.com/banner")
      .then((res) => res.json())
      .then((data) => setBannerDate(data[0]));
  }, [number]);

  const onSubmit = (data) => {
    const title = data.title || titleValue;
    const headerDetails = data.headerDetails || headerDetailsValue;

    fetch(`https://essay-essay-writing.herokuapp.com/banner/update/${_id}`, {
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
          toast.success("Updated Successfully");
          setBannerDate(result);
          setNumber(number + 1);
        }
      });
  };

  return (
    <>
      <p className="bg-white py-2 px-5 d-inline-block fs-26 fw-bold my-4 box-shadow">
        Banner Info
      </p>

      <div className="bg-white py-4 px-5 my-4 box-shadow">
        <p className="border rounded d-inline-block fw-bold fs-22 py-2 px-4">
          Title -
        </p>
        <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
          <p className="fs-22 fw-bold">{titleValue}</p>
          <button
            className="btn-style"
            data-bs-toggle="modal"
            data-bs-target="#bannerModal1"
          >
            Edit
          </button>
        </div>

        <p className="border rounded d-inline-block fs-22 fw-bold py-2 px-4">
          Header - Details
        </p>
        <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
          <p className="fs-16">{headerDetailsValue}</p>
          <button
            className="btn-style"
            data-bs-toggle="modal"
            data-bs-target="#bannerModal2"
          >
            Edit
          </button>
        </div>
      </div>

      <div
        class="modal fade"
        id="bannerModal1"
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
        id="bannerModal2"
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

export default BannerInfo;
