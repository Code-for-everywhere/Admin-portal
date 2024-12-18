import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen,minWidth ,handleToggle }) => {
    
  return (
    minWidth >= 432 ?
    <div
      className={`fixed inset-y-0 left-0  ${minWidth <= 432 ? "-translate-x-full relative w-full": ""}  bg-saffron rounded-r h-full text-white  shadow-md transform transition-transform duration-400 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"  
      } md:translate-x-0 md:relative md:w-full sm:w-full sm:relative sm:translate-x-0`}
    >
      <div className="pl-2 py-2 pb-3 text-lg t md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold border-b border-gray-700">Menu</div>
      <ul className="mt-4">
        <li className="hover:bg-gray-700 p-3 cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Home </li>
        <li className="hover:bg-gray-700 p-3 cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Dashboard</li>
        <li className="hover:bg-gray-700 p-3 cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Profile</li>
      </ul>
    </div>
    : 
    <div
    className={`fixed inset-y-0 left-0  ${minWidth <= 432 ? "-translate-x-full relative w-full": ""} bg-saffron rounded-r h-full text-white  shadow-md transform transition-transform duration-400 ease-in-out ${
      isOpen ? "translate-x-0" : "-translate-x-full"  
    } md:translate-x-0 md:relative md:w-full sm:w-full sm:relative sm:translate-x-0`}
  >
    <div className="flex items-center justify-between pl-2 py-2 pb-3 font-semibold border-b border-gray-700">
        <div className="flex items-center ">Menu</div>
        <div className="cursor-pointer mr-4" onClick={handleToggle}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    <ul className="mt-4 align-middle ">
      <li className="flex items-center justify-center hover:bg-gray-700 p-3 cursor-pointer text-sm ">Home </li>
      <li className="flex items-center justify-center hover:bg-gray-700 p-3 cursor-pointer text-sm ">Dashboard</li>
      <li className="flex items-center justify-center hover:bg-gray-700 p-3 cursor-pointer text-sm ">Profile</li>
    </ul>
  </div>
  );
};

export default Sidebar;

