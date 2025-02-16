import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 h-full bg-gray-500 text-white p-5 flex flex-col">
      
      <ul className="mt-5 space-y-3 flex-1">
        <Link to="/Users" className="hover:bg-gray-700 hover:text-blue-400 hover:font-extrabold p-2 rounded uppercase block">Users</Link>
        <Link to="/Sales" className="hover:bg-gray-700 p-2 hover:text-blue-400 hover:font-extrabold rounded uppercase block">Sales</Link>
        <Link to="/Revenue" className="hover:bg-gray-700 p-2 hover:text-blue-400 rounded uppercase hover:font-extrabold block">Revenue</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
