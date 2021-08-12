import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import btcImage from "../images/btc.svg";
import logoImage from "../images/logo.png";
import withAuth from "../src/components/privateRoute";

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
    // window.localStorage.removeItem("orderInfos");
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
      <div className="row vh-100 w-100">
        <div className="col-md-6 mt-5 mt-md-0 pb-5 bg-white d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="rounded p-5" style={{ background: "#556cd6" }}>
              <Image src={logoImage} />
            </div>
            <p className="fs-44 mt-4">PAY WITH STRIPE</p>
            <button
              role="link"
              onClick={createCheckoutSession}
              className="stripe-btn d-block"
            >
              Stripe
            </button>
          </div>
        </div>
        <div
          className="col-md-6 d-flex justify-content-center align-items-center py-5 py-md-0 "
          style={{ background: "#556cd6" }}
        >
          <div className="text-center">
            <Image src={btcImage} className="p-5 p-md-0" />
            <p className="text-white fs-44 pb-3 py-mb-0">PAY WITH BTC</p>

            <CopyToClipboard
              text="3EXDYQqE17N7NE4VRYJoqBmSQ5UFc9vzTG"
              onCopy={() => toast.success("Copied")}
            >
              <p className="bg-white px-1 px-md-5 py-1 py-md-3 rounded fs-22 fs-sm-22 cursor-pointer">
                3EXDYQqE17N7NE4VRYJoqBmSQ5UFc9vzTG
              </p>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(PaymentMethod);
