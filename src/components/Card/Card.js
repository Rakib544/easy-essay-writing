import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserContext } from "../../../pages/_app";
import styles from "./card.module.css";

const Card = ({ data, index, notify }) => {
  const [signedUser] = useContext(UserContext);
  const [deliveriesDay, setDeliveriesDay] = useState("");
  const [perPageData, setPerPageData] = useState("");
  const [wordPerPageData, setWordPerPageData] = useState("");

  const { deliveryDay, perPage, wordPerPage } = data;

  const deliveryDayValue = deliveryDay;
  const perPageValue = perPage;
  const wordPerPageValue = wordPerPage;
  const id = data._id;

  const { register, handleSubmit } = useForm();

  const router = useRouter();

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
          notify();
          setDeliveriesDay(result.deliveryDay);
          setPerPageData(result.perPage);
          setWordPerPageData(result.wordPerPage);
        }
      });
  };

  //calculation for payment

  //discount calculation
  let price;
  if (signedUser.hasDiscountOffer) {
    price = perPage - perPage * 0.2;
  } else {
    price = perPage;
  }

  //split delivery date
  let value;
  if (data.deliveryDay.endsWith("+")) {
    value = parseInt(data.deliveryDay.split("")[0]);
  } else if (data.deliveryDay.includes("-")) {
    value = data.deliveryDay.split("-")[1];
  } else {
    value = data.deliveryDay;
  }

  //calculating delivery date depending on delivery date
  const deliveryDate = (value) => {
    return new Date(new Date().getTime() + value * 24 * 60 * 60 * 1000);
  };

  //making objects for order
  const orderDetails = {};
  orderDetails.orderDate = new Date();
  orderDetails.orderStatus = "Work In Progress";
  orderDetails.deliveryDate = deliveryDate(value);
  orderDetails.file = "";
  orderDetails.customerName = signedUser?.name;
  orderDetails.customerEmail = signedUser?.email;
  orderDetails.orderAmount = price;
  orderDetails.deliveryTime = data.deliveryDay;
  orderDetails.quantity = "1";

  const handleOrderCard = () => {
    if (signedUser.email) {
      window.localStorage.setItem("orderInfos", JSON.stringify(orderDetails));

      router.push("/paymentMethod");
    } else {
      toast.error("Please Login First");
    }
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
                className={`${styles.editBtn} d-block ms-auto mb-2`}
                data-bs-target={`#AA${index + 1}`}
                data-bs-toggle="modal"
              >
                Edit
              </button>
            )}
            <p className="fw-bold fs-20">Delivery within</p>
            <p className={`${styles.dateStyle} fs-30`}>
              {deliveriesDay || data.deliveryDay} Days
            </p>
            <span className="fw-bold">
              <p className={`${styles.priceStyle} fs-60 d-inline`}>
                ${perPageData || data.perPage}
              </p>
              /page
            </span>
            <p className="fw-bold fs-4">or</p>
            <p className={`${styles.wordStyle}`}>
              {wordPerPageData || data.wordPerPage} word
            </p>
            <button
              className={`${styles.pricingBtn} btn`}
              onClick={handleOrderCard}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id={`AA${index + 1}`}
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
                  defaultValue={data.deliveryDay}
                  {...register("deliveryDay")}
                  name="deliveryDay"
                  id="deliveryDay"
                  className="form-control mb-2"
                ></textarea>
                <p>Per Page</p>
                <textarea
                  rows="3"
                  cols="5"
                  defaultValue={data.perPage}
                  {...register("perPage")}
                  name="perPage"
                  id="perPage"
                  className="form-control mb-2"
                ></textarea>
                <p>Word Per Page</p>
                <textarea
                  rows="3"
                  cols="5"
                  defaultValue={data.wordPerPage}
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

export default Card;
