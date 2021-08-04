import React from "react";
import { cardData } from "../../data/pricedata";
import Card from "../Card/Card";

const Pricing = ({priceCardData}) => {
  console.log(priceCardData, 'gay')
  return (
    <div className="container">
      <p className="text-center fs-48 fw-bold mb-3 mt-5">Pricing</p>
      <div className="row d-md-flex justify-content-center align-items-center">
        {priceCardData.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
