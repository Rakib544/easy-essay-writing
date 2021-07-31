import React from "react";
import { cardData } from "../../data/pricedata";
import styles from "./pricing.module.css";

const Pricing = () => {
  return (
    <div className="container">
      <h3 className={`${styles.pricingTitle} text-center mb-3 mt-5`}>
        Pricing
      </h3>
      <div className="row d-md-flex justify-content-center align-items-center">
        {cardData.map((data) => (
          <div className="col-12 col-sm-6 col-md-3">
            <div
              className={`${styles.styleCard} mx-auto d-flex justify-content-center align-items-center mx-3 mb-3 p-3`}
            >
              <div className="card-body text-center">
                <p className="fw-bold">Delivery within</p>
                <h1 className={`${styles.dateStyle}`}>{data.dueDate} Days</h1>
                <span className="fw-bold">
                  <h2 className={`${styles.priceStyle} d-inline`}>
                    ${data.price}
                  </h2>
                  /page
                </span>
                <p className="fw-bold fs-4">or</p>
                <p className={`${styles.wordStyle}`}>250 word</p>
                <button className={`${styles.pricingBtn} btn`}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
