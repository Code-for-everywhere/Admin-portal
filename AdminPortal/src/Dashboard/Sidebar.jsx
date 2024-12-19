import { faXmark,faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, minWidth, handleToggle }) => {
  return minWidth >= 432 ? (
    <div
      className={`fixed inset-y-0 left-0  ${
        minWidth <= 432 ? "-translate-x-full relative w-full" : ""
      }  bg-saffron rounded-r h-full text-white  shadow-md transform transition-transform duration-400 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:relative md:w-full sm:w-full sm:relative sm:translate-x-0`}
    >
      <div className="pl-2 py-5  text-lg t md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold  bg-white  border-0 border-gray-700">
        <img
          src="https://taskcraft.in/static/media/TaskCraft_logo.841575346d8205e65592.png"
          alt="Logo"
        />
      </div>
      <ul className="">
        <li className="hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        <NavLink to="/dashboard" >
        <FontAwesomeIcon icon={faChartLine} className="mr-2 text-black" /> Dashboard</NavLink>
        
        </li>
        <li className="hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Dashboard
        </li>
        <li className="hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Profile
        </li>
      </ul>
    </div>
  ) : (
    <div
      className={`fixed inset-y-0 left-0  ${
        minWidth <= 432 ? "-translate-x-full relative w-full" : ""
      } bg-saffron rounded-r h-full text-white  shadow-md transform transition-transform duration-400 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="flex  pl-2 py-5 font-semibold border-b bg-white ">
        
        <div className="flex items-center   ">
          <img
            src="https://taskcraft.in/static/media/TaskCraft_logo.841575346d8205e65592.png"
            className="h-20 w-30"
            alt="logo"
          />
          <div className=" cursor-pointer mr-4" onClick={handleToggle}>
          <FontAwesomeIcon
            className="h-12 w-4 font-bold text-black absolute top-1 right-3 "
            icon={faXmark}
          />
        </div>
        </div>
      </div>
      <ul className="mt-1 ">
        <li className="flex items-center justify-center  cursor-pointer text-2xl shadow  text-white p-2 font-bold ">
          <NavLink to="/dashboard" >
        <FontAwesomeIcon icon={faChartLine} className="mr-2 text-black" /> Dashboard</NavLink>
        </li>
        <li className="flex items-center justify-center  cursor-pointer text-2xl shadow text-white p-2 font-bold ">
          Services
        </li>
        <li className="flex items-center justify-center  cursor-pointer text-2xl shadow text-white p-2 font-bold ">
          Get in Touch
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
