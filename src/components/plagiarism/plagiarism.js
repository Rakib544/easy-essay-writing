import React from 'react';
import Image from 'next/image';

import styles from './plagiarism.module.css';
import mobileBgImage from '../../../images/Image_1.svg';
import circleBgImage from '../../../images/Group_7.svg';
import teerBgImage from '../../../images/Group_8.svg';

const plagiarism = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className={`${styles.hello5}`}>
                        <div className={`${styles.hello4}`}>
                            <Image src={teerBgImage} alt="" />
                        </div>
                        <div className={`${styles.hello}`}>
                            <Image src={circleBgImage} className={`${styles.circleBgImage}`} alt="" />
                        </div>
                        <div className={`${styles.hello2}`}>
                            <Image src={mobileBgImage} className={`${styles.mobileBgImage}`} alt="" />
                        </div>
                        <div className={`${styles.hello3}`}>
                            <Image src={teerBgImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="">
                        <h1 style={{ fontSize: '48px' }}>Plagiarism-free work<br />Guaranteed!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default plagiarism;