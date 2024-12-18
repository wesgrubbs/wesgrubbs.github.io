import React, { createContext, useContext, useEffect, useState } from "react";
import SunCalc from "suncalc";

const OAKLAND_LAT = 37.8044;
const OAKLAND_LON = -122.2711;

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDayNight = () => {
      const now = new Date();
      const times = SunCalc.getTimes(now, OAKLAND_LAT, OAKLAND_LON);
      const isNighttime = now < times.sunrise || now > times.sunset;
      setIsDarkMode(isNighttime);
    };

    // Check initial state
    checkDayNight();

    // Update every minute
    const interval = setInterval(checkDayNight, 60000);

    return () => clearInterval(interval);
  }, []);

  // New effect to handle body class
  useEffect(() => {
    document.body.className = isDarkMode ? "theme--dark" : "theme--light";

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.className = "";
    };
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      <div
        className={`app-theme ${isDarkMode ? "theme--dark" : "theme--light"}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
