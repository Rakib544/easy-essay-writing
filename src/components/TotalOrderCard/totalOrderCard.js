import Image from "next/image";
import profileImg from "../../../images/Image-2.png";
import styles from "./totalOrderCard.module.css";

const TotalOrderCard = () => {
  return (
    <div className="p-4 bg-white">
      <div className="d-flex">
        <Image src={profileImg} alt="profile" height="50" width="50" />
        <div className="ms-3">
          <p className={`${styles.name} fs-28 fw-bold`}>kawsarahmmedr</p>
          <small className={`${styles.email} fs-16`}>kawsarahmmedr@gmail.com</small>
        </div>
      </div>
      <div className={`p-4 ${styles.border} my-4`}>
        <small className={styles.totalOrder}>Total Orders</small>
        <p className={`${styles.totalItemsText} fs-48 fw-bold`}>5 - Items</p>
        <p className={`${styles.lastOrderDateText} fs-19`}>Last Order - 23 Oct, 2021</p>
      </div>
      <button className={`btn ${styles.pricingBtn}`}>New Order</button>
    </div>
  );
};

export default TotalOrderCard;
