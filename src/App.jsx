import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Users from "./Pages/User";
import Sales from "./Pages/Sales";
import Revenue from "./Pages/Revenue";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound"; // ✅ Import NotFound component
import Profile from "./Pages/Profile"
import Settings  from "./Pages/Settings";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/revenue" element={<Revenue />} />
      <Route path="/notfound" element={<NotFound />} /> {/* ✅ Add NotFound Route */}
      <Route path="*" element={<NotFound />} /> {/* ✅ Catch-all for invalid routes */}
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Settings" element={<Settings/>}/>

    </Routes>
  );
}

export default App;
