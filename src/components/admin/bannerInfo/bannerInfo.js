import React from 'react';

const BannerInfo = () => {
    return (
        <>
            <p className="bg-white py-2 px-5 d-inline-block fs-26 fw-bold my-4 box-shadow">
                Banner Info
            </p>

            <div className="bg-white py-4 px-5 my-4 box-shadow">
                <p className="border rounded d-inline-block fw-bold fs-22 py-2 px-4">
                    Title -
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                    <p className="fs-22 fw-bold">
                        Have a project that you’re stuck on? We’re here to help. Rates
                        as low as $0.048/word!
                    </p>
                    <button
                        className="btn-style"
                    >
                        Edit
                    </button>
                </div>

                <p className="border rounded d-inline-block fs-22 fw-bold py-2 px-4">
                    Header - Details
                </p>
                <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
                    <p className="fs-16">
                        Enjoy plagiarism-free, quality writing performed by dozens of
                        accomplished scholars.Types of Work: Articles, Blog Posts,
                        Personal Narratives, Academic-Level Essays, and Much More.
                    </p>
                    <button
                        className="btn-style"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </>
    );
};

export default BannerInfo;