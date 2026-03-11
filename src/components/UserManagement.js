// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";

// const UserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState('');
//   const [roleFilter, setRoleFilter] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [editedUser, setEditedUser] = useState(null);
//   const usersPerPage = 5;

//   const sampleUsers = [
//     { id: 1, name: "John Doe", email: "john.doe@example.com", role: "user" },
//     { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "admin" },
//     { id: 3, name: "Mike Johnson", email: "mike.johnson@example.com", role: "user" },
//     { id: 4, name: "Emma Brown", email: "emma.brown@example.com", role: "user" },
//     { id: 5, name: "Chris Wilson", email: "chris.wilson@example.com", role: "admin" },
//   ];

//   useEffect(() => {
//     setUsers(sampleUsers);
//   }, []);

//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(search.toLowerCase()) &&
//     (roleFilter ? user.role === roleFilter : true)
//   );

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUser(prevUser => ({ ...prevUser, [name]: value }));
//   };

//   const handleEdit = (user) => {
//     setEditingUserId(user.id);
//     setEditedUser({ ...user });
//   };

//   const handleSaveEdit = () => {
//     setUsers(users.map(user =>
//       user.id === editingUserId ? { ...user, ...editedUser } : user
//     ));
//     setEditingUserId(null);
//     alert(`User ${editedUser.name} updated successfully!`);
//   };

//   const handleCancelEdit = () => {
//     setEditingUserId(null);
//     setEditedUser(null);
//   };

//   const handleDelete = (id) => {
//     setUsers(users.filter(user => user.id !== id));
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <Sidebar onToggle={setIsSidebarCollapsed} />

//       <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">User Management</h2>

//         {/* Search & Filter */}
//         <div className="flex justify-center gap-4 mb-6">
//           <input
//             type="text"
//             placeholder="Search by name"
//             className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <select
//             className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={roleFilter}
//             onChange={(e) => setRoleFilter(e.target.value)}
//           >
//             <option value="">Filter by Role</option>
//             <option value="admin">Admin</option>
//             <option value="user">User</option>
//           </select>
//         </div>

//         {/* User Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full table-auto border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-blue-50 text-blue-800">
//                 <th className="px-6 py-3 border">Name</th>
//                 <th className="px-6 py-3 border">Email</th>
//                 <th className="px-6 py-3 border">Role</th>
//                 <th className="px-6 py-3 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentUsers.map(user => (
//                 <tr key={user.id} className="odd:bg-white even:bg-gray-50 hover:bg-orange-100">
//                   <td className="px-6 py-4 border">
//                     {editingUserId === user.id ? (
//                       <input
//                         type="text"
//                         name="name"
//                         value={editedUser?.name || ""}
//                         onChange={handleInputChange}
//                         className="px-3 py-2 border rounded-md w-full"
//                       />
//                     ) : (
//                       user.name
//                     )}
//                   </td>
//                   <td className="px-6 py-4 border">
//                     {editingUserId === user.id ? (
//                       <input
//                         type="email"
//                         name="email"
//                         value={editedUser?.email || ""}
//                         onChange={handleInputChange}
//                         className="px-3 py-2 border rounded-md w-full"
//                       />
//                     ) : (
//                       user.email
//                     )}
//                   </td>
//                   <td className="px-6 py-4 border">
//                     {editingUserId === user.id ? (
//                       <select
//                         name="role"
//                         value={editedUser?.role || ""}
//                         onChange={handleInputChange}
//                         className="px-3 py-2 border rounded-md w-full"
//                       >
//                         <option value="admin">Admin</option>
//                         <option value="user">User</option>
//                       </select>
//                     ) : (
//                       user.role
//                     )}
//                   </td>
//                   <td className="px-6 py-4 border text-center">
//                     {editingUserId === user.id ? (
//                       <div className="flex justify-center space-x-2">
//                         <button
//                           onClick={handleSaveEdit}
//                           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={handleCancelEdit}
//                           className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     ) : (
//                       <div className="flex justify-center space-x-2">
//                         <button
//                           onClick={() => handleEdit(user)}
//                           className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(user.id)}
//                           className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* No users found */}
//         {filteredUsers.length === 0 && (
//           <div className="mt-6 text-center text-gray-500">
//             <p>No users found matching your search and filter criteria.</p>
//           </div>
//         )}

//         {/* Pagination */}
//         <div className="flex justify-center space-x-2 mt-6">
//           {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => paginate(i + 1)}
//               className={`px-4 py-2 rounded-md ${
//                 currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
//               } hover:bg-blue-400`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;