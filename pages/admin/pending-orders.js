import React, { useEffect, useState } from "react";
import Navbar from "../../src/components/navbar/Navbar";
import OrderInfoCard from "../../src/components/orderInfoCard/orderInfoCard";
import withAuth from "../../src/components/privateRoute";
import ProfileCard from "../../src/components/profileCard/profileCard";

const PendingOrders = () => {
  const [number, setNumber] = useState(0);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://essay-essay-writing.herokuapp.com/orderCard/pending"
      );
      const orderData = await res.json();
      setOrderData(orderData);
    };
    loadData();
  }, [number]);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="d-flex flex-column flex-md-row">
          <ProfileCard />
          <div className="ms-md-5 mt-5 mt-md-0 p-5 bg-white rounded-3 box-shadow">
            <p className="fw-bold fs-28">Total Pending Orders</p>
            <p className="text-danger fs-50">{orderData.length}</p>
          </div>
        </div>
        <div className="my-5">
          {orderData.map((data) => (
            <OrderInfoCard
              data={data}
              key={data._id}
              number={number}
              setNumber={setNumber}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default withAuth(PendingOrders);
