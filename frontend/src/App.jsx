import { useAuth } from "./components/context/UserContext";
import Login from "./components/pages/Auth/Login";
import Profile from "./components/pages/Auth/Profile";
import Signup from "./components/pages/Auth/Signup";
import Home from "./components/pages/Dashboard/Home";
import Navbar from "./components/pages/Dashboard/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/pages/Auth/ProtectedRoute";
import { useTheme } from "./components/context/themeContext";
import Settings from "./components/pages/Auth/Settings";

function App() {
  useAuth();
  const { theme } = useTheme();
  return (
    <div data-theme="cupcake">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
