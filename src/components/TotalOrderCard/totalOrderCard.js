import Image from "next/image";
import profileImg from "../../../images/Image-2.png";
import styles from "./totalOrderCard.module.css";

const TotalOrderCard = () => {
  return (
    <div className="p-4 bg-white">
      <div className="d-flex">
        <Image src={profileImg} alt="profile" height="50" width="50" />
        <div className="ms-3">
          <h6 className={styles.name}>kawsarahmmedr</h6>
          <small className={styles.email}>kawsarahmmedr@gmail.com</small>
        </div>
      </div>
      <div className={`p-4 ${styles.border} my-4`}>
        <small className={styles.totalOrder}>Total Orders</small>
        <h1 className={styles.totalItemsText}>5 - Items</h1>
        <p className={styles.lastOrderDateText}>Last Order - 23 Oct, 2021</p>
      </div>
      <button className={`btn ${styles.pricingBtn}`}>New Order</button>
    </div>
  );
};

export default TotalOrderCard;
