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
              <h3>
                Have a project that you’re stuck on? We’re here to help. Rates
                as low as $0.048/word!
              </h3>
              <button
                className="btn"
                style={{ border: "none", color: "blue", fontWeight: "700" }}
              >
                Edit
              </button>
            </div>

            <h5 className="border rounded d-inline-block py-2 px-4">
              Header - Details
            </h5>
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
              <p>
                Enjoy plagiarism-free, quality writing performed by dozens of
                accomplished scholars.Types of Work: Articles, Blog Posts,
                Personal Narratives, Academic-Level Essays, and Much More.
              </p>
              <button
                className="btn"
                style={{ border: "none", color: "blue", fontWeight: "700" }}
              >
                Edit
              </button>
            </div>
          </div>

          <p className="bg-white py-2 px-5 d-inline-block fs-4 fw-bold my-4">
            About
          </p>

          <div className="bg-white py-4 px-5 my-4">
            <h5 className="border rounded d-inline-block py-2 px-4">Title -</h5>
            <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
              <h3>Plagiarism-free work Guaranteed!</h3>
              <button
                className="btn"
                style={{ border: "none", color: "blue", fontWeight: "700" }}
              >
                Edit
              </button>
            </div>

            <h5 className="border rounded d-inline-block py-2 px-4">
              Header - Details
            </h5>
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
              <p>
                No more stressing about your writing needs, just schedule an
                assignment for Easy Essay Writing and we’ll do the stressing for
                you!
              </p>
              <button
                className="btn"
                style={{ border: "none", color: "blue", fontWeight: "700" }}
              >
                Edit
              </button>
            </div>

            <h5 className="border rounded d-inline-block py-2 px-4">Button</h5>
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
              <p className="text-primary">Learn More</p>
              <button
                className="btn"
                style={{ border: "none", color: "blue", fontWeight: "700" }}
              >
                Edit
              </button>
            </div>
          </div>

          <p className="bg-white py-2 px-5 d-inline-block fs-4 fw-bold my-4">
            Our Process
          </p>

          <div className="bg-white py-4 px-5 my-4">
            <h5 className="border rounded d-inline-block py-2 px-4">Title -</h5>
            <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
              <h3>Our Process</h3>
              <button
                className="btn"
                style={{ border: "none", color: "blue", fontWeight: "700" }}
              >
                Edit
              </button>
            </div>

            <h5 className="border rounded d-inline-block py-2 px-4">
              Header - Details
            </h5>
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s
              </p>
              <button
                className="btn"
                style={{ border: "none", color: "blue", fontWeight: "700" }}
              >
                Edit
              </button>
            </div>

            <h3 className="text-primary mb-5">Items</h3>

            <div className="row mt-2">
              <div className="col-md-4">
                <h6 className="text-primary mb-2">Item - 1</h6>
                <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                  <h5 className="border rounded d-inline-block py-2 px-4">
                    Title -
                  </h5>
                  <button
                    className="btn"
                    style={{ border: "none", color: "blue", fontWeight: "700" }}
                  >
                    Edit
                  </button>
                </div>

                <h5>Give us a description of your project.</h5>
                <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                  <h5 className="border rounded d-inline-block py-2 px-4">
                    Content
                  </h5>
                  <button
                    className="btn"
                    style={{ border: "none", color: "blue", fontWeight: "700" }}
                  >
                    Edit
                  </button>
                </div>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum
                </p>
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

          <p className="bg-white py-2 px-5 d-inline-block fs-4 fw-bold my-4">
            FAQ
          </p>

          <div className="bg-white py-4 px-5 my-4">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="pb-3">How long does it take?</h4>
                    <button
                      className="btn"
                      style={{
                        border: "none",
                        color: "blue",
                        fontWeight: "700",
                      }}
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-muted">
                    You will select exactly when you need the essay while
                    filling out the order form. Occasionally the work will be
                    finished before the due date.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="pb-3">How long does it take?</h4>
                    <button
                      className="btn"
                      style={{
                        border: "none",
                        color: "blue",
                        fontWeight: "700",
                      }}
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-muted">
                    You will select exactly when you need the essay while
                    filling out the order form. Occasionally the work will be
                    finished before the due date.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="pb-3">How long does it take?</h4>
                    <button
                      className="btn"
                      style={{
                        border: "none",
                        color: "blue",
                        fontWeight: "700",
                      }}
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-muted">
                    You will select exactly when you need the essay while
                    filling out the order form. Occasionally the work will be
                    finished before the due date.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="pb-3">How long does it take?</h4>
                    <button
                      className="btn"
                      style={{
                        border: "none",
                        color: "blue",
                        fontWeight: "700",
                      }}
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-muted">
                    You will select exactly when you need the essay while
                    filling out the order form. Occasionally the work will be
                    finished before the due date.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="pb-3">How long does it take?</h4>
                    <button
                      className="btn"
                      style={{
                        border: "none",
                        color: "blue",
                        fontWeight: "700",
                      }}
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-muted">
                    You will select exactly when you need the essay while
                    filling out the order form. Occasionally the work will be
                    finished before the due date.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="px-md-5 mx-md-5">
                  <div className="pb-3">
                    <p className="bg-primary p-3 text-white rounded">
                      <span className="ms-5">Footer</span>
                    </p>
                  </div>

                  <div className="pb-3">
                    <div className="d-flex align-items-center justify-content-between pb-2">
                      <h4>Facebook</h4>
                      <button
                        className="btn"
                        style={{
                          border: "none",
                          color: "blue",
                          fontWeight: "700",
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <input
                      style={{ backgroundColor: "#F4F8FF", color: "blue" }}
                      className="form-control"
                      type=""
                      name=""
                      value="https://www.facebook.com/"
                    />
                  </div>

                  <div className="pb-3">
                    <div className="d-flex align-items-center justify-content-between pb-2">
                      <h4>Instagram</h4>
                      <button
                        className="btn"
                        style={{
                          border: "none",
                          color: "blue",
                          fontWeight: "700",
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <input
                      style={{ backgroundColor: "#F4F8FF", color: "blue" }}
                      className="form-control"
                      type=""
                      name=""
                      value="https://www.facebook.com/"
                    />
                  </div>

                  <div className="pb-3">
                    <div className="d-flex align-items-center justify-content-between pb-2">
                      <h4>LinkedIn</h4>
                      <button
                        className="btn"
                        style={{
                          border: "none",
                          color: "blue",
                          fontWeight: "700",
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <input
                      style={{ backgroundColor: "#F4F8FF", color: "blue" }}
                      className="form-control"
                      type=""
                      name=""
                      value="https://www.facebook.com/"
                    />
                  </div>

                  <div className="pb-3">
                    <div className="d-flex align-items-center justify-content-between pb-2">
                      <h4>Twiter</h4>
                      <button
                        className="btn"
                        style={{
                          border: "none",
                          color: "blue",
                          fontWeight: "700",
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <input
                      style={{ backgroundColor: "#F4F8FF", color: "blue" }}
                      className="form-control"
                      type=""
                      name=""
                      value="https://www.facebook.com/"
                    />
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

export default Edit;
