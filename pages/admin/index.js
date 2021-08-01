import React from "react";

import Card from "../../src/components/Card/Card";
import Navbar from "../../src/components/navbar/Navbar";
import ProfileCard from "../../src/components/profileCard/profileCard";
import { cardData } from "../../src/data/pricedata";

const Edit = () => {
  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container my-5">
          <ProfileCard />
          <p className="bg-white py-2 px-5 d-inline-block fs-4 fw-bold my-4">
            Banner Info
          </p>

          <div className="bg-white py-4 px-5 my-4">

            <h5 className="border rounded d-inline-block py-2 px-4">Title -</h5>
            <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
              <h3>Have a project that you’re stuck on? We’re here to help. Rates as low as $0.048/word!</h3>
              <button className="btn" style={{ border: 'none', color: 'blue', fontWeight: '700' }}>Edit</button>
            </div>

            <h5 className="border rounded d-inline-block py-2 px-4">Header - Details</h5>
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
              <p>Enjoy plagiarism-free, quality writing performed by dozens of accomplished scholars.Types of Work: Articles, Blog Posts, Personal Narratives, Academic-Level Essays, and Much More.</p>
              <button className="btn" style={{ border: 'none', color: 'blue', fontWeight: '700' }}>Edit</button>
            </div>

          </div>

          <p className="bg-white py-2 px-5 d-inline-block fs-4 fw-bold my-4">
            About
          </p>

          <div className="bg-white py-4 px-5 my-4">

            <h5 className="border rounded d-inline-block py-2 px-4">Title -</h5>
            <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
              <h3>Plagiarism-free work Guaranteed!</h3>
              <button className="btn" style={{ border: 'none', color: 'blue', fontWeight: '700' }}>Edit</button>
            </div>

            <h5 className="border rounded d-inline-block py-2 px-4">Header - Details</h5>
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
              <p>No more stressing about your writing needs, just schedule an assignment for Easy Essay Writing and we’ll do the stressing for you!</p>
              <button className="btn" style={{ border: 'none', color: 'blue', fontWeight: '700' }}>Edit</button>
            </div>

            <h5 className="border rounded d-inline-block py-2 px-4">Button</h5>
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
              <p className="text-primary">Learn More</p>
              <button className="btn" style={{ border: 'none', color: 'blue', fontWeight: '700' }}>Edit</button>
            </div>

          </div>

          <p className="bg-white py-2 px-5 d-inline-block fs-4 fw-bold my-4">
            Our Process
          </p>

          <div className="bg-white py-4 px-5 my-4">

            <h5 className="border rounded d-inline-block py-2 px-4">Title -</h5>
            <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
              <h3>Our Process</h3>
              <button className="btn" style={{ border: 'none', color: 'blue', fontWeight: '700' }}>Edit</button>
            </div>

            <h5 className="border rounded d-inline-block py-2 px-4">Header - Details</h5>
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s</p>
              <button className="btn" style={{ border: 'none', color: 'blue', fontWeight: '700' }}>Edit</button>
            </div>

            <h3 className="text-primary mb-5">Items</h3>

            <div className="row mt-2">
              <div className="col-md-4">

                <h6 className="text-primary mb-2">Item - 1</h6>
                <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                  <h5 className="border rounded d-inline-block py-2 px-4">Title -</h5>
                  <button className="btn" style={{ border: 'none', color: 'blue', fontWeight: '700' }}>Edit</button>
                </div>

                <h5>Give us a description of your project.</h5>
                <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                  <h5 className="border rounded d-inline-block py-2 px-4">Content</h5>
                  <button className="btn" style={{ border: 'none', color: 'blue', fontWeight: '700' }}>Edit</button>
                </div>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>

              </div>
            </div>

          </div>

          <p className="bg-white py-2 px-5 d-inline-block fs-4 fw-bold my-4">
            Pricing
          </p>

          <div className="bg-white py-4 px-5 my-4">

            <div className="row">
              {cardData.map((data) => (
                <Card keys={data.id} data={data} />
              ))}
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Edit;
