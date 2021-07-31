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
      <div style={{ marginRight: "20%", paddingBottom: "7%" }}>
        <h1>Have question?</h1>
        <h1 className="fw-bold">We have answers!</h1>
      </div>

      <div className="col-12 col-md-8 col-lg-7 mx-auto position-relative bg-white p-3 p-md-5">
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
