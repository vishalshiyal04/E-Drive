// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   const fadeInFromLeft = {
//     hidden: { opacity: 0, x: -50, scale: 0.8 },
//     visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8 } },
//   };

//   const fadeInFromRight = {
//     hidden: { opacity: 0, x: 50, scale: 0.8 },
//     visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8 } },
//   };

//   return (
//     <div className="bg-gray-50 text-gray-900">
//       {/* Hero Section */}
//       <motion.section
//         className="max-w-4xl mx-auto px-6 py-20 text-center"
//         variants={fadeInFromLeft}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <motion.h1
//           className="text-5xl font-extrabold leading-tight"
//           whileHover={{ scale: 1.05 }}
//         >
//           Leading the Future of Electric Mobility 🚀
//         </motion.h1>
//         <motion.p
//           className="mt-6 text-lg text-gray-700"
//           whileHover={{ scale: 1.02 }}
//         >
//           At E-Drive, we revolutionize sustainable transportation with state-of-the-art 
//           electric vehicles that are efficient, accessible, and environmentally friendly.
//         </motion.p>
//         <motion.button
//           className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all"
//           whileHover={{ scale: 1.1 }}
//         >
//           Discover More
//         </motion.button>
//       </motion.section>

//       {/* Our Mission */}
//       <motion.section
//         className="max-w-4xl mx-auto px-6 py-20 text-center"
//         variants={fadeInFromRight}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <h2 className="text-4xl font-bold">Our Mission</h2>
//         <p className="mt-4 text-lg text-gray-700">
//           Driving the world towards a cleaner, greener future by making electric 
//           mobility the norm, not the exception.
//         </p>
//       </motion.section>

//       {/* Milestones with Scroll Animations */}
//       <section className="max-w-4xl mx-auto px-6 py-20">
//         <motion.h2
//           className="text-4xl font-bold text-center"
//           variants={fadeInFromLeft}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           Our Journey
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 text-center">
//           {[
//             { year: "2021", title: "Founded", desc: "E-Drive was born." },
//             { year: "2022", title: "$100M Funding", desc: "Rapid growth phase." },
//             { year: "2023", title: "Global Expansion", desc: "Expanding worldwide." },
//             { year: "2024", title: "10k+ Vehicles", desc: "Milestone achieved." }
//           ].map((milestone, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
//               variants={index % 2 === 0 ? fadeInFromLeft : fadeInFromRight}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ delay: index * 0.2 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <h3 className="text-blue-500 font-bold text-xl">{milestone.year}</h3>
//               <p className="font-semibold text-lg">{milestone.title}</p>
//               <p className="text-gray-600">{milestone.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <motion.footer
//         className="bg-gray-900 text-white py-10"
//         variants={fadeInFromLeft}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between px-6">
//           <div>
//             <h3 className="text-lg font-bold">E-Drive</h3>
//             <p className="text-gray-400 mt-2">Pioneering the future of EV technology.</p>
//           </div>
//           <div>
//             <h3 className="font-bold">Company</h3>
//             <ul className="text-gray-400 space-y-2 mt-2">
//               <li>About</li>
//               <li>Careers</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold">Stay Updated</h3>
//             <form className="mt-2">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full p-2 rounded text-gray-900"
//               />
//               <button className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </motion.footer>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = (direction = "left") => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  });

  const teamMembers = [
    {
      name: "Meet Dobariya",
      role: "",
      imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      name: "Vishal Shiyal",
      role: "",
      imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      name: "Prince Vaghasiya",
      role: "",
      imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",

    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 md:px-12"
        variants={fadeIn("left")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.h1 className="text-5xl font-extrabold leading-tight mb-6">
              Leading the Future of Electric Mobility
            </motion.h1>
            <p className="text-lg text-white/90">
              At E-Drive, we revolutionize sustainable transportation with state-of-the-art
              electric vehicles that are efficient, accessible, and environmentally friendly.
            </p>
            <motion.button
              className="mt-8 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
            >
              Discover More
            </motion.button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://www.financialexpress.com/wp-content/uploads/2022/03/Top-5-Electric-Cars-sold-in-India-in-2021_-Nexon-EV-leads-the-race.jpg"
              alt="Electric vehicle"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="max-w-4xl mx-auto px-6 py-20 text-center"
        variants={fadeIn("right")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Driving the world towards a cleaner, greener future by making electric mobility
          the norm, not the exception.
        </p>
      </motion.section>

      {/* Journey / Milestones Section */}
      <section className="bg-gray-50 py-20 px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-700"
          variants={fadeIn("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          Our Journey
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
          {[
            { year: "2021", title: "Founded", desc: "E-Drive was born." },
            { year: "2022", title: "$100M Funding", desc: "Rapid growth phase." },
            { year: "2023", title: "Global Expansion", desc: "Expanding worldwide." },
            { year: "2024", title: "10k+ Vehicles", desc: "Milestone achieved." }
          ].map((milestone, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-blue-500"
              variants={fadeIn(index % 2 === 0 ? "left" : "right")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-blue-500 font-bold text-xl">{milestone.year}</h3>
              <p className="text-lg font-semibold mt-2">{milestone.title}</p>
              <p className="text-gray-600 mt-1">{milestone.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-20 text-center"
        variants={fadeIn("left")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-400"
              variants={fadeIn(index % 2 === 0 ? "left" : "right")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-700">{member.name}</h3>
              <p className="text-gray-600 mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold">E-Drive</h3>
            <p className="text-gray-400 mt-3">
              Pioneering the future of EV technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="text-gray-400 mt-3 space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <form className="mt-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded text-gray-900 mb-2"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-10">&copy; 2025 E-Drive. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;