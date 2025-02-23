import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import Play from "./components/sections/Play";
import Info from "./components/sections/Info";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import "./styles/globals.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-primary-black text-primary-black dark:text-primary-yellow transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Work />
          <Play />
          <Info />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
