import React from 'react';

const About = () => {
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
                    <p className="fs-22 fw-bold">Plagiarism-free work Guaranteed!</p>
                    <button
                        className="btn"
                        style={{ border: "none", color: "blue", fontWeight: "700" }}
                    >
                        Edit
                    </button>
                </div>

                <p className="border fs-22 fw-bold rounded d-inline-block py-2 px-4">
                    Header - Details
                </p>
                <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
                    <p className="fs-16">
                        No more stressing about your writing needs, just schedule an
                        assignment for Easy Essay Writing and we’ll do the stressing for
                        you!
                    </p>
                    <button
                        className="btn"
                        style={{ border: "none", color: "blue", fontWeight: "700" }}
                    >
                        Edit
                    </button>
                </div>

                <h5 className="border rounded d-inline-block py-2 px-4">Button</h5>
                <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
                    <p className="text-primary fs-18">Learn More</p>
                    <button
                        className="btn"
                        style={{ border: "none", color: "blue", fontWeight: "700" }}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </>
    );
};

export default About;