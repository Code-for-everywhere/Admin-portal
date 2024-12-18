import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  return (
    <header>
      <div className="flex items-center justify-between px-10 py-4 border-b border-gray-400">
        {/* Left Icon */}
        <div className="flex">
          <div>
            <FontAwesomeIcon icon={faBars} />
          </div>
          {/* Title */}
          <h1 className="ml-4">Dashboard</h1>
        </div>

        {/* Right Icons and Profile Picture */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faSun} className="mr-4" />
          <img
            src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D"
            className="rounded-full object-cover w-10 h-10"
            alt="profile picture"
          />
        </div>
      </div>
    </header>
  );
}
