import anime from "animejs";

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
