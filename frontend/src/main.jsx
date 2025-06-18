import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/context/UserContext.jsx";
import { ThemeProvider } from "./components/context/themeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <UserProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </UserProvider>
  </ThemeProvider>
);
