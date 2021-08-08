import React from "react";

import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";

const Header = ({ bannerData }) => {
  return (
    <div className={`${styles.headerContainer}`}>
      <Navbar />
      <div className="container pt-md-2 text-white">
        <p className={`${styles.headingText} pt-md-5 pb-md-3 fs-48 fw-bold`}>
          {bannerData.title}
          {/* Have a project that you’re stuck on?
          <br />
          We’re here to help. Rates as low
          <br />
          as <span className="banner-text">$0.048/</span>word! */}
        </p>
        <div className={styles.text}>
          <p
            className={`${styles.paragraphText} fs-16 text-center text-md-start`}
          >
            {bannerData.headerDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
