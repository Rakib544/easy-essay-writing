import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import SingleTableRow from "../../src/components/admin/singleTableRow/singleTableRow";
import withAdminAuth from "../../src/components/AdminPrivateRoute";
import Navbar from "../../src/components/navbar/Navbar";
import ProfileCard from "../../src/components/profileCard/profileCard";

const AffiliateUser = ({ userData, totalData }) => {
  const router = useRouter();
  const pageNumber = router.query.page || 1;
  const serial = 10 * pageNumber - 10;

  const totalPage = Math.ceil(totalData / 10);

  const handlePageChange = (page) => {
    router.push(`/admin/users?page=${page.selected + 1}`);
  };

  return (
    <>
      <Head>
        <title>Easy Essay Writing | Affiliate Users</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
          <div className="ms-md-5 mt-5 mt-md-0 px-5 py-2 bg-white rounded-3 box-shadow col-md-4">
            <p className="fw-bold fs-28 pt-5">Total Users</p>
            <p className="text-primary fs-50">{totalData}</p>
          </div>
        </div>
        <div className="my-5 px-5 text-primary fs-24 fw-bold bg-white box-shadow">
          <p className="py-3 ">Total Users List</p>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">#Sl</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Promo Code</th>
                <th scope="col" className="text-center" colSpan="2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <SingleTableRow
                  key={user._id}
                  user={user}
                  index={index}
                  serial={serial}
                />
              ))}
            </tbody>
          </table>
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

export async function getServerSideProps(context) {
  const page = context.query.page || 1;
  const res = await fetch("https://essay-essay-writing.herokuapp.com/create", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ page: page }),
  });
  const usersData = await res.json();
  const userData = usersData.result;
  const totalData = usersData.totalData;
  return {
    props: {
      userData,
      totalData,
    },
  };
}

export default withAdminAuth(AffiliateUser);
