import { Link } from "react-router-dom";
import { FiUsers, FiDollarSign, FiBarChart2 } from "react-icons/fi";
import logo from "../assets/logo.jpg";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-5 flex flex-col shadow-xl z-50">
      {/* Logo & Title */}
      <div className="flex items-center space-x-3 mb-8">
        <img src={logo} alt="Logo" className="h-12 w-12 object-cover rounded-full" />
        
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link
              to="/users"
              className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:text-blue-400"
            >
              <FiUsers className="text-lg" />
              <span className="text-sm font-semibold uppercase">Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="/sales"
              className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:text-blue-400"
            >
              <FiDollarSign className="text-lg" />
              <span className="text-sm font-semibold uppercase">Sales</span>
            </Link>
          </li>
          <li>
            <Link
              to="/revenue"
              className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:text-blue-400"
            >
              <FiBarChart2 className="text-lg" />
              <span className="text-sm font-semibold uppercase">Revenue</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
