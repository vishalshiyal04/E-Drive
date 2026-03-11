// import React, { useState } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// const Analytics = () => {
//   const [selectedTimeframe, setSelectedTimeframe] = useState("daily");

//   // Sample data for demonstration purposes
//   const revenueData = {
//     daily: [
//       { name: "Mon", revenue: 1200, sales: 300 },
//       { name: "Tue", revenue: 1500, sales: 350 },
//       { name: "Wed", revenue: 1800, sales: 400 },
//       { name: "Thu", revenue: 2200, sales: 500 },
//       { name: "Fri", revenue: 1700, sales: 450 },
//       { name: "Sat", revenue: 2000, sales: 480 },
//       { name: "Sun", revenue: 2500, sales: 550 },
//     ],
//     weekly: [
//       { name: "Week 1", revenue: 8000, sales: 2000 },
//       { name: "Week 2", revenue: 9500, sales: 2000 },
//       { name: "Week 3", revenue: 10500, sales: 2500 },
//       { name: "Week 4", revenue: 11000, sales: 2700 },
//       { name: "Week 5", revenue: 8000, sales: 2000 },
//       { name: "Week 6", revenue: 9500, sales: 2300 },
//       { name: "Week 7", revenue: 10500, sales: 2500 },
//       { name: "Week 8", revenue: 11000, sales: 2700 },
//     ],
//     monthly: [
//       { name: "Month 1", revenue: 30000, sales: 8000 },
//       { name: "Month 2", revenue: 32000, sales: 8500 },
//       { name: "Month 3", revenue: 35000, sales: 9000 },
//       { name: "Month 4", revenue: 30000, sales: 7000 },
//       { name: "Month 5", revenue: 32000, sales: 4500 },
//       { name: "Month 6", revenue: 35000, sales: 10000  },
//     ],
//   };

//   // Handle changing the timeframe
//   const handleTimeframeChange = (timeframe) => {
//     setSelectedTimeframe(timeframe);
//   };

//   // Select the relevant data based on timeframe
//   const selectedData = selectedTimeframe === "daily" ? revenueData.daily : selectedTimeframe === "weekly" ? revenueData.weekly : revenueData.monthly;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Analytics</h2>

//       {/* Timeframe Selector */}
//       <div className="mb-6">
//         <button
//           className={`px-4 py-2 rounded ${selectedTimeframe === "daily" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           onClick={() => handleTimeframeChange("daily")}
//         >
//           Daily
//         </button>
//         <button
//           className={`px-4 py-2 rounded ml-4 ${selectedTimeframe === "weekly" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           onClick={() => handleTimeframeChange("weekly")}
//         >
//           Weekly
//         </button>
//         <button
//           className={`px-4 py-2 rounded ml-4 ${selectedTimeframe === "monthly" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           onClick={() => handleTimeframeChange("monthly")}
//         >
//           Monthly
//         </button>
//       </div>

//       {/* Revenue Analytics */}
//       <div className="bg-white p-6 mt-6 rounded-lg shadow-md w-full max-w-6xl">
//         <h3 className="text-lg font-semibold text-gray-800">Total Revenue</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={selectedData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="revenue" stroke="#0a9396" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* User Analytics */}
//       <div className="bg-white p-6 mt-6 rounded-lg shadow-md w-full max-w-6xl">
//         <h3 className="text-lg font-semibold text-gray-800">User Analytics</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={selectedData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="revenue" stroke="#60a5fa" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Vehicle Analytics */}
//       <div className="bg-white p-6 mt-6 rounded-lg shadow-md w-full max-w-6xl">
//         <h3 className="text-lg font-semibold text-gray-800">Vehicle Analytics</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={selectedData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="revenue" stroke="#f39c12" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default Analytics;

import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Analytics = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");

  // Sample data for demonstration purposes
  const revenueData = {
    daily: [
      { name: "Mon", revenue: 1200, sales: 300 },
      { name: "Tue", revenue: 1500, sales: 350 },
      { name: "Wed", revenue: 1800, sales: 400 },
      { name: "Thu", revenue: 2200, sales: 500 },
      { name: "Fri", revenue: 1700, sales: 450 },
      { name: "Sat", revenue: 2000, sales: 480 },
      { name: "Sun", revenue: 2500, sales: 550 },
    ],
    weekly: [
      { name: "Week 1", revenue: 8000, sales: 2000 },
      { name: "Week 2", revenue: 9500, sales: 2000 },
      { name: "Week 3", revenue: 10500, sales: 2500 },
      { name: "Week 4", revenue: 11000, sales: 2700 },
      { name: "Week 5", revenue: 8000, sales: 2000 },
      { name: "Week 6", revenue: 9500, sales: 2300 },
      { name: "Week 7", revenue: 10500, sales: 2500 },
      { name: "Week 8", revenue: 11000, sales: 2700 },
    ],
    monthly: [
      { name: "Month 1", revenue: 30000, sales: 8000 },
      { name: "Month 2", revenue: 32000, sales: 8500 },
      { name: "Month 3", revenue: 35000, sales: 9000 },
      { name: "Month 4", revenue: 30000, sales: 7000 },
      { name: "Month 5", revenue: 32000, sales: 4500 },
      { name: "Month 6", revenue: 35000, sales: 10000  },
    ],
  };

  // Handle changing the timeframe
  const handleTimeframeChange = (timeframe) => {
    setSelectedTimeframe(timeframe);
  };

  // Select the relevant data based on timeframe
  const selectedData = selectedTimeframe === "daily" ? revenueData.daily : selectedTimeframe === "weekly" ? revenueData.weekly : revenueData.monthly;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Analytics</h2>

      {/* Timeframe Selector */}
      <div className="mb-6">
        <button
          className={`px-4 py-2 rounded ${selectedTimeframe === "daily" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => handleTimeframeChange("daily")}
        >
          Daily
        </button>
        <button
          className={`px-4 py-2 rounded ml-4 ${selectedTimeframe === "weekly" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => handleTimeframeChange("weekly")}
        >
          Weekly
        </button>
        <button
          className={`px-4 py-2 rounded ml-4 ${selectedTimeframe === "monthly" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => handleTimeframeChange("monthly")}
        >
          Monthly
        </button>
      </div>

      {/* Revenue Analytics */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md w-full max-w-6xl">
        <h3 className="text-lg font-semibold text-gray-800">Total Revenue</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={selectedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#0a9396" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* User Analytics */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md w-full max-w-6xl">
        <h3 className="text-lg font-semibold text-gray-800">User Analytics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={selectedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#60a5fa" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Vehicle Analytics */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md w-full max-w-6xl">
        <h3 className="text-lg font-semibold text-gray-800">Vehicle Analytics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={selectedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#f39c12" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;