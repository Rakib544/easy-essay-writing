import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoImage from "../images/stripe.png";
import withAuth from "../src/components/privateRoute";

const stripePromise = loadStripe(
  "pk_test_51JUhCFEEVYbKXLZGH7jJIqVNwCrVG2etVjDrXn8cjIJtzMDsxMe9hd4TW91fsCs788S3NbAbg5fQcvY7OUCea7NP00tMhhwuB9"
);
const axios = require("axios");

const PaymentMethod = () => {
  const router = useRouter();
  const [orderInfo, setOrderInfo] = useState({});

  useEffect(() => {
    setOrderInfo(JSON.parse(window.localStorage.getItem("orderInfos")));
  }, []);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("./api/create-checkout-session", {
      orderAmount: orderInfo.orderAmount,
      deliveryTime: orderInfo.deliveryTime,
      customerEmail: orderInfo.customerEmail,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <div className="vh-100 d-flex align-items-center justify-content-center w-100">
          <div className="text-center width-100">
            <Image
              src={logoImage}
              height="300px"
              width="600px"
              layout="responsive"
            />
            <p className="fs-22 fw-bold">
              <i>PAY WITH STRIPE</i>
            </p>
            <div className="me-3">
              <button
                role="link"
                onClick={createCheckoutSession}
                className="stripe-btn d-block mx-2"
              >
                Continue with Stripe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(PaymentMethod);
