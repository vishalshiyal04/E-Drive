// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     if (!email || !password) {
//       setError("Please fill in both fields.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5001/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message || "Login failed.");
//       }

//       localStorage.setItem("token", data.token);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Sign in to your account</h2>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Enter Your Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 mt-1 border border-blue-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               required
//             />
//           </div>

//           <div className="relative">
//             <label className="block text-gray-700">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 mt-1 border border-blue-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 pr-10"
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition flex justify-center"
//             disabled={loading}
//           >
//             {loading ? "Signing in..." : "Sign in"}
//           </button>
//         </form>

//         <p className="text-sm text-gray-600 mt-3">
//           By continuing, you agree to E-Drive's {" "}
//           <span className="text-blue-500 cursor-pointer">Conditions of Use</span> and {" "}
//           <span className="text-blue-500 cursor-pointer">Privacy Notice</span>.
//         </p>
//         <p className="text-blue-500 cursor-pointer mt-3">Need help?</p>

//         <hr className="my-4" />

//         <p className="text-sm text-gray-600">New to E-Drive?</p>
//         <button
//           className="w-full border border-gray-400 text-black py-2 mt-2 rounded-lg hover:bg-gray-200 transition"
//           onClick={() => navigate("/register")}
//         >
//           Create your E-Drive account
//         </button>
//       </div>

//       <footer className="mt-6 text-sm text-gray-500 text-center">
//         <p className="mb-2">
//           <span className="text-blue-500 cursor-pointer">Conditions of Use</span> |
//           <span className="text-blue-500 cursor-pointer"> Privacy Notice</span> |
//           <span className="text-blue-500 cursor-pointer"> Help</span>
//         </p>
//         <p>© 2025 E-Drive Inc. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { Eye, EyeOff } from "lucide-react";

  export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true);

      if (!email || !password) {
        setError("Please fill in both fields.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:5001/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Login failed.");
        }

        localStorage.setItem("token", data.token);
        navigate("/");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Sign in to your account</h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Enter Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-blue-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border border-blue-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition flex justify-center"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-3">
            By continuing, you agree to E-Drive's {" "}
            <span className="text-blue-500 cursor-pointer">Conditions of Use</span> and {" "}
            <span className="text-blue-500 cursor-pointer">Privacy Notice</span>.
          </p>
          <p className="text-blue-500 cursor-pointer mt-3">Need help?</p>

          <hr className="my-4" />

          <p className="text-sm text-gray-600">New to E-Drive?</p>
          <button
            className="w-full border border-gray-400 text-black py-2 mt-2 rounded-lg hover:bg-gray-200 transition"
            onClick={() => navigate("/register")}
          >
            Create your E-Drive account
          </button>
        </div>

        <footer className="mt-6 text-sm text-gray-500 text-center">
          <p className="mb-2">
            <span className="text-blue-500 cursor-pointer">Conditions of Use</span> |
            <span className="text-blue-500 cursor-pointer"> Privacy Notice</span> |
            <span className="text-blue-500 cursor-pointer"> Help</span>
          </p>
          <p>© 2025 E-Drive Inc. All rights reserved.</p>
        </footer>
      </div>
    );
  }