import React from "react";
import { ThemeProvider } from "./_scripts/ThemeProvider";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./styles/variables.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Body />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
