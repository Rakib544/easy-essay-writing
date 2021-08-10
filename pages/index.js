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
}) {
  return (
    <div>
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
      <div className="mb-md-5 pb-md-5">
        <Header bannerData={bannerData} />
      </div>
      <Plagiarism aboutData={aboutData} />
      <Process processData={processData} processCardData={processCardData} />
      <div className="mx-4 mx-md-0">
        <Pricing priceCardData={priceCardData} />
      </div>
      <Question faqData={faqData} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const bannerResponse = await fetch(
    "https://essay-essay-writing.herokuapp.com/banner"
  );
  const bannerData = await bannerResponse.json();

  const aboutResponse = await fetch(
    "https://essay-essay-writing.herokuapp.com/about"
  );
  const aboutData = await aboutResponse.json();

  const processResponse = await fetch(
    "https://essay-essay-writing.herokuapp.com/process"
  );
  const processData = await processResponse.json();

  const faqResponse = await fetch(
    "https://essay-essay-writing.herokuapp.com/faq"
  );
  const faqData = await faqResponse.json();

  const priceCardResponse = await fetch(
    "https://essay-essay-writing.herokuapp.com/priceCard"
  );
  const priceCardData = await priceCardResponse.json();

  const processCardResponse = await fetch(
    "https://essay-essay-writing.herokuapp.com/processCard"
  );
  const processCardData = await processCardResponse.json();

  return {
    props: {
      bannerData: bannerData[0],
      aboutData: aboutData[0],
      processData: processData[0],
      faqData,
      priceCardData,
      processCardData,
    },
  };
}
