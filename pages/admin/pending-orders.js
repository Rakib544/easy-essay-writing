import React from "react";
import Navbar from "../../src/components/navbar/Navbar";
import OrderInfoCard from "../../src/components/orderInfoCard/orderInfoCard";
import ProfileCard from "../../src/components/profileCard/profileCard";

const PendingOrders = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="d-flex flex-column flex-md-row">
          <ProfileCard />
          <div className="ms-md-5 mt-5 mt-md-0 p-5 bg-white rounded-3 box-shadow">
            <p className="fw-bold fs-28">Total Pending Orders</p>
            <p className="text-danger fs-50">40</p>
          </div>
        </div>
        <OrderInfoCard />
      </div>
    </>
  );
};

export default PendingOrders;
