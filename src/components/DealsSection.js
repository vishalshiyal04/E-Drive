// // import React, { useState, useEffect } from "react";

// //   const DealsSection = () => {
// //     const [deals, setDeals] = useState([]);
  
// //     useEffect(() => {
// //       fetch("http://localhost:5003/deals")
// //         .then((response) => response.json())
// //         .then((data) => setDeals(data.deals))
// //         .catch((error) => console.error("Error fetching deals:", error));
// //     }, []);
  
// //     return (
// //       <section className="bg-white py-12">
// //         <div className="container mx-auto px-6">
// //           <div className="text-center mb-6">
// //             <h2 className="text-xl font-bold text-gray-900">Hot Deals on Vehicles</h2>
// //             <p className="text-gray-600 mt-1 text-sm">Exclusive discounts on top electric vehicles</p>
// //           </div>
  
// //           <div className="relative">
// //             <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 justify-center">
// //               {deals.map((deal, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex-shrink-0 bg-white rounded-lg shadow-md p-3 w-48 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200"
// //                 >
// //                   {/* Image Section */}
// //                   <div className="h-32 w-full flex justify-center items-center bg-transparent rounded-md overflow-hidden">
// //                     <img
// //                       src={deal.image}
// //                       alt={deal.name}
// //                       className="h-full w-full object-contain rounded-md"
// //                     />
// //                   </div>
  
// //                   {/* Details Section */}
// //                   <h3 className="mt-2 text-sm font-semibold text-gray-800 text-center">
// //                     {deal.name}
// //                   </h3>
// //                   <p className="text-xs text-gray-600 text-center mt-1">
// //                     {deal.details}
// //                   </p>
  
// //                   {/* Discount Badge */}
// //                   <div className="mt-2 flex justify-center items-center gap-2">
// //                     <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
// //                       {deal.discount}% OFF
// //                     </span>
// //                     <button className="text-indigo-600 text-xs font-semibold hover:underline">
// //                       View Deal
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
  
// //           {/* Explore More Button */}
// //           <div className="text-center mt-6">
// //             <button className="text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg text-xs font-semibold shadow-md transition-all">
// //               Explore More Deals
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     );
// //   };
  
// //   export default DealsSection;


// import React, { useState, useEffect } from "react";

//   const DealsSection = () => {
//     const [deals, setDeals] = useState([]);
  
//     useEffect(() => {
//       fetch("http://localhost:5003/deals")
//         .then((response) => response.json())
//         .then((data) => setDeals(data.deals))
//         .catch((error) => console.error("Error fetching deals:", error));
//     }, []);
  
//     return (
//       <section className="bg-white py-12">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-6">
//             <h2 className="text-xl font-bold text-gray-900">Hot Deals on Vehicles</h2>
//             <p className="text-gray-600 mt-1 text-sm">Exclusive discounts on top electric vehicles</p>
//           </div>
  
//           <div className="relative">
//             <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 justify-center">
//               {deals.map((deal, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 bg-white rounded-lg shadow-md p-3 w-48 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200"
//                 >
//                   {/* Image Section */}
//                   <div className="h-32 w-full flex justify-center items-center bg-transparent rounded-md overflow-hidden">
//                     <img
//                       src={deal.image}
//                       alt={deal.name}
//                       className="h-full w-full object-contain rounded-md"
//                     />
//                   </div>
  
//                   {/* Details Section */}
//                   <h3 className="mt-2 text-sm font-semibold text-gray-800 text-center">
//                     {deal.name}
//                   </h3>
//                   <p className="text-xs text-gray-600 text-center mt-1">
//                     {deal.details}
//                   </p>
  
//                   {/* Discount Badge */}
//                   <div className="mt-2 flex justify-center items-center gap-2">
//                     <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
//                       {deal.discount}% OFF
//                     </span>
//                     <button className="text-indigo-600 text-xs font-semibold hover:underline">
//                       View Deal
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
  
//           {/* Explore More Button */}
//           <div className="text-center mt-6">
//             <button className="text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg text-xs font-semibold shadow-md transition-all">
//               Explore More Deals
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default DealsSection;

import React, { useState, useEffect } from "react";

  const DealsSection = () => {
    const [deals, setDeals] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5003/deals")
        .then((response) => response.json())
        .then((data) => setDeals(data.deals))
        .catch((error) => console.error("Error fetching deals:", error));
    }, []);
  
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Hot Deals on Vehicles</h2>
            <p className="text-gray-600 mt-1 text-sm">Exclusive discounts on top electric vehicles</p>
          </div>
  
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 justify-center">
              {deals.map((deal, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-lg shadow-md p-3 w-48 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200"
                >
                  {/* Image Section */}
                  <div className="h-32 w-full flex justify-center items-center bg-transparent rounded-md overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="h-full w-full object-contain rounded-md"
                    />
                  </div>
  
                  {/* Details Section */}
                  <h3 className="mt-2 text-sm font-semibold text-gray-800 text-center">
                    {deal.name}
                  </h3>
                  <p className="text-xs text-gray-600 text-center mt-1">
                    {deal.details}
                  </p>
  
                  {/* Discount Badge */}
                  <div className="mt-2 flex justify-center items-center gap-2">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {deal.discount}% OFF
                    </span>
                    <button className="text-indigo-600 text-xs font-semibold hover:underline">
                      View Deal
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Explore More Button */}
          <div className="text-center mt-6">
            <button className="text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg text-xs font-semibold shadow-md transition-all">
              Explore More Deals
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default DealsSection;