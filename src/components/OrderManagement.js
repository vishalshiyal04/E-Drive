// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function OrderManagement() {
//   const [orders, setOrders] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [statusFilter, setStatusFilter] = useState("");
//   const [dateFilter, setDateFilter] = useState("");

//   // Fetch orders from API
//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/orders");
//       setOrders(response.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // Update order status
//   const updateOrderStatus = async (orderId, status) => {
//     try {
//       await axios.put(`http://localhost:5000/api/orders/${orderId}/status, { status }`);
//       fetchOrders();
//     } catch (error) {
//       console.error("Error updating order status:", error);
//     }
//   };

//   // Handle search & filtering
//   const filteredOrders = orders.filter((order) => {
//     const matchesStatus = statusFilter ? order.status === statusFilter : true;
//     const matchesDate = dateFilter ? order.createdAt.includes(dateFilter) : true;
//     const matchesSearch =
//       order.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       order.user.email.toLowerCase().includes(searchQuery.toLowerCase());

//     return matchesStatus && matchesDate && matchesSearch;
//   });

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-4">Order Management</h2>

//       {/* Search & Filter */}
//       <div className="flex flex-wrap gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search by user name or email..."
//           className="p-2 border rounded w-full sm:w-1/3"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <select
//           className="p-2 border rounded w-full sm:w-1/4"
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//         >
//           <option value="">All Status</option>
//           <option value="pending">Pending</option>
//           <option value="completed">Completed</option>
//         </select>
//         <input
//           type="date"
//           className="p-2 border rounded w-full sm:w-1/4"
//           value={dateFilter}
//           onChange={(e) => setDateFilter(e.target.value)}
//         />
//       </div>

//       {/* Orders Table */}
//       <div className="overflow-x-auto bg-white p-4 rounded shadow">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-3 text-left">User</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Vehicle</th>
//               <th className="p-3 text-left">Price</th>
//               <th className="p-3 text-left">Status</th>
//               <th className="p-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredOrders.length > 0 ? (
//               filteredOrders.map((order) => (
//                 <tr key={order._id} className="border-b">
//                   <td className="p-3">{order.user.name}</td>
//                   <td className="p-3">{order.user.email}</td>
//                   <td className="p-3">{order.vehicle.name}</td>
//                   <td className="p-3">${order.vehicle.price}</td>
//                   <td className="p-3">
//                     <select
//                       className="p-1 border rounded"
//                       value={order.status}
//                       onChange={(e) => updateOrderStatus(order._id, e.target.value)}
//                     >
//                       <option value="pending">Pending</option>
//                       <option value="completed">Completed</option>
//                     </select>
//                   </td>
//                   <td className="p-3">
//                     <button className="bg-red-500 text-white px-3 py-1 rounded">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center p-4">
//                   No orders found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // Fetch orders from API
  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Update order status
  const updateOrderStatus = async (orderId, status) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/${orderId}/status, { status }`);
      fetchOrders();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  // Handle search & filtering
  const filteredOrders = orders.filter((order) => {
    const matchesStatus = statusFilter ? order.status === statusFilter : true;
    const matchesDate = dateFilter ? order.createdAt.includes(dateFilter) : true;
    const matchesSearch =
      order.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.user.email.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesDate && matchesSearch;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Order Management</h2>

      {/* Search & Filter */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by user name or email..."
          className="p-2 border rounded w-full sm:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="p-2 border rounded w-full sm:w-1/4"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <input
          type="date"
          className="p-2 border rounded w-full sm:w-1/4"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white p-4 rounded shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Vehicle</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order._id} className="border-b">
                  <td className="p-3">{order.user.name}</td>
                  <td className="p-3">{order.user.email}</td>
                  <td className="p-3">{order.vehicle.name}</td>
                  <td className="p-3">${order.vehicle.price}</td>
                  <td className="p-3">
                    <select
                      className="p-1 border rounded"
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td className="p-3">
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}