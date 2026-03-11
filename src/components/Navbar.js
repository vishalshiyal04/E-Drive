// // import React, { useState, useEffect } from "react";
// //   import { Link, useNavigate } from "react-router-dom";

// //   const Navbar = () => {
// //     const [searchQuery, setSearchQuery] = useState("");
// //     const [cars, setCars] = useState([]);
// //     const [filteredCars, setFilteredCars] = useState([]);
// //     const navigate = useNavigate();

// //     // Fetch car data from backend API
// //     useEffect(() => {
// //       fetch("http://localhost:5000/api/vehicles") // Adjust API endpoint
// //         .then((response) => response.json())
// //         .then((data) => setCars(data))
// //         .catch((error) => console.error("Error fetching cars:", error));
// //     }, []);

// //     // Handle search input change
// //     const handleSearchChange = (e) => {
// //       const query = e.target.value;
// //       setSearchQuery(query);

// //       if (query.trim() === "") {
// //         setFilteredCars([]);
// //       } else {
// //         const filtered = cars.filter((car) =>
// //           car.name.toLowerCase().includes(query.toLowerCase())
// //         );
// //         setFilteredCars(filtered);
// //       }
// //     };

// //     // Handle search submit
// //     const handleSearchSubmit = (e) => {
// //       e.preventDefault();

// //       if (filteredCars.length > 0) {
// //         navigate(`/car/${filteredCars[0].id}`); // Navigate to first matching result
// //       }
// //     };

// //     return (
// //       <nav className="bg-white shadow-md sticky top-0 z-10">
// //         <div className="max-w-screen-xl mx-auto px-6 py-3 flex justify-between items-center">
// //           {/* Logo */}
// //           <a className="text-xl font-bold text-black-600 hover:text-blue-800" href="#">
// //             E-DRIVE
// //           </a>

// //           {/* Mobile Menu Button */}
// //           <button className="lg:hidden flex flex-col space-y-1 text-gray-700 focus:outline-none">
// //             <span className="block w-6 h-0.5 bg-gray-700"></span>
// //             <span className="block w-6 h-0.5 bg-gray-700"></span>
// //             <span className="block w-6 h-0.5 bg-gray-700"></span>
// //           </button>

// //           {/* Navigation Links */}
// //           <div className="hidden lg:flex items-center space-x-8">
// //   <Link className="text-gray-700 hover:text-blue-600 font-medium" to="/">
// //     Home
// //   </Link>
// //   <Link className="text-gray-700 hover:text-blue-600 font-medium" to="/about">
// //     About Us
// //   </Link>

// //   {/* Dropdown Menu */}
// //   <div className="relative group">
// //     <button className="text-gray-700 hover:text-blue-600 font-medium">
// //       Services
// //     </button>
// //     <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg w-48">
// //       <Link className="block px-4 py-2 text-gray-700 hover:bg-blue-100" to="/services/service1">
// //         Service 1
// //       </Link>
// //       <Link className="block px-4 py-2 text-gray-700 hover:bg-blue-100" to="/services/service2">
// //         Service 2
// //       </Link>
// //       <Link className="block px-4 py-2 text-gray-700 hover:bg-blue-100" to="/services/service3">
// //         Service 3
// //       </Link>
// //       <Link className="block px-4 py-2 text-gray-700 hover:bg-blue-100" to="/services/service4">
// //         Service 4
// //       </Link>
// //     </div>
// //   </div>

// //   <Link className="text-gray-700 hover:text-blue-600 font-medium" to="/contact">
// //             Contact Us
// //           </Link>
// // </div>


// //           {/* Search Bar */}
// //           <div className="hidden lg:flex items-center space-x-3 relative">
// //             <form onSubmit={handleSearchSubmit} className="relative">
// //               <input
// //                 className="border border-gray-300 rounded-full px-4 py-2 w-52 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 type="search"
// //                 placeholder="Search cars..."
// //                 value={searchQuery}
// //                 onChange={handleSearchChange}
// //               />
// //               <button
// //                 type="submit"
// //                 className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   strokeWidth="2"
// //                   stroke="currentColor"
// //                   className="w-5 h-5"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
// //                   />
// //                 </svg>
// //               </button>

// //               {/* Search Suggestions Dropdown */}
// //               {filteredCars.length > 0 && (
// //                 <ul className="absolute top-full mt-1 w-52 bg-white border border-gray-300 rounded-md shadow-lg">
// //                   {filteredCars.slice(0, 5).map((car) => (
// //                     <li key={car.id}>
// //                       <Link
// //                         to={`/car/${car.id}`}
// //                         className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
// //                       >
// //                         {car.name}
// //                       </Link>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               )}
// //             </form>

// //             {/* Link to Login page */}
// //             <Link to="/login">
// //               <button className="bg-blue-500 text-white font-medium rounded-full px-6 py-2 hover:bg-blue-600">
// //                 Sign in
// //               </button>
// //             </Link>
// //           </div>
// //         </div>
// //       </nav>
// //     );
// //   };

// //   export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoSearchOutline, IoAddCircleOutline } from "react-icons/io5";
// import { FaUserCircle } from "react-icons/fa";

// const Navbar = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [cars, setCars] = useState([]);
//   const [filteredCars, setFilteredCars] = useState([]);
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/vehicles")
//       .then((response) => response.json())
//       .then((data) => setCars(data))
//       .catch((error) => console.error("Error fetching cars:", error));
//   }, []);

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     if (query.trim() === "") {
//       setFilteredCars([]);
//     } else {
//       const filtered = cars.filter((car) =>
//         car.name.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredCars(filtered);
//     }
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (filteredCars.length > 0) {
//       navigate(`/car/${filteredCars[0].id}`);
//     }
//   };

//   const handleAddToCart = (car) => {
//     setCart((prevCart) => [...prevCart, car]);
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-10">
//       <div className="max-w-screen-xl mx-auto px-6 py-3 flex justify-between items-center">
//         <Link className="text-xl font-bold text-black-600 hover:text-blue-800" to="/">
//           E-DRIVE
//         </Link>

//         <div className="hidden lg:flex items-center space-x-8">
//           <Link className="text-gray-700 hover:text-blue-600 font-medium" to="/">
//             Home
//           </Link>
//           <Link className="text-gray-700 hover:text-blue-600 font-medium" to="/about">
//             About Us
//           </Link>
//           <div className="relative group">
//             <button className="text-gray-700 hover:text-blue-600 font-medium">Services</button>
//             <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg w-48">
//               <Link className="block px-4 py-2 text-gray-700 hover:bg-blue-100" to="/services/service1">Service 1</Link>
//               <Link className="block px-4 py-2 text-gray-700 hover:bg-blue-100" to="/services/service2">Service 2</Link>
//               <Link className="block px-4 py-2 text-gray-700 hover:bg-blue-100" to="/services/service3">Service 3</Link>
//               <Link className="block px-4 py-2 text-gray-700 hover:bg-blue-100" to="/services/service4">Service 4</Link>
//             </div>
//           </div>
//           <Link className="text-gray-700 hover:text-blue-600 font-medium" to="/contact">Contact Us</Link>
//         </div>

//         <div className="hidden lg:flex items-center space-x-3 relative">
//           <form onSubmit={handleSearchSubmit} className="relative">
//             <input
//               className="border border-gray-300 rounded-full px-4 py-2 w-52 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               type="search"
//               placeholder="Search cars..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//             <button
//               type="submit"
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
//             >
//               <IoSearchOutline className="text-xl" />
//             </button>
//           </form>

//           {filteredCars.length > 0 && (
//             <ul className="absolute top-full mt-1 w-52 bg-white border border-gray-300 rounded-md shadow-lg">
//               {filteredCars.slice(0, 5).map((car) => (
//                 <li key={car.id} className="flex justify-between px-4 py-2 hover:bg-blue-100">
//                   <Link to={`/car/${car.id}`} className="text-gray-700">
//                     {car.name}
//                   </Link>
//                   <button
//                     onClick={() => handleAddToCart(car)}
//                     className="text-blue-500 hover:text-blue-700"
//                   >
//                     <IoAddCircleOutline className="text-xl" />
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}

//           <Link to="/cart" className="relative">
//             <FiShoppingCart className="text-gray-700 text-2xl" />
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                 {cart.length}
//               </span>
//             )}
//           </Link>

//           <Link to="/login">
//             <button className="bg-blue-500 text-white font-medium rounded-full px-6 py-2 hover:bg-blue-600 flex items-center space-x-2">
//               <FaUserCircle className="text-xl" />
//               <span>Sign in</span>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline, IoAddCircleOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/vehicles")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredCars([]);
    } else {
      const filtered = cars.filter((car) =>
        car.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredCars.length > 0) {
      navigate(`/car/${filteredCars[0].id}`);
    }
  };

  const handleAddToCart = (car) => {
    setCart((prevCart) => [...prevCart, car]);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link className="text-xl font-bold text-black-600 hover:text-blue-800" to="/">
          E-DRIVE
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <Link className="text-gray-700 hover:text-blue-600 font-medium" to="/">
            Home
          </Link>
          <Link className="text-gray-700 hover:text-blue-600 font-medium" to="/about">
            About Us
          </Link>
          <Link className="text-gray-700 hover:text-blue-600 font-medium" to="/contact">
            Contact Us
          </Link>
          <Link className="text-gray-700 hover:text-blue-600 font-medium" to="/india">
            India
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-3 relative">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              className="border border-gray-300 rounded-full px-4 py-2 w-52 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="search"
              placeholder="Search cars..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
            >
              <IoSearchOutline className="text-xl" />
            </button>
          </form>

          {filteredCars.length > 0 && (
            <ul className="absolute top-full mt-1 w-52 bg-white border border-gray-300 rounded-md shadow-lg">
              {filteredCars.slice(0, 5).map((car) => (
                <li key={car.id} className="flex justify-between px-4 py-2 hover:bg-blue-100">
                  <Link to={`/car/${car.id}`} className="text-gray-700">
                    {car.name}
                  </Link>
                  <button
                    onClick={() => handleAddToCart(car)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <IoAddCircleOutline className="text-xl" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-gray-700 text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          <Link to="/login">
            <button className="bg-blue-500 text-white font-medium rounded-full px-6 py-2 hover:bg-blue-600 flex items-center space-x-2">
              <FaUserCircle className="text-xl" />
              <span>Sign in</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;