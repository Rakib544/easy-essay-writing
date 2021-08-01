import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.borderTop} mt-5 py-3`}>
      <div className="d-flex justify-content-center align-items-center mb-2">
        <FaFacebookF className="mx-2" size={30} className={styles.iconStyle} />
        <AiOutlineInstagram
          className="mx-2"
          size={30}
          className={styles.iconStyle}
        />
        <FaTwitter className="mx-2" size={30} className={styles.iconStyle} />
      </div>
      <small className="d-block mt-2 text-center">
        &#169; 2021 Dribble All right reserved 
      </small>
    </footer>
  );
};

export default Footer;
