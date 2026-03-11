// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const API_URL = "http://localhost:5003/vehicles";

// // const VehicleManagement = () => {
// //   const [vehicles, setVehicles] = useState([]);
// //   const [newVehicle, setNewVehicle] = useState({
// //     name: "",
// //     type: "",
// //     price: "",
// //     availability: true,
// //     image: null,
// //   });
// //   const [editVehicle, setEditVehicle] = useState(null);

// //   useEffect(() => {
// //     fetchVehicles();
// //   }, []);

// //   const fetchVehicles = () => {
// //     axios.get(API_URL)
// //       .then((res) => {
// //         if (Array.isArray(res.data.vehicles)) {
// //           setVehicles(res.data.vehicles);
// //         } else {
// //           console.error("Unexpected API response:", res.data);
// //         }
// //       })
// //       .catch(console.error);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     if (editVehicle) {
// //       setEditVehicle((prev) => ({ ...prev, [name]: value }));
// //     } else {
// //       setNewVehicle((prev) => ({ ...prev, [name]: value }));
// //     }
// //   };

// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         if (editVehicle) {
// //           setEditVehicle((prev) => ({ ...prev, image: reader.result }));
// //         } else {
// //           setNewVehicle((prev) => ({ ...prev, image: reader.result }));
// //         }
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleAddVehicle = () => {
// //     axios.post(API_URL, newVehicle)
// //       .then((res) => {
// //         setVehicles((prev) => [...prev, res.data.vehicle]);
// //         setNewVehicle({ name: "", type: "", price: "", availability: true, image: null });
// //       })
// //       .catch(console.error);
// //   };

// //   const handleEditVehicle = (vehicle) => {
// //     setEditVehicle({ ...vehicle });
// //   };

// //   const handleSaveEdit = async () => {
// //     if (!editVehicle || !editVehicle._id) {
// //       console.error("Invalid vehicle for editing.");
// //       return;
// //     }

// //     try {
// //       const response = await axios.put(`${API_URL}/${editVehicle._id}`, editVehicle);

// //       if (response.status === 200) {
// //         setVehicles((prev) =>
// //           prev.map((v) => (v._id === response.data.vehicle._id ? response.data.vehicle : v))
// //         );
// //         setEditVehicle(null);
// //       } else {
// //         console.error("Failed to update vehicle:", response.data);
// //       }
// //     } catch (error) {
// //       console.error("Error updating vehicle:", error);
// //     }
// //   };

// //   const handleDeleteVehicle = async (id) => {
// //     try {
// //       const response = await axios.delete(`${API_URL}/${id}`);
// //       if (response.status === 200) {
// //         setVehicles((prev) => prev.filter((v) => v._id !== id));
// //       } else {
// //         console.error("Failed to delete vehicle:", response.data);
// //       }
// //     } catch (error) {
// //       console.error("Error deleting vehicle:", error);
// //     }
// //   };

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Vehicle Management</h2>
      
// //       <div className="mb-6 bg-white p-6 rounded-lg shadow-lg">
// //         <h3 className="text-2xl mb-4">{editVehicle ? "Edit Vehicle" : "Add New Vehicle"}</h3>
// //         <input type="text" name="name" placeholder="Vehicle Name" className="border p-2 w-full mb-2" onChange={handleChange} value={editVehicle ? editVehicle.name : newVehicle.name} />
// //         <input type="text" name="type" placeholder="Vehicle Type" className="border p-2 w-full mb-2" onChange={handleChange} value={editVehicle ? editVehicle.type : newVehicle.type} />
// //         <input type="number" name="price" placeholder="Price" className="border p-2 w-full mb-2" onChange={handleChange} value={editVehicle ? editVehicle.price : newVehicle.price} />
// //         <input type="file" accept="image/*" className="border p-2 w-full mb-2" onChange={handleImageUpload} />

// //         {editVehicle ? (
// //           <div>
// //             <button onClick={handleSaveEdit} className="bg-green-500 text-white px-6 py-3 rounded-md mr-2">Save Changes</button>
// //             <button onClick={() => setEditVehicle(null)} className="bg-gray-500 text-white px-6 py-3 rounded-md">Cancel</button>
// //           </div>
// //         ) : (
// //           <button onClick={handleAddVehicle} className="bg-blue-500 text-white px-6 py-3 rounded-md">Add Vehicle</button>
// //         )}
// //       </div>

// //       <table className="w-full border-collapse border border-gray-300 mb-6">
// //         <thead>
// //           <tr className="bg-gray-100">
// //             <th className="border p-2">Image</th>
// //             <th className="border p-2">Name</th>
// //             <th className="border p-2">Type</th>
// //             <th className="border p-2">Price</th>
// //             <th className="border p-2">Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {vehicles.map((vehicle) => (
// //             <tr key={vehicle._id} className="border">
// //               <td className="p-2">
// //                 {vehicle.image ? <img src={vehicle.image} alt={vehicle.name} className="h-16 w-24 object-cover rounded" /> : "No Image"}
// //               </td>
// //               <td className="p-2">{vehicle.name}</td>
// //               <td className="p-2">{vehicle.type}</td>
// //               <td className="p-2">{vehicle.price}</td>
// //               <td className="p-2">
// //                 <button onClick={() => handleEditVehicle(vehicle)} className="bg-yellow-500 text-white px-3 py-1 mr-2">Edit</button>
// //                 <button onClick={() => handleDeleteVehicle(vehicle._id)} className="bg-red-500 text-white px-3 py-1">Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default VehicleManagement;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:5003/vehicles";

// const VehicleManagement = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [newVehicle, setNewVehicle] = useState({
//     name: "",
//     type: "",
//     price: "",
//     availability: true,
//     image: null,
//   });
//   const [editVehicle, setEditVehicle] = useState(null);

//   useEffect(() => {
//     const storedVehicles = localStorage.getItem('vehicles');
//     if (storedVehicles) {
//       setVehicles(JSON.parse(storedVehicles)); // Load from local storage
//     }
//     fetchVehicles(); // Fetch from API
//   }, []);
  

//   const fetchVehicles = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       if (response.data.vehicles && Array.isArray(response.data.vehicles)) {
//         setVehicles(response.data.vehicles);
//         localStorage.setItem('vehicles', JSON.stringify(response.data.vehicles)); // Store in local storage
//       } else {
//         console.error("Unexpected API response:", response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching vehicles:", error);
//     }
//   };
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (editVehicle) {
//       setEditVehicle((prev) => ({ ...prev, [name]: value }));
//     } else {
//       setNewVehicle((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         if (editVehicle) {
//           setEditVehicle((prev) => ({ ...prev, image: reader.result }));
//         } else {
//           setNewVehicle((prev) => ({ ...prev, image: reader.result }));
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAddVehicle = async () => {
//     try {
//       const response = await axios.post(API_URL, newVehicle);
//       if (response.data.vehicle) {
//         const updatedVehicles = [...vehicles, response.data.vehicle];
//         setVehicles(updatedVehicles);
//         localStorage.setItem('vehicles', JSON.stringify(updatedVehicles)); // Update local storage
//         setNewVehicle({ name: "", type: "", price: "", availability: true, image: null });
//       } else {
//         console.error("Failed to add vehicle:", response.data);
//       }
//     } catch (error) {
//       console.error("Error adding vehicle:", error);
//     }
//   };
  
//   const handleEditVehicle = (vehicle) => {
//     setEditVehicle({ ...vehicle });
//   };

//   const handleSaveEdit = async () => {
//     if (!editVehicle || !editVehicle._id) {
//       console.error("Invalid vehicle for editing.");
//       return;
//     }
  
//     try {
//       const response = await axios.put(`${API_URL}/${editVehicle._id}`, editVehicle);
//       if (response.status === 200 && response.data.vehicle) {
//         const updatedVehicles = vehicles.map((v) =>
//           v._id === response.data.vehicle._id ? response.data.vehicle : v
//         );
//         setVehicles(updatedVehicles);
//         localStorage.setItem('vehicles', JSON.stringify(updatedVehicles)); // Update local storage
//         setEditVehicle(null);
//       } else {
//         console.error("Failed to update vehicle:", response.data);
//       }
//     } catch (error) {
//       console.error("Error updating vehicle:", error);
//     }
//   };
  

//   const handleDeleteVehicle = async (id) => {
//     try {
//       const response = await axios.delete(`${API_URL}/${id}`);
//       if (response.status === 200) {
//         const updatedVehicles = vehicles.filter((v) => v._id !== id);
//         setVehicles(updatedVehicles);
//         localStorage.setItem('vehicles', JSON.stringify(updatedVehicles)); // Update local storage
//       } else {
//         console.error("Failed to delete vehicle:", response.data);
//       }
//     } catch (error) {
//       console.error("Error deleting vehicle:", error);
//     }
//   };
   

//   // Load vehicles from local storage on component mount
//   useEffect(() => {
//     const storedVehicles = localStorage.getItem('vehicles');
//     if (storedVehicles) {
//       setVehicles(JSON.parse(storedVehicles));
//     }
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Vehicle Management</h2>
      
//       <div className="mb-6 bg-white p-6 rounded-lg shadow-lg">
//         <h3 className="text-2xl mb-4">{editVehicle ? "Edit Vehicle" : "Add New Vehicle"}</h3>
//         <input type="text" name="name" placeholder="Vehicle Name" className="border p-2 w-full mb-2" onChange={handleChange} value={editVehicle ? editVehicle.name : newVehicle.name} />
//         <input type="text" name="type" placeholder="Vehicle Type" className="border p-2 w-full mb-2" onChange={handleChange} value={editVehicle ? editVehicle.type : newVehicle.type} />
//         <input type="number" name="price" placeholder="Price" className="border p-2 w-full mb-2" onChange={handleChange} value={editVehicle ? editVehicle.price : newVehicle.price} />
//         <input type="file" accept="image/*" className="border p-2 w-full mb-2" onChange={handleImageUpload} />

//         {editVehicle ? (
//           <div>
//             <button onClick={handleSaveEdit} className="bg-green-500 text-white px-6 py-3 rounded-md mr-2">Save Changes</button>
//             <button onClick={() => setEditVehicle(null)} className="bg-gray-500 text-white px-6 py-3 rounded-md">Cancel</button>
//           </div>
//         ) : (
//           <button onClick={handleAddVehicle} className="bg-blue-500 text-white px-6 py-3 rounded-md">Add Vehicle</button>
//         )}
//       </div>

//       <table className="w-full border-collapse border border-gray-300 mb-6">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">Image</th>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Type</th>
//             <th className="border p-2">Price</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vehicles.map((vehicle) => (
//             <tr key={vehicle._id} className="border">
//               <td className="p-2">
//                 {vehicle.image ? <img src={vehicle.image} alt={vehicle.name} className="h-16 w-24 object-cover rounded" /> : "No Image"}
//               </td>
//               <td className="p-2">{vehicle.name}</td>
//               <td className="p-2">{vehicle.type}</td>
//               <td className="p-2">{vehicle.price}</td>
//               <td className="p-2">
//                 <button onClick={() => handleEditVehicle(vehicle)} className="bg-yellow-500 text-white px-3 py-1 mr-2">Edit</button>
//                 <button onClick={() => handleDeleteVehicle(vehicle._id)} className="bg-red-500 text-white px-3 py-1">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default VehicleManagement;

import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5003/vehicles";

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({
    name: "",
    type: "",
    price: "",
    availability: true,
    image: null,
  });
  const [editVehicle, setEditVehicle] = useState(null);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = () => {
    axios.get(API_URL)
      .then((res) => {
        if (Array.isArray(res.data.vehicles)) {
          setVehicles(res.data.vehicles);
        } else {
          console.error("Unexpected API response:", res.data);
        }
      })
      .catch(console.error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editVehicle) {
      setEditVehicle((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewVehicle((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (editVehicle) {
          setEditVehicle((prev) => ({ ...prev, image: reader.result }));
        } else {
          setNewVehicle((prev) => ({ ...prev, image: reader.result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddVehicle = () => {
    axios.post(API_URL, newVehicle)
      .then((res) => {
        setVehicles((prev) => [...prev, res.data.vehicle]);
        setNewVehicle({ name: "", type: "", price: "", availability: true, image: null });
      })
      .catch(console.error);
  };

  const handleEditVehicle = (vehicle) => {
    setEditVehicle({ ...vehicle });
  };

  const handleSaveEdit = async () => {
    if (!editVehicle || !editVehicle._id) {
      console.error("Invalid vehicle for editing.");
      return;
    }

    try {
      const response = await axios.put(`${API_URL}/${editVehicle._id}, editVehicle`);

      if (response.status === 200) {
        setVehicles((prev) =>
          prev.map((v) => (v._id === response.data.vehicle._id ? response.data.vehicle : v))
        );
        setEditVehicle(null);
      } else {
        console.error("Failed to update vehicle:", response.data);
      }
    } catch (error) {
      console.error("Error updating vehicle:", error);
    }
  };

  const handleDeleteVehicle = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      if (response.status === 200) {
        setVehicles((prev) => prev.filter((v) => v._id !== id));
      } else {
        console.error("Failed to delete vehicle:", response.data);
      }
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Vehicle Management</h2>
      
      <div className="mb-6 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl mb-4">{editVehicle ? "Edit Vehicle" : "Add New Vehicle"}</h3>
        <input type="text" name="name" placeholder="Vehicle Name" className="border p-2 w-full mb-2" onChange={handleChange} value={editVehicle ? editVehicle.name : newVehicle.name} />
        <input type="text" name="type" placeholder="Vehicle Type" className="border p-2 w-full mb-2" onChange={handleChange} value={editVehicle ? editVehicle.type : newVehicle.type} />
        <input type="number" name="price" placeholder="Price" className="border p-2 w-full mb-2" onChange={handleChange} value={editVehicle ? editVehicle.price : newVehicle.price} />
        <input type="file" accept="image/*" className="border p-2 w-full mb-2" onChange={handleImageUpload} />

        {editVehicle ? (
          <div>
            <button onClick={handleSaveEdit} className="bg-green-500 text-white px-6 py-3 rounded-md mr-2">Save Changes</button>
            <button onClick={() => setEditVehicle(null)} className="bg-gray-500 text-white px-6 py-3 rounded-md">Cancel</button>
          </div>
        ) : (
          <button onClick={handleAddVehicle} className="bg-blue-500 text-white px-6 py-3 rounded-md">Add Vehicle</button>
        )}
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle._id} className="border">
              <td className="p-2">
                {vehicle.image ? <img src={vehicle.image} alt={vehicle.name} className="h-16 w-24 object-cover rounded" /> : "No Image"}
              </td>
              <td className="p-2">{vehicle.name}</td>
              <td className="p-2">{vehicle.type}</td>
              <td className="p-2">{vehicle.price}</td>
              <td className="p-2">
                <button onClick={() => handleEditVehicle(vehicle)} className="bg-yellow-500 text-white px-3 py-1 mr-2">Edit</button>
                <button onClick={() => handleDeleteVehicle(vehicle._id)} className="bg-red-500 text-white px-3 py-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleManagement;