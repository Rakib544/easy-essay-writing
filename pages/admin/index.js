import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import About from "../../src/components/admin/about/about";
import BannerInfo from "../../src/components/admin/bannerInfo/bannerInfo";
import DiscountPrice from "../../src/components/admin/discountPrice/discountPrice";
import Faq from "../../src/components/admin/faq/faq";
import OurProcess from "../../src/components/admin/ourProcess/ourProcess";
import AdminCard from "../../src/components/adminCard/adminCard";
import withAdminAuth from "../../src/components/AdminPrivateRoute";
import Navbar from "../../src/components/navbar/Navbar";
import ProfileCard from "../../src/components/profileCard/profileCard";

const Edit = () => {
  const [aboutData, setAboutData] = useState({});
  const [adminCards, setAdminCards] = useState([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    fetch("https://api.easyessaywriting.com/about")
      .then((res) => res.json())
      .then((data) => setAboutData(data[0]));
  }, []);

  useEffect(() => {
    fetch("https://api.easyessaywriting.com/priceCard")
      .then((res) => res.json())
      .then((data) => setAdminCards(data));
  }, [number]);

  return (
    <>
      <Head>
        <title>Easy Essay Writing | Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="bg-light">
        <div className="container my-5">
          <div className="container my-3">
            <BsArrowLeft size={28} className="text-primary" />
            <Link href="/">
              <a className="text-primary">Back To Home</a>
            </Link>
          </div>
          <ProfileCard />
          <BannerInfo />
          <About aboutData={aboutData} />
          <OurProcess />
          <div className="row">
            {adminCards.map((adminCard, index) => (
              <AdminCard
                adminCard={adminCard}
                setNumber={setNumber}
                index={index}
                key={adminCard._id}
              />
            ))}
          </div>
          <DiscountPrice />
          <Faq />
        </div>
      </div>
    </>
  );
};

export default withAdminAuth(Edit);
