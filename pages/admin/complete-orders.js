import React from "react";
import Navbar from "../../src/components/navbar/Navbar";
import OrderInfoCard from "../../src/components/orderInfoCard/orderInfoCard";

const CompleteOrders = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <OrderInfoCard />
      </div>
    </>
  );
};

export default CompleteOrders;
