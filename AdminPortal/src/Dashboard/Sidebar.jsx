import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {  faXmark,faRss,faBars  ,faHeadset, faTrophy, faCalendarWeek, faFileImage, faBriefcase, faPeopleGroup, faCubesStacked, faUserGraduate, faColonSign,} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, minWidth, handleToggle }) => {
  return minWidth >= 432 ? (
    <div
      className={`sticky inset-y-0 left-0 ${
        minWidth <= 432 ? "-translate-x-full relative w-full" : ""
      } bg-saffron rounded-r h-full text-white shadow-md transform transition-transform duration-400 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:relative md:w-full sm:w-full sm:relative sm:translate-x-0`}
    >
      <div className="pl-2 py-5 text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold bg-white border-0 border-gray-700">
        <img
          src="https://taskcraft.in/static/media/TaskCraft_logo.841575346d8205e65592.png"
          alt="Logo"
        />
      </div>
      <ul>
      <li className="hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          <NavLink to="/">
          Dashboard
          </NavLink>
        </li>
        <li className="hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          <NavLink to="/content">
           <FontAwesomeIcon icon={faBars} className="text-black" />&nbsp; Dashboard
          </NavLink>
        </li>
        <li className="hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          <NavLink to="/career">
          <FontAwesomeIcon icon={faUserGraduate} className="text-black" />&nbsp;Career
          </NavLink>
        </li>
        <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/blog">
          <FontAwesomeIcon icon={faRss} className="text-black" /> &nbsp; Blog
          </NavLink>
        </li>
        <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/login">
          <FontAwesomeIcon icon={faColonSign} className="text-black" /> &nbsp; login
          </NavLink>
        </li>
        <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/getInTouch">
          <FontAwesomeIcon icon={faHeadset} className="text-black" />&nbsp;  Get in Touch
          </NavLink>
        </li>
        <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/award">
          <FontAwesomeIcon icon={faTrophy} className="text-black" />&nbsp;  Award
          </NavLink>
        </li>
        <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/events">
          <FontAwesomeIcon icon={faCalendarWeek} className="text-black" />&nbsp;  Events
          </NavLink>
        </li>
        <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/gallery">
          <FontAwesomeIcon icon={faFileImage} className="text-black" />&nbsp;  Gallery
          </NavLink>
        </li>
        <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/service">
          <FontAwesomeIcon icon={faBriefcase} className="text-black" />&nbsp;  Service
          </NavLink>
        </li>
        <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/team">
          <FontAwesomeIcon icon={faPeopleGroup} className="text-black" />&nbsp;  Team
          </NavLink>
        </li>
        <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/testimonial">
          <FontAwesomeIcon icon={faCubesStacked} className="text-black" />&nbsp;  Testimonoial
          </NavLink>
        </li>
      </ul>
    </div>
  ) : (
    <div
      className={`fixed inset-y-0 left-0 ${
        minWidth <= 432 ? "-translate-x-full relative w-full" : ""
      } bg-saffron rounded-r h-full text-white shadow-md transform transition-transform duration-400 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex pl-2 py-5 font-semibold border-b bg-white ">
        <div className="flex items-center">
          <img
            src="https://taskcraft.in/static/media/TaskCraft_logo.841575346d8205e65592.png"
            className="ml-12 h-16 w-64 "
            alt="logo"
          />
          <div className="cursor-pointer mr-4" onClick={handleToggle}>
            <FontAwesomeIcon
              className="h-12 w-4 font-bold text-black absolute top-0 right-3 overflow-visible"
              icon={faXmark}
            />
          </div>
        </div>
      </div>
      <ul className="mt-1 h-screen">
        <li className="flex items-center justify-center cursor-pointer hover:rounded hover:bg-orange-200 hover:text-black text-xl shadow text-white p-3 font-bold">
          <NavLink to="/content">
          <FontAwesomeIcon icon={faBars} className="text-black" />  &nbsp;Dashboard
          </NavLink>
        </li>
        <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold ">
          <NavLink to="/Career">
          <FontAwesomeIcon icon={faUserGraduate} className="text-black" /> &nbsp;  Career
          </NavLink>
        </li>
        <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/blog">
          <FontAwesomeIcon icon={faRss} className="text-black" /> &nbsp; Blog
          </NavLink>
        </li>
        <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/getInTouch">
          <FontAwesomeIcon icon={faHeadset} className="text-black" />&nbsp;  Get in Touch
          </NavLink>
        </li>
        <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/Award">
          <FontAwesomeIcon icon={faTrophy} className="text-black" />&nbsp;  Award
          </NavLink>
        </li>
        <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/events">
          <FontAwesomeIcon icon={faCalendarWeek} className="text-black" />&nbsp;  Events
          </NavLink>
        </li>
        <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/gallery">
          <FontAwesomeIcon icon={faFileImage} className="text-black" />&nbsp;  Gallery
          </NavLink>
        </li>
        <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/service">
          <FontAwesomeIcon icon={faBriefcase} className="text-black" />&nbsp;  Service
          </NavLink>
        </li>
        <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/team">
          <FontAwesomeIcon icon={faPeopleGroup} className="text-black" />&nbsp;  Team
          </NavLink>
        </li>
        <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
          <NavLink to="/testimonial">
          <FontAwesomeIcon icon={faCubesStacked} className="text-black" />&nbsp;  Testimonoial
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
