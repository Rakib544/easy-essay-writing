import Image from "next/image";
import React from "react";
import aboutImg from "../../../images/Group 57.svg";
import processSectionImg from "../../../images/Grupo 257.svg";
import { processCardData } from "../../data/processCardData";
import styles from "./process.module.css";

const Process = () => {
  return (
    <div className={`${styles.processSectionBg} py-5`}>
      <div className="container position-relative">
        <div className="position-absolute end-0 top-0">
          <Image src={processSectionImg} alt="img" height="125" width="125" />
        </div>
        <div className="col-12 col-md-8 col-lg-7 mx-auto">
          <h1 className={styles.processSectionTitle}>Our Process</h1>
          <p className="text-center mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="row text-center">
          {processCardData.map((data) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 rounded-3">
              <div
                className={`${styles.processCard} pt-2 px-2 bg-white h-100 mx-1`}
              >
                <div
                  className={`${styles.processSectionImageBg} d-flex justify-content-center align-items-center`}
                >
                  <Image
                    src={data.img}
                    alt={data.name}
                    width="90px"
                    height="90px"
                  />
                </div>
                <p className={`${styles.processCardHeading} fw-bolder pt-4`}>
                  {data.title}
                </p>
                <small className="text-center d-block pb-5">{data.text}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Image
            src={aboutImg}
            height="500"
            width="600"
            className="mx-auto d-block"
            alt="about"
          />
          <div className="col-12 col-md-8 col-lg-7 mx-auto">
            <small className="fw-bold">
              Easy Essay Writing’s experts have more than 5 years of experience
              with writing professionally.Our expertise lies in ghostwriting
              books, blog posts, news articles, press releases, and
              academic-level essays. We provide plagiarism-free writing that is
              checked for free with every piece of work provided.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
