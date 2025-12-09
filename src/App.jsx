import { Routes, Route, Link } from "react-router-dom";
import MenuSection from "./Components/Menusection";
import DishPage from "./Pages/DishPage";
import CartPage from "./Pages/CartPage";
import SidebarCart from "./Components/SidebarCart";
import { useState, useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { IoCart } from "react-icons/io5";

import Paymentmethods from "./Components/Paymentmethods";
import EasypaisaPage from "./Pages/EasypaisaPage";
import JazzCashPage from "./Pages/JazzCashPage";
import CardPaymentPage from "./Pages/CardPaymentPage"
import OrderSuccess from "./Pages/OrderSuccess";
import Home from "./Pages/Home";


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const openCart = () => setIsCartOpen(true);

  return (
    <div className="min-h-screen bg-black">


      {/* Header */}


      <header className="bg-teal-900 text-white p-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🍽️ B2B Restaurant </h1>
        <nav className="flex items-center gap-7">


          {/* <Link to="/" className="hover:underline">Menu</Link> */}

          <Link to="/menu" className="hover:underline">Menu</Link>

          <Link to="/" className="text-2xl font-bold hover:underline">Home Page</Link>

          <button onClick={openCart} className="bg-teal-500/60 hover:bg-teal-600/80 text-white px-4 py-2 rounded-lg transition relative">
            <IoCart /> Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                {cart.length}
              </span>
            )}
          </button>




        </nav>
      </header>

      {/* Sidebar Cart */}
      <SidebarCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Routes */}
      <main className="p-20     ">



<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<MenuSection openCart={openCart} />} />
  <Route path="/dish/:dishName" element={<DishPage openCart={openCart} />} />
  <Route path="/cart" element={<CartPage />} />
  <Route path="/payment" element={<Paymentmethods />} />
  <Route path="/payment/easypaisa" element={<EasypaisaPage />} />
  <Route path="/payment/jazzcash" element={<JazzCashPage />} />
  <Route path="/payment/card" element={<CardPaymentPage />} />
  <Route path="/success" element={<OrderSuccess />} />
</Routes>







        {/* <Routes>
          <Route path="/" element={<MenuSection openCart={openCart} />} />
          <Route path="/dish/:dishName" element={<DishPage openCart={openCart} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<Paymentmethods />} />
          <Route path="/payment/easypaisa" element={<EasypaisaPage />} />
          <Route path="/payment/jazzcash" element={<JazzCashPage />} />
          <Route path="/payment/card" element={<CardPaymentPage />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<MenuSection />} />
        </Routes> */}






      </main>

    </div>
  );
}

export default App;