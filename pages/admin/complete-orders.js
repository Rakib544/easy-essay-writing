import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import Navbar from "../../src/components/navbar/Navbar";
import OrderInfoCard from "../../src/components/orderInfoCard/orderInfoCard";
import withAuth from "../../src/components/privateRoute";
import ProfileCard from "../../src/components/profileCard/profileCard";

const CompleteOrders = ({ orderData }) => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <BsArrowLeft size={28} className="text-primary" />
        <Link href="/">
          <a className="text-primary">Back To Home</a>
        </Link>
      </div>
      <div className="container my-5">
        <div className="d-flex flex-column flex-md-row">
          <ProfileCard />
          <div className="ms-md-5 mt-5 mt-md-0 px-5 py-2 bg-white rounded-3 box-shadow ">
            <p className="fw-bold fs-28 pt-5">Total Completed Orders</p>
            <p className="text-primary fs-50">{orderData.length}</p>
          </div>
        </div>
        <div className="my-5">
          {orderData.map((data) => (
            <OrderInfoCard data={data} key={data._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://essay-essay-writing.herokuapp.com/orderCard/completed"
  );
  const orderData = await res.json();

  return {
    props: {
      orderData,
    },
  };
}

export default withAuth(CompleteOrders);
