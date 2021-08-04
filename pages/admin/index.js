import React from "react";
import Navbar from "../../src/components/navbar/Navbar";
import ProfileCard from "../../src/components/profileCard/profileCard";
import About from '../../src/components/admin/about/About';
import BannerInfo from "../../src/components/admin/bannerInfo/BannerInfo";
import Faq from "../../src/components/admin/faq/faq";
import OurProcess from "../../src/components/admin/ourProcess/ourProcess";
import Pricing from "../../src/components/admin/pricing/pricing";

const Edit = () => {
  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container my-5">
          <ProfileCard />

          <BannerInfo />

          <About />

          <OurProcess />

          <Pricing />

          <Faq />
        </div>
      </div>
    </>
  );
};

export default Edit;
