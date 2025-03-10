import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import Play from "./components/sections/Play";
import Info from "./components/sections/Info";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import "./styles/globals.css";

// Main content component
const MainContent = () => {
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
