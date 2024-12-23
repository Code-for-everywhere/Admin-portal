import  { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLock, faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome styles for styling

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerrors, setEmailerrors] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [showPassword, setShowPassword] = useState(false); // for password visibility 
  const [isVisible, setIsVisible] = useState(false);

  // Regular expressions for email and password validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/; // At least 1 letter, 1 number, length between 6 and 20

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let isvalid = true;

    // Validate email
    if (!emailRegex.test(email)) {
      setEmailerrors("Please enter a valid email address");
      isvalid = false;
    }
    else{
      setEmailerrors("");
    }
  


    // Validate password
    if (!passwordRegex.test(password)) {
      setPassworderror("Password must be between 6-20 characters and contain at least one letter and one number");
      isvalid = false;
    }
    else{
      setPassworderror("");
    }

    // If there are no errors, handle the login
    if (isvalid) {
      alert("Form submitted successfully!");
      setEmail("");
      setPassword("");
    } 
  };
 

  useEffect(() => {
    // Create an IntersectionObserver to detect when the image enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set the image to visible and trigger transition
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the image is in the viewport
    );

    // Observe the image element
    const imgElement = document.querySelector('.image-scale');
    if (imgElement) observer.observe(imgElement);

    return () => {
      if (imgElement) observer.unobserve(imgElement); // Cleanup the observer when the component unmounts
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col sm:flex-row">
      {/* Left Section (Text Typing Effect) */}
      <div className="flex-1 relative  bg-blue-950">
             <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
             <div className="">
               <img
                 src="media/worldimage.webp"
                 className={`image-scale transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
                 style={{ width: "100%", height: "auto" }}
               />
               </div>
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full mx-4 my-4 md:mx-4 md:my-4 lg:mx-6 lg:my-6 xl:mx-8 xl:my-8 2xl:mx-10 2xl:my-10  ">
                 <img
                   src="media/roundon world.webp"
                   className={`image-scale transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
                   style={{ width: "100%", height: "auto" }}
                 />
               </div>
             </div>
           </div>


      {/* Right Section (Login Form) */}
      <div className="flex-1 flex justify-center items-center p-6 relative">
        {/* Logo taskcraft */}
        
            <div className="absolute left-1/2 transform -translate-x-1/2 top-5 sm:top-10 p-4">
              <img src="media/TaskCraft_logo.jpg" alt="Logo" className="w-80 h-auto" />
            </div>

              {/* Login Form */}
              <div className="w-full max-w-md ">  {/* Adjusts the distance from the top */}
                 <div className="flex justify-center items-center">
                     <div className="w-1 h-2 sm:w-12 sm:h-12 md:w-32 md:h-32 lg:w-40 lg:h-40  rounded-full flex justify-center items-center ">
                        <img src="media/logotaskcraft.webp" alt="" className=" text-saffron text-xl sm:text-2xl md:text-3xl lg:text-4xl"/> {/* Font Awesome user icon */}
                     </div>
                 </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold my-6 text-center">Welcome Back!</h2>

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
                        />
                      </div>
                      {emailerrors && <p className="text-red-600 text-sm mt-2">{emailerrors}</p>}
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
                        
                        />
                         {/* Eye Icon to toggle password visibility */}
                         <FontAwesomeIcon icon={faEye}  className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-saffron absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer`}
                          onClick={() => setShowPassword(!showPassword)} />
                         
                        
                      </div>
                      {passworderror && <p className="text-red-600 text-sm mt-2">{passworderror}</p>}
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
