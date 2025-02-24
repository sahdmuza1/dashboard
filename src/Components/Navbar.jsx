import { useState } from "react";
import { ChevronDown, User } from "lucide-react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="fixed top-0 left-60 w-[calc(100%-240px)] bg-white shadow-md p-4 flex justify-between items-center z-40">
      {/* Dashboard Title */}
      <h2 className="text-xl font-bold text-gray-700">Dashboard</h2>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          className="flex items-center gap-2 bg-blue-700 text-white font-medium rounded-full text-sm px-4 py-2.5 hover:bg-blue-800"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <User size={18} />
          <ChevronDown size={18} />
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 p-2">
            <ul className="text-sm text-gray-700">
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
              <hr className="my-1" />
              <li className="px-3 py-2 text-red-600 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
