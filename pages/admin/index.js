import React, { useEffect, useState } from "react";
import About from "../../src/components/admin/about/About";
import BannerInfo from "../../src/components/admin/bannerInfo/BannerInfo";
import Faq from "../../src/components/admin/faq/faq";
import OurProcess from "../../src/components/admin/ourProcess/ourProcess";
import Pricing from "../../src/components/admin/pricing/pricing";
import Navbar from "../../src/components/navbar/Navbar";
import ProfileCard from "../../src/components/profileCard/profileCard";

const Edit = () => {
  const [aboutData, setAboutData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8080/about")
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
          <Pricing />
          <Faq />
        </div>
      </div>
    </>
  );
};

export default Edit;
