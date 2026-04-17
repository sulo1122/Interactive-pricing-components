
import Pricing from "./Component/Pricing";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(230,100%,99%)] relative overflow-hidden">

      
      <div className="absolute top-0 w-full h-[50%] bg-[hsl(230,100%,95%)] rounded-bl-[120px]"></div>

      
      <img src="pattern-circles.svg" alt="" className="absolute top-22"/>

      <Pricing />
    </div>
  );
}