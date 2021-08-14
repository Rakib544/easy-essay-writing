import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import withAdminAuth from "../../src/components/AdminPrivateRoute";
import Navbar from "../../src/components/navbar/Navbar";
import ProfileCard from "../../src/components/profileCard/profileCard";

const AffiliateUser = ({ affiliateUserData, totalData }) => {
  const router = useRouter();

  const totalPage = Math.ceil(totalData / 10);

  const handlePageChange = (page) => {
    router.push(`/admin/affiliate-users?page=${page.selected + 1}`);
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
          <div className="ms-md-5 mt-5 mt-md-0 px-5 py-2 bg-white rounded-3 box-shadow ">
            <p className="fw-bold fs-28 pt-5">Total Affiliate Users</p>
            <p className="text-primary fs-50">{totalData}</p>
          </div>
        </div>
        <div className="my-5 px-5 text-primary fs-24 fw-bold bg-white box-shadow">
          <p className="py-3 ">Affiliate Users List</p>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">#Sl</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">ReferredBy</th>
              </tr>
            </thead>
            <tbody>
              {affiliateUserData.map((affiliateUser, index) => (
                <tr key={affiliateUser._id}>
                  <th scope="row">{index + 1}</th> 
                  <td>{affiliateUser.name}</td>
                  <td>{affiliateUser.email}</td>
                  <td>{affiliateUser.referredBy}</td>
                </tr>
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
  const page = context.query.page;
  const res = await fetch(
    "https://essay-essay-writing.herokuapp.com/affiliateUser/allAffiliateUsers",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ page: page }),
    }
  );
  const affiliateUsersData = await res.json();
  const affiliateUserData = affiliateUsersData.result;
  const totalData = affiliateUsersData.totalData;
  return {
    props: {
      affiliateUserData,
      totalData,
    },
  };
}

export default withAdminAuth(AffiliateUser);
