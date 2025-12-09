
import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
function CartPage() {
  const { cart } = useContext(CartContext);
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const navigate = useNavigate();

  const calculateDeliveryCharge = () => {
    if (Number(distance) > 3) {
      setDeliveryCharge(200);
      alert(" Distance is greater than 3 km. The charges for COD are Rs.300");
    } else {
      setDeliveryCharge(150);
    }
  };

  const total =
    cart.reduce((sum, item) => sum + item.price, 0) + deliveryCharge;

  const confirmOrder = () => {
    if (cart.length === 0) {
      alert(" Your cart is empty!");
      return;
    }
    if (!address) {
      alert(" Please enter your delivery address first!");
      return;
    }
    if (!distance) {
      alert(" Please enter delivery distance!");
      return;
    }
    if (total < 1200) {
      alert(" Please order minimum Rs.1200");
      return;
    }

navigate("/payment", { state: { address, distance, total } });
    // navigate("/success", { state: { address } });
  };

  return (
    <div className="p-10 text-white">
      <h2 className=" text-4xl text-teal-300 font-bold mb-6 ">  <FaShoppingCart  />  Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>


<ul className="  space-y-2 bg-white/80 text-black font-bold px-1 py-1 rounded-lg mb-2 w-full max-w-xl mx-auto">
  {cart.map((item, index) => (
    <li
      key={index}
      className="
       flex justify-between items-center w-full  border py-1 px-2 rounded  bg-white/60 text-black
      transition-all duration-500 ease-in-out
hover:text hover:bg-teal-400 hover:shadow-[0_0_5px_#14b8a6]
active:scale-95 
      "
    >
      {item.name} - Rs.{item.price}

    </li>
  ))}
</ul>


<br />

          {/* Address Input */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-xl text-teal-300 ">
              Enter Your Delivery Address:
            </label>
            <br />
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className=" flex justify-between items-center border py-1 px-10 rounded  bg-white/90 text-black w-full max-w-xl mx-auto "
              rows="3"
              placeholder="Enter complete delivery address..."
            />
            <br />
          </div>

          {/* Distance Input */}
          <div className="mb-4"
          >
            <label className="block mb-4 font-semibold text-xl text-teal-300 "  >
              Enter Delivery Distance (in km):
            </label>
            <br />
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className=" flex justify-between items-center border px-2 py-2 rounded bg-white/90 text-black  w-full max-w-xl mx-auto"
               placeholder="Please enter your distance in km"
            />
            <br />
            <button
              onClick={calculateDeliveryCharge}
              className=" flex justify-between items-center bg-black text-teal-400 font-bold px-1 py-2 rounded-lg 
transition-all duration-500 ease-in-out
hover:text-white hover:bg-teal-500 hover:shadow-[0_0_5px_#14b8a6]
active:scale-95  max-w-xl mx-auto"
            >
              Check Delivery Charges
            </button>
            <br />
          </div>

          <p className="mb-2 text-xl text-teal-300  ">Delivery Charges: Rs.{deliveryCharge}</p>
          <h3 className="text-xl font-bold mb-4">Total: Rs.{total}</h3>

          <button style={{display:'flex' ,alignitems:'center'}}
            onClick={confirmOrder}
            className=" flex  justify-between items-center bg-black text-teal-400 font-bold px-6 py-3 rounded-lg 
transition-all duration-500 ease-in-out
hover:text-white hover:bg-teal-500 hover:shadow-[0_0_5px_#14b8a6]
active:scale-95 max-w-xl mx-auto ">

            Confirm Order
         
            <FaCheckCircle  style={{marginRight:'8px'}}/>
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;

