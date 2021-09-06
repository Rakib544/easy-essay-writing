import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DiscountPrice = () => {
  const [discountPrice, setDiscountPrice] = useState({});
  const [number, setNumber] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(
      "https://api.easyessaywriting.com/discount/discountPercentage"
    )
      .then((res) => res.json())
      .then((data) => {
        setDiscountPrice(data);
      });
  }, [number]);
  
  const onSubmit = (data) => {
    const discountPercentage = data.discountPercentage || discountPrice.discountPercentage;
    const id = discountPrice._id;
    
    fetch(
      `https://api.easyessaywriting.com/discount/updateDiscount/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({discountPercentage})
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setNumber(number + 1);
        }
      });
  };

  return (
    <>
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
      <p className="bg-white fs-26 fw-bold py-2 px-5 d-inline-block my-4 box-shadow">
        Discount Percentage
      </p>
      <div className="bg-white py-4 px-5 my-4 box-shadow">
        <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
          <p className="border rounded d-inline-block py-2 fs-22 fw-bold px-4">
            Discount Percentage - {discountPrice.discountPercentage}%
          </p>
          <button
            className="btn-style"
            data-bs-toggle="modal"
            data-bs-target="#discountModal1"
          >
            Edit
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="discountModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Discount Percentage
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
                <label className="form-label fs-14" htmlFor="answer">
                  Discount Percentage
                </label>
                <input
                  type="text"
                  defaultValue={discountPrice.discountPercentage}
                  {...register("discountPercentage")}
                  name="discountPercentage"
                  id="discountPercentage"
                  className="form-control mb-2"
                  autoComplete="off"
                />
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

export default DiscountPrice;
