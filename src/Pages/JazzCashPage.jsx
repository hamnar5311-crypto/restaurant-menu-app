import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function JazzCashPage() {
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ JazzCash payment requested from: ${number}`);
  };

const navigate = useNavigate();

const handlePayment = () => {
  if (!number) {
    alert("Please enter your JazzCash number!");
    return;
  }
  alert("JazzCash payment successful!");
  navigate("/success");
};




  return (
    <div className="min-h-screen bg-black-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4 text-teal-400"> JazzCash Payment</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter JazzCash Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-black bg-white/90"
        />

<button onClick={handlePayment} className="bg-black text-teal-400 font-bold px-3 py-1 rounded-lg 
transition-all duration-500 ease-in-out
hover:text-white hover:bg-teal-500 hover:shadow-[0_0_5px_#14b8a6]
active:scale-95 flex items-center justify-center">
  Pay with JazzCash
</button>

        {/* <button
          type="submit"
          className="bg-teal-600 px-6 py-2 rounded-lg hover:bg-teal-700"
        >
          Pay Now
        </button> */}
      </form>
    </div>
  );
}