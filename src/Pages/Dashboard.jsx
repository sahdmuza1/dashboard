import React from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import { useState } from "react";
import { useLocation } from 'react-router-dom';
function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    // const location = useLocation();
  
    // const isLoginPage = location.pathname === "/login";
  return (
    <>
        <div className="h-screen w-screen flex flex-col">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 pt-16">
          <div className={`transition-all duration-300 ${isSidebarOpen ? "w-60" : "w-0 hidden"} md:block`}>
            <Sidebar />
          </div>
        
        </div>
        </div>
        

        


    </>
  )
}

export default Dashboard