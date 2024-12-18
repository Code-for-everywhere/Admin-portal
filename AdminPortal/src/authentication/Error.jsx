import React, { useState } from "react";


function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

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

    // If there are no errors, handle the login or signup
    if (Object.keys(newErrors).length === 0) {
      alert(isLogin ? "Login successful!" : "Signup successful!");
      setEmail("");
      setPassword("");
      // Proceed with login/signup or redirect (e.g., API call)
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex  min-h-screen w-full">
                                   {/* Left Section: Background Image */}
         <div className=" absolute w-1/2 h-full bg-cover bg-center flex items-center justify-center "
             style={{ backgroundImage: "url('backgroundimage/taskcrafttheme.jpg')" }} >
                  {/* Main Container with Flex Layout */}
              <div className="bg-white rounded-lg shadow-lg flex flex-col justify-center items-center space-y-6 w-full max-w-4xl">
                   <div
                       className={`flex flex-col md:flex-row w-full max-w-4xl ${
                           isLogin ? "" : "flex-row-reverse"
                             } transition-all duration-1000`}>
                         {/* Left Section: Form (Login/Signup) */}
                             <div className="flex-1 p-8 bg-white rounded-lg shadow-lg flex flex-col justify-between space-y-6 ">
                                    <h2 className="text-3xl font-semibold text-center text-orange-600 transition-all duration:1000">
                                          {isLogin ? "Login" : "Sign Up"}
                                    </h2>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                       {/* Email Field */}
                                         <div>
                                             <label htmlFor="email" className="block text-lg text-gray-700">
                                                   Email:
                                             </label>
                                              <input
                                                 id="email"
                                                 value={email}
                                                 onChange={(e) => setEmail(e.target.value)}
                                                 className="w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                                 required
                                              />
                                             {errors.email && (
                                                 <p className="text-red-600 text-sm mt-2">{errors.email}</p>
                                                               )}
                                            </div>

                                            {/* Password Field */}
                                             <div>
                                                  <label htmlFor="password" className="block text-lg text-gray-700">
                                                       Password:
                                                  </label>
                                                  <input
                                                    type="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                                    required
                                                  />
                                                  {errors.password && (
                                                    <p className="text-red-600 text-sm mt-2">{errors.password}</p>
                                                  )}
                                              </div>

                                            {/* Submit Button */}
                                               <button
                                                 type="submit"
                                                 className="w-full py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration:1000"
                                                >
                                                 {isLogin ? "Login" : "Sign Up"}
                                                </button>
                                    </form>
                                    <p
                                     className="text-center text-blue-500 cursor-pointer transition-all duration:1000"
                                     onClick={() => setIsLogin(!isLogin)}
                                    >
                                     {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
                                    </p>
                              </div>

                              {/* Right Section: Orange Area */}
                              <div
                                  className={`flex-1 p-8 bg-saffron rounded-lg shadow-lg flex flex-col justify-center items-center text-white ${
                                  isLogin ? "order-last rounded-l-[25%]" : "order-first rounded-r-[25%]"
                                   } transition-all duration-1000 relative`} // Add relative to parent div
                              >
                              {/* Positioning h1 at top-right or top-left corner */}
                                 <h1
                                    className={`text-5xl font-semibold absolute ${
                                    isLogin ? "top-12 " : "top-12 "
                                     }`}
                                 >
                                   {isLogin ? "Sign up" : "Login"}
                                 </h1>

                                 {/* Content */}
  
                                 <p className="text-2xl font-semibold top-9 ">Welcome!</p>
                                 <p className=" my-6 ">
                                      {isLogin
                                      ? "If you are new to our website, please sign up first."
                                      : "Already have an account? Log in now."}
                                 </p>
                                 <button
                                   onClick={() => setIsLogin(!isLogin)}
                                   className="w-full py-3 text-white bg-orange-700 hover:bg-white hover:text-orange-600 rounded-md  "
                                 >
                                    {isLogin ? "Register Now!" : "Login Now!"}
                                 </button>
  
                                </div>

                    </div>
               </div>
     
        </div>
        <div className=" h-full bg-orange-500 flex items-center justify-center">
        </div>
    </div>
  );
}

export default Auth;
