import jwt_encode from "jwt-encode";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useEffect, useState } from "react/cjs/react.development";
import { UserContext } from "./_app";

const confirmOrder = () => {
  const [singedUser] = useContext(UserContext);

  //updating user info in localStorage
  const userInfo = {
    email: singedUser.email,
    hasDiscountOffer: false,
    name: singedUser.name,
    photoURL: singedUser?.photoURL,
    userType: singedUser.userType,
    _id: singedUser._id,
  };

  const [orderInfos, setOrderInfos] = useState({});
  useEffect(() => {
    setOrderInfos(JSON.parse(window.localStorage.getItem("orderInfos")));
  }, []);

  const router = useRouter();

  const handleOrder = () => {
    fetch("https://essay-essay-writing.herokuapp.com/orderCard/post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderInfos),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(`https://essay-essay-writing.herokuapp.com/create/update/${singedUser._id}`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((result) => {
            const token = jwt_encode(userInfo, "secret");
            localStorage.removeItem("info");
            localStorage.setItem("info", JSON.stringify(token));
            localStorage.removeItem("orderInfos");
            router.push("/orderlist");
          });
      });
  };
  return (
    <div className="m-auto p-auto mt-5 pt-5">
      <div className="text-center mt-5 pt-5">
        <h1>Thank You</h1>
        <p>Press Confirm button To place Order</p>
        <button className="btn btn-success" onClick={handleOrder}>
          {" "}
          Confirm Order <FiCheckCircle />
        </button>
      </div>
    </div>
  );
};

export default confirmOrder;
