import React, { useContext } from "react";
import menuData from "../Data/menudata";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import { IoCart } from "react-icons/io5";
const MenuSection = ({ openCart }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    openCart();
  };

  return (
    <div>
      {menuData.map((section, index) => (
        <div key={index} className="text-teal-600 mb-10">
          <h1 className="text-4xl font-bold mb-8  text-center border-2 border-teal-500 rounded-md  py-2 px-2 
text-teal-400 transition-all duration-500 ease-in-out
hover:shadow-[0_0_20px_#14b8a6,0_0_40px_#14b8a6,0_0_60px_#14b8a6]
hover:text-white hover:bg-black">{section.name}</h1>

<br />



{/* ✅ Multiple Images Support */}
{section.images && section.images.length > 0 ? (
  <div className="flex  justify-between gap-6 mb-10">
    {section.images.map((imgSrc, i) => (
      <img
        key={i}
        src={imgSrc}
        alt={`${section.name} ${i + 1}`}
        className="w-60 h-48 object-cover rounded-lg bg-black border border-teal-500 shadow-lg hover:scale-105 transition-transform duration-300"
        style={{ backgroundColor: "black" }}
      />
    ))}
  </div>
) : section.image ? (
  <div className="flex justify-center mb-8">
    <img
      src={section.image}
      alt={section.name}
      className="w-76 h-56 object-cover rounded-lg bg-black border border-teal-500 shadow-lg"
      style={{ backgroundColor: "black" }}
    />
  </div>
) : null}








          <div className="grid gap-10 md:grid-cols-2 ">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-white items-center bg-white/70 p-3 hover:border-teal-500 rounded-lg shadow "
              >


                <Link
                  to={`/dish/${encodeURIComponent(item.name)}`}
                  // className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 transition"
                  className="bg-black text-teal-400 font-bold px-6 py-3 rounded-lg 
transition-all duration-500 ease-in-out
hover:text-white hover:bg-teal-500 hover:shadow-[0_0_5px_#14b8a6]
active:scale-95"



                >
                  {item.name}
                  
                </Link>

                <div className="flex items-center gap-10">
                  <span className="text-black ">Rs.{item.price}</span>

                  <button
                    onClick={() => addToCart(item)}
                    className="bg-black text-teal-400 font-bold px-3 py-1 rounded-lg 
transition-all duration-500 ease-in-out
hover:text-white hover:bg-teal-500 hover:shadow-[0_0_5px_#14b8a6]
active:scale-95"
                  >
                    <IoCart className="text-white" /> Add to Cart
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuSection;