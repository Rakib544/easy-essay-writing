import Image from "next/image";
import React from "react";
import flower from "../../../images/Grupo 466.svg";
import lama from "../../../images/svg17.svg";
import { faqData } from "../../data/faqData";
import styles from "./Question.module.css";
import QuestionCard from "./QuestionCard";

const Question = () => {
  return (
    <div className={styles.question}>
      <div className="pe-md-5 me-md-5 pb-md-5">
        <p className="fs-44 text-center text-md-start">Have question?</p>
        <p className="fw-bold fs-44 text-center text-md-start pb-md-4 pe-md-5 mb-md-4 me-md-5">
          We have answers!
        </p>
      </div>

      <div className="col-12 col-md-8 col-lg-7 mx-auto position-relative bg-white p-3 p-md-5 box-shadow rounded-3">
        <div className={`${styles.lama} d-none d-md-block`}>
          <Image src={lama} height="500" width="400" alt="lama.svg" />
        </div>
        <div className={`${styles.flower} d-none d-md-block`}>
          <Image src={flower} alt="flower.svg" />
        </div>

        {faqData.map((data) => (
          <QuestionCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};
export default Question;
