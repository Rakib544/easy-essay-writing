import React from 'react';

import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={`${styles.headerContainer}`}>
            <div className="container pt-md-5 pt-2 text-white">
                <h2 className={`${styles.headingText} pt-md-5 pb-md-3`}>Have a project that you’re stuck on?<br />We’re here to help. Rates as low<br />as $0.048/word!</h2>
                <span className={`${styles.paragraphText}`}>Enjoy plagiarism-free, quality writing performed by dozens of accomplished scholars.Types of Work: Articles, Blog Posts, Personal Narratives, Academic-Level Essays, and Much More.</span>
            </div>
        </div>
    );
};

export default Header;