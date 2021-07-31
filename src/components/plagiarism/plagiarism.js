import Image from "next/image";
import React from "react";
import plagiarismBg from "../../../images/plagiarismBg.png";

const plagiarism = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <Image src={plagiarismBg} alt="" />
        </div>
        <div className="col-md-6">
          <div className="text-center text-md-start fw-bolder">
            <h1 className="fs-1 mt-2">
              Plagiarism-free work
              <br />
              Guaranteed!
            </h1>
            <span style={{ fontSize: "16px" }}>
              No more stressing about your writing needs, just schedule an
              assignment for Easy Essay Writing and we’ll do the stressing for
              you!
            </span>
            <button
              style={{ backgroundColor: "#E2E6FF" }}
              className="btn d-block mt-4 py-2 px-5 rounded-pill mx-auto mx-md-0"
            >
              <span style={{ color: "#566DF2", fontSize: "16px" }}>
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default plagiarism;
