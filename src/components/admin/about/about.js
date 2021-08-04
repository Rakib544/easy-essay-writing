import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const About = () => {

    const [aboutData, setAboutData] = useState({});
    const { title, headerDetails, buttonText } = aboutData;
    const [showTitle, setShowTitle] = useState(false);
    const [showHeaderDetails, setShowHeaderDetails] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        fetch('http://localhost:8080/about')
            .then(res => res.json())
            .then(data => setAboutData(data[0]));
    }, []);

    const handleTitle = () => {
        setShowTitle(true);
        setShowHeaderDetails(false);
        setShowButton(false);
    }

    const handleHeader = () => {
        setShowTitle(false);
        setShowHeaderDetails(true);
        setShowButton(false);
    }

    const handleButton = () => {
        setShowTitle(false);
        setShowHeaderDetails(false);
        setShowButton(true);
    }

    const onSubmit = data => console.log(data);

    return (
        <>
            <p className="bg-white py-2 px-5 d-inline-block fs-26 fw-bold my-4 box-shadow">
                About
            </p>

            <div className="bg-white py-4 px-5 my-4 box-shadow">
                <p className="border rounded fs-22 fw-bold d-inline-block py-2 px-4">
                    Title -
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                    <p className="fs-22 fw-bold">{title}</p>
                    <button
                        className="btn-style" onClick={handleTitle} data-bs-toggle="modal" data-bs-target="#aboutModal"
                    >
                        Edit
                    </button>
                </div>

                <p className="border fs-22 fw-bold rounded d-inline-block py-2 px-4">
                    Header - Details
                </p>
                <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
                    <p className="fs-16">{headerDetails}</p>
                    <button
                        className="btn-style"  onClick={handleHeader} data-bs-toggle="modal" data-bs-target="#aboutModal"
                    >
                        Edit
                    </button>
                </div>

                <h5 className="border rounded d-inline-block py-2 px-4">Button</h5>
                <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
                    <p className="text-primary fs-18">{buttonText}</p>
                    <button
                        className="btn-style"  onClick={handleButton} data-bs-toggle="modal" data-bs-target="#aboutModal"
                    >
                        Edit
                    </button>
                </div>
            </div>

            <div class="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                {showTitle && 'Title'}
                                {showHeaderDetails && 'Header - Details'}
                                {showButton && 'Button'}
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue="" value={`${showTitle && `${title}`} ${showHeaderDetails && `${headerDetails}`} ${showButton && `${buttonText}`}`} />
                                <input type="submit" />
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default About;