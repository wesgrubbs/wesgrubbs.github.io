import anime from "animejs";
import { getSectionColor } from "../utils/colors";

export const scrollToSection = (sectionId) => {
  // Remove the # if it's included
  const id = sectionId.replace("#", "");
  const element = document.getElementById(id);

  if (element) {
    // Get the element's position relative to the viewport
    const elementPosition = element.getBoundingClientRect().top;
    // Add current scroll position to get absolute position
    const offsetPosition = elementPosition + window.pageYOffset;

    // Create the animation
    anime({
      targets: [document.documentElement, document.body],
      scrollTop: offsetPosition,
      duration: 800,
      easing: "easeInOutQuart",
      // Add a small complete callback to ensure the hash is updated after scroll
      complete: () => {
        window.location.hash = sectionId;
      },
    });
  }
};

// Additional animations we can use throughout the site
export const fadeInUp = (element, delay = 0) => {
  anime({
    targets: element,
    translateY: [20, 0],
    opacity: [0, 1],
    duration: 800,
    delay,
    easing: "easeOutQuad",
  });
};

export const staggerFadeIn = (elements, staggerDelay = 100) => {
  anime({
    targets: elements,
    opacity: [0, 1],
    translateY: [10, 0],
    duration: 800,
    delay: anime.stagger(staggerDelay),
    easing: "easeOutQuad",
  });
};

// Animation for section background transitions using centralized colors
export const animateSectionTransition = (fromSection, toSection) => {
  // Get current background color
  const fromColor = getComputedStyle(document.documentElement).backgroundColor;

  // Get the target background color based on the section and theme
  const isDarkMode = document.documentElement.classList.contains("dark");

  // Use the centralized color system
  const toColor = getSectionColor(toSection, isDarkMode);

  // Animate the transition
  anime({
    targets: document.documentElement,
    backgroundColor: [fromColor, toColor],
    duration: 1000,
    easing: "easeInOutQuad",
  });
};
