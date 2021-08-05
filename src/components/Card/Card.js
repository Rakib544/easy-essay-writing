import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./card.module.css";

const Card = ({ data, index }) => {
  const { deliveryDay, perPage, wordPerPage } = data;

  const deliveryDayValue = deliveryDay;
  const perPageValue = perPage;
  const wordPerPageValue = wordPerPage;
  const id = data._id;

  const [number, setNumber] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    const deliveryDay = data.deliveryDay || deliveryDayValue;
    const perPage = data.perPage || perPageValue;
    const wordPerPage = data.wordPerPage || wordPerPageValue;

    fetch(`http://localhost:8080/priceCard/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        deliveryDay,
        perPage,
        wordPerPage,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setNumber(number + 1);
        }
      });
  };
  return (
    <>
      <div
        className={`col-12 col-sm-6 col-md-6 ${
          router.pathname === "/" ? "col-lg-3" : "col-lg-4"
        }`}
      >
        <div
          className={`${
            styles.styleCard
          } mx-auto d-flex justify-content-center align-items-center mx-3 mb-3 px-3 py-md-4 py-3 box-shadow ${
            index === 1 ? `${styles.active}` : ""
          }`}
        >
          <div className="card-body text-center">
            {router.pathname === "/admin" && (
              <button
                className="btn btn-primary d-block ms-auto mb-2"
                data-bs-target={`#AA${index + 1}`}
                data-bs-toggle="modal"
              >
                Edit
              </button>
            )}
            <p className="fw-bold fs-20">Delivery within</p>
            <p className={`${styles.dateStyle} fs-30`}>
              {data.deliveryDay} Days
            </p>
            <span className="fw-bold">
              <p className={`${styles.priceStyle} fs-60 d-inline`}>
                ${data.perPage}
              </p>
              /page
            </span>
            <p className="fw-bold fs-4">or</p>
            <p className={`${styles.wordStyle}`}>{data.wordPerPage} word</p>
            <button className={`${styles.pricingBtn} btn`}>Order Now</button>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id={`AA${index + 1}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Card - {index + 1}
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
                <p>Delivery Day</p>
                <textarea
                  rows="3"
                  cols="5"
                  defaultValue={data.deliveryDay}
                  {...register("deliveryDay")}
                  name="deliveryDay"
                  id="deliveryDay"
                  class="form-control mb-2"
                ></textarea>
                <p>Per Page</p>
                <textarea
                  rows="3"
                  cols="5"
                  defaultValue={data.perPage}
                  {...register("perPage")}
                  name="perPage"
                  id="perPage"
                  class="form-control mb-2"
                ></textarea>
                <p>Word Per Page</p>
                <textarea
                  rows="3"
                  cols="5"
                  defaultValue={data.wordPerPage}
                  {...register("wordPerPage")}
                  name="wordPerPage"
                  id="wordPerPage"
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

export default Card;
