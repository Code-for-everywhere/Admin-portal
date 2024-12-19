import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome styles for styling

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // for password visibility 
  const [text, setText] = useState('');
  const fullText = "Where Desire meet.";  // Fixed typo in "Where"

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index += 1;
      if (index === fullText.length-1) {
        clearInterval(interval); // Stop once the full text is displayed
      }
    }, 50); // Adjust the typing speed by changing this value (50ms per character)
    
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []); // Empty dependency array ensures this runs only once after initial render

  // Regular expressions for email and password validation
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
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex min-h-screen flex-col sm:flex-row">
      {/* Left Section (Text Typing Effect) */}
      <div className="flex-1 bg-saffron justify-center items-center flex relative p-6">
        {/* Logo taskcraft */}
        <div className="absolute bg-white left-1/2 transform -translate-x-1/2 top-5 sm:top-10 p-4">
          <img src="backgroundimage/TaskCraft_logo.jpg" alt="Logo" className="w-80 h-auto" />
        </div>

        <div className="text-white text-center mt-20 space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Welcome</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">To</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">TaskCraft</h1>
          <div className="text-lg sm:text-xl md:text-2xl space-y-8">
            {/* Render the text gradually */}
            <p className="whitespace-pre-wrap">{text}</p>
          </div>
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="flex-1 flex justify-center items-center p-6 relative">
        {/* Logo taskcraft */}
        
            <div className="absolute left-1/2 transform -translate-x-1/2 top-5 sm:top-10 p-4">
              <img src="backgroundimage/TaskCraft_logo.jpg" alt="Logo" className="w-80 h-auto" />
            </div>

              {/* Login Form */}
              <div className="w-full max-w-md mt-32 sm:mt-10 md:mt-20">  {/* Adjusts the distance from the top */}
                 <div className="flex justify-center items-center">
                     <div className="w-10 h-10 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-40 lg:h-40 bg-white rounded-full flex justify-center items-center border-4 border-solid border-saffron">
                        <i className="fas fa-user text-saffron text-xl sm:text-2xl md:text-3xl lg:text-4xl"></i> {/* Font Awesome user icon */}
                     </div>
                 </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold my-5 text-center">Welcome Back!</h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username Field */}
                    <div className="relative">
                      <label htmlFor="email" className="block text-lg sm:text-xl md:text-2xl text-gray-700">Username:</label>
                      <div className="relative">
                        <i className="fas fa-user text-saffron text-2xl absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                        <input
                          id="email"
                          value={email}
                          placeholder="yourname@gmail.com"
                          onChange={(e) => setEmail(e.target.value)}
                          className="p-3 mt-2 border-2 border-gray-300 rounded-md w-full focus:outline-none focus:border-saffron pl-10 text-xl"
                          required
                        />
                      </div>
                      {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
                    </div>
              
                    {/* Password Field */}
                    <div className="relative">
                      <label htmlFor="password" className="block text-lg sm:text-xl md:text-2xl text-gray-700">Password:</label>
                      <div className="relative">
                        <i className="fas fa-lock text-saffron text-2xl absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          value={password}
                          placeholder="********"
                          onChange={(e) => setPassword(e.target.value)}
                          className="p-3 mt-2 border-2 border-gray-300 rounded-md w-full focus:outline-none focus:border-saffron pl-10 text-xl"
                          required
                        />
                         {/* Eye Icon to toggle password visibility */}
                        <i
                          className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-saffron absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer`}
                          onClick={() => setShowPassword(!showPassword)}
                        ></i>
                      </div>
                      {errors.password && <p className="text-red-600 text-sm mt-2">{errors.password}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 text-white bg-saffron hover:bg-yellow hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                    >
                      <i className="fas fa-sign-in-alt text-white text-3xl"></i>
                    </button>
                  </form>

                  <p className="text-center text-blue-500 cursor-pointer mt-4">Forgot Password?</p>
              </div>
           </div>

      
    </div>
  );
}

export default Login;
