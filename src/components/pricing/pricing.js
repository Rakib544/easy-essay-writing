import React from "react";
import { cardData } from "../../data/pricedata";
import styles from "./pricing.module.css";

const Pricing = () => {
  return (
    <div className="container">
      <h3 className={`${styles.pricingTitle} text-center mb-3 mt-5`}>
        Pricing
      </h3>
      <div className="row d-flex justify-content-center align-items-center">
        {cardData.map((data) => (
          <div className="col-md-4">
            <div
              className={`${styles.styleCard} mx-auto d-flex justify-content-center align-items-center`}
            >
              <div className="card-body text-center">
                <p>Delivery within</p>
                <h1 className={`${styles.dateStyle}`}>{data.dueDate}</h1>
                <span>
                  <h2 className={`${styles.priceStyle} d-inline`}>
                    ${data.price}
                  </h2>
                  /page
                </span>
                <p>or</p>
                <p className={`${styles.wordStyle}`}>250 word</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
