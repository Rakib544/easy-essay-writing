import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import Navbar from "../../src/components/navbar/Navbar";
import OrderInfoCard from "../../src/components/orderInfoCard/orderInfoCard";
import withAuth from "../../src/components/privateRoute";
import ProfileCard from "../../src/components/profileCard/profileCard";

const PendingOrders = () => {
  const router = useRouter();

  const { page } = router.query;

  const [number, setNumber] = useState(0);
  const [orderData, setOrderData] = useState([]);
  const [totalData, setTotalDta] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://essay-essay-writing.herokuapp.com/orderCard/pending",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ page: page }),
        }
      );
      const orderData = await res.json();
      setOrderData(orderData.result);
      setTotalDta(orderData.totalData);
    };
    loadData();
  }, [number, page]);

  const totalPage = Math.ceil(totalData / 5);

  const handlePageChange = (page) => {
    router.push(`/admin/pending-orders?page=${page.selected + 1}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <BsArrowLeft size={28} className="text-primary mr-4" />
        <Link href="/">
          <a className="text-primary">Back To Home</a>
        </Link>
      </div>
      <div className="container my-5">
        <div className="d-flex flex-column flex-md-row">
          <ProfileCard />
          <div className="ms-md-5 mt-5 mt-md-0 px-5 py-2 bg-white rounded-3 box-shadow">
            <p className="fw-bold fs-28 pt-5">Total Pending Orders</p>
            <p className="text-danger fs-50">{totalData}</p>
          </div>
        </div>
        <div className="my-5 px-5 text-primary fs-24 fw-bold bg-white box-shadow">
          <p className="py-3 ">Pending Order List</p>
        </div>
        <div className="my-5">
          {orderData.map((data) => (
            <OrderInfoCard
              data={data}
              key={data._id}
              number={number}
              setNumber={setNumber}
            />
          ))}
        </div>
        <div className="d-flex justify-content-end">
          <ReactPaginate
            pageCount={totalPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default withAuth(PendingOrders);
