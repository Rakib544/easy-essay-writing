import Image from "next/image";
import React from "react";
import aboutImg from "../../../images/Group 57.svg";
import Image2 from "../../../images/Grupo 246.svg";
import processSectionImg from "../../../images/Grupo 257.svg";
import styles from "./process.module.css";

const Process = ({ processData, processCardData }) => {
  console.log(processCardData);
  return (
    <div className={`${styles.processSectionBg} py-5`}>
      <div className="container position-relative">
        <div className="position-absolute end-0 top-0 d-none d-md-block">
          <Image src={processSectionImg} alt="img" height="125" width="125" />
        </div>
        <div className="col-12 col-md-8 col-lg-7 mx-auto">
          <h1 className={`${styles.processSectionTitle} fs-48`}>
            {processData?.title}
          </h1>
          <p className="text-center mb-5 fs-16">{processData?.headerDetails}</p>
        </div>
        <div className="row text-center">
          {processCardData.map((data) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 rounded-3"
              key={data._id}
            >
              <div className={`${styles.processCard} pt-2 px-2  h-100 mx-1`}>
                <div
                  className={` mt-2 d-flex justify-content-center align-items-center`}
                >
                  <Image
                    src={data.image}
                    alt={data.title}
                    width="262px"
                    height="200px"
                  />
                </div>
                <p
                  className={`${styles.processCardHeading} fw-bold fs-24 pt-4`}
                >
                  {data.title}
                </p>
                <p className="text-center pb-5 fs-16">{data.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4 position-relative">
          <div className="position-absolute start-0 top-0 d-none d-md-block">
            <Image src={Image2} alt="img" height="125" width="125" />
          </div>
          <Image
            src={aboutImg}
            height="500"
            width="600"
            className="mx-auto d-block"
            alt="about"
          />
          <div className="col-12 col-md-8 col-lg-7 mx-auto">
            <p className="fs-20">
              Easy Essay Writing’s experts have more than 5 years of experience
              with writing professionally.Our expertise lies in ghostwriting
              books, blog posts, news articles, press releases, and
              academic-level essays. We provide plagiarism-free writing that is
              checked for free with every piece of work provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
