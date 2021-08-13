import React from "react";
import { useForm } from "react-hook-form";

const FaqCard = ({ faqCardData, index, setNumber, number, notify }) => {
  const { _id, question, answer } = faqCardData;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const answer = data.answer;
    const question = data.question;

    fetch(`https://essay-essay-writing.herokuapp.com/faq/update/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        answer,
        question,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          notify();
          setNumber(number + 1);
        }
      });
  };

  return (
    <>
      <div className="mb-4">
        <div className="d-flex align-items-center justify-content-between">
          <p className="pb-3 fs-24 fw-bold">{question}</p>
          <button
            className="btn-style"
            data-bs-toggle="modal"
            data-bs-target={`#faqModalCard${index + 1}`}
          >
            Edit
          </button>
        </div>
        <p className="fs-18">{answer}</p>
      </div>

      <div
        class="modal fade"
        id={`faqModalCard${index + 1}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                FAQ
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-label fs-14" htmlFor="question">
                  Question
                </label>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={question}
                  {...register("question")}
                  name="question"
                  id="question"
                  class="form-control mb-2"
                ></textarea>
                <label className="form-label fs-14" htmlFor="answer">
                  Answer
                </label>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={answer}
                  {...register("answer")}
                  name="answer"
                  id="answer"
                  class="form-control mb-2"
                ></textarea>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save Changes"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqCard;
