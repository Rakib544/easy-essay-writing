import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../../../pages/_app";
import styles from "./profileCard.module.css";

const ProfileCard = () => {
  const [signedUser] = useContext(UserContext);

  return (
    <div
      className={`${styles.profileCard} row d-flex align-items-center box-shadow`}
    >
      {signedUser.photoURL && (
        <Image
          src={signedUser?.photoURL}
          height="78"
          width="78"
          className="rounded-circle"
          alt="profile"
        />
      )}
      <div className="col-12">
        <p className={`fs-28 fw-bold ${styles.name}`}>{signedUser.name}</p>
        <p className={`${styles.email} fs-16`}>{signedUser.email}</p>
        <button className={`${styles.btn} fs-18 mt-4`}>Admin</button>
      </div>
    </div>
  );
};

export default ProfileCard;
