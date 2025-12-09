import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
   
  
  
  <div
  className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center text-white"
  style={{
    backgroundImage: "url('/images/res-bg3.jpg')", // make sure it has correct extension (.jpg or .png)
  }}
>
  

   
    
    


      <div className="bg-black/60 p-10 rounded-2xl shadow-lg">
        <h1 className="text-5xl font-extrabold text-teal-400 mb-4 drop-shadow-lg">
          🍽️ B2B Restaurant 
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Welcome to the taste of perfection — delicious, fresh, and made with love!
        </p>

        <Link
          to="/menu"
          className="bg-teal-400 text-black font-semibold px-8 py-3 rounded-lg 
          hover:bg-teal-400 hover:text-white hover:shadow-[0_0_20px_#14b8a6] 
          transition-all duration-500 ease-in-out"
        >
          Explore Menu 🍕
        </Link>
      </div>
    </div>
  );
};

export default Home;