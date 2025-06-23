import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  const newTheme = localStorage.getItem("chat-theme");
  const toggleTheme = () => {
    setTheme(() => {
      localStorage.setItem("chat-theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, newTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
