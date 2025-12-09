import React from "react";
import { Link } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
function OrderSuccess({ address }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-4 text-teal-400">  <GoHeartFill  /> Thank You! For Choosing Us</h1>
      <p className="mb-4">Your order just made our kitchen excited!  </p>
      {address && (
        <p className="mb-6">
          Your food will be delivered to: <span className="font-semibold">{address}</span>
        </p>
      )}
      <Link
        to="/"
        className="flex  justify-between items-center bg-black text-teal-400 font-bold px-6 py-3 rounded-lg 
transition-all duration-500 ease-in-out
hover:text-white hover:bg-teal-500 hover:shadow-[0_0_5px_#14b8a6]
active:scale-95 max-w-xl mx-auto"
      >
      
        Back to Menu
      </Link>
    </div>
  );
}

export default OrderSuccess;