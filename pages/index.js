import Pricing from "../src/components/pricing/pricing";
import Process from "../src/components/process/Process";

export default function Home() {
  return (
    <div>
      <p className="font-bold text-primary">Hello World, I am Rakib</p>
      <p>Development branch created and merge with Rakib</p>
      <button className="btn btn-primary">Test</button>
      <Process />
      <Pricing />
    </div>
  );
}
