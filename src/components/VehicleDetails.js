// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { FaStar, FaArrowLeft, FaTruck, FaUndo, FaCheckCircle, FaSearchPlus } from "react-icons/fa";

// // const VehicleDetails = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [vehicle, setVehicle] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedImage, setSelectedImage] = useState("");
// //   const [reviews, setReviews] = useState([]);
// //   const [similarVehicles, setSimilarVehicles] = useState([]);

// //   useEffect(() => {
// //     const fetchVehicleDetails = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:5003/vehicles/${id}`);
// //         const data = await response.json();

// //         if (data.vehicle) {
// //           setVehicle(data.vehicle);
// //           setSelectedImage(data.vehicle.image);
// //           setReviews(data.reviews || []);

// //           // Fetch similar vehicles based on company
// //           const similarResponse = await fetch(
// //             `http://localhost:5003/vehicles/similar?company=${data.vehicle.company}`
// //           );
// //           const similarData = await similarResponse.json();
// //           setSimilarVehicles(similarData.vehicles || []);
// //         }

// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching vehicle details:", error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchVehicleDetails();
// //   }, [id]);

// //   if (loading) return <p className="text-center">Loading...</p>;
// //   if (!vehicle) return <p className="text-center">Vehicle not found</p>;

// //   return (
// //     <div className="container mx-auto py-12 px-6">
// //       <button
// //         onClick={() => navigate(-1)}
// //         className="mb-4 px-4 py-2 flex items-center gap-2 bg-gray-300 rounded-lg hover:bg-gray-400"
// //       >
// //         <FaArrowLeft /> Back
// //       </button>

// //       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
// //         <div className="flex flex-col md:flex-row gap-6">
// //           {/* Image Section with Zoom */}
// //           <div className="md:w-1/2 relative">
// //             <img
// //               src={selectedImage}
// //               alt={vehicle.name}
// //               className="w-full h-72 object-cover rounded-lg shadow-md cursor-pointer"
// //             />
// //             <FaSearchPlus className="absolute top-4 right-4 text-gray-600 text-xl cursor-pointer hover:text-black" />
// //             <div className="flex gap-2 mt-2">
// //               {vehicle.thumbnails?.map((thumb, index) => (
// //                 <img
// //                   key={index}
// //                   src={thumb}
// //                   alt="Thumbnail"
// //                   className="w-16 h-16 object-cover rounded-md border cursor-pointer hover:scale-105 transition-transform"
// //                   onClick={() => setSelectedImage(thumb)}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* Product Details */}
// //           <div className="md:w-1/2">
// //             <h2 className="text-3xl font-bold text-gray-900">{vehicle.name}</h2>
// //             <div className="flex items-center gap-2 mt-1">
// //               <span className="text-yellow-500 flex">
// //                 {[...Array(5)].map((_, index) => (
// //                   <FaStar key={index} />
// //                 ))}
// //               </span>
// //               <span className="text-gray-600">(5.0 | {vehicle.reviews} reviews)</span>
// //             </div>
// //             <p className="text-indigo-600 text-lg font-medium mt-2">
// //               ₹{vehicle.price.toLocaleString()} - EMI starts at ₹
// //               {Math.floor(vehicle.price / 12)}/month
// //             </p>
// //             <p className="text-gray-700 mt-2">{vehicle.description || "No description available."}</p>
// //             <p
// //               className={
// //                 vehicle.availability ? "text-green-600 font-semibold" : "text-red-600 font-semibold"
// //               }
// //             >
// //               {vehicle.availability ? "Available" : "Out of Stock"}
// //             </p>

// //             <h3 className="mt-4 text-lg font-semibold">Offers:</h3>
// //             <p className="text-sm text-gray-600">Get up to ₹5000 cashback on select bank cards</p>

// //             <button className="mt-6 px-4 py-2 w-full bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
// //               Add to Cart
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Dealer Availability */}
// //       <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl">
// //         <h3 className="text-xl font-semibold">Dealer Availability</h3>
// //         <p className="text-sm text-gray-600">Find this product at nearby dealers:</p>
// //         {vehicle.dealers?.map((dealer, index) => (
// //           <p key={index} className="mt-2 text-gray-800">
// //             📍 {dealer.name} - <span className="text-blue-600 cursor-pointer">Contact Dealer</span>
// //           </p>
// //         ))}
// //       </div>

// //       {/* Similar Products */}
// //       <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl">
// //         <h3 className="text-xl font-semibold">Similar Vehicles</h3>
// //         <div className="grid grid-cols-2 gap-4 mt-4">
// //           {similarVehicles.map((similar, index) => (
// //             <div key={index} className="border p-4 rounded-lg shadow hover:shadow-md cursor-pointer">
// //               <img src={similar.image} alt={similar.name} className="w-full h-40 object-cover rounded-md" />
// //               <p className="mt-2 font-semibold">{similar.name}</p>
// //               <p className="text-sm text-gray-600">₹{similar.price.toLocaleString()}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Customer Reviews */}
// //       <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl">
// //         <h3 className="text-xl font-semibold">Customer Reviews</h3>
// //         <div className="mt-4">
// //           {reviews.map((review, index) => (
// //             <div key={index} className="border-b py-4">
// //               <p className="font-semibold">{review.user}</p>
// //               <p className="text-yellow-500">
// //                 {[...Array(review.rating)].map((_, i) => (
// //                   <FaStar key={i} />
// //                 ))}
// //               </p>
// //               <p className="text-gray-600 text-sm">{review.comment}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VehicleDetails;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { FaStar, FaPhone, FaMapMarkerAlt, FaHeart, FaExchangeAlt } from "react-icons/fa";
// import axios from "axios";

// const VehicleDetails = () => {
//   const { id } = useParams();
//   const [vehicle, setVehicle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [dealers, setDealers] = useState([]);

//   useEffect(() => {
//     const fetchVehicleDetails = async () => {
//       try {
//         const { data } = await axios.get(`http://localhost:5003/vehicles/${id}`);
//         if (data.vehicle) {
//           setVehicle(data.vehicle);

//           // Fetch dealers selling this vehicle
//           const dealersResponse = await axios.get("http://localhost:5004/api/dealers", {
//             params: { city: data.vehicle.city, vehicleType: data.vehicle.vehicleType, vehicleName: data.vehicle.name },
//           });

//           setDealers(dealersResponse.data || []);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching vehicle details:", error);
//         setLoading(false);
//       }
//     };
//     fetchVehicleDetails();
//   }, [id]);

//   if (loading) return <p className="text-center py-12 text-sm">Loading vehicle details...</p>;
//   if (!vehicle) return <p className="text-center py-12 text-sm">Vehicle not found</p>;

//   return (
//     <div className="container mx-auto py-8 px-4">
//       {/* Vehicle Details Section */}
//       <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg p-6 flex flex-col md:flex-row gap-6">
//         {/* Vehicle Image */}
//         <div className="md:w-1/3 max-w-xs">
//           <img 
//             src={vehicle.image} 
//             alt={vehicle.name} 
//             className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
//           />
//         </div>

//         {/* Vehicle Info */}
//         <div className="md:w-2/3">
//           <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">{vehicle.name}</h1>
//           <div className="flex items-center gap-1 mt-2 text-xs md:text-sm">
//             <span className="text-yellow-500 flex">
//               {[...Array(5)].map((_, index) => (
//                 <FaStar key={index} />
//               ))}
//             </span>
//             <span className="text-gray-600">({vehicle.reviews} Reviews)</span>
//           </div>

//           {/* Price and EMI */}
//           <div className="mt-4">
//             <p className="text-xl md:text-2xl font-bold text-indigo-600">₹{vehicle.price.toLocaleString()} Lakh</p>
//             <p className="text-gray-500 mt-2 text-sm">EMI starts at ₹{Math.floor(vehicle.price / 12)}/month</p>
//           </div>

//           {/* Vehicle Specifications */}
//           <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-5 text-gray-700 text-xs md:text-sm">
//             <p><strong>Fuel Type:</strong> {vehicle.fuelType}</p>
//             <p><strong>Mileage:</strong> {vehicle.mileage} km/l</p>
//             <p><strong>Transmission:</strong> {vehicle.transmission}</p>
//             <p><strong>Seating Capacity:</strong> {vehicle.seats} Seater</p>
//             <p><strong>Color:</strong> {vehicle.color}</p>
//             <p><strong>Top Speed:</strong> {vehicle.topSpeed} km/h</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="mt-6 flex flex-wrap gap-4">
//             <button className="px-6 py-3 border-2 border-green-500 text-green-500 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105 text-sm">
//               Enquire Now
//             </button>
//             <button className="px-6 py-3 border-2 border-gray-500 text-gray-500 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm">
//               <FaExchangeAlt /> Compare
//             </button>
//             <button className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-full shadow-lg hover:bg-red-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm">
//               <FaHeart /> Wishlist
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Dealer Section */}
//       <div className="max-w-7xl mx-auto mt-12 bg-white shadow-xl rounded-lg p-6">
//         <h3 className="text-2xl font-semibold">Available Dealers</h3>
//         <p className="text-gray-600 mt-2 text-xs md:text-sm">Find this vehicle at authorized dealers near you:</p>

//         {dealers.length > 0 ? (
//           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {dealers.map((dealer, index) => (
//               <div key={index} className="border-2 border-gray-200 p-5 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
//                 <h4 className="text-xl font-semibold text-gray-900">{dealer.name}</h4>
//                 <p className="text-gray-700 flex items-center mt-2 text-xs md:text-sm">
//                   <FaMapMarkerAlt className="mr-2 text-blue-600" /> {dealer.address}, {dealer.city}, {dealer.state}
//                 </p>
//                 <p className="text-gray-700 flex items-center mt-2 text-xs md:text-sm">
//                   <FaPhone className="mr-2 text-green-600" /> {dealer.contact}
//                 </p>
//                 <p className="text-gray-700 mt-2 text-xs md:text-sm">Available Models: {dealer.availableProducts.join(", ")}</p>
//                 <a
//                   href={`https://www.google.com/maps/search/?api=1&query=${dealer.address}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-3 inline-block text-blue-500 hover:underline text-xs md:text-sm"
//                 >
//                   View on Map
//                 </a>
//                 <button className="mt-5 px-5 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 w-full text-sm">
//                   Contact Dealer
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500 mt-4 text-xs md:text-sm">No dealers found for this vehicle.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VehicleDetails;


import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaStar, FaPhone, FaMapMarkerAlt, FaHeart, FaExchangeAlt } from "react-icons/fa";
import { MdThumbUp, MdThumbDown, MdDirectionsCar, MdLock, MdCheckCircle } from "react-icons/md";
import axios from "axios";

const prosAndCons = {
  "Mahindra BE 6": {
    pros: [
      "It has sporty styling with an overall edgy flavour.",
      "The BE 6 is exciting to drive and hits 100kmph in 6.7 seconds.",
      "Claimed range of 682km and 20-minute fast charging capability.",
      "Has modern comfort features and Level 2 ADAS functions.",
      "Occupants will find the ride to be absorbent and flat.",
    ],
    cons: [
      "The rear seat space and headroom can be restricting.",
      "The BE 6's rear visibility is limiting.",
    ]
  },
  "Mahindra XEV 9e": {
    pros: [
      "Futuristic design with robust build quality.",
      "Good range with fast charging support.",
      "Spacious cabin with modern infotainment features.",
      "Strong performance with AWD option.",
    ],
    cons: [
      "Limited rear visibility due to coupe-like design.",
      "Infotainment system may feel laggy at times."
    ]
  },
  "MG Windsor EV": {
    pros: [
      "Premium interior with luxury-grade materials.",
      "Excellent ride quality and noise insulation.",
      "High-end tech features and driver assistance systems.",
    ],
    cons: [
      "Higher price point compared to rivals.",
      "Limited service network in smaller cities."
    ]
  },
  "Mahindra XEV 9e": {
    pros: [
      "Futuristic design with robust build quality.",
      "Good range with fast charging support.",
      "Spacious cabin with modern infotainment features.",
      "Strong performance with AWD option.",
    ],
    cons: [
      "Limited rear visibility due to coupe-like design.",
      "Infotainment system may feel laggy at times."
    ]
  },
  
};

const VehicleDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dealers, setDealers] = useState([]);
  const [cityPrices, setCityPrices] = useState([]);
  const [similarVehicles, setSimilarVehicles] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [editingReview, setEditingReview] = useState(null);
  const [carId, setCarId] = useState(null);
  const [carName, setCarName] = useState("");
  const detailRef = useRef(null);
  const navigate = useNavigate();


  const indianCities = [
    "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata",
    "Pune", "Hyderabad", "Ahmedabad", "Jaipur", "Lucknow",
    "Surat", "Bhopal", "Indore", "Chandigarh", "Nagpur",
    "Patna", "Vadodara", "Ludhiana", "Agra", "Nashik"
  ];

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5003/vehicles/${id}`);
        if (data.vehicle) {
          setVehicle(data.vehicle);
          setCarId(data.vehicle._id);
          setCarName(data.vehicle.name);

          const dealersResponse = await axios.get("http://localhost:5004/api/dealers", {
            params: { city: data.vehicle.city, vehicleType: data.vehicle.vehicleType, vehicleName: data.vehicle.name },
          });
          setDealers(dealersResponse.data || []);

          const prices = indianCities.map(city => ({
            city,
            price: Math.floor(data.vehicle.price * (1 + Math.random() * 0.2)),
          }));
          setCityPrices(prices);
          setSelectedCity(data.vehicle.city);

          const similarRes = await axios.get(`http://localhost:5003/vehicles, {
            params: { brand: data.vehicle.brand },
          }`);
          const similarFiltered = similarRes.data.vehicles.filter(v => v._id !== id);
          setSimilarVehicles(similarFiltered.slice(0, 3));
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching vehicle details:", error);
        setLoading(false);
      }
    };
    fetchVehicleDetails();
  }, [id]);

  useEffect(() => {
    if (carId) {
      fetchReviews();
    }
  }, [carId]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`http://localhost:5005/reviews/${carId}`);
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  const resetForm = () => {
    setRating(0);
    setCustomerName("");
    setCity("");
    setFeedback("");
    setEditingReview(null);
  };

  const handleSubmitReview = async () => {
    if (!rating || !customerName || !city || !feedback) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      if (editingReview) {
        await axios.put(`http://localhost:5005/reviews/${editingReview._id}, {
          rating,
          customerName,
          city,
          feedback,
        }`);
      } else {
        await axios.post("http://localhost:5005/reviews", {
          rating,
          customerName,
          city,
          feedback,
          carName,
          carId,
        });
      }
      resetForm();
      fetchReviews();
    } catch (err) {
      console.error("Error submitting review:", err);
    }
  };

  const handleEditReview = (review) => {
    setEditingReview(review);
    setRating(review.rating);
    setCustomerName(review.customerName);
    setCity(review.city);
    setFeedback(review.feedback);
  };

  const handleDeleteReview = async (id) => {
    try {
      await axios.delete(`http://localhost:5005/reviews/${id}`);
      fetchReviews();
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    if (detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getSelectedCityPrice = () => {
    const cityData = cityPrices.find(cp => cp.city === selectedCity);
    return cityData ? cityData.price : vehicle?.price;
  };

  // const handleAddToCart = () => {
  //   if (!vehicle) return;

  //   const alreadyInCart = cart.some(item => item.id === vehicle._id);
  //   if (alreadyInCart) {
  //     alert("This vehicle is already in your cart.");
  //     return;
  //   }

  //   const newItem = {
  //     id: vehicle._id,
  //     name: vehicle.name,
  //     price: getSelectedCityPrice(),
  //     image: vehicle.image,
  //     dateAdded: new Date().toLocaleDateString(),
  //   };

  //   setCart([...cart, newItem]);
  //   alert("Vehicle added to cart.");
  // };

  const handleAddToCart = () => {
    if (!vehicle) return;
  
    const alreadyInCart = cart.some(item => item.id === vehicle._id);
    if (alreadyInCart) {
      alert("This vehicle is already in your cart.");
      return;
    }
  
    const newItem = {
      id: vehicle._id,
      name: vehicle.name,
      price: getSelectedCityPrice(),
      image: vehicle.image,
      dateAdded: new Date().toLocaleDateString(),
    };
  
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Save here too
  
    alert("Vehicle added to cart.");
  };
  

  const handleBuyNow = () => {
    if (!vehicle) return;
    console.log("Proceeding to buy vehicle:", vehicle.name);
    navigate("/payment", { state: { vehicle } });
  };

  if (loading) return <p className="text-center py-12 text-sm">Loading vehicle details...</p>;
  if (!vehicle) return <p className="text-center py-12 text-sm">Vehicle not found</p>;

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Vehicle Details Section */}
<div ref={detailRef} className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg p-6 flex flex-col md:flex-row gap-6">
  {/* Left: Vehicle Image */}
  <div className="md:w-1/3 max-w-xs">
    <img
      src={vehicle.image}
      alt={vehicle.name}
      className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Right: Vehicle Info */}
  <div className="md:w-2/3">
    {/* Vehicle Name */}
    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">{vehicle.name}</h1>

    {/* Reviews */}
    <div className="flex items-center gap-1 mt-2 text-xs md:text-sm">
      <span className="text-yellow-500 flex">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </span>
      <span className="text-gray-600">({vehicle.reviews} Reviews)</span>
    </div>

    {/* Price and EMI */}
    <div className="mt-4">
      <p className="text-xl md:text-2xl font-bold text-indigo-600">
        ₹{getSelectedCityPrice().toLocaleString()} Lakh
      </p>
      <p className="text-gray-500 mt-2 text-sm">
        EMI starts at ₹{Math.floor(getSelectedCityPrice() / 12)}/month
      </p>
      {selectedCity && (
        <p className="text-xs text-gray-600 mt-1">*Price for selected city: <strong>{selectedCity}</strong></p>
      )}
    </div>

    {/* Vehicle Specifications */}
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-5 text-gray-700 text-xs md:text-sm">
      <p><strong>Fuel Type:</strong> EV</p>
      <p><strong>Mileage:</strong> 450 km/ch</p>
      <p><strong>Transmission:</strong> Automatic</p>
      <p><strong>Seating Capacity:</strong> 05-Seater</p>
      <p><strong>Top Speed:</strong> 220 km/h</p>
    </div>

    {/* Static Description */}
    <div className="mt-6 text-sm text-gray-700 leading-relaxed">
      <h3 className="text-md font-semibold text-gray-800 mb-2">About This Vehicle</h3>
      <p>
        Experience the future of driving with this state-of-the-art electric vehicle, designed for both performance and sustainability. 
        With a powerful motor, impressive mileage, and a sleek modern design, this EV is the perfect companion for city drives and long trips alike. 
        Enjoy cutting-edge technology, premium comfort, and unmatched efficiency — all in one exceptional ride.
      </p>
    </div>

    {/* Action Buttons */}
    <div className="mt-6 flex flex-wrap gap-4">
      <button
        onClick={handleAddToCart}
        className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 focus:outline-none transform hover:scale-105 transition-all duration-300"
      >
        Add to Cart
      </button>
      <button
        onClick={handleBuyNow}
        className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 focus:outline-none transform hover:scale-105 transition-all duration-300"
      >
        Buy Now
      </button>
    </div>
  </div>
</div>


      {/* Dealer Section */}
      <div className="max-w-7xl mx-auto mt-12 bg-white shadow-xl rounded-lg p-6">
        <h3 className="text-2xl font-semibold">Available Dealers</h3>
        <p className="text-gray-600 mt-2 text-xs md:text-sm">Nearest dealers:</p>
        {dealers.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {dealers.map((dealer, index) => (
              <div key={index} className="border-2 border-gray-200 p-5 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-900">{dealer.name}</h4>
                <p className="text-gray-700 flex items-center mt-2 text-xs md:text-sm">
                  <FaMapMarkerAlt className="mr-2 text-blue-600" /> {dealer.address}, {dealer.city}, {dealer.state}
                </p>
                <p className="text-gray-700 flex items-center mt-2 text-xs md:text-sm">
                  <FaPhone className="mr-2 text-green-600" /> {dealer.contact}
                </p>
                <p className="text-gray-700 mt-2 text-xs md:text-sm">Available Models: {dealer.availableProducts.join(", ")}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${dealer.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-blue-500 hover:underline text-xs md:text-sm"
                >
                  View on Map
                </a>
                <button className="mt-5 px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none transform hover:scale-105 transition-all duration-300 w-full text-sm">
                  Contact Dealer
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-4 text-xs md:text-sm">No dealers found for this vehicle.</p>
        )}
      </div>

      {/* Price by City Section */}
      <div className="max-w-7xl mx-auto mt-12 bg-white shadow-xl rounded-lg p-6">
        <h3 className="text-2xl font-semibold">Price by City</h3>
        <p className="text-gray-600 mt-2 text-xs md:text-sm">Click a city or select below:</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {cityPrices.slice(0, 4).map((item, index) => (
            <button
              key={index}
              onClick={() => handleCityClick(item.city)}
              className={`border-2 p-4 rounded-lg shadow-md transition-all duration-300 ${
                selectedCity === item.city
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 hover:scale-105 hover:shadow-xl"
              }`}
            >
              <div className="text-center">
                <h4 className="text-sm font-semibold text-gray-900">{item.city}</h4>
                <p className="text-indigo-600 font-bold text-base">₹{item.price.toLocaleString()} Lakh</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6">
          <label htmlFor="select-city" className="block text-sm font-medium text-gray-700 mb-2">Select Other City</label>
          <select
            id="select-city"
            className="w-full border border-gray-300 rounded-md p-3 text-sm shadow-sm"
            value={selectedCity || ""}
            onChange={(e) => handleCityClick(e.target.value)}
          >
            <option value="" disabled>Select a city</option>
            {cityPrices.map((item, index) => (
              <option key={index} value={item.city}>{item.city} - ₹{item.price.toLocaleString()} Lakh</option>
            ))}
          </select>
        </div>
      </div>

      {similarVehicles.length > 0 && (
        <div className="max-w-7xl mx-auto mt-12 bg-white shadow-xl rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Similar Cars from {vehicle.brand}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similarVehicles.map((car, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-lg mb-3" />
                <h4 className="text-lg font-semibold">{car.name}</h4>
                <p className="text-gray-600 text-sm mt-1">₹{car.price.toLocaleString()} Lakh</p>
                <a
                  href={`/vehicle/${car._id}`}
                  className="inline-block mt-4 text-indigo-600 text-sm font-medium hover:underline"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div> // ✅ This closing tag was missing
      )}
  
  <div className="max-w-7xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
  <h3 className="text-2xl font-semibold mb-6">
    How is the {vehicle.name} car?
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Pros Box */}
    <div className="border rounded-lg p-4 bg-white-50">
      <div className="flex items-center mb-3">
        <MdThumbUp className="text-green-600 text-xl mr-2" />
        <h4 className="text-lg font-semibold text-green-700">Pros</h4>
      </div>
      <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm">
        {(prosAndCons[vehicle.name]?.pros || ["Information not available"]).map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>

    {/* Cons Box */}
    <div className="border rounded-lg p-4 bg-white-50">
      <div className="flex items-center mb-3">
        <MdThumbDown className="text-yellow-600 text-xl mr-2" />
        <h4 className="text-lg font-semibold text-yellow-700">Cons</h4>
      </div>
      <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm">
        {(prosAndCons[vehicle.name]?.cons || ["Information not available"]).map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>

  </div>
</div>
    
      <div className="mt-8">
      <h3 className="text-2xl font-semibold">Customer Reviews for {carName}</h3>

      <div className="mt-6 space-y-6">
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map((review) => (
            <div key={review._id} className="border border-gray-300 p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Future car</h4>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={idx < review.rating ? "text-green-600" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-3">{review.feedback}</p>

              <p className="text-sm text-gray-500 mb-2">
                {review.date ? new Date(review.date).toLocaleDateString() : ""} by{" "}
                <strong>{review.customerName}</strong>
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 my-4 text-center">
                {["Exterior", "Comfort", "Performance", "Fuel Economy", "Value For Money"].map(
                  (param, i) => (
                    <div key={param}>
                      <div className="text-xl font-bold text-green-600">5</div>
                      <div className="text-sm text-gray-600">{param}</div>
                    </div>
                  )
                )}
              </div>

              <div className="text-sm mt-4 text-gray-700">
                <div className="flex items-center gap-2 mb-1">
                  <MdDirectionsCar className="text-gray-500" />
                  <span>
                    <strong>Purchase:</strong> New
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <MdLock className="text-gray-500" />
                  <span>
                    <strong>Driven for:</strong> Few hundred kilometers
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">Was this review helpful?</div>
                <div className="flex gap-2">
                  <span className="text-gray-600 text-sm">👍 4</span>
                  <span className="text-gray-600 text-sm">👎 0</span>
                </div>
              </div>

              <div className="mt-3">
                <button
                  onClick={() => handleEditReview(review)}
                  className="mr-4 text-blue-600 hover:underline text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteReview(review._id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Review Form */}
      <h3 className="text-2xl font-semibold mt-10 mb-4">
        {editingReview ? "Edit Review" : "Leave a Review"}
      </h3>
      <div>
        <div className="flex items-center gap-2 mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < rating ? "text-yellow-500" : "text-gray-400"}
              onClick={() => setRating(index + 1)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
          placeholder="Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />

        <select
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
        </select>

        <textarea
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
          rows="4"
          placeholder="Write your review here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <button
          onClick={handleSubmitReview}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          {editingReview ? "Update Review" : "Submit Review"}
        </button>
      </div>
    </div>
    </div>
  );
};

export default VehicleDetails;