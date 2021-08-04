import React from "react";

const OrderDownloadCard = () => {
  return (
    <div className="row p-5 d-flex align-items-center flex-direction-column">
      <div className="col-12 col-md-7">
        <div className="bg-light p-5 mb-4">
          <button className="btn btn-danger">Work In Progress</button>
          <p className="mt-3  fw-bold">
            <span className="fs-18 text-primary">Next Delivery:</span> <span className="fs-27 text-danger">21 July, 2021</span>
          </p>
        </div>
        <div className="p-5 bg-primary">
          <button className="btn bg-white text-primary fw-bold">
            Work Complete
          </button>
          <p className="mt-3 text-white fs-18">
            Previous Delivery{" "}
            <span className="fw-bold fs-27 pt-2">Complete</span>
          </p>
        </div>
      </div>
      <div className="col-12 col-md-5 h-100 mt-5">
        <button className="btn w-100 bg-primary text-white">Download</button>
      </div>
    </div>
  );
};

export default OrderDownloadCard;