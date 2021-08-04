import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${styles.headerContainer}`}>
      <div className="container pt-md-2 pt-2 text-white">
        <p className={`${styles.headingText} pt-md-5 pb-md-3 fs-48 fw-bold`}>
          Have a project that you’re stuck on?
          <br />
          We’re here to help. Rates as low
          <br />
          as <span className="banner-text">$0.048/</span>word!
        </p>
        <div className={styles.text}>
          <p
            className={`${styles.paragraphText} fs-16 text-center text-md-start`}
          >
            Enjoy plagiarism-free, quality writing performed by dozens of
            accomplished scholars.Types of Work: Articles, Blog Posts, Personal
            Narratives, Academic-Level Essays, and Much More.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
