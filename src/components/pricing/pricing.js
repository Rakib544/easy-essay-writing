import React from "react";
import styles from "./pricing.module.css";

const cardData = [
  {
    id: 1,
    dueDate: "1-2",
    price: "36",
    word: "250",
  },
  {
    id: 2,
    dueDate: "7+",
    price: "12",
    word: "250 ",
  },
  {
    id: 3,
    dueDate: "3-7",
    price: "18",
    word: "250 ",
  },
];

const Pricing = () => {
  return (
    <div className="container">
      <h2 className={`${styles.pricingTitle} text-center mb-3`}>Pricing</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {cardData.map((data) => (
          <div className="col-md-4">
            <div
              className={`${styles.styleCard} mx-auto d-flex justify-content-center align-items-center`}
            >
              <div className="card-body text-center">
                <p>Delevery within</p>
                <h1 className={`${styles.dateStyle}`}>{data.dueDate}</h1>
                <span>
                  <h2 className={`${styles.priceStyle} d-inline`}>${data.price}</h2>/page
                </span>
                <p>or</p>
                <p className={`${styles.wordStyle}`} >250 word</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
