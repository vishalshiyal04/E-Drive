// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { FiTrash2 } from "react-icons/fi";

// // const CartPage = ({ cart, setCart }) => {
// //   // Remove item from cart
// //   const handleRemoveFromCart = (id) => {
// //     setCart(cart.filter((car) => car.id !== id));
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto p-6">
// //       <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

// //       {cart.length === 0 ? (
// //         <p className="text-gray-500">Your cart is empty.</p>
// //       ) : (
// //         <div className="space-y-4">
// //           {cart.map((car) => (
// //             <div key={car.id} className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
// //               <div className="flex items-center space-x-4">
// //                 <img src={car.image} alt={car.name} className="w-20 h-14 object-cover rounded-md" />
// //                 <div>
// //                   <h3 className="text-lg font-medium">{car.name}</h3>
// //                   <p className="text-gray-500">${car.price}</p>
// //                 </div>
// //               </div>

// //               <button
// //                 onClick={() => handleRemoveFromCart(car.id)}
// //                 className="text-red-500 hover:text-red-700"
// //               >
// //                 <FiTrash2 size={20} />
// //               </button>
// //             </div>
// //           ))}
// //           <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-lg hover:bg-blue-600">
// //             Proceed to Checkout
// //           </button>
// //         </div>
// //       )}

// //       <Link to="/" className="text-blue-500 hover:underline mt-4 block">
// //         ← Continue Shopping
// //       </Link>
// //     </div>
// //   );
// // };

// // export default CartPage;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FiTrash2 } from "react-icons/fi";

// const CartPage = ({ cart = [], setCart }) => {
//   // Remove item from cart
//   const handleRemoveFromCart = (id) => {
//     setCart(cart.filter((car) => car.id !== id));
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

//       {cart?.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-4">
//           {cart?.map((car) => (
//             <div key={car.id} className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
//               <div className="flex items-center space-x-4">
//                 <img src={car.image} alt={car.name} className="w-20 h-14 object-cover rounded-md" />
//                 <div>
//                   <h3 className="text-lg font-medium">{car.name}</h3>
//                   <p className="text-gray-500">${car.price}</p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => handleRemoveFromCart(car.id)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 <FiTrash2 size={20} />
//               </button>
//             </div>
//           ))}
//           <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-lg hover:bg-blue-600">
//             Proceed to Checkout
//           </button>
//         </div>
//       )}

//       <Link to="/" className="text-blue-500 hover:underline mt-4 block">
//         ← Continue Shopping
//       </Link>
//     </div>
//   );
// };

// export default CartPage;


import React from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

const CartPage = ({ cart, setCart }) => {
  // Remove item from cart and update localStorage
  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((car) => car.id !== id); // Filter out the car to delete
    setCart(updatedCart); // Update the cart state

    // Update localStorage with the new cart
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty.</p>
          <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((car) => (
            <div key={car.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-20 h-12 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                  <p className="text-gray-500">₹{car.price.toLocaleString()}</p>
                  <p className="text-gray-400 text-sm">Added on: {car.dateAdded}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemoveFromCart(car.id)}
                className="text-red-500 hover:text-red-700 p-2 rounded-full"
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <button className="w-1/2 bg-blue-500 text-white py-2 rounded-lg text-lg hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;