import React from "react";
import Card from "../src/components/Card/Card";
import Navbar from "../src/components/navbar/Navbar";
import OrderDownloadCard from "../src/components/orderDownloadCard/orderDownloadCard";
import TotalOrderCard from "../src/components/TotalOrderCard/totalOrderCard";
import { orderData } from "../src/data/orderData";
import { cardData } from "../src/data/pricedata";

const obj = {
  isTrue: false,
};

const OrderList = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            {" "}
            <TotalOrderCard />
          </div>
          <div className="col-12 col-md-8 bg-white">
            {obj.isTrue ? (
              <div className="row p-4">
                {orderData.map((order) => (
                  <div key={order.id} className="row shadow-sm py-2 my-2">
                    <p className="col-4 pt-3 text-primary fw-bold">
                      Order - {order._id}
                    </p>
                    <p className="col-4 pt-3">Order-Date: {order.date}</p>
                    <button
                      className={`col-4 my-2 btn ${
                        order.status === "complete"
                          ? "btn-primary"
                          : "btn-danger"
                      }`}
                    >
                      {order.status === "complete" ? "Complete" : "On Progress"}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <OrderDownloadCard />
            )}
          </div>
        </div>
        <div className="col-12 col-md-10 col-lg-8 mt-5">
          <p className="bg-white text-center fs-4 fw-bold text-primary px-2 py-3">
            New Order
          </p>
          <div className="row">
            {cardData.map((data) => (
              <Card keys={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
