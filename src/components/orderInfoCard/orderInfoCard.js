import { useRouter } from "next/router";
import React from "react";
import { MdFileUpload } from "react-icons/md";
import styles from "./orderInfoCard.module.css";

const OrderInfoCard = () => {
  const router = useRouter();

  return (
    <div className="bg-light mt-5 pt-5 mb-5 pb-5 ">
      <div className="container bg-white p-5 ">
        <div className="row  d-flex align-items-center border-bottom pb-4 mb-3">
          <div className="col-md-3 ">
            <p className="text-primary fs-22 fw-bold">Order - 65213</p>
            <p className="text-success fs-18">Order - Date: 23 Set - 2021</p>
          </div>
          <div className="col-md-3">
            <p className="text-danger fs-18">Delivery - Date: 23 Set - 2021</p>
          </div>
          {router.pathname === "/admin/pending-orders" ? (
            <>
              <div className="col-md-2 d-flex flex-column align-items-center">
                <p className="text-primary fw-bold fs-22">Order-status</p>
                <button className={`${styles.admin}`} type="">
                  Work in progress
                </button>
              </div>
              <div className="col-md-2 d-flex flex-column align-items-center">
                <p className="text-primary fs-22 fw-bold">File - Delivery</p>
                <button type="button" class="btn btn-primary text-white">
                  Upload file <MdFileUpload className="ms-3" size={28} />
                </button>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="col-md-2 ms-auto d-flex flex-column align-items-center">
            <p className="text-primary fs-22 fw-bold">Order-Action</p>
            <button type="button" class="btn btn-success text-white px-5 py-2">
              Complete
            </button>
          </div>
        </div>
        <div className="row  d-flex justify-content-center align-items-center ">
          <div className="col-md-3 ">
            <p className="fs-18 fw-regular">Customer Name</p>
            <p className="text-muted">Kawsar Ahmmed</p>
          </div>
          <div className="col-md-3">
            <p className="fs-18 fw-regular">Customer Mail</p>
            <p className="text-muted">kawsarahmmedr@gmail.com</p>
          </div>
          <div className="col-md-2 d-flex flex-column">
            <p className="fs-18 fw-regular">Order Amount</p>
            <p className="text-muted">$12</p>
          </div>
          <div className="col-md-2 d-flex flex-column  ">
            <p className="text-danger fs-18 fw-regular">Delivery Time</p>
            <p className="text-primary">2 Days</p>
          </div>
          <div className="col-md-2 d-flex flex-column  ">
            <p className="text-primary fs-18 fw-regular">Quantity</p>
            <p className="text-muted">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoCard;
