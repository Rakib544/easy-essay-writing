import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { VscRemove } from "react-icons/vsc";
import styles from "./Question.module.css";

const QuestionCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`${styles.acc} my-3 `}>
        <p className="fs-18">{data.question}</p>
        <span
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${data.id}`}
          aria-expanded="false"
          aria-controls="collapseExample"
          className={styles.questionIcon}
        >
          {isOpen ? <VscRemove size={14} /> : <GrAdd size={14} />}
        </span>
      </div>
      <div className="collapse" id={data.id}>
        <div className="card card-body border-0">{data?.answer}</div>
      </div>
    </>
  );
};

export default QuestionCard;
