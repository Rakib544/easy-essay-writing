import React from "react";
import Card from "../src/components/Card/Card";
import Navbar from "../src/components/navbar/Navbar";
import TotalOrderCard from "../src/components/TotalOrderCard/totalOrderCard";
import { cardData } from "../src/data/pricedata";
const OrderList = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-4">
            {" "}
            <TotalOrderCard />
          </div>
          <div className="col-6 ms-4">This will be another sections</div>
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
