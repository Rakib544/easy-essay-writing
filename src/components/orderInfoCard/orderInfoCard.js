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
            <h4 className="text-primary">Order - 65213</h4>
            <p className="text-success">Order - Date: 23 Set - 2021</p>
          </div>
          <div className="col-md-3">
            <p className="text-danger">Delivery - Date: 23 Set - 2021</p>
          </div>
          {router.pathname === "/admin/pending-orders" ? (
            <>
              <div className="col-md-2 d-flex flex-column align-items-center">
                <h4 className="text-primary fw-bold">Order-status</h4>
                <button className={`${styles.admin}`} type="">
                  Work in progress
                </button>
              </div>
              <div className="col-md-2 d-flex flex-column align-items-center">
                <h4 className="text-primary">File - Delivery</h4>
                <button type="button" class="btn btn-primary text-white">
                  Upload file <MdFileUpload className="ms-3" size={28} />
                </button>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="col-md-2 ms-auto d-flex flex-column align-items-center">
            <h4 className="text-primary">Order-Action</h4>
            <button type="button" class="btn btn-success text-white px-5 py-2">
              Complete
            </button>
          </div>
        </div>
        <div className="row  d-flex justify-content-center align-items-center ">
          <div className="col-md-3 ">
            <h6 className="">Customer Name</h6>
            <p className="text-muted">Kawsar Ahmmed</p>
          </div>
          <div className="col-md-3">
            <h6 className="">Customer Mail</h6>
            <p className="text-muted">kawsarahmmedr@gmail.com</p>
          </div>
          <div className="col-md-2 d-flex flex-column">
            <h6 className="">Order Amount</h6>
            <p className="text-muted">$12</p>
          </div>
          <div className="col-md-2 d-flex flex-column  ">
            <h6 className="text-danger fw-bold">Delivery Time</h6>
            <p className="text-primary">2 Days</p>
          </div>
          <div className="col-md-2 d-flex flex-column  ">
            <h6 className="text-primary fw-bold">Quantity</h6>
            <p className="text-muted">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoCard;
