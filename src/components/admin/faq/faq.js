import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FaqCard from "../faqCard/faqCard";
import FooterCard from "../footerCard/footerCard";

const Faq = () => {
  const [faqCardsData, setFaqCardsData] = useState([]);
  const [footerCardsData, setFooterCardsData] = useState([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    fetch("https://essay-essay-writing.herokuapp.com/faq")
      .then((res) => res.json())
      .then((data) => {
        setFaqCardsData(data);
      });
  }, [number]);

  useEffect(() => {
    fetch("https://essay-essay-writing.herokuapp.com/footerIcons")
      .then((res) => res.json())
      .then((data) => {
        setFooterCardsData(data);
      });
  }, [number]);

  const notify = () => toast.success("Updated Successfully");

  return (
    <>
      <p className="bg-white fs-26 fw-bold py-2 px-5 d-inline-block my-4 box-shadow">
        FAQ
      </p>

      <div className="bg-white py-4 px-5 my-4 box-shadow">
        <div className="row">
          <div className="col-md-6">
            {faqCardsData.map((faqCardData, index) => (
              <FaqCard
                faqCardData={faqCardData}
                key={faqCardData._id}
                index={index}
                setNumber={setNumber}
                number={number}
                notify={notify}
              />
            ))}
          </div>

          <div className="col-md-6">
            <div className="px-md-5 mx-md-5">
              <div className="pb-3">
                <p className="bg-primary p-3 text-white rounded">
                  <span className="ms-5 fs-26 fw-bold">Footer</span>
                </p>
              </div>

              {footerCardsData.map((footerCardData, index) => (
                <FooterCard
                  footerCardData={footerCardData}
                  key={footerCardData._id}
                  index={index}
                  setNumber={setNumber}
                  number={number}
                  notify={notify}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
