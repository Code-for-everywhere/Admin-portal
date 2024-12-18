import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const [toggle, setToggle] = useState(false);
  const [minWidth, setMinWidth] = useState(window.innerWidth);
  

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleResize = () => {
        setMinWidth(window.innerWidth);
      };
    
      useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return toggle ? (
    <> <div className="flex"> 
    <div className={`h-screen  ${minWidth <= 432 ? 'min-w-full': "w-1/6"}`}>
    <Sidebar isOpen={toggle} minWidth={minWidth} handleToggle={handleToggle}/>
    </div>
   
    <header className="w-full">
      <div className="flex items-center justify-between pl-10 py-1 border-b border-gray-400">
        {/* Left Icon & Title */}
        <div className="flex items-center">
          <div
            onClick={handleToggle}
            className="cursor-pointer text-gray-700 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <h1 className="ml-2 text-lg font-semibold">Dashboard</h1>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faSun} className="text-yellow-400" />
          <img
            src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D"
            className="rounded-full object-cover w-10 h-10 cursor-pointer"
            alt="profile picture"
          />
        </div>
      </div>
      <div className="border-b border-gray-400 px-10 py-4">
        <h1 className="ml-2 text-lg">Home</h1>
      </div>
    </header>
    </div>
    </>) :
   ( <header>
      <div className="flex items-center justify-between px-10 py-4 border-b border-gray-400">
        {/* Left Icon & Title */}
        <div className="flex items-center">
          <div
            onClick={handleToggle}
            className="cursor-pointer text-gray-700 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <h1 className="ml-2 text-lg font-semibold">Dashboard</h1>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faSun} className="text-yellow-400" />
          <img
            src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D"
            className="rounded-full object-cover w-10 h-10 cursor-pointer"
            alt="profile picture"
          />
        </div>
      </div>
      <div className="border-b border-gray-400 px-10 py-4">
        <h1 className="ml-2 text-lg">Home</h1>
      </div>
    </header>
    
  );
}


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faSun } from "@fortawesome/free-solid-svg-icons";
// import { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";

// export default function Dashboard() {
//   const [toggle, setToggle] = useState(false);
//   const [minWidth, setMinWidth] = useState(window.innerWidth);

//   // Handle window resize
//   const handleResize = () => {
//     setMinWidth(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleToggle = () => {
//     setToggle((prevState) => !prevState);
//   };

//   return (
//     <>
//       <div className="flex">
//         {/* Sidebar */}
//         <div className={`h-screen ${minWidth <= 430 ? "w-full" : "w-1/6"}`}>
//           <Sidebar isOpen={toggle} toggleSidebar={handleToggle} minWidth={minWidth} />
//         </div>

//         {/* Main Header */}
//         <header className="w-full">
//           <div className="flex items-center justify-between pl-10 py-1 border-b border-gray-400">
//             {/* Left Icon & Title */}
//             <div className="flex items-center">
//               <div
//                 onClick={handleToggle}
//                 className="cursor-pointer text-gray-700 hover:text-gray-900"
//               >
//                 <FontAwesomeIcon icon={faBars} />
//               </div>
//               <h1 className="ml-2 text-lg font-semibold">Dashboard</h1>
//             </div>

//             {/* Right Icons */}
//             <div className="flex items-center space-x-4">
//               <FontAwesomeIcon icon={faSun} className="text-yellow-400" />
//               <img
//                 src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D"
//                 className="rounded-full object-cover w-10 h-10 cursor-pointer"
//                 alt="profile picture"
//               />
//             </div>
//           </div>
//         </header>
//       </div>
//     </>
//   );
// }
