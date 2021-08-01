import React from "react";
import Navbar from "../../src/components/navbar/Navbar";
import OrderInfoCard from "../../src/components/orderInfoCard/orderInfoCard";
import ProfileCard from "../../src/components/profileCard/profileCard";

const PendingOrders = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <ProfileCard />
        <OrderInfoCard />
      </div>
    </>
  );
};

export default PendingOrders;
