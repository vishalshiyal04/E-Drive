// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const FeaturedVehicles = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(10); // Show 10 cars initially
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5003/vehicles")
//       .then((response) => response.json())
//       .then((data) => setVehicles(data.vehicles))
//       .catch((error) => console.error("Error fetching vehicles:", error));
//   }, []);

//   const handleShowMore = () => {
//     setShowAll(true);
//     setVisibleCount(vehicles.length); // Show all vehicles
//   };

//   return (
//     <section className="py-12 bg-gray-100">
//       <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
//         Featured Electric Vehicles
//       </h2>
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {vehicles.slice(0, visibleCount).map((vehicle, index) => (
//             <motion.div
//               key={vehicle._id}
//               className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition-transform transform hover:-translate-y-2"
//               initial={index >= 10 ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index >= 10 ? (index - 9) * 0.1 : 0 }}
//             >
//               <div className="relative w-full h-40 flex justify-center items-center bg-gray-200 rounded-lg overflow-hidden">
//                 <img
//                   src={vehicle.image}
//                   alt={vehicle.name}
//                   className="h-full w-full object-cover rounded-lg"
//                 />
//               </div>

//               <div className="p-4 text-center">
//                 <h3 className="text-lg font-semibold text-gray-900 truncate">
//                   {vehicle.name}
//                 </h3>
//                 <p className="text-indigo-600 text-md font-medium mt-1">
//                   ₹{vehicle.price.toLocaleString()}
//                 </p>
//                 <p className={`text-sm mt-1 font-semibold ${
//                   vehicle.availability ? "text-green-600" : "text-red-600"
//                 }`}>
//                   {vehicle.availability ? "Available" : "Out of Stock"}
//                 </p>
//                 <button
//                   onClick={() => navigate(`/vehicle/${vehicle._id}`)}
//                   className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-500 transition-all"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {!showAll && vehicles.length > visibleCount && (
//           <div className="text-center mt-6">
//             <motion.button
//               onClick={handleShowMore}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-all"
//             >
//               Show More Cars
//             </motion.button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FeaturedVehicles;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10); // Show 10 cars initially
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5003/vehicles")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched vehicles:", data); // Debugging log
        setVehicles(data.vehicles || []); // Ensure it's always an array
      })
      .catch((error) => console.error("Error fetching vehicles:", error));
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
    setVisibleCount(vehicles.length); // Show all vehicles
  };

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
        Featured Electric Vehicles
      </h2>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {vehicles.slice(0, visibleCount).map((vehicle, index) => (
            <motion.div
              key={vehicle._id}
              className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition-transform transform hover:-translate-y-2"
              initial={index >= 10 ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index >= 10 ? (index - 9) * 0.1 : 0 }}
            >
              <div className="relative w-full h-40 flex justify-center items-center bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={vehicle.image || "/placeholder.jpg"} // Fallback image
                  alt={vehicle.name || "Unknown Vehicle"}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {vehicle.name || "Unknown Vehicle"}
                </h3>
                <p className="text-indigo-600 text-md font-medium mt-1">
                  {vehicle.price != null ? `₹${vehicle.price.toLocaleString()}` : "Price Not Available"}
                </p>
                <p className={`text-sm mt-1 font-semibold ${
                  vehicle.availability ? "text-green-600" : "text-red-600"
                }`}>
                  {vehicle.availability ? "Available" : "Out of Stock"}
                </p>
                <button
                  onClick={() => navigate(`/vehicle/${vehicle._id}`)}
                  className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-500 transition-all"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && vehicles.length > visibleCount && (
          <div className="text-center mt-6">
            <motion.button
              onClick={handleShowMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-all"
            >
              Show More Cars
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedVehicles;