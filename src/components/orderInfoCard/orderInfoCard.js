import { useRouter } from "next/router";
import React from "react";
import { MdFileUpload } from "react-icons/md";
import styles from "./orderInfoCard.module.css";

const OrderInfoCard = ({ data }) => {
  const router = useRouter();

  return (
    <div className="my-3">
      <div className="container bg-white p-5 box-shadow rounded-3 ">
        <div className="row  d-flex align-items-center border-bottom pb-4 mb-3">
          <div className="col-md-3 ">
            <p className="text-primary fs-22 fw-bold">Order - {data._id}</p>
            <p className="text-success fs-18">Order - Date: {data.orderDate}</p>
          </div>
          <div className="col-md-3">
            <p className="text-danger fs-18">
              Delivery - Date: {data.deliveryDate}
            </p>
          </div>
          {router.pathname === "/admin/pending-orders" ? (
            <>
              <div className="col-md-2 d-flex flex-column align-items-center">
                <p className="text-primary fw-bold fs-22">Order-status</p>
                <button className={`${styles.admin}`} type="">
                  {data.orderStatus}
                </button>
              </div>
              <div className="col-md-2 d-flex flex-column align-items-center">
                <p className="text-primary fs-22 fw-bold">File - Delivery</p>
                <button type="button" className="btn btn-primary text-white">
                  Upload file <MdFileUpload className="ms-3" size={28} />
                </button>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="col-md-2 ms-md-start d-flex flex-column align-items-center">
            <p className="text-primary fs-22 fw-bold">Order-Action</p>
            <button type="button" className="btn btn-success text-white px-5 py-2">
              Complete
            </button>
          </div>
        </div>
        <div className="row  d-flex justify-content-center align-items-center ">
          <div className="col-md-3 ">
            <p className="fs-18 fw-bold">Customer Name</p>
            <p className="text-muted">{data.customerName}</p>
          </div>
          <div className="col-md-3">
            <p className="fs-18 fw-regular fw-bold">Customer Mail</p>
            <p className="text-muted">{data.customerEmail}</p>
          </div>
          <div className="col-md-2 d-flex flex-column">
            <p className="fs-18 fw-bold">Order Amount</p>
            <p className="text-muted">${data.orderAmount}</p>
          </div>
          <div className="col-md-2 d-flex flex-column  ">
            <p className="text-danger fs-18 fw-bold">Delivery Time</p>
            <p className="text-primary">{data.deliveryTime} Days</p>
          </div>
          <div className="col-md-2 d-flex flex-column  ">
            <p className="text-primary fs-18 fw-bold">Quantity</p>
            <p className="text-muted">{data.quantity} Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoCard;
