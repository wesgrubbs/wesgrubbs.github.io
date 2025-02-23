import { useState } from "react";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import Play from "./components/sections/Play";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./styles/globals.css";

function App() {
  console.log("App is rendering");
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Work />
        <Play />
      </main>
      <Footer />
    </div>
  );
}

export default App;
