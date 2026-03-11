// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const DealerSettings = () => {
// //   const [locations, setLocations] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState({ city: "", state: "", zip: "", vehicleType: "" });
// //   const [newDealer, setNewDealer] = useState({ name: "", address: "", city: "", state: "", zip: "", contact: "", availableProducts: "", vehicleType: "" });

// //   useEffect(() => {
// //     fetchDealers();
// //   }, []);

// //   const fetchDealers = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5004/api/dealers", { params: searchQuery });
// //       console.log("Fetched Dealers:", response.data); // Debugging log
// //       setLocations(response.data);
// //     } catch (error) {
// //       console.error("Error fetching dealers:", error);
// //       alert("Failed to fetch dealers. Check backend logs.");
// //     }
// //   };

// //   const handleSearchChange = (e) => {
// //     setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
// //   };

// //   const handleSearch = () => {
// //     fetchDealers();
// //   };

// //   const handleNewDealerChange = (e) => {
// //     setNewDealer({ ...newDealer, [e.target.name]: e.target.value });
// //   };

// //   const handleAddDealer = async () => {
// //     try {
// //       const formattedDealer = {
// //         ...newDealer,
// //         availableProducts: newDealer.availableProducts.split(",").map((item) => item.trim()),
// //       };

// //       console.log("Sending Dealer Data:", formattedDealer); // Debugging log

// //       const response = await axios.post("http://localhost:5004/api/dealers", formattedDealer, {
// //         headers: { "Content-Type": "application/json" },
// //       });

// //       console.log("Dealer Added Successfully:", response.data); // Debugging log

// //       alert("Dealer added successfully!");
// //       setNewDealer({ name: "", address: "", city: "", state: "", zip: "", contact: "", availableProducts: "", vehicleType: "" });
// //       fetchDealers();
// //     } catch (error) {
// //       console.error("Error adding dealer:", error);
// //       alert("Failed to add dealer. Check backend logs.");
// //     }
// //   };

// //   return (
// //     <div className="space-y-6 p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
// //       <h2 className="text-2xl font-semibold mb-4">Manage Dealership Locations</h2>

// //       {/* Search Filters */}
// //       <div className="grid grid-cols-2 gap-4">
// //         <input type="text" name="city" value={searchQuery.city} onChange={handleSearchChange} placeholder="Search by City" className="p-2 border rounded-md" />
// //         <input type="text" name="state" value={searchQuery.state} onChange={handleSearchChange} placeholder="Search by State" className="p-2 border rounded-md" />
// //         <input type="text" name="zip" value={searchQuery.zip} onChange={handleSearchChange} placeholder="Search by Zip Code" className="p-2 border rounded-md" />
// //         <select name="vehicleType" value={searchQuery.vehicleType} onChange={handleSearchChange} className="p-2 border rounded-md">
// //           <option value="">All Types</option>
// //           <option value="New">New</option>
// //           <option value="Used">Used</option>
// //           <option value="Brand">Specific Brand</option>
// //         </select>
// //         <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 col-span-2">Search Dealers</button>
// //       </div>

// //       {/* Dealer List */}
// //       <ul className="space-y-3">
// //         {locations.map((dealer) => (
// //           <li key={dealer._id} className="p-3 border rounded-md flex justify-between items-center">
// //             <div>
// //               <h4 className="font-semibold">{dealer.name}</h4>
// //               <p>{dealer.address}</p>
// //               <p>📞 {dealer.contact}</p>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>

// //       <ul className="space-y-3">
// //         {locations.map((dealer) => (
// //           <li 
// //             key={dealer._id} 
// //             className="p-3 border rounded-md flex justify-between items-center"
// //           >
// //             <div>
// //               <h4 className="font-semibold">{dealer.name}</h4>
// //               <p>{dealer.address}</p>
// //               <p>📞 {dealer.contact}</p>
// //             </div>
// //             <button 
// //               onClick={() => handleAddDealer(dealer._id)}
// //               className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
// //             >
// //               Delete
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //       {/* Add New Dealer */}
// //       <div className="mt-6">
// //         <h3 className="text-xl font-semibold mb-3">Add New Dealer</h3>
// //         <div className="grid grid-cols-2 gap-4">
// //           <input type="text" name="name" value={newDealer.name} onChange={handleNewDealerChange} placeholder="Dealer Name" className="p-2 border rounded-md" />
// //           <input type="text" name="address" value={newDealer.address} onChange={handleNewDealerChange} placeholder="Address" className="p-2 border rounded-md" />
// //           <input type="text" name="city" value={newDealer.city} onChange={handleNewDealerChange} placeholder="City" className="p-2 border rounded-md" />
// //           <input type="text" name="state" value={newDealer.state} onChange={handleNewDealerChange} placeholder="State" className="p-2 border rounded-md" />
// //           <input type="text" name="zip" value={newDealer.zip} onChange={handleNewDealerChange} placeholder="Zip Code" className="p-2 border rounded-md" />
// //           <input type="text" name="contact" value={newDealer.contact} onChange={handleNewDealerChange} placeholder="Contact" className="p-2 border rounded-md" />
// //           <input type="text" name="availableProducts" value={newDealer.availableProducts} onChange={handleNewDealerChange} placeholder="Products (comma separated)" className="p-2 border rounded-md" />
// //           <select name="vehicleType" value={newDealer.vehicleType} onChange={handleNewDealerChange} className="p-2 border rounded-md">
// //             <option value="">Select Type</option>
// //             <option value="New">New</option>
// //             <option value="Used">Used</option>
// //             <option value="Brand">Brand</option>
// //           </select>
// //           <button onClick={handleAddDealer} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 col-span-2">Add Dealer</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DealerSettings;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faEdit, faTrash, faPhone, faCar, faShoppingCart, faPlus, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

// const DealerSettings = () => {
//   const [locations, setLocations] = useState([]);
//   const [searchQuery, setSearchQuery] = useState({ city: "", state: "", zip: "", vehicleType: "" });
//   const [newDealer, setNewDealer] = useState({ 
//     name: "", address: "", city: "", state: "", zip: "", contact: "", 
//     availableProducts: "", vehicleType: "" 
//   });
//   const [editingDealer, setEditingDealer] = useState(null);

//   useEffect(() => {
//     fetchDealers();
//   }, []);

//   const fetchDealers = async () => {
//     try {
//       const response = await axios.get("http://localhost:5004/api/dealers", { params: searchQuery });
//       setLocations(response.data);
//     } catch (error) {
//       console.error("Error fetching dealers:", error);
//       alert("Failed to fetch dealers.");
//     }
//   };

//   const handleInputChange = (e, stateUpdater) => {
//     stateUpdater(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleAddDealer = async () => {
//     try {
//       const formattedDealer = { 
//         ...newDealer, 
//         availableProducts: newDealer.availableProducts.split(",").map(item => item.trim()) 
//       };
//       await axios.post("http://localhost:5004/api/dealers", formattedDealer);
//       alert("Dealer added successfully!");
//       setNewDealer({ name: "", address: "", city: "", state: "", zip: "", contact: "", availableProducts: "", vehicleType: "" });
//       fetchDealers();
//     } catch (error) {
//       console.error("Error adding dealer:", error);
//       alert("Failed to add dealer.");
//     }
//   };

//   const handleDeleteDealer = async (dealerId) => {
//     if (!window.confirm("Are you sure you want to delete this dealer?")) return;
//     try {
//       const response = await axios.delete(`http://localhost:5004/api/dealers/${dealerId}`);
//       console.log("Deleting dealer with ID:", dealerId);
//       alert("Dealer deleted successfully!");
//       fetchDealers();  // Refresh list
//     } catch (error) {
//       console.error("Error deleting dealer:", error.response?.data || error.message);
//       alert("Failed to delete dealer.");
//     }
// };


//   const handleEditDealer = (dealer) => {
//     setEditingDealer({ ...dealer, availableProducts: dealer.availableProducts.join(", ") });
//   };

//   const handleUpdateDealer = async () => {
//     try {
//       const updatedDealer = { 
//         ...editingDealer, 
//         availableProducts: editingDealer.availableProducts.split(",").map(item => item.trim()) 
//       };
//       await axios.put(`http://localhost:5004/api/dealers/${editingDealer._id}, updatedDealer`);
//       alert("Dealer updated successfully!");
//       setEditingDealer(null);
//       fetchDealers();
//     } catch (error) {
//       console.error("Error updating dealer:", error);
//       alert("Failed to update dealer.");
//     }
//   };

//   return (
//     <div className="space-y-6 p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Manage Dealership Locations</h2>

//       {/* Search Filters */}
//       <div className="grid grid-cols-2 gap-4">
//         {["city", "state", "zip"].map((field) => (
//           <input key={field} type="text" name={field} value={searchQuery[field]} onChange={(e) => handleInputChange(e, setSearchQuery)} placeholder={`Search by ${field.charAt(0).toUpperCase() + field.slice(1)}`} className="p-2 border rounded-md" />
//         ))}
//         <select name="vehicleType" value={searchQuery.vehicleType} onChange={(e) => handleInputChange(e, setSearchQuery)} className="p-2 border rounded-md">
//           <option value="">All Types</option>
//           <option value="New">New</option>
//           <option value="Used">Used</option>
//           <option value="Brand">Specific Brand</option>
//         </select>
//         <button onClick={fetchDealers} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 col-span-2">
//           <FontAwesomeIcon icon={faSearch} className="mr-2" />Search Dealers
//         </button>
//       </div>

//       {/* Dealer List */}
//       <ul className="space-y-3">
//         {locations.map((dealer) => (
//           <li key={dealer._id} className="p-3 border rounded-md flex justify-between items-center">
//             {editingDealer && editingDealer._id === dealer._id ? (
//               <div className="w-full">
//                 {Object.keys(newDealer).map((field) => (
//                   <input key={field} type="text" name={field} value={editingDealer[field]} onChange={(e) => handleInputChange(e, setEditingDealer)} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className="p-2 border rounded-md w-full mb-2" />
//                 ))}
//                 <div className="flex space-x-2">
//                   <button onClick={handleUpdateDealer} className="px-3 py-1 bg-green-500 text-white rounded">
//                     <FontAwesomeIcon icon={faSave} className="mr-1" /> Save
//                   </button>
//                   <button onClick={() => setEditingDealer(null)} className="px-3 py-1 bg-gray-500 text-white rounded">
//                     <FontAwesomeIcon icon={faTimes} className="mr-1" /> Cancel
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex justify-between w-full">
//                 <div>
//                   <h4 className="font-semibold">{dealer.name}</h4>
//                   <p>{dealer.address}, {dealer.city}, {dealer.state}, {dealer.zip}</p>
//                   <p><FontAwesomeIcon icon={faPhone} className="mr-2" /> {dealer.contact}</p>
//                   <p><FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Products: {dealer.availableProducts.join(", ")}</p>
//                   <p><FontAwesomeIcon icon={faCar} className="mr-2" /> Vehicle Type: {dealer.vehicleType}</p>
//                 </div>
//                 <div className="space-x-2">
//                   <button onClick={() => handleEditDealer(dealer)} className="px-3 py-1 bg-yellow-500 text-white rounded">
//                     <FontAwesomeIcon icon={faEdit} className="mr-1" /> Edit
//                   </button>
//                   <button onClick={() => handleDeleteDealer(dealer._id)} className="px-3 py-1 bg-red-500 text-white rounded">
//                     <FontAwesomeIcon icon={faTrash} className="mr-1" /> Delete
//                   </button>
//                 </div>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Add New Dealer */}
//       <div className="mt-6">
//         <h3 className="text-xl font-semibold mb-3">Add New Dealer</h3>
//         <div className="grid grid-cols-2 gap-4">
//           {Object.keys(newDealer).map((field) => (
//             <input key={field} type="text" name={field} value={newDealer[field]} onChange={(e) => handleInputChange(e, setNewDealer)} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className="p-2 border rounded-md" />
//           ))}
//           <button onClick={handleAddDealer} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 col-span-2">
//             <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Dealer
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DealerSettings;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEdit, faTrash, faPhone, faCar, faShoppingCart, faPlus, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

const DealerSettings = () => {
  const [locations, setLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState({ city: "", state: "", zip: "", vehicleType: "" });
  const [newDealer, setNewDealer] = useState({ 
    name: "", address: "", city: "", state: "", zip: "", contact: "", 
    availableProducts: "", vehicleType: "" 
  });
  const [editingDealer, setEditingDealer] = useState(null);

  useEffect(() => {
    fetchDealers();
  }, []);

  const fetchDealers = async () => {
    try {
      const response = await axios.get("http://localhost:5004/api/dealers", { params: searchQuery });
      setLocations(response.data);
    } catch (error) {
      console.error("Error fetching dealers:", error);
      alert("Failed to fetch dealers.");
    }
  };

  const handleInputChange = (e, stateUpdater) => {
    stateUpdater(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddDealer = async () => {
    try {
      const formattedDealer = { 
        ...newDealer, 
        availableProducts: newDealer.availableProducts.split(",").map(item => item.trim()) 
      };
      await axios.post("http://localhost:5004/api/dealers", formattedDealer);
      alert("Dealer added successfully!");
      setNewDealer({ name: "", address: "", city: "", state: "", zip: "", contact: "", availableProducts: "", vehicleType: "" });
      fetchDealers();
    } catch (error) {
      console.error("Error adding dealer:", error);
      alert("Failed to add dealer.");
    }
  };

  const handleDeleteDealer = async (dealerId) => {
    if (!window.confirm("Are you sure you want to delete this dealer?")) return;
    try {
      const response = await axios.delete(`http://localhost:5004/api/dealers/${dealerId}`);
      console.log("Deleting dealer with ID:", dealerId);
      alert("Dealer deleted successfully!");
      fetchDealers();  // Refresh list
    } catch (error) {
      console.error("Error deleting dealer:", error.response?.data || error.message);
      alert("Failed to delete dealer.");
    }
};


  const handleEditDealer = (dealer) => {
    setEditingDealer({ ...dealer, availableProducts: dealer.availableProducts.join(", ") });
  };

  const handleUpdateDealer = async () => {
    try {
      const updatedDealer = { 
        ...editingDealer, 
        availableProducts: editingDealer.availableProducts.split(",").map(item => item.trim()) 
      };
      await axios.put(`http://localhost:5004/api/dealers/${editingDealer._id}, updatedDealer`);
      alert("Dealer updated successfully!");
      setEditingDealer(null);
      fetchDealers();
    } catch (error) {
      console.error("Error updating dealer:", error);
      alert("Failed to update dealer.");
    }
  };

  return (
    <div className="space-y-6 p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Manage Dealership Locations</h2>

      {/* Search Filters */}
      <div className="grid grid-cols-2 gap-4">
        {["city", "state", "zip"].map((field) => (
          <input key={field} type="text" name={field} value={searchQuery[field]} onChange={(e) => handleInputChange(e, setSearchQuery)} placeholder={`Search by ${field.charAt(0).toUpperCase() + field.slice(1)}`} className="p-2 border rounded-md" />
        ))}
        <select name="vehicleType" value={searchQuery.vehicleType} onChange={(e) => handleInputChange(e, setSearchQuery)} className="p-2 border rounded-md">
          <option value="">All Types</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
          <option value="Brand">Specific Brand</option>
        </select>
        <button onClick={fetchDealers} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 col-span-2">
          <FontAwesomeIcon icon={faSearch} className="mr-2" />Search Dealers
        </button>
      </div>

      {/* Dealer List */}
      <ul className="space-y-3">
        {locations.map((dealer) => (
          <li key={dealer._id} className="p-3 border rounded-md flex justify-between items-center">
            {editingDealer && editingDealer._id === dealer._id ? (
              <div className="w-full">
                {Object.keys(newDealer).map((field) => (
                  <input key={field} type="text" name={field} value={editingDealer[field]} onChange={(e) => handleInputChange(e, setEditingDealer)} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className="p-2 border rounded-md w-full mb-2" />
                ))}
                <div className="flex space-x-2">
                  <button onClick={handleUpdateDealer} className="px-3 py-1 bg-green-500 text-white rounded">
                    <FontAwesomeIcon icon={faSave} className="mr-1" /> Save
                  </button>
                  <button onClick={() => setEditingDealer(null)} className="px-3 py-1 bg-gray-500 text-white rounded">
                    <FontAwesomeIcon icon={faTimes} className="mr-1" /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between w-full">
                <div>
                  <h4 className="font-semibold">{dealer.name}</h4>
                  <p>{dealer.address}, {dealer.city}, {dealer.state}, {dealer.zip}</p>
                  <p><FontAwesomeIcon icon={faPhone} className="mr-2" /> {dealer.contact}</p>
                  <p><FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Products: {dealer.availableProducts.join(", ")}</p>
                  <p><FontAwesomeIcon icon={faCar} className="mr-2" /> Vehicle Type: {dealer.vehicleType}</p>
                </div>
                <div className="space-x-2">
                  <button onClick={() => handleEditDealer(dealer)} className="px-3 py-1 bg-yellow-500 text-white rounded">
                    <FontAwesomeIcon icon={faEdit} className="mr-1" /> Edit
                  </button>
                  <button onClick={() => handleDeleteDealer(dealer._id)} className="px-3 py-1 bg-red-500 text-white rounded">
                    <FontAwesomeIcon icon={faTrash} className="mr-1" /> Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Add New Dealer */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">Add New Dealer</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(newDealer).map((field) => (
            <input key={field} type="text" name={field} value={newDealer[field]} onChange={(e) => handleInputChange(e, setNewDealer)} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className="p-2 border rounded-md" />
          ))}
          <button onClick={handleAddDealer} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 col-span-2">
            <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Dealer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealerSettings;