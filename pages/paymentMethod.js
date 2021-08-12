import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import withAuth from "../src/components/privateRoute";
import Image from "next/image";
import btcImage from '../images/btc.svg'
import { CopyToClipboard } from "react-copy-to-clipboard";

const stripePromise = loadStripe(process.env.stripe_public_key);
const axios = require("axios");

const PaymentMethod = () => {
  const router = useRouter();
  const [orderInfo, setOrderInfo] = useState({});

  useEffect(() => {
    // const query = new URLSearchParams(window.location.search);

    // if (query.get("success")) {
    //   console.log("Order placed! You will receive an email confirmation.");
    // }

    // if (query.get("canceled")) {
    //   console.log(
    //     "Order canceled -- continue to shop around and checkout when you’re ready."
    //   );
    // }
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
    <div className="">
      <div className="row">
        <div className="col-md-6">
          <button
            role="link"
            onClick={createCheckoutSession}
            className="stripe-btn"
          >
            Stripe
          </button>
        </div>
        <div className="col-md-6 vh-100 bg-primary d-flex justify-content-center align-items-center">
          <div className="text-center">
            <Image src={btcImage} />
            <p className="text-white fs-44">PAY WITH BTC</p>
            <p className="bg-white px-5 py-3 rounded fs-22">3EXDYQqE17N7NE4VRYJoqBmSQ5UFc9vzTG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(PaymentMethod);
