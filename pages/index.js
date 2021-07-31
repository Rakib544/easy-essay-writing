import Plagiarism from "../src/components/plagiarism/plagiarism";
import Process from '../src/components/process/Process';
import Pricing from "../src/components/pricing/pricing";
import Footer from "../src/components/footer/footer";
import Header from "../src/components/header/Header";
import Navbar from "../src/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Plagiarism />
      <Process />
      <Pricing/>
      <Footer/>
    </div>
  );
}
