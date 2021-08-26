import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserContext } from "../../../pages/_app";
import styles from "./card.module.css";

const Card = ({ data, index, notify }) => {
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [signedUser] = useContext(UserContext);
  const [deliveriesDay, setDeliveriesDay] = useState("");
  const [perPageData, setPerPageData] = useState("");
  const [wordPerPageData, setWordPerPageData] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [referredBy, setReferredBy] = useState(null);
  const [discountPercentage, setDiscountPercentage] = useState(null);

  const { deliveryDay, perPage, wordPerPage } = data;

  const deliveryDayValue = deliveryDay;
  const perPageValue = perPage;
  const wordPerPageValue = wordPerPage;
  const id = data._id;

  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const email = signedUser.email;

  useEffect(() => {
    fetch("https://essay-essay-writing.herokuapp.com/admin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
    fetch(
      "https://essay-essay-writing.herokuapp.com/discount/discountPercentage"
    )
      .then((res) => res.json())
      .then((data) => setDiscountPercentage(data.discountPercentage));
  }, [email]);

  useEffect(() => {
    fetch(
      "https://essay-essay-writing.herokuapp.com/affiliateUser/affiliateUserFind",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setReferredBy(result.referredBy);
      });
  }, [email]);

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
  const halfPrice = perPage / 2;

  const discount = parseFloat(discountPercentage) / 100;
  let price;
  let profit;
  if (userInfo.hasDiscountOffer) {
    if (parseFloat(userInfo.balance) > halfPrice) {
      const discountPrice = perPage - perPage * discount;
      price = discountPrice / 2;
      profit = perPage * discount;
    } else {
      price = perPage - perPage * discount;
      profit = perPage * discount;
    }
  } else {
    if (parseFloat(userInfo.balance) > halfPrice) {
      const discountPrice = perPage;
      price = discountPrice / 2;
    } else {
      price = perPage;
    }
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

  if (userInfo.hasDiscountOffer) {
    orderDetails.referredBy = referredBy;
    orderDetails.referredUserProfit = profit;
  }

  if (userInfo.balance > halfPrice) {
    orderDetails.userBalance = price;
  }

  const handleOrderCard = (data) => {
    const promoCode = data.promoCode;
    if (data.promoCode) {
      fetch("https://essay-essay-writing.herokuapp.com/create/checkPromoCode", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ promoCode, email }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (Array.isArray(result)) {
            setShowError(true);
            if (signedUser.email) {
              orderDetails.referredBy = result[0].email;
              orderDetails.orderAmount = price - price * 0.2;
              orderDetails.referredUserProfit = price * 0.2;
              orderDetails.promoCode = promoCode;
              window.localStorage.setItem(
                "orderInfos",
                JSON.stringify(orderDetails)
              );
              router.push("/paymentMethod");
            } else {
              toast.error("Please Login First");
            }
          } else {
            setError(result);
            setShowError(true);
          }
        });
    } else {
      if (signedUser.email) {
        orderDetails.promoCode = "";
        window.localStorage.setItem("orderInfos", JSON.stringify(orderDetails));

        router.push("/paymentMethod");
      } else {
        toast.error("Please Login First");
      }
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
              <p className={`${styles.priceStyle} fs-60 d-inline`}>${price}</p>
              /page
            </span>
            <p className="fw-bold fs-4">or</p>
            <p className={`${styles.wordStyle}`}>
              {wordPerPageData || data.wordPerPage} word
            </p>
            <button
              className={`${styles.pricingBtn} btn`}
              data-bs-target={`#AB${index + 10}`}
              data-bs-toggle="modal"
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

      {/* promo code modal */}

      <div
        className="modal fade"
        id={`AB${index + 10}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <p className="text-danger">{error}</p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(handleOrderCard)}>
                <p>Enter Promo Code</p>
                <input
                  rows="3"
                  cols="5"
                  placeholder="Enter promo code"
                  {...register("promoCode")}
                  name="promoCode"
                  id="promoCode"
                  className="form-control mb-2"
                />
                <div className="text-end">
                  <input
                    type="submit"
                    className="btn btn-primary mx-2"
                    value="Skip"
                    data-bs-dismiss={showError ? "codal" : "modal"}
                  />
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Add"
                    data-bs-dismiss={showError ? "codal" : "modal"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
