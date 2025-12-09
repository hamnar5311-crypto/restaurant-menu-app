import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const SidebarCart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (


    
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-black text-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b bg-gray-100">
        <h2 className="text-xl font-bold text-teal-700 flex items-center gap-2">
          <FaShoppingCart /> My Cart
        </h2>
       
       <button onClick={onClose} className="btn text-teal-800 hover:underline">Close</button>
<button className="btn text-teal-800  hover:underline teal">Checkout</button>
       
        {/* <button
          onClick={onClose}
          className="text-red-500 font-bold text-lg hover:text-red-700"
        >
          ✖
        </button> */}
      </div>

      {/* Items */}




      <div className="p-4 space-y-3 overflow-y-auto h-[70%] bg-black">
        {cart.length === 0 ? (
          <p className="text-white">Your cart is empty 🛒</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center    bg-white/70 text-white font-bold px-3 py-1    rounded-lg  transition-all duration-500 ease-in-out
hover:text hover:bg-teal-500 hover:shadow-[0_0_5px_#14b8a6]
active:scale-95  "
            >
              <span className="flex items-center gap-2">
                <FaShoppingCart className="text-teal-700" />
                {item.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Rs.{item.price}</span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <ImCross />
                  {/* ❌ */}
                </button>
              </div>
            </div>
          ))
        )}
      </div>



      

      {/* Footer */}
      <div className="p-4 border-t bg-gray-100">
        <Link
          to="/cart"
          onClick={onClose}
          className="bg-black text-teal-400 font-bold px-3 py-1 rounded-lg 
transition-all duration-500 ease-in-out
hover:text-white hover:bg-teal-500 hover:shadow-[0_0_5px_#14b8a6]
active:scale-95 flex items-center justify-center "
        >
          View Full Cart / Checkout
        </Link>
      </div>
    </div>
  );
};

export default SidebarCart;