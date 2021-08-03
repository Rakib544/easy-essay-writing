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
            <p className="fs-48 mt-2 fw-bold">
              Plagiarism-free work
              <br />
              Guaranteed!
            </p>
            <span className="fs-16">
              No more stressing about your writing needs, just schedule an
              assignment for Easy Essay Writing and we’ll do the stressing for
              you!
            </span>
            <button
              style={{ backgroundColor: "#E2E6FF" }}
              className="btn d-block mt-4 py-2 px-5 rounded-pill mx-auto mx-md-0"
            >
              <span className="fs-16" style={{ color: "#566DF2"}}>
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
