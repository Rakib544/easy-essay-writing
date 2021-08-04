import Image from "next/image";
import profileImg from "../../../images/Image-2.png";
import styles from "./profileCard.module.css";

const ProfileCard = () => {
  return (
    <div
      className={`${styles.profileCard} row d-flex align-items-center box-shadow`}
    >
      <div className="col-3 p-4">
        <Image src={profileImg} height="60" width="60" alt="profile" />
      </div>
      <div className="col-9">
        <p className="fs-28 fw-bold">Kawsar Ahmed</p>
        <p className={`${styles.email} fs-16`}>kawsarahmmedr@gmail.com</p>
        <button className={`${styles.btn} fs-18`}>Admin</button>
      </div>
    </div>
  );
};

export default ProfileCard;
