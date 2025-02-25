// colors.js - Central location for all color definitions
// Use this file when you need to access colors in JavaScript

// Base brand colors
export const BRAND_COLORS = {
  BLUE: "#295496",
  BLACK: "#0B0A07",
  ORANGE: "#e14414",
  YELLOW: "#fdaa08",
  RED: "#fb3735",
};

// Grey scale
export const GREY_COLORS = {
  100: "#2d2926",
  90: "#58514b",
  80: "#847971",
  70: "#aba29c",
  60: "#d0cbc8",
};

// Section background colors - Light mode
export const SECTION_COLORS_LIGHT = {
  HERO: BRAND_COLORS.YELLOW,
  WORK: "#E6EED6",
  PLAY: "#FBF7F4",
  INFO: BRAND_COLORS.YELLOW,
};

// Section background colors - Dark mode
export const SECTION_COLORS_DARK = {
  HERO: BRAND_COLORS.YELLOW, // Hero stays yellow in dark mode
  WORK: BRAND_COLORS.BLACK,
  PLAY: "#2F243A", //dark purple
  INFO: "#333232", //jet
};

// Helper function to get section color based on section name and dark mode
export const getSectionColor = (sectionName, isDarkMode = false) => {
  const sectionColors = isDarkMode ? SECTION_COLORS_DARK : SECTION_COLORS_LIGHT;

  switch (sectionName) {
    case "hero":
      return sectionColors.HERO;
    case "work":
      return sectionColors.WORK;
    case "play":
      return sectionColors.PLAY;
    case "info":
      return sectionColors.INFO;
    default:
      return sectionColors.HERO;
  }
};

export default {
  BRAND_COLORS,
  GREY_COLORS,
  SECTION_COLORS_LIGHT,
  SECTION_COLORS_DARK,
  getSectionColor,
};
