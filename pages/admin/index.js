import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import About from "../../src/components/admin/about/about";
import BannerInfo from "../../src/components/admin/bannerInfo/bannerInfo";
import Faq from "../../src/components/admin/faq/faq";
import OurProcess from "../../src/components/admin/ourProcess/ourProcess";
import Pricing from "../../src/components/admin/pricing/pricing";
import withAdminAuth from "../../src/components/AdminPrivateRoute";
import Navbar from "../../src/components/navbar/Navbar";
import ProfileCard from "../../src/components/profileCard/profileCard";

const Edit = ({ priceCardData }) => {
  const [aboutData, setAboutData] = useState({});
  useEffect(() => {
    fetch("https://essay-essay-writing.herokuapp.com/about")
      .then((res) => res.json())
      .then((data) => setAboutData(data[0]));
  }, []);

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
          <Pricing priceCardData={priceCardData} />
          <Faq />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const priceCardResponse = await fetch(
    "https://essay-essay-writing.herokuapp.com/priceCard"
  );
  const priceCardData = await priceCardResponse.json();

  return {
    props: {
      priceCardData,
    },
  };
}

export default withAdminAuth(Edit);
