import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faXmark,
  faRss,
  faBars,
  faHeadset,
  faTrophy,
  faCalendarWeek,
  faFileImage,
  faBriefcase,
  faPeopleGroup,
  faCubesStacked,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, minWidth, handleToggle }) => {
  const handleclose = () => {
    setTimeout(handleToggle, 300);
  };

  return minWidth >= 432 ? (
    <div
      className={`fixed top-0 left-0  bg-saffron rounded-r h-full text-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-700 ease-in-out  relative`}
    >
      <div className="pl-2 py-5 text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold bg-white border-0 border-gray-700">
        <img
          src="https://taskcraft.in/static/media/TaskCraft_logo.841575346d8205e65592.png"
          alt="Logo"
        />
      </div>
      <ul className="h-screen px-2 mt-1">
        <NavLink to="/blog"   className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className=" p-3  cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faRss} className="text-black" /> &nbsp; Blog
          </li>
        </NavLink>
        <NavLink to="/team" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    } >
          <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faPeopleGroup} className="text-black" />
            &nbsp; Team
          </li>
        </NavLink>
        <NavLink to="/award" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faTrophy} className="text-black" />
            &nbsp; Award
          </li>
        </NavLink>
        <NavLink to="/career" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className="hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faUserGraduate} className="text-black" />
            &nbsp;Career
          </li>
        </NavLink>
        <NavLink to="/events" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faCalendarWeek} className="text-black" />
            &nbsp; Events
          </li>
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faFileImage} className="text-black" />
            &nbsp; Gallery
          </li>
        </NavLink>
        <NavLink to="/service" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faBriefcase} className="text-black" />
            &nbsp; Service
          </li>
        </NavLink>
        <NavLink to="/content" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className="hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faBars} className="text-black" />
            &nbsp; Dashboard
          </li>
        </NavLink>
        <NavLink to="/testimonial" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faCubesStacked} className="text-black" />
            &nbsp; Testimonoial
          </li>
        </NavLink>

        <NavLink to="/getInTouch" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faHeadset} className="text-black" />
            &nbsp; Get in Touch
          </li>
        </NavLink>
      </ul>
    </div>
  ) : (
    <div
      className={`fixed inset-y-0 left-0 h-screen ${
        minWidth <= 432 ? "-translate-x-full relative w-screen" : ""
      } bg-saffron rounded-r h-full text-white shadow-md transform transition-transform duration-400 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={handleclose}
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
        <NavLink to="/blog" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faRss} className="text-black" /> &nbsp; Blog
          </li>
        </NavLink>
        <NavLink to="/team" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faPeopleGroup} className="text-black" />
            &nbsp; Team
          </li>
        </NavLink>
        <NavLink to="/Award" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faTrophy} className="text-black" />
            &nbsp; Award
          </li>
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faFileImage} className="text-black" />
            &nbsp; Gallery
          </li>
        </NavLink>
        <NavLink to="/service" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faBriefcase} className="text-black" />
            &nbsp; Service
          </li>
        </NavLink>
        <NavLink to="/Career" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold ">
            <FontAwesomeIcon icon={faUserGraduate} className="text-black" />{" "}
            &nbsp; Career
          </li>
        </NavLink>
        <NavLink to="/events" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faCalendarWeek} className="text-black" />
            &nbsp; Events
          </li>
        </NavLink>
        <NavLink to="/content" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className="flex items-center justify-center cursor-pointer hover:rounded hover:bg-orange-200 hover:text-black text-xl shadow text-white p-3 font-bold">
            <FontAwesomeIcon icon={faBars} className="text-black" />{" "}
            &nbsp;Dashboard
          </li>
        </NavLink>
        <NavLink to="/getInTouch" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faHeadset} className="text-black" />
            &nbsp; Get in Touch
          </li>
        </NavLink>

        <NavLink to="/testimonial" className={({ isActive }) =>
      isActive
        ? 'bg-white rounded text-black' // Active state styles
        : '' // Default and hover state styles
    }>
          <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
            <FontAwesomeIcon icon={faCubesStacked} className="text-black" />
            &nbsp; Testimonoial
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { NavLink } from "react-router-dom";
// import {  faXmark,faRss,faBars  ,faHeadset, faTrophy, faCalendarWeek, faFileImage, faBriefcase, faPeopleGroup, faCubesStacked, faUserGraduate,} from "@fortawesome/free-solid-svg-icons";

// // eslint-disable-next-line react/prop-types
// const Sidebar = ({ isOpen, minWidth, handleToggle }) => {

//   const handleclose = () => {
//     setTimeout(handleToggle,300)
//   }

//   return minWidth >= 432 ? (
//     <div
//       className={`sticky inset-y-0 left-0 ${
//         minWidth <= 432 ? "-translate-x-full relative w-full" : ""
//       } bg-saffron rounded-r h-full text-white shadow-md transform transition-transform duration-400 ease-in-out ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       } md:translate-x-0 md:relative md:w-full sm:w-full sm:relative sm:translate-x-0`}
//     >
//       <div className="pl-2 py-5 text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold bg-white border-0 border-gray-700">
//         <img
//           src="https://taskcraft.in/static/media/TaskCraft_logo.841575346d8205e65592.png"
//           alt="Logo"
//         />
//       </div>
//       <ul className="h-screen" >
//       <NavLink to="/content">
//         <li className="hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">

//            <FontAwesomeIcon icon={faBars} className="text-black" />&nbsp; Dashboard
//         </li>
//         </NavLink>
//         <NavLink to="/career">

//         <li className="hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
//           <FontAwesomeIcon icon={faUserGraduate} className="text-black" />&nbsp;Career
//         </li>
//         </NavLink>
//         <NavLink to="/blog">

//         <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
//           <FontAwesomeIcon icon={faRss} className="text-black" /> &nbsp; Blog
//         </li>
//         </NavLink>
//         <NavLink to="/getInTouch">

//         <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
//           <FontAwesomeIcon icon={faHeadset} className="text-black" />&nbsp;  Get in Touch
//         </li>
//         </NavLink>
//         <NavLink to="/award">

//         <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
//           <FontAwesomeIcon icon={faTrophy} className="text-black" />&nbsp;  Award
//         </li>
//         </NavLink>
//         <NavLink to="/events">

//         <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
//           <FontAwesomeIcon icon={faCalendarWeek} className="text-black" />&nbsp;  Events
//         </li>
//         </NavLink>
//         <NavLink to="/gallery">

//         <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
//           <FontAwesomeIcon icon={faFileImage} className="text-black" />&nbsp;  Gallery
//         </li>
//         </NavLink>
//         <NavLink to="/service">

//         <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
//           <FontAwesomeIcon icon={faBriefcase} className="text-black" />&nbsp;  Service
//         </li>
//         </NavLink>
//         <NavLink to="/team">

//         <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
//           <FontAwesomeIcon icon={faPeopleGroup} className="text-black" />&nbsp;  Team
//         </li>
//         </NavLink>
//         <NavLink to="/testimonial">

//         <li className=" hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">
//           <FontAwesomeIcon icon={faCubesStacked} className="text-black" />&nbsp;  Testimonoial
//         </li>
//         </NavLink>

//       </ul>
//     </div>
//   ) : (
//     <div
//       className={`fixed inset-y-0 left-0 h-screen ${
//         minWidth <= 432 ? "-translate-x-full relative w-screen" : ""
//       } bg-saffron rounded-r h-full text-white shadow-md transform transition-transform duration-400 ease-in-out ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       }`}
//       onClick={handleclose}
//     >
//       <div className="flex pl-2 py-5 font-semibold border-b bg-white ">
//         <div className="flex items-center">
//           <img
//             src="https://taskcraft.in/static/media/TaskCraft_logo.841575346d8205e65592.png"
//             className="ml-12 h-16 w-64 "
//             alt="logo"
//           />
//           <div className="cursor-pointer mr-4" onClick={handleToggle}>
//             <FontAwesomeIcon
//               className="h-12 w-4 font-bold text-black absolute top-0 right-3 overflow-visible"
//               icon={faXmark}
//             />
//           </div>
//         </div>
//       </div>
//       <ul className="mt-1 h-screen">
//       <NavLink to="/content"><li className="flex items-center justify-center cursor-pointer hover:rounded hover:bg-orange-200 hover:text-black text-xl shadow text-white p-3 font-bold">

//           <FontAwesomeIcon icon={faBars} className="text-black" />  &nbsp;Dashboard

//         </li>
//         </NavLink>
//         <NavLink to="/Career">
//         <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold ">

//           <FontAwesomeIcon icon={faUserGraduate} className="text-black" /> &nbsp;  Career

//         </li>
//         </NavLink>
//         <NavLink to="/blog">
//         <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">

//           <FontAwesomeIcon icon={faRss} className="text-black" /> &nbsp; Blog

//         </li>
//         </NavLink>
//         <NavLink to="/getInTouch">
//         <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">

//           <FontAwesomeIcon icon={faHeadset} className="text-black" />&nbsp;  Get in Touch

//         </li>
//         </NavLink>
//         <NavLink to="/Award">
//         <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">

//           <FontAwesomeIcon icon={faTrophy} className="text-black" />&nbsp;  Award

//         </li>
//         </NavLink>
//         <NavLink to="/events">
//         <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">

//           <FontAwesomeIcon icon={faCalendarWeek} className="text-black" />&nbsp;  Events

//         </li>
//         </NavLink>
//         <NavLink to="/gallery">
//         <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">

//           <FontAwesomeIcon icon={faFileImage} className="text-black" />&nbsp;  Gallery

//         </li>
//         </NavLink>
//         <NavLink to="/service">
//         <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">

//           <FontAwesomeIcon icon={faBriefcase} className="text-black" />&nbsp;  Service

//         </li>
//         </NavLink>
//         <NavLink to="/team">
//         <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">

//           <FontAwesomeIcon icon={faPeopleGroup} className="text-black" />&nbsp;  Team

//         </li>
//         </NavLink>
//         <NavLink to="/testimonial">
//         <li className="flex items-center justify-center hover:bg-orange-200 hover:rounded p-3 hover:text-black cursor-pointer text-xl font-bold">

//           <FontAwesomeIcon icon={faCubesStacked} className="text-black" />&nbsp;  Testimonoial

//         </li>
//         </NavLink>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
