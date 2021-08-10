import Image from "next/image";
import { useContext } from "react";
import Navbar from "../src/components/navbar/Navbar";
import styles from "../src/components/profileCard/profileCard.module.css";
import { UserContext } from "./_app";

const Profile = () => {
  const [signedUser] = useContext(UserContext);
  return (
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
                  <p className={`${styles.email} fs-16`}>{signedUser.email}</p>
                </div>
              </div>
              <button className="btn btn-primary w-100">
                Invite Your Friends
              </button>
              <div className="d-flex mt-5 mb-2 rounded-3">
                <button className="px-2 rounded-0 fs-15 btn-style">Copy</button>
                <input
                  className="form-control rounded-0 affiliate-input-background"
                  value={`http://localhost:3000/refer/${signedUser.id}`}
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
                    <p className="fs-50 fw-bold">20</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="m-2 p-2 box-shadow bg-white">
                    <p className="fs-24 fw-bold">Last 7 Days</p>
                    <p className="fs-50 fw-bold">20</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="m-2 p-2 box-shadow bg-white">
                    <p className="fs-24 fw-bold">Today</p>
                    <p className="fs-50 fw-bold">20</p>
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
  );
};

export default Profile;
