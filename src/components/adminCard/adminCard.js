import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styles from "./adminCard.module.css";

const AdminCard = ({ setNumber, adminCard, index }) => {
  const { deliveryDay, perPage, wordPerPage } = adminCard;

  const deliveryDayValue = deliveryDay;
  const perPageValue = perPage;
  const wordPerPageValue = wordPerPage;
  const id = adminCard._id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const deliveryDay = data.deliveryDay || deliveryDayValue;
    const perPage = data.perPage || perPageValue;
    const wordPerPage = data.wordPerPage || wordPerPageValue;

    fetch(`https://essay-essay-writing.herokuapp.com/priceCard/update/${id}`, {
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
          toast.success("Update Successfully");
          setNumber((prevState) => prevState + 1);
        }
      });
  };

  return (
    <>
      <div className={`col-12 col-sm-6 col-md-3`}>
        <div
          className={`${
            styles.styleCard
          } mx-auto d-flex justify-content-center align-items-center mx-3 mb-3 px-3 py-md-4 py-3 box-shadow ${
            index === 1 ? `${styles.active}` : ""
          }`}
        >
          <div className="card-body text-center">
            <button
              className={`${styles.editBtn} d-block ms-auto mb-2`}
              data-bs-target={`#AAAA${index + 1}`}
              data-bs-toggle="modal"
            >
              Edit
            </button>

            <p className="fw-bold fs-20">Delivery within</p>
            <p className={`${styles.dateStyle} fs-30`}>{deliveryDay} Days</p>
            <span className="fw-bold">
              <p className={`${styles.priceStyle} fs-60 d-inline`}>
                ${perPage}
              </p>
              /page
            </span>
            <p className="fw-bold fs-4">or</p>
            <p className={`${styles.wordStyle}`}>{wordPerPage} word</p>
            <button className={`${styles.pricingBtn} btn`}>Order Now</button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id={`AAAA${index + 1}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Card - {index + 1}
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
                <p>Delivery Day</p>
                <textarea
                  rows="3"
                  cols="5"
                  defaultValue={deliveryDay}
                  {...register("deliveryDay")}
                  name="deliveryDay"
                  id="deliveryDay"
                  className="form-control mb-2"
                ></textarea>
                <p>Per Page</p>
                <textarea
                  rows="3"
                  cols="5"
                  defaultValue={perPage}
                  {...register("perPage")}
                  name="perPage"
                  id="perPage"
                  className="form-control mb-2"
                ></textarea>
                <p>Word Per Page</p>
                <textarea
                  rows="3"
                  cols="5"
                  defaultValue={wordPerPage}
                  {...register("wordPerPage")}
                  name="wordPerPage"
                  id="wordPerPage"
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
    </>
  );
};

export default AdminCard;
