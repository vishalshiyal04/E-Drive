// import React from 'react';

// const Help = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4">
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Help & Support</h1>
        
//         {/* Contact Support Section */}
//         <section className="mb-8">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Support</h2>
//           <p className="text-gray-600">
//             If you have any issues or need assistance, please feel free to contact our support team:
//           </p>
//           <ul className="list-disc pl-5 text-gray-600">
//             <li>Email: <a href="mailto:support@platform.com" className="text-blue-500 hover:underline">E-Drive11@gmail.com</a></li>
//             <li>Phone: +91 88660 13794</li>
//             <li>Live Chat: Available on our website during business hours</li>
//           </ul>
//         </section>

//         {/* FAQs Section */}
//         <section className="mb-8">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
//           <div className="space-y-4">
//             <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
//               <p className="font-semibold text-gray-800">How do I reset my password?</p>
//               <p className="text-gray-600">To reset your password, go to the login page and click on "Forgot Password". Follow the instructions in the email you receive.</p>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
//               <p className="font-semibold text-gray-800">How can I update my payment details?</p>
//               <p className="text-gray-600">You can update your payment details in the "Account Settings" section under the "Payment Information" tab.</p>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
//               <p className="font-semibold text-gray-800">Can I change my email address?</p>
//               <p className="text-gray-600">Yes, you can update your email address under the "Profile Settings" section. A confirmation email will be sent to the new address.</p>
//             </div>
//           </div>
//         </section>

//         {/* Documentation Section */}
//         <section className="mb-8">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Documentation</h2>
//           <p className="text-gray-600 mb-4">
//             For detailed documentation and guides on using the platform, visit our knowledge base:
//           </p>
//           <a
//             href="https://www.example.com/docs" // Replace with your actual docs URL
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 hover:underline"
//           >
//             Visit Documentation
//           </a>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Help;

import React from 'react';

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Help & Support</h1>
        
        {/* Contact Support Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Support</h2>
          <p className="text-gray-600">
            If you have any issues or need assistance, please feel free to contact our support team:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Email: <a href="mailto:support@platform.com" className="text-blue-500 hover:underline">E-Drive11@gmail.com</a></li>
            <li>Phone: +91 88660 13794</li>
            <li>Live Chat: Available on our website during business hours</li>
          </ul>
        </section>

        {/* FAQs Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-800">How do I reset my password?</p>
              <p className="text-gray-600">To reset your password, go to the login page and click on "Forgot Password". Follow the instructions in the email you receive.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-800">How can I update my payment details?</p>
              <p className="text-gray-600">You can update your payment details in the "Account Settings" section under the "Payment Information" tab.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-800">Can I change my email address?</p>
              <p className="text-gray-600">Yes, you can update your email address under the "Profile Settings" section. A confirmation email will be sent to the new address.</p>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Documentation</h2>
          <p className="text-gray-600 mb-4">
            For detailed documentation and guides on using the platform, visit our knowledge base:
          </p>
          <a
            href="https://www.example.com/docs" // Replace with your actual docs URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Documentation
          </a>
        </section>
      </div>
    </div>
  );
};

export default Help;