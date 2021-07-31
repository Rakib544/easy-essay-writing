
import React, { useState } from 'react';
import styles from './Question.module.css'
import { GrAdd } from "react-icons/gr";
import { VscRemove } from "react-icons/vsc";
import lama from '../../../images/svg17.svg'
import Image from 'next/image'
import { faqData } from '../../data/faqData';
import QuestionCard from './QuestionCard';
import flower from '../../../images/Grupo 466.svg'

const Question = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className={styles.question} >
            <div style={{ marginRight: '20%', paddingBottom: '7%' }} >
                <h1>Have question?</h1>
                <h1 className='fw-bold' >We have answers!</h1>
            </div>

            <div className={styles.questionBox} >

                <div className={styles.lama} >
                    <Image src={lama} alt='lama.svg' />
                </div>
                <div className={styles.flower} >
                    <Image src={flower} alt='flower.svg' />
                </div>

                {
                    faqData.map((data) =>
                       <QuestionCard key={data.id} data={data} />
                    )
                }


            </div>

        </div>
    );
};
export default Question;

{/* <div className={styles.question} >
                <div className='container' >
                    <div className={styles.questionText}>
                        <h1>Have question?</h1>
                        <h1 style={{ fontWeight: "bold" }} >We have answers!</h1>
                    </div>
                    <div className={styles.questionBox}>
                        <ul>
                            <li className={styles.questionBoxLi} >who writes my essay? <span className={styles.questionIcon}>< GrAdd /></span></li>
                            <li style={{ color: 'black' }} className={styles.questionBoxLi} >who long does it take? <span className={styles.questionIcon}>< VscRemove /></span></li>
                            <li className={styles.questionBoxLi}><span style={{ fontSize: '18px', }} >You will select exactly when you need the essay while filling out the order form. Occasionally the work will be finished before the due date.</span> <p>kamon</p></li>
                            <li className={styles.questionBoxLi} >what type of payment do you take? <span className={styles.questionIcon}>< GrAdd /></span></li>
                            <li className={styles.questionBoxLi} >Can I refer my friends? <span className={styles.questionIcon}>< GrAdd /></span></li>
                        </ul>
                    </div>
                </div>
            </div> */}