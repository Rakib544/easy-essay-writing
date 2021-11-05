import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserContext } from "../../../pages/_app";
import styles from "./card.module.css";

const Card = ({ data, index }) => {
  const [promoCodeUserEmail, setPromoCodeUserEmail] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [error, setError] = useState("");
  const [signedUser] = useContext(UserContext);
  const [deliveriesDay, setDeliveriesDay] = useState("");
  const [wordPerPageData, setWordPerPageData] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [referredBy, setReferredBy] = useState(null);
  const [discountPercentage, setDiscountPercentage] = useState(null);
  const { deliveryDay, perPage, wordPerPage } = data;
  const perPageValue = perPage;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const email = signedUser.email;

  useEffect(() => {
    fetch("https://api.easyessaywriting.com/admin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
    fetch("https://api.easyessaywriting.com/discount/discountPercentage")
      .then((res) => res.json())
      .then((data) => setDiscountPercentage(data.discountPercentage));
  }, [email]);

  useEffect(() => {
    fetch("https://api.easyessaywriting.com/affiliateUser/affiliateUserFind", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => {
        setReferredBy(result.referredBy);
      });
  }, [email]);

  //calculation for payment

  const discount = parseFloat(discountPercentage) / 100;

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
  orderDetails.deliveryTime = data.deliveryDay;

  if (userInfo.hasDiscountOffer) {
    orderDetails.referredBy = referredBy;
  }

  const handleCheckPromoCode = () => {
    if (promoCode) {
      fetch("https://api.easyessaywriting.com/create/checkPromoCode", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ promoCode, email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setError("");
            setDiscountPrice(calculatedPrice - calculatedPrice * discount);
            setPromoCodeUserEmail(data[0].email);
          } else {
            setError(data);
            setDiscountPrice("");
          }
        });
    }
  };

  const handleCheckLogin = () => {
    if (!signedUser.email) {
      toast.error("Please Login First");
    }
  };

  const handleOrderCard = (data) => {
    orderDetails.numberOfPages = data.numberOfPages;
    orderDetails.topicName = data.topicName;
    orderDetails.description = data.description;

    if (!data.promoCode) {
      orderDetails.orderAmount = calculatedPrice;
    } else {
      orderDetails.promoCode = data.promoCode;
      orderDetails.referredBy = promoCodeUserEmail;
      orderDetails.orderAmount = calculatedPrice - calculatedPrice * discount;
      orderDetails.referredUserProfit =
        calculatedPrice - (calculatedPrice - calculatedPrice * discount);
    }

    if (userInfo.hasDiscountOffer) {
      orderDetails.orderAmount = calculatedPrice - calculatedPrice * discount;
      orderDetails.referredUserProfit =
        calculatedPrice - (calculatedPrice - calculatedPrice * discount);
    }

    window.localStorage.setItem("orderInfos", JSON.stringify(orderDetails));
    router.push("/paymentMethod");
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
                ${data.perPage}
              </p>
              /page
            </span>
            <p className="fw-bold fs-4">or</p>
            <p className={`${styles.wordStyle}`}>
              {wordPerPageData || data.wordPerPage} word
            </p>
            <button
              className={`${styles.pricingBtn} btn`}
              data-bs-target={`#AB${index + 10}`}
              data-bs-toggle={signedUser.email ? "modal" : ""}
              onClick={handleCheckLogin}
            >
              Order Now
            </button>
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
                <p>Topic Name</p>
                <textarea
                  rows="3"
                  cols="5"
                  placeholder="Enter Your Topic Name"
                  {...register("topicName", { required: true })}
                  name="topicName"
                  id="topicName"
                  className="form-control mb-2"
                ></textarea>
                {errors.topicName && (
                  <p className="text-danger">Topic Title Required</p>
                )}
                <p>Topic Description</p>
                <textarea
                  rows="3"
                  cols="5"
                  placeholder="Enter Your Topic Description"
                  {...register("description", { required: true })}
                  name="description"
                  id="description"
                  className="form-control mb-2"
                ></textarea>
                {errors.description && (
                  <p className="text-danger">Topic Description Required</p>
                )}
                <p>Number of pages</p>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter number of pages"
                  {...register("numberOfPages", { required: true })}
                  name="numberOfPages"
                  id="numberOfPages"
                  onChange={(e) =>
                    setCalculatedPrice(
                      parseInt(e.target.value) * parseFloat(perPageValue)
                    )
                  }
                  className="form-control mb-2"
                />
                {errors.numberOfPages && (
                  <p className="text-danger">Number Of Pages Required</p>
                )}
                {!userInfo.hasDiscountOffer && (
                  <>
                    <p>Promo Code</p>
                    <div className="input-group my-2">
                      <input
                        type="text"
                        name="promoCode"
                        {...register("promoCode")}
                        className="form-control rounded-3"
                        placeholder="Enter your promo code if you have"
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <p
                        className="btn btn-primary ms-2 rounded-3 m-0"
                        onClick={handleCheckPromoCode}
                      >
                        Add
                      </p>
                    </div>
                    {error ? <p className="text-danger">{error}</p> : ""}
                  </>
                )}
                <p className="text-end m-0">
                  Regular Price - ${calculatedPrice}
                </p>
                {userInfo.hasDiscountOffer && (
                  <>
                    <p className="m-0 text-end">
                      <span className="border-bottom border-primary">
                        Discount Price -${" "}
                        {calculatedPrice -
                          (calculatedPrice - calculatedPrice * discount)}
                      </span>
                    </p>
                    <p className="text-end m-0">
                      Total Price -${" "}
                      {calculatedPrice - calculatedPrice * discount}
                    </p>
                  </>
                )}
                {discountPrice ? (
                  <>
                    <p className="m-0 text-end">
                      <span className="border-bottom border-primary">
                        Discount Price -${" "}
                        {calculatedPrice -
                          (calculatedPrice - calculatedPrice * discount)}
                      </span>
                    </p>
                    <p className="text-end m-0">
                      Total Price -${" "}
                      {calculatedPrice - calculatedPrice * discount}
                    </p>
                  </>
                ) : (
                  ""
                )}
                <div className="my-3">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                    data-bs-dismiss="modal"
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
