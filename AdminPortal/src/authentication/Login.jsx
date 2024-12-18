import React, { useState } from "react";
import {Link} from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Regular expressions for validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/; // At least 1 letter, 1 number, length between 6 and 20

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate email
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      newErrors.password = "Password must be between 6-20 characters and contain at least one letter and one number";
    }

    // If there are no errors, handle the login
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setEmail("");
      setPassword("");
      // Proceed with login or redirect (e.g., API call)
    } else {
      setErrors(newErrors);
    }
  };


  return (
    <div className="flex min-h-screen ">
      <div className="flex  w-full">
         {/* Left Section */}
          <div className="flex-1 p-6 bg-saffron">
             
          </div>

         {/* Right Section */}
          <div className="flex-1 p-6">
              {/* Login Form */}
        <div className="w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 item-center justify-center">
         
          <h1 className="text-4xl font-bold text-center text-saffron my-5">Login</h1>
          <h2 className="text-2xl font-semibold my-5 ">Welcome Back!</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 items-center">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg text-gray-700">Email:</label>
              <input
                id="email"
                value={email}
                placeholder="Email:"
                onChange={(e) => setEmail(e.target.value)}
                className=" p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-saffron"
                required
              />
              {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-lg text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                className=" p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-saffron"
                required
              />
              {errors.password && <p className="text-red-600 text-sm mt-2">{errors.password}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="py-3 text-white bg-saffron hover:bg-yellow hover:text-white rounded-md focus:outline-black focus:ring-2 focus:ring-saffron"
            >
              Login
            </button>
          </form>
          <p className="text-center text-blue-500 cursor-pointer ">Forgot Password?</p>
          
          </div>
          </div>
      </div>
   </div>



  
  )
}

export default Login
