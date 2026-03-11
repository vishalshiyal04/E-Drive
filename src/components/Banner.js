// // import React, { useState, useEffect } from "react";

// // const Banner = () => {
// //   const [banners, setBanners] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     fetch("http://localhost:5003/banners")
// //       .then((response) => response.json())
// //       .then((data) => setBanners(data.banners))
// //       .catch((error) => console.error("Error fetching banners:", error));
// //   }, []);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
// //     }, 4000);

// //     return () => clearInterval(interval);
// //   }, [banners.length]);

// //   if (banners.length === 0) {
// //     return <div className="text-center text-gray-600 py-10">Loading...</div>;
// //   }

// //   return (
// //     <div className="relative w-full h-[650px] overflow-hidden">
// //       {/* Banner Image with Fade Transition */}
// //       <div className="w-full h-full relative">
// //         {banners.map((banner, index) => (
// //           <img
// //             key={index}
// //             src={banner.image}
// //             alt={`Banner ${index + 1}`}
// //             className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
// //               index === currentIndex ? "opacity-100" : "opacity-0"
// //             }`}
// //           />
// //         ))}
// //       </div>

// //       {/* Overlay with Text Animation */}
// //       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
// //         <div className="text-center text-white p-6">
// //           <h2 className="text-4xl font-bold animate-fadeIn">Discover E-Drive</h2>
// //           <p className="text-lg mt-2 opacity-80">The Future of Electric Vehicles</p>
// //           <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition">
// //             Explore Now
// //           </button>
// //         </div>
// //       </div>

// //       {/* Dots Indicator */}
// //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
// //         {banners.map((_, index) => (
// //           <div
// //             key={index}
// //             onClick={() => setCurrentIndex(index)}
// //             className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
// //               index === currentIndex ? "bg-white scale-110" : "bg-gray-400 hover:bg-opacity-10"
// //             }`}
// //           ></div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Banner;

// import React, { useState, useEffect } from "react";

// const Banner = () => {
//   const [banners, setBanners] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     fetch("http://localhost:5003/banners")
//       .then((response) => response.json())
//       .then((data) => setBanners(data.banners))
//       .catch((error) => console.error("Error fetching banners:", error));
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [banners.length]);

//   if (banners.length === 0) {
//     return <div className="text-center text-gray-600 py-10">Loading...</div>;
//   }

//   return (
//     <div className="relative w-full h-[650px] overflow-hidden">
//       {/* Banner Image with Fade Transition */}
//       <div className="w-full h-full relative">
//         {banners.map((banner, index) => (
//           <img
//             key={index}
//             src={banner.image}
//             alt={`Banner ${index + 1}`}
//             className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Overlay with Text Animation */}
//       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
//         <div className="text-center text-white p-6">
//           <h2 className="text-4xl font-bold animate-fadeIn">Discover E-Drive</h2>
//           <p className="text-lg mt-2 opacity-80">The Future of Electric Vehicles</p>
//           <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition">
//             Explore Now
//           </button>
//         </div>
//       </div>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {banners.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
//               index === currentIndex ? "bg-white scale-110" : "bg-gray-400 hover:bg-opacity-10"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React, { useState, useEffect } from "react";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5003/banners")
      .then((response) => response.json())
      .then((data) => setBanners(data.banners))
      .catch((error) => console.error("Error fetching banners:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  if (banners.length === 0) {
    return <div className="text-center text-gray-600 py-10">Loading...</div>;
  }

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {/* Banner Image with Fade Transition */}
      <div className="w-full h-full relative">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.image}
            alt={`Banner ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay with Text Animation */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div className="text-center text-white p-6">
          <h2 className="text-4xl font-bold animate-fadeIn">Discover E-Drive</h2>
          <p className="text-lg mt-2 opacity-80">The Future of Electric Vehicles</p>
          <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition">
            Explore Now
          </button>
        </div>
      </div>

      {/* "India" on the Bottom Right */}
      <div className="absolute bottom-10 right-10 text-white text-sm font-bold">
        India
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-110" : "bg-gray-400 hover:bg-opacity-10"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;