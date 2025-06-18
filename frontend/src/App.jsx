import { Settings } from "lucide-react";
import { useAuth } from "./components/context/UserContext";
import useUserAuth from "./components/hooks/useUserAuth";
import Login from "./components/pages/Auth/Login";
import Profile from "./components/pages/Auth/Profile";
import Signup from "./components/pages/Auth/Signup";
import Home from "./components/pages/Dashboard/Home";
import Navbar from "./components/pages/Dashboard/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";

function App() {
  // useUserAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
