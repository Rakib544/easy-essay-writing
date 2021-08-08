import React from "react";
import { useForm } from "react-hook-form";

const OurProcessCard = ({
  processCardData,
  index,
  setNumber,
  number,
  notify,
}) => {
  const { _id, title, content } = processCardData;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const title = data.title;
    const content = data.content;

    fetch(
      `https://essay-essay-writing.herokuapp.com/processCard/update/${_id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
        }),
      }
    )
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
      <div className="col-md-4">
        <div className="p-3 mb-3 box-shadow-processCard">
          <p className="text-primary fs-18 fw-bold mb-2">Item - {index + 1}</p>
          <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
            <p className="border rounded fs-16 fw-bold  d-inline-block py-2 px-4">
              Title -
            </p>
            <button
              className="btn-style"
              data-bs-toggle="modal"
              data-bs-target={`#processCardModal${index + 1}`}
            >
              Edit
            </button>
          </div>
          <p className="fs-18 fw-bold">{title}</p>

          <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
            <p className="border fs-16 fw-bold rounded d-inline-block py-2 px-4">
              Content
            </p>
            <button
              className="btn-style"
              data-bs-toggle="modal"
              data-bs-target={`#processModalCard${index + 1}`}
            >
              Edit
            </button>
          </div>
          <p className="fs-16">{content}</p>
        </div>
      </div>

      <div
        className="modal fade"
        id={`processCardModal${index + 1}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={title}
                  {...register("title")}
                  name="title"
                  id="title"
                  className="form-control mb-2"
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

      <div
        className="modal fade"
        id={`processModalCard${index + 1}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Content
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={content}
                  {...register("content")}
                  name="content"
                  id="content"
                  class="form-control mb-2"
                ></textarea>
                {/* <input type="hidden" name="_id" defaultValue={processCardData._id} {...register("_id")} id='_id' /> */}
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

export default OurProcessCard;
