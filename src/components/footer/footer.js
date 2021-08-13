import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = ({footerCardData}) => {
  return (
    <footer className={`${styles.borderTop} mt-5 py-3`}>
      <div className="d-flex justify-content-center align-items-center mb-2">
        <Link href={footerCardData[0].link}>
          <a target="_blank">
            <FaFacebookF
              className="mx-2"
              size={30}
              className={styles.iconStyle}
            />
          </a>
        </Link>
        <Link href={footerCardData[1].link}>
          <a target="_blank">
            <AiOutlineInstagram
              className="mx-2"
              size={30}
              className={styles.iconStyle}
            />
          </a>
        </Link>
        <Link href={footerCardData[3].link}>
          <a target="_blank">
            <FaTwitter
              className="mx-2"
              size={30}
              className={styles.iconStyle}
            />
          </a>
        </Link>
      </div>
      <small className="d-block mt-2 text-center">
        &#169; 2021 Easy Eassy Writting All right reserved
      </small>
    </footer>
  );
};

export default Footer;
