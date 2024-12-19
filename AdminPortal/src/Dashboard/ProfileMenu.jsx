import { faUser, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
export default function ProfileMenu({ minWidth }) {
  return minWidth >= 432 ? (
    <div className="w-40  bg-white shadow-md rounded-md">
      <ul className=" overflow-visible ">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <a href="#profile">
            <FontAwesomeIcon icon={faUser} className="mr-1" />
            Profile
          </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <a href="#settings">
            <FontAwesomeIcon icon={faGear} className="mr-1" />
            Settings
          </a>
        </li>
      </ul>
    </div>
  ) : (
    <div className="w-40  bg-white shadow-md rounded-md">
      <ul className=" overflow-visible">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <a href="#profile">
            <FontAwesomeIcon icon={faUser} className="mr-1" /> Profile
          </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <a href="#settings">
            <FontAwesomeIcon icon={faGear}  className="mr-1"/>
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}
