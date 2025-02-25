import { useEffect } from "react";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import Play from "./components/sections/Play";
import Info from "./components/sections/Info";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import useScrollSection from "./hooks/useScrollSection";
import "./styles/globals.css";

// Main content component that applies section classes
const MainContent = () => {
  const activeSection = useScrollSection();

  // Apply section classes to HTML element with animation
  useEffect(() => {
    if (!activeSection) return;

    const htmlElement = document.documentElement;
    const currentSectionClass = Array.from(htmlElement.classList).find((cls) =>
      cls.startsWith("in-")
    );

    // If we already have the right class, don't do anything
    if (currentSectionClass === `in-${activeSection}`) return;

    // Debounce the class changes to prevent flickering during fast scrolling
    const timer = setTimeout(() => {
      // First, remove any existing section classes
      htmlElement.classList.remove("in-hero", "in-work", "in-play", "in-info");

      // Add the current section class
      htmlElement.classList.add(`in-${activeSection}`);
    }, 50); // Short delay for smoother transitions

    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Work />
        <Play />
        <Info />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
