// import React from 'react';
// import { Mail, MessageCircle } from 'lucide-react'; // For icons

// const FeedbackForm = () => {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center p-10">
//             <div className="flex flex-col lg:flex-row gap-10 items-center max-w-5xl w-full">
                
//                 {/* Left Section */}
//                 <div className="flex-1 text-center lg:text-left">
//                     <h4 className="text-yellow-400 uppercase text-sm font-bold tracking-widest">Review</h4>
//                     <h1 className="text-5xl font-extrabold mt-2 leading-snug">We'd love your feedback!</h1>
//                     <p className="mt-4 text-gray-400">
//                         Share your thoughts and suggestions with us. Your insights help us grow!
//                     </p>
//                 </div>

//                 {/* Right Section - Form */}
//                 <div className="flex-1 bg-white text-black rounded-2xl shadow-2xl p-8">
//                     <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//                         <MessageCircle className="text-yellow-400" /> Got a suggestion?
//                     </h2>

//                     <form className="space-y-5">
//                         <div>
//                             <label htmlFor="email" className="text-sm font-bold text-gray-500 block mb-2">
//                                 EMAIL
//                             </label>
//                             <div className="relative">
//                                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     className="w-full p-3 pl-10 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//                                     placeholder="Enter your email"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="message" className="text-sm font-bold text-gray-500 block mb-2">
//                                 MESSAGE
//                             </label>
//                             <textarea
//                                 id="message"
//                                 rows="4"
//                                 className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//                                 placeholder="Write your message here..."
//                                 required
//                             ></textarea>
//                         </div>

//                         <button
//                             type="submit"
//                             className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg w-full hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
//                         >
//                             SUBMIT FEEDBACK
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FeedbackForm;

import React from 'react';
import { Mail, MessageCircle } from 'lucide-react'; // For icons

const FeedbackForm = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center p-10">
            <div className="flex flex-col lg:flex-row gap-10 items-center max-w-5xl w-full">
                
                {/* Left Section */}
                <div className="flex-1 text-center lg:text-left">
                    <h4 className="text-yellow-400 uppercase text-sm font-bold tracking-widest">Review</h4>
                    <h1 className="text-5xl font-extrabold mt-2 leading-snug">We'd love your feedback!</h1>
                    <p className="mt-4 text-gray-400">
                        Share your thoughts and suggestions with us. Your insights help us grow!
                    </p>
                </div>

                {/* Right Section - Form */}
                <div className="flex-1 bg-white text-black rounded-2xl shadow-2xl p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <MessageCircle className="text-yellow-400" /> Got a suggestion?
                    </h2>

                    <form className="space-y-5">
                        <div>
                            <label htmlFor="email" className="text-sm font-bold text-gray-500 block mb-2">
                                EMAIL
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 pl-10 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="text-sm font-bold text-gray-500 block mb-2">
                                MESSAGE
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg w-full hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
                        >
                            SUBMIT FEEDBACK
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedbackForm;