import Footer from "../src/components/footer/footer";
import Header from "../src/components/header/Header";
import Navbar from "../src/components/navbar/Navbar";
import Plagiarism from "../src/components/plagiarism/plagiarism";
import Pricing from "../src/components/pricing/pricing";
import Process from "../src/components/process/Process";
import Question from "../src/components/Question/Question";

export default function Home({ bannerData, aboutData }) {
  return (
    <div>
      <Navbar />
      <Header bannerData={bannerData} />
      <Plagiarism aboutData={aboutData} />
      <Process />
      <div className="mx-4 mx-md-0">
        <Pricing />
      </div>
      <Question />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const bannerResponse = await fetch("http://localhost:8080/banner");
  const bannerData = await bannerResponse.json();

  const aboutResponse = await fetch("http://localhost:8080/about");
  const aboutData = await aboutResponse.json();

  return {
    props: {
      bannerData: bannerData[0],
      aboutData: aboutData[0],
    },
  };
}
