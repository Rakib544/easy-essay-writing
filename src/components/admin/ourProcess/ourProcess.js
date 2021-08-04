import React from 'react';

const OurProcess = () => {
    return (
        <>
            <p className="bg-white py-2 px-5 d-inline-block fs-26 fw-bold fw-bold my-4 box-shadow">
                Our Process
            </p>

            <div className="bg-white py-4 px-5 my-4 box-shadow">
                <p className="border rounded d-inline-block py-2 fs-22 fw-bold px-4">
                    Title -
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                    <p className="fs-22 fw-bold">Our Process</p>
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry’s standard dummy
                        text ever since the 1500s
                    </p>
                    <button
                        className="btn"
                        style={{ border: "none", color: "blue", fontWeight: "700" }}
                    >
                        Edit
                    </button>
                </div>

                <p className="text-primary fs-22 fw-bold mb-5">Items</p>

                <div className="row mt-2">
                    <div className="col-md-4">
                        <p className="text-primary fs-18 fw-bold mb-2">Item - 1</p>
                        <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                            <p className="border rounded fs-16 fw-bold  d-inline-block py-2 px-4">
                                Title -
                            </p>
                            <button
                                className="btn"
                                style={{ border: "none", color: "blue", fontWeight: "700" }}
                            >
                                Edit
                            </button>
                        </div>

                        <p className="fs-18 fw-bold">
                            Give us a description of your project.
                        </p>
                        <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                            <p className="border fs-16 fw-bold rounded d-inline-block py-2 px-4">
                                Content
                            </p>
                            <button
                                className="btn"
                                style={{ border: "none", color: "blue", fontWeight: "700" }}
                            >
                                Edit
                            </button>
                        </div>

                        <p className="fs-16">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurProcess;