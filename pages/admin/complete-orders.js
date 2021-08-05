import React from "react";
import Navbar from "../../src/components/navbar/Navbar";
import OrderInfoCard from "../../src/components/orderInfoCard/orderInfoCard";
import withAuth from "../../src/components/privateRoute";
import ProfileCard from "../../src/components/profileCard/profileCard";

const CompleteOrders = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="d-flex flex-column flex-md-row">
          <ProfileCard />
          <div className="ms-md-5 mt-5 mt-md-0 p-5 bg-white rounded-3 box-shadow ">
            <p className="fw-bold fs-28">Total Completed Orders</p>
            <p className="text-primary fs-50">210</p>
          </div>
        </div>
        <OrderInfoCard />
      </div>
    </>
  );
};

export default withAuth(CompleteOrders);
