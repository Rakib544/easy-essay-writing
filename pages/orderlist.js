import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Card from "../src/components/Card/Card";
import Navbar from "../src/components/navbar/Navbar";
import OrderDownloadCard from "../src/components/orderDownloadCard/orderDownloadCard";
import withAuth from "../src/components/privateRoute";
import TotalOrderCard from "../src/components/TotalOrderCard/totalOrderCard";
import { UserContext } from "./_app";

const OrderList = ({ cardData }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [userOrders, setUserOrders] = useState([]);
  const [singleOrderDetails, setSingleOrderDetails] = useState({});

  const [signedUser] = useContext(UserContext);
  const email = signedUser.email;

  useEffect(() => {
    const loadData = async () => {
      const userOrder = await fetch(
        "https://essay-essay-writing.herokuapp.com/orderCard/userOrder",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const userOrderData = await userOrder.json();
      setUserOrders(userOrderData);
    };
    loadData();
  }, []);

  const handleShowOrderDetails = (id) => {
    const singleOrderDetails = userOrders.find((order) => order._id === id);
    setSingleOrderDetails(singleOrderDetails);
    setShowDetails(true);
  };
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <TotalOrderCard />
          </div>
          <div className="col-12 col-md-8 bg-white">
            {!showDetails ? (
              <div className="d-flex flex-column p-4 scroll height">
                {userOrders.map((order) => (
                  <div
                    className="my-2"
                    onClick={() => handleShowOrderDetails(order._id)}
                  >
                    <div
                      key={order._id}
                      className="row shadow-sm py-2 cursor-pointer"
                    >
                      <p className="col-12 col-md-4 pt-3 text-primary fw-bold">
                        Order - {order._id}
                      </p>
                      <p className="col-12 col-md-4 pt-3">
                        Order-Date: {order.orderDate.slice(0, 10)}
                      </p>
                      <button
                        className={`col-12 col-md-4 my-2 btn ${
                          order.orderStatus === "Completed"
                            ? "btn-primary"
                            : "work-in-progress"
                        }`}
                      >
                        {order.orderStatus}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div
                  className="container mt-3"
                  onClick={() => setShowDetails(false)}
                >
                  <BsArrowLeft size={28} className="text-primary mr-4 cursor-pointer" />

                    <span className="text-primary ms-2 cursor-pointer">Back</span>

                </div>
                <OrderDownloadCard singleOrderDetails={singleOrderDetails} />
              </>
            )}
          </div>
        </div>
        <div className="col-12 col-md-10 col-lg-8 mt-5">
          <p className="bg-white text-center fs-4 fw-bold text-primary px-2 py-3">
            New Order
          </p>
          <div className="row">
            {cardData.map((data, index) => (
              <Card key={data._id} data={data} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(OrderList);

export async function getServerSideProps() {
  const res = await fetch(
    "https://essay-essay-writing.herokuapp.com/priceCard"
  );
  const cardData = await res.json();

  return {
    props: {
      cardData,
    },
  };
}
