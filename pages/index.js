import Pricing from "../src/components/pricing/pricing";
import Footer from "../src/components/footer/footer";

export default function Home() {
  return (
    <div>
      <p className="font-bold text-primary">Hello World, I am Rakib</p>
      <p>Development branch created and merge with Rakib</p>
      <button className="btn btn-primary">Test</button>
      <Pricing/>
      <Footer/>
    </div>
  );
}
