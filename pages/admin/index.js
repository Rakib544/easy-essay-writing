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

          <p className="bg-white py-2 px-5 d-inline-block fs-26 fw-bold my-4 box-shadow">
            Banner Info
          </p>

          <div className="bg-white py-4 px-5 my-4 box-shadow">
            <p className="border rounded d-inline-block fw-bold fs-22 py-2 px-4">
              Title -
            </p>
            <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
              <p className="fs-22 fw-bold">
                Have a project that you’re stuck on? We’re here to help. Rates
                as low as $0.048/word!
              </p>
              <button
                className="btn"
                style={{ border: "none", color: "blue", fontWeight: "700" }}
              >
                Edit
              </button>
            </div>

            <p className="border rounded d-inline-block fs-22 fw-bold py-2 px-4">
              Header - Details
            </p>
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
              <p className="fs-16">
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

          <p className="bg-white py-2 px-5 d-inline-block fs-26 fw-bold my-4 box-shadow">
            About
          </p>

          <div className="bg-white py-4 px-5 my-4 box-shadow">
            <p className="border rounded fs-22 fw-bold d-inline-block py-2 px-4">
              Title -
            </p>
            <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
              <p className="fs-22 fw-bold">Plagiarism-free work Guaranteed!</p>
              <button
                className="btn"
                style={{ border: "none", color: "blue", fontWeight: "700" }}
              >
                Edit
              </button>
            </div>

            <p className="border fs-22 fw-bold rounded d-inline-block py-2 px-4">
              Header - Details
            </p>
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
              <p className="fs-16">
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
              <p className="text-primary fs-18">Learn More</p>
              <button
                className="btn"
                style={{ border: "none", color: "blue", fontWeight: "700" }}
              >
                Edit
              </button>
            </div>
          </div>

          <p className="bg-white py-2 px-5 d-inline-block fs-26 fw-bold fw-bold my-4 box-shadow">
            Our Process
          </p>

          <div className="bg-white py-4 px-5 my-4 box-shadow">
            <p className="border rounded d-inline-block py-2 fs-22 fw-bold px-4">
              Title -
            </p>
            <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
              <p className="fs-22 fw-bold">Our Process</p>
              <button
                className="btn"
                style={{ border: "none", color: "blue", fontWeight: "700" }}
              >
                Edit
              </button>
            </div>

            <p className="border fs-22 fw-bold rounded d-inline-block py-2 px-4">
              Header - Details
            </p>
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
              <p className="fs-16">
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

            <p className="text-primary fs-22 fw-bold mb-5">Items</p>

            <div className="row mt-2">
              <div className="col-md-4">
                <p className="text-primary fs-18 fw-bold mb-2">Item - 1</p>
                <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                  <p className="border rounded fs-16 fw-bold  d-inline-block py-2 px-4">
                    Title -
                  </p>
                  <button
                    className="btn"
                    style={{ border: "none", color: "blue", fontWeight: "700" }}
                  >
                    Edit
                  </button>
                </div>

                <p className="fs-18 fw-bold">
                  Give us a description of your project.
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                  <p className="border fs-16 fw-bold rounded d-inline-block py-2 px-4">
                    Content
                  </p>
                  <button
                    className="btn"
                    style={{ border: "none", color: "blue", fontWeight: "700" }}
                  >
                    Edit
                  </button>
                </div>

                <p className="fs-16">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>

          <p className="bg-white py-2 px-5 d-inline-block fs-26 fw-bold my-4 box-shadow">
            Pricing
          </p>

          <div className="py-4 px-5 my-4">
            <div className="row px-md-5 mx-md-5">
              {cardData.map((data) => (
                <Card keys={data.id} data={data} />
              ))}
            </div>
          </div>

          <p className="bg-white fs-26 fw-bold py-2 px-5 d-inline-block my-4 box-shadow">
            FAQ
          </p>

          <div className="bg-white py-4 px-5 my-4 box-shadow">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="pb-3 fs-24 fw-bold">How long does it take?</p>
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
                  <p className="fs-18">
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
                      <span className="ms-5 fs-26 fw-bold">Footer</span>
                    </p>
                  </div>

                  <div className="pb-3">
                    <div className="d-flex align-items-center justify-content-between pb-2">
                      <p className="fs-22 fw-bold">Facebook</p>
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
                      <p className="fs-22 fw-bold">Instagram</p>
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
                      <p className="fs-22 fw-bold">LinkedIn</p>
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
                      <p className="fs-22 fw-bold">Twiter</p>
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
