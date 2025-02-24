import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Users from "./Pages/User";
import Sales from "./Pages/Sales";
import Revenue from "./Pages/Revenue";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  // Hide sidebar and navbar on login page
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="h-screen w-screen flex flex-col">
      {!isLoginPage && <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />}
      <div className="flex flex-1 pt-16">
        {!isLoginPage && (
          <div className={`transition-all duration-300 ${isSidebarOpen ? "w-60" : "w-0 hidden"} md:block`}>
            <Sidebar />
          </div>
        )}
        {/* Ensures login page is centered properly */}
        <div className={`flex-1 p-5 overflow-auto ${isLoginPage ? "flex items-center justify-center" : "bg-gray-100"}`}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
