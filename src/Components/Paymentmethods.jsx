
import { Link } from "react-router-dom";

export default function PaymentMethods() {
  return (
    <div className=" flex justify-center items-center min-h-screen  bg-black text-white ">

<div className=" min-h-screen w-full  bg-black-700 text-white flex flex-col items-center justify-center " >


      <h2 className="text-4xl items-center font-bold mb-4 text-teal-300">
         Payment Methods
      </h2>
      <ul className="space-y-3">
        <li className="mb-4">
          <Link to="/payment/easypaisa" className=" justify-between items-center    bg-white/70 text-white font-bold px-2 py-1    rounded-lg  transition-all duration-500 ease-in-out
hover:text hover:bg-teal-500 hover:shadow-[0_0_5px_#14b8a6]
active:scale-95 mb-4  ">
            1. Easypaisa
          </Link>
        </li>
        <li className="mb-8">
          <Link to="/payment/jazzcash" className="    justify-between items-center    bg-white/70 text-white font-bold px-2 py-1    rounded-lg  transition-all duration-500 ease-in-out
hover:text hover:bg-teal-500 hover:shadow-[0_0_5px_#14b8a6]
active:scale-95 ">
             2. JazzCash
          </Link>
        </li>
        
        <li className="mb-4">
          <Link to="/payment/card" className="   justify-between items-center    bg-white/70 text-white font-bold px-2 py-1    rounded-lg  transition-all duration-500 ease-in-out
hover:text hover:bg-teal-500 hover:shadow-[0_0_5px_#14b8a6]
active:scale-95   ">
            3. Card Payment
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
}






// / import React from "react";

// export default function PaymentMethods() {
//   return (
//     <div className="p-20 bg-white/70  font-bold px-3 py-1 rounded-lg 
// transition-all duration-500 ease-in-out
// hover:text-white hover:bg-teal-500 hover:shadow-[0_0_5px_#14b8a6]
// active:scale-95">

//       <h2 className="text-white font-bold mb-4 text-teal-400">
//         💳 Payment Methods
//       </h2>

//       <ul className="space-y-3">
//         <li className="text-teal-300 hover:text-teal-200 transition duration-300">
//            Cash on Delivery (COD)
//         </li>
//         <li className="text-teal-300 hover:text-teal-200 transition duration-300">
//            JazzCash
//         </li>
//         <li className="text-teal-300 hover:text-teal-200 transition duration-300">
//            EasyPaisa
//         </li>
//         <li className="text-teal-300 hover:text-teal-200 transition duration-300">
//            Card Payment
//         </li>
//       </ul>
//     </div>
//   );
// }