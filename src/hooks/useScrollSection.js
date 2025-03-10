import { useState, useEffect } from "react";

const useScrollSection = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = ["hero", "work", "play", "info"];

      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionHeight = rect.height;
        const threshold = windowHeight * 0.3; // 30% threshold

        // If we're within this section (with threshold)
        if (
          scrollPosition >= sectionTop - threshold &&
          scrollPosition < sectionTop + sectionHeight - threshold
        ) {
          if (activeSection !== section) {
            setActiveSection(section);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return activeSection;
};

export default useScrollSection;
