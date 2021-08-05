import React from 'react';
import { useForm } from 'react-hook-form';

const FaqCard = ({ faqCardData, index, setNumber, number }) => {

    const { _id, question, answer } = faqCardData;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const answer = data.answer;
        const question = data.question;

        fetch(`http://localhost:8080/faq/update/${_id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                answer,
                question
            })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setNumber(number + 1);
                }
            })
    };

    return (
        <>
            <div className="mb-4">
                <div className="d-flex align-items-center justify-content-between">
                    <p className="pb-3 fs-24 fw-bold">{question}</p>
                    <button
                        className="btn-style" data-bs-toggle="modal" data-bs-target={`#faqModalCard${index + 1}`}
                    >
                        Edit
                    </button>
                </div>
                <p className="fs-18">{answer}</p>
            </div>

            <div className="modal fade" id={`faqModalCard${index + 1}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">FAQ</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label className="form-label fs-14" htmlFor="question">Question</label>
                                <textarea rows="5" cols="5" defaultValue={question} {...register("question")} name='question' id='question' className="form-control mb-2"></textarea>
                                <label className="form-label fs-14" htmlFor="answer">Answer</label>
                                <textarea rows="5" cols="5" defaultValue={answer} {...register("answer")} name='answer' id='answer' className="form-control mb-2"></textarea>
                                <input type="submit" className="btn btn-primary" value="Save Changes" data-bs-dismiss="modal" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqCard;