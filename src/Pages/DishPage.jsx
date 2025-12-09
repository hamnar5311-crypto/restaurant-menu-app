import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import menuData from "../Data/menudata";
import { CartContext } from "../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const DishPage = ({ openCart }) => {
  const { dishName } = useParams();
  const { addToCart } = useContext(CartContext);



  const decodedName = decodeURIComponent(dishName);
  let dish;
  menuData.forEach((section) => {
    section.items.forEach((item) => {
      if (item.name === decodedName) dish = item;
    });
  });


let sectionOfDish;
menuData.forEach((section) => {
  section.items.forEach((item) => {
    if (item.name === decodedName) {
      dish = item;
      sectionOfDish = section; // save the section here
    }
  });
});

const dishImage =
  sectionOfDish?.images?.[Math.floor(Math.random() * sectionOfDish.images.length)] ||
  "/fallback.png";





  if (!dish) return <h2 className="text-center text-xl">Dish not found</h2>;

  const handleAddToCart = () => {
    addToCart(dish);
    openCart();
  };

  return (
    <div className="bg-black text-white rounded-xl shadow-lg p-6 border border-teal-600 max-w-lg mx-auto mt-6">
      
      {/* 🍕 Dish Image */}
      <div className="flex justify-center">

<img
  src={dishImage}
  alt={dish.name}
  className="w-full max-w-sm h-56 object-cover rounded-xl border border-teal-500 shadow-lg"
/>


        {/* <img
          src={dish.image || "/fallback.png"} 
          alt={dish.name}
          className="w-full max-w-sm h-56 object-cover rounded-xl border border-teal-500 shadow-lg"
        /> */}
      </div>

      {/* 🍴 Dish Info */}
      <h2 className="text-3xl font-bold text-teal-400 mt-5 text-center border border-teal-500 rounded-lg p-3">
        {dish.name}
      </h2>

      <p className="text-xl text-gray-300 my-5 text-center">
        Price: <span className="text-teal-400 font-bold">Rs.{dish.price}</span>
      </p>

      {/* 🛒 Add to Cart Button */}
      <div className="flex justify-center">
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg 
          transition-all duration-300 hover:bg-teal-400 hover:scale-105 active:scale-95"
        >
          <FaShoppingCart className="text-xl" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DishPage;
