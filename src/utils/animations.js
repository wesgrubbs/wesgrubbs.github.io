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
export const fadeInUp = (element, delay = 0, skipInitialAnimation = false) => {
  // Check if this is the initial load and we want to skip animation
  if (skipInitialAnimation && document.readyState !== "complete") {
    // Just set the final state without animation
    if (element) {
      if (Array.isArray(element)) {
        element.forEach((el) => {
          if (el) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
          }
        });
      } else {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
      }
    }
    return;
  }

  anime({
    targets: element,
    translateY: [20, 0],
    opacity: [0, 1],
    duration: 800,
    delay,
    easing: "easeOutQuad",
  });
};

export const staggerFadeIn = (
  elements,
  staggerDelay = 100,
  skipInitialAnimation = false
) => {
  // Check if this is the initial load and we want to skip animation
  if (skipInitialAnimation && document.readyState !== "complete") {
    // Just set the final state without animation
    if (elements) {
      if (Array.isArray(elements)) {
        elements.forEach((el) => {
          if (el) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
          }
        });
      } else {
        elements.style.opacity = 1;
        elements.style.transform = "translateY(0)";
      }
    }
    return;
  }

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
export const animateSectionTransition = (
  fromSection,
  toSection,
  skipInitialAnimation = false
) => {
  // Skip animation on initial load
  if (skipInitialAnimation && document.readyState !== "complete") {
    // Get the target background color based on the section and theme
    const isDarkMode = document.documentElement.classList.contains("dark");
    const toColor = getSectionColor(toSection, isDarkMode);

    // Just set the color without animation
    document.documentElement.style.backgroundColor = toColor;
    return;
  }

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

// Add a utility to check if we're in the initial page load
export const isInitialPageLoad = () => {
  return document.readyState !== "complete";
};
