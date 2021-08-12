import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.stripe_public_key);
const axios = require("axios");

const PaymentMethod = () => {
  const router = useRouter();
  const [orderInfo, setOrderInfo] = useState({});

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
    setOrderInfo(JSON.parse(window.localStorage.getItem("orderInfos")));
    window.localStorage.removeItem("orderInfos");
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

    // if (result.error) alert(result.error.message);
  };

  return (
    <div className="container">
      <div className="row d-flex align-items-center vh-100">
        <div className="col-md-6">
          <button
            role="link"
            onClick={createCheckoutSession}
            className="stripe-btn d-block mx-auto p-5 rounded-circle"
          >
            Stripe
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="stripe-btn d-block mx-auto p-5 rounded-circle"
            onClick={() => router.push("/btc")}
          >
            BTC
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(PaymentMethod);
