import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { VscRemove } from "react-icons/vsc";
import styles from "./Question.module.css";

const QuestionCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`${styles.acc} my-3 `}>
        <p>{data.title}</p>
        <span
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${data.id}`}
          aria-expanded="false"
          aria-controls="collapseExample"
          className={styles.questionIcon}
        >
          {isOpen ? <VscRemove /> : <GrAdd />}
        </span>
      </div>
      <div className="collapse" id={data.id}>
        <div className="card card-body border-0">{data.text}</div>
      </div>
    </>
  );
};

export default QuestionCard;
