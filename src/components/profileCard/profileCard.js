import Image from "next/image";
import profileImg from "../../../images/Image-2.png";
import styles from "./profileCard.module.css";

const ProfileCard = () => {
  return (
    <div className={`${styles.profileCard} row d-flex align-items-center`}>
      <div className="col-3 p-4">
        <Image src={profileImg} height="60" width="60" alt="profile" />
      </div>
      <div className="col-9">
        <h6 className={styles.name}>Kawsar Ahmed</h6>
        <small className={styles.email}>kawsarahmmedr@gmail.com</small>
        <button className={styles.btn}>Admin</button>
      </div>
    </div>
  );
};

export default ProfileCard;
