import { Routes, Route } from "react-router-dom";
import Revenue from "./Pages/Revenue";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Users from "./Pages/User";
import Sales from "./Pages/Sales";
import "./App.css";
function App() {
  return (
    <div className="h-screen w-screen flex flex-col"> 
      <Navbar />
      <div className="flex flex-1"> 
        <Sidebar />
        <div className="flex-1 p-5 overflow-auto bg-gray-100">
          <Routes>
            <Route path="/" element={<Revenue />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Sales" element={<Sales />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
