// import React, { useState } from "react";

// const Notifications = () => {
//   // Sample notifications data
//   const notificationsData = [
//     {
//       id: 1,
//       message: "New order placed by user John Doe.",
//       type: "order",
//       isRead: false,
//     },
//     {
//       id: 2,
//       message: "New user registered: Alice Smith.",
//       type: "registration",
//       isRead: true,
//     },
//     {
//       id: 3,
//       message: "Order #1243 has been shipped.",
//       type: "order",
//       isRead: false,
//     },
//     {
//       id: 4,
//       message: "Order #111 has been shipped.",
//       type: "canceled",
//       isRead: false,
//     },
//   ];

//   // State for notifications
//   const [notifications, setNotifications] = useState(notificationsData);

//   // Mark notification as read/unread
//   const toggleReadStatus = (id) => {
//     setNotifications((prevNotifications) =>
//       prevNotifications.map((notification) =>
//         notification.id === id
//           ? { ...notification, isRead: !notification.isRead }
//           : notification
//       )
//     );
//   };

//   // Function to simulate sending an email (In reality, this would require backend integration)
//   const sendEmailNotification = (message) => {
//     console.log(`Sending email: ${message}`);
//     // In a real app, here you'd make an API call to notify via email
//   };

//   // Simulate an email notification when a new order is placed
//   const handleNewOrderNotification = () => {
//     sendEmailNotification("New order placed! Notify admins.");
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Notifications</h2>

//       <div className="space-y-4">
//         {notifications.map((notification) => (
//           <div
//             key={notification.id}
//             className={`p-4 rounded-lg shadow-sm ${
//               notification.isRead ? "bg-gray-100" : "bg-blue-50"
//             } flex justify-between items-center`}
//           >
//             <div>
//               <p className="text-sm text-gray-700">{notification.message}</p>
//               <p className="text-xs text-gray-500">
//                 Type: {notification.type}
//               </p>
//             </div>

//             <div>
//               <button
//                 className={`px-3 py-1 text-xs rounded-full ${
//                   notification.isRead
//                     ? "bg-gray-400 text-white"
//                     : "bg-blue-500 text-white"
//                 }`}
//                 onClick={() => toggleReadStatus(notification.id)}
//               >
//                 {notification.isRead ? "Mark as Unread" : "Mark as Read"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Simulate email notification for new order */}
//       <button
//         onClick={handleNewOrderNotification}
//         className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
//       >
//         Simulate New Order Email Notification
//       </button>
//     </div>
//   );
// };

// export default Notifications;

import React, { useState } from "react";

const Notifications = () => {
  // Sample notifications data
  const notificationsData = [
    {
      id: 1,
      message: "New order placed by user John Doe.",
      type: "order",
      isRead: false,
    },
    {
      id: 2,
      message: "New user registered: Alice Smith.",
      type: "registration",
      isRead: true,
    },
    {
      id: 3,
      message: "Order #1243 has been shipped.",
      type: "order",
      isRead: false,
    },
    {
      id: 4,
      message: "Order #111 has been shipped.",
      type: "canceled",
      isRead: false,
    },
  ];

  // State for notifications
  const [notifications, setNotifications] = useState(notificationsData);

  // Mark notification as read/unread
  const toggleReadStatus = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: !notification.isRead }
          : notification
      )
    );
  };

  // Function to simulate sending an email (In reality, this would require backend integration)
  const sendEmailNotification = (message) => {
    console.log(`Sending email: ${message}`);
    // In a real app, here you'd make an API call to notify via email
  };

  // Simulate an email notification when a new order is placed
  const handleNewOrderNotification = () => {
    sendEmailNotification("New order placed! Notify admins.");
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg shadow-sm ${
              notification.isRead ? "bg-gray-100" : "bg-blue-50"
            } flex justify-between items-center`}
          >
            <div>
              <p className="text-sm text-gray-700">{notification.message}</p>
              <p className="text-xs text-gray-500">
                Type: {notification.type}
              </p>
            </div>

            <div>
              <button
                className={`px-3 py-1 text-xs rounded-full ${
                  notification.isRead
                    ? "bg-gray-400 text-white"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() => toggleReadStatus(notification.id)}
              >
                {notification.isRead ? "Mark as Unread" : "Mark as Read"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Simulate email notification for new order */}
      <button
        onClick={handleNewOrderNotification}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Simulate New Order Email Notification
      </button>
    </div>
  );
};

export default Notifications;