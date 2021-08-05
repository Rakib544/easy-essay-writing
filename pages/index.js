import Footer from "../src/components/footer/footer";
import Header from "../src/components/header/Header";
import Navbar from "../src/components/navbar/Navbar";
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
}) {
  return (
    <div>
      <Navbar />
      <Header bannerData={bannerData} />
      <Plagiarism aboutData={aboutData} />
      <Process processData={processData} />
      <div className="mx-4 mx-md-0">
        <Pricing priceCardData={priceCardData} />
      </div>
      <Question faqData={faqData} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const bannerResponse = await fetch("http://localhost:8080/banner");
  const bannerData = await bannerResponse.json();

  const aboutResponse = await fetch("http://localhost:8080/about");
  const aboutData = await aboutResponse.json();

  const processResponse = await fetch("http://localhost:8080/process");
  const processData = await processResponse.json();

  const faqResponse = await fetch("http://localhost:8080/faq");
  const faqData = await faqResponse.json();

  const priceCardResponse = await fetch("http://localhost:8080/priceCard");
  const priceCardData = await priceCardResponse.json();

  return {
    props: {
      bannerData: bannerData[0],
      aboutData: aboutData[0],
      processData: processData[0],
      faqData,
      priceCardData,
    },
  };
}
