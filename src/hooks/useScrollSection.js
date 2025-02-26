import { useState, useEffect } from "react";

const useScrollSection = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Skip animation during initial render
      if (isInitialLoad) {
        setIsInitialLoad(false);

        // Set initial section without animation
        const scrollPosition = window.scrollY;
        const sections = ["hero", "work", "play", "info"];

        for (const section of sections) {
          const element = document.getElementById(section);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top + scrollPosition;
          const sectionHeight = rect.height;

          if (
            scrollPosition >= sectionTop - window.innerHeight * 0.3 &&
            scrollPosition <
              sectionTop + sectionHeight - window.innerHeight * 0.3
          ) {
            setActiveSection(section);
            break;
          }
        }
        return;
      }

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
  }, [activeSection, isInitialLoad]);

  return { activeSection, isInitialLoad };
};

export default useScrollSection;
