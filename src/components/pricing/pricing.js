import React from "react";
import { cardData } from "../../data/pricedata";
import Card from "../Card/Card";
import styles from "./pricing.module.css";

const Pricing = () => {
  return (
    <div className="container">
      <h3 className={`${styles.pricingTitle} text-center mb-3 mt-5`}>
        Pricing
      </h3>
      <div className="row d-md-flex justify-content-center align-items-center">
        {cardData.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
