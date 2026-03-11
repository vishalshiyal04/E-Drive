// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Banner from "./components/Banner";
// import FeaturedVehicles from "./components/FeaturedVehicles";
// import Footer from "./components/Footer";
// import DealsSection from "./components/DealsSection";
// import LoginPage from "./components/LoginPage";
// import CreateAccount from "./components/CreateAccount"; // ✅ Import Create Account Page
// import AdminDashboard from "./components/AdminDashboard";
// import Sidebar from "./components/Sidebar";
// import VehicleManagement from "./components/VehicleManagement";
// import OrderManagement from "./components/OrderManagement";
// import Analytics from './components/Analytics';
// import Notification from './components/Notification';
// import Settings from './components/Settings';
// import Help from './components/Help';
// import About from "./components/About";
// import FeedbackForm from "./components/ContactUs";
// import EVServicesPage from "./components/EVServicesPage";
// import VehicleDetails from "./components/VehicleDetails";
// import CartPage from "./components/CartPage";


// const AppLayout = () => {
//   const location = useLocation();
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const [cart, setCart] = useState([]); // Global cart state

//   return (
//     <div className="flex h-screen">
//       {/* Show Sidebar only on Admin Pages */}
//       {location.pathname.startsWith("/admin") && <Sidebar onToggle={setIsSidebarCollapsed} />}

//       {/* Main Content */}
//       <main
//         className={`flex-grow transition-all duration-300 ${
//           location.pathname.startsWith("/admin") ? (isSidebarCollapsed ? "ml-16" : "ml-60") : ""
//         }`}
//       >
//         <Routes>
//           {/* Public Pages */}
//           <Route path="/" element={<><Navbar /><Banner /><DealsSection /><FeaturedVehicles /><Footer /></>} />
//           <Route path="/about" element={<><Navbar /><About /><Footer /><CartPage /></>} />
//           <Route path="/contact" element={<><Navbar /><FeedbackForm /><Footer /></>} />
//           <Route path="/ev-services" element={<><Navbar /><EVServicesPage /><Footer /></>} />
//           <Route path="/login" element={<><Navbar /><LoginPage /></>} />
//           <Route path="/register" element={<><Navbar /><CreateAccount /></>} /> {/* ✅ Add Create Account Page */}
//           <Route path="/vehicle/:id" element={<VehicleDetails />} />
//             <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />

//           {/* Admin Pages */}
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
//           <Route path="/admin/vehicles" element={<VehicleManagement />} />
//           <Route path="/admin/orders" element={<OrderManagement />} />
//           <Route path="/admin/analytics" element={<Analytics />} />
//           <Route path="/admin/notifications" element={<Notification />} />  
//           <Route path="/admin/dealer" element={<Settings />} />
//           <Route path="/admin/help" element={<Help />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <AppLayout />
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FeaturedVehicles from "./components/FeaturedVehicles";
import Footer from "./components/Footer";
import DealsSection from "./components/DealsSection";
import LoginPage from "./components/LoginPage";
import CreateAccount from "./components/CreateAccount";
import AdminDashboard from "./components/AdminDashboard";
import Sidebar from "./components/Sidebar";
import VehicleManagement from "./components/VehicleManagement";
import OrderManagement from "./components/OrderManagement";
import Analytics from "./components/Analytics";
import Notification from "./components/Notification";
import Settings from "./components/Settings";
import Help from "./components/Help";
import About from "./components/About";
import FeedbackForm from "./components/ContactUs";
import EVServicesPage from "./components/EVServicesPage";
import VehicleDetails from "./components/VehicleDetails";
import CartPage from "./components/CartPage";
import PaymentSection from "./components/PaymentSection";
import India from "./components/india";

const AppLayout = ({ cart, setCart }) => {
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar for admin pages */}
      {location.pathname.startsWith("/admin") && (
        <Sidebar onToggle={setIsSidebarCollapsed} />
      )}

      {/* Main Content */}
      <main
        className={`flex-grow transition-all duration-300 ${
          location.pathname.startsWith("/admin")
            ? isSidebarCollapsed
              ? "ml-16"
              : "ml-60"
            : ""
        }`}
      >
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<><Navbar /><Banner /><DealsSection /><FeaturedVehicles /><Footer /></>}/>
          <Route path="/about" element={<><Navbar /><About /><Footer /></>}/>
          <Route path="/contact" element={<><Navbar /><FeedbackForm /><Footer /></>}/>
          <Route path="/ev-services" element={<><Navbar /><EVServicesPage /><Footer /></>}/>
          <Route path="/login" element={<><Navbar /><LoginPage /></>} />
          <Route path="/payment" element={<><Navbar /><PaymentSection /></>} />
          <Route path="/register" element={<><Navbar /><CreateAccount /></>} />
          <Route path="/india" element={<><Navbar /><India /></>} />
          <Route
            path="/vehicle/:id"
            element={
              <>
                <Navbar />
                <VehicleDetails cart={cart} setCart={setCart} />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} setCart={setCart} />}
          />

          {/* Admin Pages */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/vehicles" element={<VehicleManagement />} />
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/notifications" element={<Notification />} />
          <Route path="/admin/dealer" element={<Settings />} />
          <Route path="/admin/help" element={<Help />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  // Initialize cart state from localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : []; // Load cart from localStorage
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
    }
  }, [cart]);

  return (
    <Router>
      <AppLayout cart={cart} setCart={setCart} />
    </Router>
  );
};

export default App;