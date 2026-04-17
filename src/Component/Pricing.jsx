 
import { useState } from "react";

export default function Pricing() {
  const [value, setValue] = useState(2);
  const [yearly, setYearly] = useState(false);

  const plans = [
    { views: "10K", price: 8 },
    { views: "50K", price: 12 },
    { views: "100K", price: 16 },
    { views: "500K", price: 24 },
    { views: "1M", price: 36 },
  ];

  const current = plans[value];

  const price = yearly
    ? (current.price * 0.75).toFixed(2)
    : current.price.toFixed(2);

  const progress = (value / 4) * 100;

  return (
    <div className="relative z-10">

      
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[hsl(227,35%,25%)]">
          Simple, traffic-based pricing
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>

      
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[350px] md:w-[550px]">

        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <p className="text-gray-400 tracking-widest text-sm">
            {current.views} PAGEVIEWS
          </p>

          <h1 className="text-4xl font-bold text-[hsl(227,35%,25%)]">
            ${price}
            <span className="text-base text-gray-400">
              {" "}
              /{yearly ? "year" : "month"}
            </span>
          </h1>
        </div>

        
        <div className="relative mb-10">

          
          <div className="w-full h-2 bg-[hsl(224,65%,95%)] rounded-full"></div>

          
          <div
            className="absolute top-0 h-2 bg-[hsl(174,77%,80%)] rounded-full"
            style={{ width: `${progress}%` }}
          ></div>

        
          <input
            type="range"
            min="0"
            max="4"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="absolute top-0 w-full h-2  appearance-none bg-transparent z-10 slider"
          />
        </div>

    
        <div className="flex justify-center items-center gap-3 text-sm mb-8">
          <span className="text-gray-400">Monthly Billing</span>

          <div
            onClick={() => setYearly(!yearly)}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${
              yearly
                ? "bg-[hsl(174,86%,45%)]"
                : "bg-[hsl(223,50%,87%)]"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
                yearly ? "translate-x-6" : ""
              }`}
            ></div>
          </div>

          <span className="text-gray-400">Yearly Billing</span>

          <span className="bg-[hsl(14,92%,95%)] text-[hsl(15,100%,70%)] px-2 py-1 rounded-full text-xs">
            25% discount
          </span>
        </div>

        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <ul className="text-gray-400 text-sm space-y-2">
            <li>✔ Unlimited websites</li>
            <li>✔ 100% data ownership</li>
            <li>✔ Email reports</li>
          </ul>

          <button className="mt-6 md:mt-0 bg-[hsl(227,35%,25%)] text-[hsl(226,100%,87%)] px-6 py-3 rounded-full hover:bg-black transition">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
}