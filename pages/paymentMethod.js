import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import btcImage from "../images/btc.svg";
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
        <div className="row vh-100 w-100">
          <div className="col-md-6 mt-5 mt-md-0 pb-5 bg-white d-flex justify-content-center align-items-center">
            <div className="text-center">
              <Image src={logoImage} className="w-75 p-md-5 p-0" />
              <p className="fs-28 fw-bold">
                <i>PAY WITH STRIPE</i>
              </p>
              <div className="px-md-5 mx-md-5 ps-3 ps-md-0">
                <button
                  role="link"
                  onClick={createCheckoutSession}
                  className="stripe-btn d-block px-md-5"
                >
                  Continue with Stripe
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 d-flex justify-content-center align-items-center py-5 py-md-0 "
            style={{ background: "#556cd6" }}
          >
            <div className="text-center mt-md-4">
              <Image src={btcImage} className="p-4" />
              <p className="text-white fs-28 py-mb-0 mt-md-5 fw-bold">
                <i>PAY WITH BTC</i>
              </p>
              <CopyToClipboard
                text="3QuaYGt3FLTqByhtVUJKN8hitncmmFskGo"
                onCopy={() => toast.success("Copied")}
              >
                <p className="bg-white px-1 px-md-5 py-1 py-md-3 rounded fs-22 fs-sm-22 cursor-pointer">
                3QuaYGt3FLTqByhtVUJKN8hitncmmFskGo
                </p>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(PaymentMethod);
