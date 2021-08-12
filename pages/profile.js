import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../src/components/navbar/Navbar";
import styles from "../src/components/profileCard/profileCard.module.css";
import { UserContext } from "./_app";

const Profile = () => {
  const [signedUser] = useContext(UserContext);
  const [totalUsers, setTotalUsers] = useState(0);
  const [lastSevenDaysUsers, setLastSevenDaysUsers] = useState(0);
  const [lastOneDaysUsers, setLastOneDaysUsers] = useState(0);
  const email = signedUser.email;

  useEffect(() => {
    fetch("https://essay-essay-writing.herokuapp.com/affiliateUser/all", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTotalUsers(data.allUsers);
      });

    fetch(
      "https://essay-essay-writing.herokuapp.com/affiliateUser/lastSevenDays",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLastSevenDaysUsers(data.lastSevenDaysUser);
      });

    fetch(
      "https://essay-essay-writing.herokuapp.com/affiliateUser/lastOneDay",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLastOneDaysUsers(data.lastOneDayUser);
      });
  }, [email]);

  return (
    <>
      <Head>
        <title>Easy Essay Writing | Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
      <div style={{ backgroundColor: "#F7FBFF" }}>
        <Navbar />
        <div className="container pb-5">
          <div className="row my-5 h-100">
            <div className="col-12 col-md-4">
              <div className="box-shadow p-4 bg-white rounded-3">
                <div className="row d-flex align-items-center mb-3">
                  <div className="col-3">
                    {signedUser.photoURL && (
                      <Image
                        src={signedUser.photoURL}
                        alt="profile"
                        height="78"
                        width="78"
                        className="rounded-circle"
                      />
                    )}
                  </div>
                  <div className="col-9">
                    <p className={`fs-28 fw-bold ${styles.name}`}>
                      {signedUser.name}
                    </p>
                    <p className={`${styles.email} fs-16`}>
                      {signedUser.email}
                    </p>
                  </div>
                </div>
                <button className="btn btn-primary w-100">
                  Invite Your Friends
                </button>
                <div className="d-flex mt-5 mb-2 rounded-3">
                  <CopyToClipboard
                    text={`http://localhost:3000/refer/${signedUser._id}`}
                    onCopy={() => toast.success("Copied")}
                  >
                    <button className="px-2 rounded-0 fs-15 btn-style">
                      Copy
                    </button>
                  </CopyToClipboard>
                  <input
                    className="form-control rounded-0 affiliate-input-background"
                    value={`http://localhost:3000/refer/${signedUser._id}`}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="m-2 p-3 box-shadow bg-white rounded-3">
                <p className="fs-24 fw-bold text-center text-md-start">
                  Active Users
                </p>
                <div className="row text-primary text-center">
                  <div className="col-12 col-md-4">
                    <div className="m-2 p-2 box-shadow bg-white">
                      <p className="fs-24 fw-bold">All Time Users</p>
                      <p className="fs-50 fw-bold">{totalUsers}</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="m-2 p-2 box-shadow bg-white">
                      <p className="fs-24 fw-bold">Last 7 Days</p>
                      <p className="fs-50 fw-bold">{lastSevenDaysUsers}</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="m-2 p-2 box-shadow bg-white">
                      <p className="fs-24 fw-bold">Today</p>
                      <p className="fs-50 fw-bold">{lastOneDaysUsers}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 box-shadow my-5 bg-white rounded-3 py-5">
              <p className="fs-24 fw-bold text-center text-md-start">
                Total Earnings
              </p>
              <div className="row text-primary text-center text-md-start">
                <div className="col-12 col-md-4">
                  <div className="m-2 p-2 box-shadow bg-white">
                    <p className="fs-24 fw-bold">Life time </p>
                    <p className="fs-50 fw-bold">$2000</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="m-2 p-2 box-shadow bg-white">
                    <p className="fs-24 fw-bold">Last 7 Days</p>
                    <p className="fs-50 fw-bold">$200</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="m-2 p-2 box-shadow bg-white">
                    <p className="fs-24 fw-bold">Today</p>
                    <p className="fs-50 fw-bold">$20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
