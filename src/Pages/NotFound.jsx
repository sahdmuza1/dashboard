import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 w-full">
      <div className="text-center">
        <h2 className="text-3xl text-red-500 font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">Oops! The page you are looking for does not exist.</p>
        
        <Link to="/">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition">
            Go to Login Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
