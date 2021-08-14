import Head from "next/head";
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
  const [previousOrderDetails, setPreviousOrderDetails] = useState({});

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

    const previousOrderDetails =
      userOrders.findIndex((order) => order._id === id) - 1;
    setPreviousOrderDetails(userOrders[previousOrderDetails]);
  };
  return (
    <>
      <Head>
        <title>Easy Essay Writing | OrderList</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <TotalOrderCard userOrders={userOrders} />
          </div>
          <div className="col-12 col-md-8 bg-white">
            {userOrders.length > 0 ? (
              <>
                {!showDetails ? (
                  <div className="d-flex flex-column p-4 scroll height">
                    {userOrders.map((order) => (
                      <div
                        key={order._id}
                        className="my-2"
                        onClick={() => handleShowOrderDetails(order._id)}
                      >
                        <div className="row shadow-sm py-2 cursor-pointer pe-2">
                          <p className="col-12 col-md-5 pt-3 fs-15 text-primary ">
                            Order - {order._id}
                          </p>
                          <p className="col-12 col-md-4 fs-15 pt-3">
                            Order-Date: {order.orderDate.slice(0, 10)}
                          </p>
                          <button
                            className={`col-12 col-md-3 my-2 btn ${
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
                      <BsArrowLeft
                        size={28}
                        className="text-primary mr-4 cursor-pointer"
                      />

                      <span className="text-primary ms-2 cursor-pointer">
                        Back
                      </span>
                    </div>
                    <OrderDownloadCard
                      singleOrderDetails={singleOrderDetails}
                      previousOrderDetails={previousOrderDetails}
                    />
                  </>
                )}
              </>
            ) : (
              <p className="text-center fw-bold mt-3">
                You don't order anything yet
              </p>
            )}
          </div>
        </div>
        <div className="col-12 col-md-11 mx-auto mt-5">
          <p className="bg-white text-center fs-4 fw-bold text-primary px-2 py-3">
            New Order
          </p>
          <div className="row mx-4 mx-md-5 mt-md-5">
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
