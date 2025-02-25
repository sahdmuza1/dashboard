import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  LogOut,
  Settings as SettingsIcon,
  User,
  Bell,
  Menu
} from "lucide-react";
import profileImage from "../assets/person.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SettingsModal from "../Pages/Settings"; // ✅ Import Settings modal
import ProfileModal from "../Pages/Profile"; // ✅ Import Profile modal

const Navbar = ({ toggleSidebar }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false); // ✅ State for Settings Modal
  const [showProfileModal, setShowProfileModal] = useState(false); // ✅ State for Profile Modal

  const nav = useNavigate();

  const handleLogOut = () => {
    nav("/");
  };

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current && !profileRef.current.contains(event.target) &&
        notificationRef.current && !notificationRef.current.contains(event.target)
      ) {
        setShowProfileDropdown(false);
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar Container */}
      <div className="fixed top-0 left-0 lg:left-60 w-full lg:w-[calc(100%-240px)] bg-white border-b border-gray-200 p-4 flex justify-between items-center z-40 shadow-md">
        
        {/* Left Section */}
        <div className="flex items-center gap-6 flex-1">
          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-200 transition" onClick={toggleSidebar}>
            <Menu size={24} className="text-gray-700" />
          </button>
          <h1 className="text-xl font-bold tracking-wide ml-5 text-blue-500 outlined hover:text-black">Dashboard</h1>
        </div>

        {/* Right Section (Notifications & Profile) */}
        <div className="flex items-center gap-6">
          
          {/* Notifications Dropdown */}
          <div className="relative" ref={notificationRef}>
            <button
              className="relative p-2 rounded-lg hover:bg-gray-200 transition"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileDropdown(false);
              }}
            >
              <Bell size={22} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs hover:bg-blue-300 font-bold px-2 py-0.5 rounded-full">
                3
              </span>
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 p-2">
                <p className="text-gray-900 font-medium text-sm">🔔 New Order Received</p>
                <p className="text-gray-700 text-sm">Order #12345 has been placed successfully.</p>
                <hr className="my-1" />
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              className="flex items-center gap-3 bg-white border border-blue-300 text-gray-800 font-medium rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => {
                setShowProfileDropdown(!showProfileDropdown);
                setShowNotifications(false);
              }}
            >
              <img src={profileImage} alt="User Avatar" className="w-8 h-8 rounded-full object-cover" />
              <span className="hidden sm:block font-medium">SahD</span>
              <ChevronDown size={18} />
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-lg border border-gray-200 p-2">
                <ul className="text-sm text-gray-700">
                  {/* ✅ Open Profile Modal Instead of Navigating */}
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 hover:text-blue-700 cursor-pointer rounded"
                    onClick={() => {
                      setShowProfileDropdown(false);
                      setShowProfileModal(true); // ✅ Open Profile Modal
                    }}
                  >
                    <User size={16} /> Profile
                  </li>
                  {/* ✅ Open Settings Modal */}
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700 rounded"
                    onClick={() => {
                      setShowProfileDropdown(false);
                      setShowSettingsModal(true); // ✅ Open settings modal
                    }}
                  >
                    <SettingsIcon size={16} /> Settings
                  </li>
                  <hr className="my-1" />
                  <li className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer rounded">
                    <LogOut size={16} />
                    <span onClick={handleLogOut}>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Profile Modal */}
      <ProfileModal open={showProfileModal} onClose={() => setShowProfileModal(false)} />
      
      {/* ✅ Settings Modal */}
      <SettingsModal open={showSettingsModal} onClose={() => setShowSettingsModal(false)} />
    </>
  );
};

export default Navbar;
