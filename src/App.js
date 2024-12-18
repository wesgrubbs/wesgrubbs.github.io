import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./_scripts/ThemeProvider";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./styles/variables.css";
import "./App.css";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(".blink-link");

    links.forEach((link) => {
      if (isToggled) {
        link.style.textDecoration = "underline";
      } else {
        link.style.color = "";
        link.style.textDecoration = "none";
      }
    });
  }, [isToggled]);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Header isToggled={isToggled} handleToggle={handleToggle} />
        <Body isToggled={isToggled} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
