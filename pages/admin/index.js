import React from "react";
import Navbar from "../../src/components/navbar/Navbar";
import ProfileCard from "../../src/components/profileCard/profileCard";

const Edit = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <ProfileCard />
        <p className="bg-white py-2 px-5 d-inline-block fs-4 fw-bold my-4">
          Banner Info
        </p>
      </div>
    </>
  );
};

export default Edit;
