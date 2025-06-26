import React, { createContext, useContext, useState, ReactNode } from "react";

const lightColors = {
  background: "#f8f9fa",
  text: "#212529",
  primary: "#0d6efd",
  card: "#ffffff",
  border: "#dee2e6",
};

const darkColors = {
  background: "#121212",
  text: "#f8f9fa",
  primary: "#bb86fc",
  card: "#1e1e1e",
  border: "#2c2c2c",
};

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  colors: typeof lightColors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const colors = theme === "light" ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
