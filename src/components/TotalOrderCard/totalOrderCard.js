import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../../../pages/_app";
import styles from "./totalOrderCard.module.css";

const TotalOrderCard = ({ userOrders }) => {
  const [signedUser] = useContext(UserContext);
  return (
    <div className="p-4 bg-white">
      <div className="d-flex">
        {signedUser.photoURL && (
          <Image
            src={signedUser.photoURL}
            alt="profile"
            height="50"
            width="50"
            className="rounded-3"
          />
        )}
        <div className="ms-3">
          <p className={`${styles.name} fs-28 fw-bold`}>{signedUser.name}</p>
          <small className={`${styles.email} fs-16`}>{signedUser.email}</small>
        </div>
      </div>
      <div className={`p-4 ${styles.border} my-4`}>
        <small className={styles.totalOrder}>Total Orders</small>
        <p className={`${styles.totalItemsText} fs-48 fw-bold`}>
          {userOrders.length} - Items
        </p>
        <p className={`${styles.lastOrderDateText} fs-19`}>
          Last Order - 23 Oct, 2021
        </p>
      </div>
      <button className={`btn ${styles.pricingBtn}`}>New Order</button>
    </div>
  );
};

export default TotalOrderCard;
