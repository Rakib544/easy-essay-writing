import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const OurProcessCard = ({ processCardData, index, setNumber, number }) => {

    const { _id, title, content } = processCardData;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const title = data.title;
        const content = data.content;

        fetch(`http://localhost:8080/processCard/update/${_id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title,
                content
            })
        })
            .then(res => res.json())
            .then(result => {
                if(result) {
                    console.log(result)
                    setNumber(number + 1);
                }
            })
    };

    return (
        <>
            <div className="col-md-4 pb-3">
                <p className="text-primary fs-18 fw-bold mb-2">Item - {index + 1}</p>
                <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                    <p className="border rounded fs-16 fw-bold  d-inline-block py-2 px-4">
                        Title -
                    </p>
                    <button
                        className="btn-style" data-bs-toggle="modal" data-bs-target={`#processCardModal${index + 1}`}
                    >
                        Edit
                    </button>
                </div>
                <p className="fs-18 fw-bold">{title}</p>

                <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                    <p className="border fs-16 fw-bold rounded d-inline-block py-2 px-4">
                        Content
                    </p>
                    <button
                        className="btn-style" data-bs-toggle="modal" data-bs-target={`#processModalCard${index + 1}`}
                    >
                        Edit
                    </button>
                </div>
                <p className="fs-16">{content}</p>
            </div>

            <div class="modal fade" id={`processCardModal${index + 1}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <textarea rows="5" cols="5" defaultValue={title} {...register("title")} name='title' id='title' class="form-control mb-2"></textarea>
                                <input type="submit" className="btn btn-primary" value="Save Changes" data-bs-dismiss="modal" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id={`processModalCard${index + 1}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Content</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <textarea rows="5" cols="5" defaultValue={content} {...register("content")} name='content' id='content' class="form-control mb-2"></textarea>
                                {/* <input type="hidden" name="_id" defaultValue={processCardData._id} {...register("_id")} id='_id' /> */}
                                <input type="submit" className="btn btn-primary" value="Save Changes" data-bs-dismiss="modal" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurProcessCard;