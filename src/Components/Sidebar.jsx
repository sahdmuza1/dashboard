import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 bg-gray-800 text-white p-5 flex flex-col shadow-lg z-50">
      {/* Logo & Title */}
      <div className="flex items-center space-x-3 mb-6">
        <img src={logo} alt="Logo" className="h-10 w-10 object-cover rounded-full" />
      </div>

      <ul className="space-y-3 flex-1">
        <Link to="/users" className="hover:bg-gray-700 hover:text-blue-400 font-extrabold p-2 rounded uppercase block">
          Users
        </Link>
        <Link to="/sales" className="hover:bg-gray-700 hover:text-blue-400 font-extrabold p-2 rounded uppercase block">
          Sales
        </Link>
        <Link to="/revenue" className="hover:bg-gray-700 hover:text-blue-400 font-extrabold p-2 rounded uppercase block">
          Revenue
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
