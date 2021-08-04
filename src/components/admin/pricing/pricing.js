import React from "react";
import { cardData } from "../../../data/pricedata";
import Card from "../../Card/Card";

const Pricing = () => {
  return (
    <>
      <p className="bg-white py-2 px-5 d-inline-block fs-26 fw-bold my-4 box-shadow">
        Pricing
      </p>

      <div className="py-4 px-5 my-4">
        <div className="row px-md-5 mx-md-5">
          {cardData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
