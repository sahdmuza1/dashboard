
import logo from "../assets/logo.jpg"; 

const Navbar = () => { 
  return (
    <div className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <img src={logo} alt="Logo" className="h-12 w-auto" /> 
      <div className="flex items-center space-x-4">
        <button
          type="button"
          
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5"
          $      >
          Profile
        </button>
      </div>
    </div>
  );
};

export default Navbar;