import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../src/components/footer/footer";
import Header from "../src/components/header/Header";
import Plagiarism from "../src/components/plagiarism/plagiarism";
import Pricing from "../src/components/pricing/pricing";
import Process from "../src/components/process/Process";
import Question from "../src/components/Question/Question";

export default function Home({
  bannerData,
  aboutData,
  processData,
  faqData,
  priceCardData,
  processCardData,
  footerCardData,
}) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Head>
        <title>Easy Essay Writing | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mb-md-5 pb-md-5">
        <Header bannerData={bannerData} />
      </div>
      <Plagiarism aboutData={aboutData} />
      <Process processData={processData} processCardData={processCardData} />
      <div className="mx-5 mx-md-0">
        <Pricing priceCardData={priceCardData} />
      </div>
      <Question faqData={faqData} />
      <Footer footerCardData={footerCardData} />
    </>
  );
}

export async function getServerSideProps() {
  const bannerResponse = await fetch(
    "https://api.easyessaywriting.com/banner"
  );
  const bannerData = await bannerResponse.json();

  const aboutResponse = await fetch(
    "https://api.easyessaywriting.com/about"
  );
  const aboutData = await aboutResponse.json();

  const processResponse = await fetch(
    "https://api.easyessaywriting.com/process"
  );
  const processData = await processResponse.json();

  const faqResponse = await fetch(
    "https://api.easyessaywriting.com/faq"
  );
  const faqData = await faqResponse.json();

  const priceCardResponse = await fetch(
    "https://api.easyessaywriting.com/priceCard"
  );
  const priceCardData = await priceCardResponse.json();

  const processCardResponse = await fetch(
    "https://api.easyessaywriting.com/processCard"
  );
  const processCardData = await processCardResponse.json();

  const footerCardsData = await fetch(
    "https://api.easyessaywriting.com/footerIcons"
  );
  const footerCardData = await footerCardsData.json();

  return {
    props: {
      bannerData: bannerData[0],
      aboutData: aboutData[0],
      processData: processData[0],
      faqData,
      priceCardData,
      processCardData,
      footerCardData,
    },
  };
}
