import React from "react";
import Card from "../Card/Card";

const Pricing = ({ priceCardData }) => {
  return (
    <div className="container">
      <p className="text-center fs-48 fw-bold mb-3 mt-5">Pricing</p>
      <div className="row d-md-flex justify-content-center align-items-center">
        {priceCardData.map((data, index) => (
          <Card data={data} key={data.id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
