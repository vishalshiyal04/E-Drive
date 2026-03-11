// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Footer = () => {
//   const navigate = useNavigate(); // Initialize navigate

//   return (
//     <footer className=" border-t border-white-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-12">
//           {/* About Us */}
//           <div>
//             <h3 className="text-sm font-semibold text-gray-900 uppercase">About Us</h3>
//             <p className="mt-4 text-sm text-gray-600">
//               A leading car showroom offering the latest vehicles.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-sm font-semibold text-gray-900 uppercase">Quick Links</h3>
//             <ul className="mt-4 space-y-2">
//               <li><button className="text-sm text-gray-600 hover:text-gray-900" onClick={() => navigate("/")}>Home</button></li>
//               <li><a href="#new-cars" className="text-sm text-gray-600 hover:text-gray-900">New Cars</a></li>
//               <li><a href="#services" className="text-sm text-gray-600 hover:text-gray-900">Services</a></li>
//               <li><button className="text-sm text-gray-600 hover:text-gray-900" onClick={() => navigate("/contact")}>Contact Us</button></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-sm font-semibold text-gray-900 uppercase">Contact</h3>
//             <ul className="mt-4 space-y-2">
//               <li className="text-sm text-gray-600">Email: vmdgroup1814@gmail.com</li>
//               <li className="text-sm text-gray-600">Phone: +91 88660 95454</li>
//             </ul>
//           </div>

//           {/* Useful Links */}
//           <div>
//             <h3 className="text-sm font-semibold text-gray-900 uppercase">Useful Links</h3>
//             <ul className="mt-4 space-y-2">
//               <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => navigate("/about")}>About Us</a></li>
//               <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
//               <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">GitHub</a></li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="text-sm font-semibold text-gray-900 uppercase">Follow Us</h3>
//             <ul className="mt-4 space-y-2">
//               <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Instagram</a></li>
//               <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Facebook</a></li>
//               <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</a></li>
//               <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">GitHub</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="py-8 border-t border-gray-200 text-center text-sm text-gray-500">
//           <p>© 2025 E-Drive. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-gray-200 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 text-center sm:text-left">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">About Us</h3>
            <p className="mt-4 text-sm text-gray-600">
              A leading car showroom offering the latest vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><button className="text-sm text-gray-600 hover:text-gray-900" onClick={() => navigate("/")}>Home</button></li>
              <li><a href="#new-cars" className="text-sm text-gray-600 hover:text-gray-900">New Cars</a></li>
              <li><a href="#services" className="text-sm text-gray-600 hover:text-gray-900">Services</a></li>
              <li><button className="text-sm text-gray-600 hover:text-gray-900" onClick={() => navigate("/contact")}>Contact Us</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">Email: vmdgroup1814@gmail.com</li>
              <li className="text-sm text-gray-600">Phone: +91 88660 95454</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Useful Links</h3>
            <ul className="mt-4 space-y-2">
              <li><button className="text-sm text-gray-600 hover:text-gray-900" onClick={() => navigate("/about")}>About Us</button></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">GitHub</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Instagram</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Facebook</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-300 text-center text-sm text-gray-500">
          <p>© 2025 E-Drive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;