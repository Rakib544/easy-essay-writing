import React from "react";
import Navbar from "../../src/components/navbar/Navbar";
import OrderInfoCard from "../../src/components/orderInfoCard/orderInfoCard";
import ProfileCard from "../../src/components/profileCard/profileCard";

const CompleteOrders = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="d-flex flex-column flex-md-row">
          <ProfileCard />
          <div className="ms-md-5 mt-5 mt-md-0 p-5 bg-white rounded-3">
            <h3 className="fw-bold">Total Completed Orders</h3>
            <h2 className="text-primary">210</h2>
          </div>
        </div>
        <OrderInfoCard />
      </div>
    </>
  );
};

export default CompleteOrders;
