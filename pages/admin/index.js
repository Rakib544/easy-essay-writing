import React, { useEffect, useState } from "react";
import About from "../../src/components/admin/about/about";
import BannerInfo from "../../src/components/admin/bannerInfo/bannerInfo";
import Faq from "../../src/components/admin/faq/faq";
import OurProcess from "../../src/components/admin/ourProcess/ourProcess";
import Pricing from "../../src/components/admin/pricing/pricing";
import Navbar from "../../src/components/navbar/Navbar";
import withAuth from "../../src/components/privateRoute";
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
      <Navbar />
      <div className="bg-light">
        <div className="container my-5">
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

export default withAuth(Edit);
