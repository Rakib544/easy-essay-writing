import React from "react";
import { FiCheckCircle } from 'react-icons/fi';

const confirmOrder = () => {
  return (
    <div className="m-auto p-auto mt-5 pt-5">
      <div className="text-center mt-5 pt-5">
        <h1>Thank You</h1>
        <p>Press Confirm button To place Order</p>
        <button className="btn btn-success"> Confirm Order <FiCheckCircle /></button>
      </div>
    </div>
  );
};

export default confirmOrder;
