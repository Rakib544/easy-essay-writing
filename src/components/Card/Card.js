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
        } mx-auto d-flex justify-content-center align-items-center mx-3 mb-3 p-3 ${
          data.status === "active" ? `${styles.active}` : ""
        }`}
      >
        <div className="card-body text-center">
          <p className="fw-bold">Delivery within</p>
          <h1 className={`${styles.dateStyle}`}>{data.dueDate} Days</h1>
          <span className="fw-bold">
            <h2 className={`${styles.priceStyle} d-inline`}>${data.price}</h2>
            /page
          </span>
          <p className="fw-bold fs-4">or</p>
          <p className={`${styles.wordStyle}`}>250 word</p>
          <button className={`${styles.pricingBtn} btn`}>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;