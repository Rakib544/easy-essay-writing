import React from "react";
import Card from "../../Card/Card";

const Pricing = ({ priceCardData }) => {
  return (
    <>
      <p className="bg-white py-2 px-5 d-inline-block fs-26 fw-bold my-4 box-shadow">
        Pricing
      </p>

      <div className="py-4 px-5 my-4">
        <div className="row px-md-5 mx-md-5">
          {priceCardData.map((data, index) => (
            <Card key={data.id} data={data} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
