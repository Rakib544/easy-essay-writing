import Footer from "../src/components/footer/footer";
import Header from "../src/components/header/Header";
import Navbar from "../src/components/navbar/Navbar";
import Plagiarism from "../src/components/plagiarism/plagiarism";
import Pricing from "../src/components/pricing/pricing";
import Process from "../src/components/process/Process";
import Question from "../src/components/Question/Question";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Plagiarism />
      <Process />
      <div className="mx-4 mx-md-0">
        <Pricing />
      </div>
      <Question />
      <Footer />
    </div>
  );
}
