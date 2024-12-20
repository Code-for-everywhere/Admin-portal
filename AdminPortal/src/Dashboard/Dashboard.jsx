import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"; // Import Outlet

export default function Dashboard() {
  const [toggle, setToggle] = useState(false);
  const [minWidth, setMinWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleResize = () => {
    setMinWidth(window.innerWidth);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="top-0 w-full">
        <div className="flex">
          {/* Sidebar */}
          {toggle && (
            <div
              className={`h-screen ${minWidth <= 432 ? "min-w-full" : "w-1/6"}`}
            >
              <Sidebar
                isOpen={toggle}
                minWidth={minWidth}
                handleToggle={handleToggle}
              />
            </div>
          )}

          {/* Main Content */}
          <div className="grow flex flex-col w-full">
            <div className="flex items-center justify-between px-10 py-4 bg-gray-200">
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
              <div className="flex items-center space-x-4 sticky">
                <FontAwesomeIcon icon={faSun} className="text-yellow-400" />
                <img
                  src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D"
                  className="rounded-full object-cover w-10 h-10 cursor-pointer"
                  alt="profile picture"
                  onClick={handleMenu}
                />
                {menu && (
                  <div className="absolute top-12 right-0 w-40 mt-2 bg-white shadow-md rounded-md">
                    <ProfileMenu minWidth={minWidth} />
                  </div>
                )}
              </div>
            </div>

            {/* Outlet to render Content component */}
            <div className="p-4 bg-gray-100 flex-1">
              <Outlet /> {/* Content component will be displayed here */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
