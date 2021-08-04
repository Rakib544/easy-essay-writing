import { useRouter } from "next/router";
import styles from "./card.module.css";

const Card = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className={`col-12 col-sm-6 col-md-6 ${
        router.pathname === "/" ? "col-lg-3" : "col-lg-4"
      }`}
    >
      <div
        className={`${
          styles.styleCard
        } mx-auto d-flex justify-content-center align-items-center mx-3 mb-3 px-3 py-md-4 py-3 box-shadow ${
          data.status === "active" ? `${styles.active}` : ""
        }`}
      >
        <div className="card-body text-center">
          {router.pathname === "/admin" && (
            <button className="btn btn-primary d-block ms-auto mb-2">
              Edit
            </button>
          )}
          <p className="fw-bold fs-20">Delivery within</p>
          <p className={`${styles.dateStyle} fs-30`}>{data.deliveryDay} Days</p>
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
  );
};

export default Card;
