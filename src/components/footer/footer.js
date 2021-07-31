import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" mt-5 py-3 border-top ">
      <div className="d-flex justify-content-center align-items-center mb-2">
        <RiFacebookCircleLine className="mx-2" size={24} />
        <AiOutlineInstagram  className="mx-2" size={24}/>
        <AiFillTwitterCircle className="mx-2" size={24}/>
      </div>
      <p className="text-center">&#169; 2021 Dribble Allright reserved</p>
    </footer>
  );
};

export default Footer;
