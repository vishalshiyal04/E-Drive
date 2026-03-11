// import { useState } from "react";
// import { MdDashboard } from "react-icons/md";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faE, faBell, faBarsProgress, faCar, faChartLine, faStore, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const Sidebar = ({ onToggle }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//     onToggle(!isCollapsed); // Notify parent component
//   };

//   const menuItems = [
//     {
//       name: "E-Drive",
//       path: "/",
//       icon: (
//         <div className="bg-white rounded-full w-10 h-10 flex items-center p-3 cursor-pointer" onClick={toggleSidebar}>
//           <FontAwesomeIcon icon={faE} className="text-blue-900 text-2xl" />
//         </div>
//       ),
//     },
//     { separator: true },
//     { name: "Dashboard", path: "/admin/dashboard", icon: <MdDashboard /> },
//     { name: "Vehicle Management", path: "/admin/vehicles", icon: <FontAwesomeIcon icon={faCar} /> },
//     { name: "Dealer", path: "/admin/dealer", icon: <FontAwesomeIcon icon={faStore} /> }, // Updated icon
//     { name: "Order Management", path: "/admin/orders", icon: <FontAwesomeIcon icon={faBarsProgress} /> },
//     { separator: true },
//     { name: "Analytics", path: "/admin/analytics", icon: <FontAwesomeIcon icon={faChartLine} /> },
//     { name: "Notifications", path: "/admin/notifications", icon: <FontAwesomeIcon icon={faBell} /> },
//     { separator: true },
//     { name: "Help", path: "/admin/help", icon: <FontAwesomeIcon icon={faQuestionCircle} /> },
//   ];

//   return (
//     <div className={`fixed top-0 left-0 h-screen bg-gray-950 text-gray-100 flex flex-col transition-all duration-300 ${isCollapsed ? "w-16" : "w-60"}`}>
//       {/* Menu Items */}
//       <div className="flex-1 space-y-2 py-4">
//         {menuItems.map((item, index) =>
//           item.separator ? (
//             <hr key={index} className="border-gray-500 my-2" />
//           ) : (
//             <Link to={item.path} key={index} className="flex items-center w-full px-4 py-2 hover:bg-gray-700 cursor-pointer">
//               {/* Icon */}
//               <div className="text-xl">{item.icon}</div>

//               {/* Tooltip (when collapsed) */}
//               {isCollapsed && (
//                 <span className="absolute left-16 whitespace-nowrap bg-gray-950 text-sm text-white px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
//                   {item.name}
//                 </span>
//               )}

//               {/* Name (when expanded) */}
//               {!isCollapsed && <span className="ml-4 text-sm font-medium">{item.name}</span>}
//             </Link>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE, faBell, faBarsProgress, faCar, faChartLine, faStore, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed); // Notify parent component
  };

  const menuItems = [
    {
      name: "E-Drive",
      path: "/",
      icon: (
        <div className="bg-white rounded-full w-10 h-10 flex items-center p-3 cursor-pointer" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faE} className="text-blue-900 text-2xl" />
        </div>
      ),
    },
    { separator: true },
    { name: "Dashboard", path: "/admin/dashboard", icon: <MdDashboard /> },
    { name: "Vehicle Management", path: "/admin/vehicles", icon: <FontAwesomeIcon icon={faCar} /> },
    { name: "Dealer", path: "/admin/dealer", icon: <FontAwesomeIcon icon={faStore} /> }, // Updated icon
    { name: "Order Management", path: "/admin/orders", icon: <FontAwesomeIcon icon={faBarsProgress} /> },
    { separator: true },
    { name: "Analytics", path: "/admin/analytics", icon: <FontAwesomeIcon icon={faChartLine} /> },
    { name: "Notifications", path: "/admin/notifications", icon: <FontAwesomeIcon icon={faBell} /> },
    { separator: true },
    { name: "Help", path: "/admin/help", icon: <FontAwesomeIcon icon={faQuestionCircle} /> },
  ];

  return (
    <div className={`fixed top-0 left-0 h-screen bg-gray-950 text-gray-100 flex flex-col transition-all duration-300 ${isCollapsed ? "w-16" : "w-60"}`}>
      {/* Menu Items */}
      <div className="flex-1 space-y-2 py-4">
        {menuItems.map((item, index) =>
          item.separator ? (
            <hr key={index} className="border-gray-500 my-2" />
          ) : (
            <Link to={item.path} key={index} className="flex items-center w-full px-4 py-2 hover:bg-gray-700 cursor-pointer">
              {/* Icon */}
              <div className="text-xl">{item.icon}</div>

              {/* Tooltip (when collapsed) */}
              {isCollapsed && (
                <span className="absolute left-16 whitespace-nowrap bg-gray-950 text-sm text-white px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  {item.name}
                </span>
              )}

              {/* Name (when expanded) */}
              {!isCollapsed && <span className="ml-4 text-sm font-medium">{item.name}</span>}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;