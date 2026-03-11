// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChartLine, faDollarSign, faCar, faUsers } from "@fortawesome/free-solid-svg-icons";
// import {
//   LineChart,
//   Line as RechartsLine,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   AreaChart,
//   Area,
// } from "recharts";

// // Generate live revenue data
// const generateLiveData = () => {
//   const now = new Date();
//   return Array.from({ length: 30 }, (_, i) => {
//     const time = new Date(now.getTime() - (30 - i) * 1000);
//     return {
//       time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
//       revenue: Math.floor(5000 + Math.random() * 5000),
//     };
//   });
// };

// // Weekly Profit Data
// const weeklyProfit = [
//   { day: "Mon", sales: 1600, revenue: 2400 },
//   { day: "Tue", sales: 1900, revenue: 7775 },
//   { day: "Wed", sales: 1000, revenue: 5000 },
//   { day: "Thu", sales: 355, revenue: 3908 },
//   { day: "Fri", sales: 955, revenue: 7900 },
//   { day: "Sat", sales: 490, revenue: 3800 },
//   { day: "Sun", sales: 1000, revenue: 9800 },
// ];

// // Visitor Analytics Data
// const visitorData = [
//   { name: "Desktop", value: 65, color: "#3B82F6" },
//   { name: "Mobile", value: 45, color: "#93C5FD" },
//   { name: "Tablet", value: 34, color: "#6366F1" },
//   { name: "Unknown", value: 12, color: "#0EA5E9" },
// ];

// // Monthly Sales and Revenue Data
// const monthlyData = [
//   { month: "Jan", sales: 180, revenue: 50 },
//   { month: "Feb", sales: 200, revenue: 40 },
//   { month: "Mar", sales: 170, revenue: 60 },
//   { month: "Apr", sales: 160, revenue: 40 },
//   { month: "May", sales: 150, revenue: 50 },
//   { month: "Jun", sales: 155, revenue: 55 },
//   { month: "Jul", sales: 165, revenue: 70 },
//   { month: "Aug", sales: 190, revenue: 90 },
//   { month: "Sep", sales: 210, revenue: 100 },
//   { month: "Oct", sales: 200, revenue: 110 },
//   { month: "Nov", sales: 220, revenue: 120 },
//   { month: "Dec", sales: 215, revenue: 110 },
// ];

// const AdminDashboard = () => {
//   const [liveData, setLiveData] = useState(generateLiveData());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLiveData((prevData) => {
//         const newTime = new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//           second: "2-digit",
//         });
//         const newEntry = { time: newTime, revenue: Math.floor(5000 + Math.random() * 5000) };
//         return [...prevData.slice(1), newEntry];
//       });
//     }, 10000); // Update every 8 minutes

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 p-8 space-y-8">
//       {/* Header */}
//       <div className="flex justify-between items-center bg-white p-6 shadow-lg rounded-xl">
//         <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
//         <div className="text-lg text-gray-700 font-medium">Admin</div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {[
//           { title: "Total Revenue", value: "$3.45M", icon: faDollarSign, color: "bg-blue-500" },
//           { title: "Total Profit", value: "$450K", icon: faChartLine, color: "bg-green-500" },
//           { title: "Total Vehicles", value: "2,450", icon: faCar, color: "bg-purple-500" },
//           { title: "Total Users", value: "12,345", icon: faUsers, color: "bg-orange-500" },
//         ].map((stat, index) => (
//           <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex justify-between items-center">
//             <div>
//               <h4 className="text-sm font-semibold text-gray-500 uppercase">{stat.title}</h4>
//               <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
//             </div>
//             <div className={`w-14 h-14 ${stat.color} text-white rounded-xl flex items-center justify-center shadow-md`}>
//               <FontAwesomeIcon icon={stat.icon} className="text-2xl" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Live Revenue Trends */}
//         <div className="bg-white p-8 rounded-xl shadow-lg">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Live Revenue Trends</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={liveData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="time" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <RechartsLine type="monotone" dataKey="revenue" stroke="#0a9396" strokeWidth={3} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Weekly Profit */}
//         <div className="bg-white p-8 rounded-xl shadow-lg">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Weekly Profit</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={weeklyProfit}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="day" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="sales" fill="#0a9396" barSize={40} radius={[10, 10, 0, 0]} />
//               <Bar dataKey="revenue" fill="#415a77" barSize={40} radius={[10, 10, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Visitors Analytics - Pie Chart */}
//         <div className="bg-white p-8 rounded-xl shadow-lg">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Visitors Analytics</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie data={visitorData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={5} dataKey="value">
//                 {visitorData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Monthly Sales & Revenue Overview */}
//         <div className="bg-white p-8 rounded-xl shadow-lg">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Sales & Revenue Overview</h3>
//           <ResponsiveContainer width="100%" height={350}>
//             <AreaChart data={monthlyData}>
//               <XAxis dataKey="month" />
//               <YAxis />
//               <CartesianGrid strokeDasharray="3 3" />
//               <Tooltip />
//               <Legend />
//               <Area type="monotone" dataKey="sales" stroke="#2563EB" fill="#2563EB" fillOpacity={0.3} />
//               <Area type="monotone" dataKey="revenue" stroke="#93C5FD" fill="#93C5FD" fillOpacity={0.3} />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faDollarSign, faCar, faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line as RechartsLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

// Generate live revenue data
const generateLiveData = () => {
  const now = new Date();
  return Array.from({ length: 30 }, (_, i) => {
    const time = new Date(now.getTime() - (30 - i) * 1000);
    return {
      time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      revenue: Math.floor(5000 + Math.random() * 5000),
    };
  });
};

// Weekly Profit Data
const weeklyProfit = [
  { day: "Mon", sales: 1600, revenue: 2400 },
  { day: "Tue", sales: 1900, revenue: 7775 },
  { day: "Wed", sales: 1000, revenue: 5000 },
  { day: "Thu", sales: 355, revenue: 3908 },
  { day: "Fri", sales: 955, revenue: 7900 },
  { day: "Sat", sales: 490, revenue: 3800 },
  { day: "Sun", sales: 1000, revenue: 9800 },
];

// Visitor Analytics Data
const visitorData = [
  { name: "Desktop", value: 65, color: "#3B82F6" },
  { name: "Mobile", value: 45, color: "#93C5FD" },
  { name: "Tablet", value: 34, color: "#6366F1" },
  { name: "Unknown", value: 12, color: "#0EA5E9" },
];

// Monthly Sales and Revenue Data
const monthlyData = [
  { month: "Jan", sales: 180, revenue: 50 },
  { month: "Feb", sales: 200, revenue: 40 },
  { month: "Mar", sales: 170, revenue: 60 },
  { month: "Apr", sales: 160, revenue: 40 },
  { month: "May", sales: 150, revenue: 50 },
  { month: "Jun", sales: 155, revenue: 55 },
  { month: "Jul", sales: 165, revenue: 70 },
  { month: "Aug", sales: 190, revenue: 90 },
  { month: "Sep", sales: 210, revenue: 100 },
  { month: "Oct", sales: 200, revenue: 110 },
  { month: "Nov", sales: 220, revenue: 120 },
  { month: "Dec", sales: 215, revenue: 110 },
];

const AdminDashboard = () => {
  const [liveData, setLiveData] = useState(generateLiveData());

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prevData) => {
        const newTime = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        const newEntry = { time: newTime, revenue: Math.floor(5000 + Math.random() * 5000) };
        return [...prevData.slice(1), newEntry];
      });
    }, 10000); // Update every 8 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-6 shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
        <div className="text-lg text-gray-700 font-medium">Admin</div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { title: "Total Revenue", value: "$3.45M", icon: faDollarSign, color: "bg-blue-500" },
          { title: "Total Profit", value: "$450K", icon: faChartLine, color: "bg-green-500" },
          { title: "Total Vehicles", value: "2,450", icon: faCar, color: "bg-purple-500" },
          { title: "Total Users", value: "12,345", icon: faUsers, color: "bg-orange-500" },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex justify-between items-center">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase">{stat.title}</h4>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
            </div>
            <div className={`w-14 h-14 ${stat.color} text-white rounded-xl flex items-center justify-center shadow-md`}>
              <FontAwesomeIcon icon={stat.icon} className="text-2xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Live Revenue Trends */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Live Revenue Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={liveData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <RechartsLine type="monotone" dataKey="revenue" stroke="#0a9396" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Profit */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Weekly Profit</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyProfit}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#0a9396" barSize={40} radius={[10, 10, 0, 0]} />
              <Bar dataKey="revenue" fill="#415a77" barSize={40} radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Visitors Analytics - Pie Chart */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Visitors Analytics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={visitorData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={5} dataKey="value">
                {visitorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Sales & Revenue Overview */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Sales & Revenue Overview</h3>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="sales" stroke="#2563EB" fill="#2563EB" fillOpacity={0.3} />
              <Area type="monotone" dataKey="revenue" stroke="#93C5FD" fill="#93C5FD" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;