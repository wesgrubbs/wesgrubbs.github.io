export const playProjects = [
  {
    id: "generative-art",
    title: "Swift Generative Art",
    subtitle: "Open-source Swift library for creating generative art",
    blurb:
      "Geometric Playground is an open-source iOS app that transforms your device into a canvas for generative art. Built with SwiftUI, it brings the creative coding principles of Processing and P5.js to mobile, featuring interactive geometric animations that blend math with art.",
    year: "2024 - Present",
    description: [
      "Geometric Playground is an open-source iOS application that brings the spirit of creative coding to mobile devices, reimagining generative art through SwiftUI's powerful animation capabilities.",
      "Drawing from years of experience with Processing and P5.js, the app features dynamic compositions of circles, squares, and gradients that respond to user interaction, while its open-source nature serves both as a learning tool for developers exploring SwiftUI's animation framework and as a foundation for future explorations in mobile generative art.",
    ],
    images: [
      {
        src: "/images/play/gradient_square_xcode.webp",
        alt: "Geometric Playground showing square gradient animation in Xcode",
        type: "thumbnail", // Used in the Play grid view
      },
      {
        src: "/images/play/gradient_square_xcode.webp",
        alt: "Geometric Playground showing square gradient animation in Xcode",
        type: "hero", // Used as hero image in detail view
      },
      {
        src: "/images/play/_circle_grid_3screens.webp",
        alt: "Geometric animation with circles and gradients",
        type: "gallery", // First gallery image (side by side)
      },
      {
        src: "/images/play/xcode_geometricplayground_sqgrad.webp",
        alt: "Close-up of animation code in Swift",
        type: "gallery", // Second gallery image (side by side)
      },
      {
        src: "/images/play/gradient_square_4screens.webp",
        alt: "User interacting with Geometric Playground on an iPhone",
        type: "gallery", // Third gallery image (full width)
      },
    ],
    roles: ["Creative Coding", "SwiftUI", "Visual Design"],
    url: "https://github.com/wesgrubbs/GeometricPlayground",
  },
  {
    id: "geometric-playground",
    title: "Design Explorations (Gray Pattern)",
    subtitle: "Expressing with shapes and colors",
    blurb:
      "A design practice of abstract exploration, where Figma becomes a canvas for spontaneous creativity. Each piece in this growing collection of hundreds represents a moment of pure design play, experimenting with shape and color to create unique visual compositions shared frequently on Instagram.",
    year: "2023 - Present",
    description: [
      "Since 2023, I've maintained a creative ritual that transforms design exploration into visual meditation. Through Figma, I craft abstract compositions that push the boundaries of shape and color, each piece serving as a distinct capsule of experimentation and artistic intuition.",
      "This growing collection of hundreds of designs, shared on Instagram, represents more than just a portfolio—it's a living document of creative evolution, where each composition emerges from moments of inspiration and the pure joy of unrestricted play.",
      "The practice has become both a creative outlet and a technical exercise, allowing me to continually refine my design sensibilities while maintaining a space for spontaneous artistic expression.",
    ],
    images: [
      {
        src: "/images/play/daily_geometric_play.webp",
        alt: "Abstract geometric pattern design in gray and black",
        type: "thumbnail", // Used in the Play grid view
      },
      {
        src: "/images/play/daily_geometric_play.webp",
        alt: "Abstract geometric pattern design in gray and black",
        type: "hero", // Used as hero image in detail view
      },
      {
        src: "/images/play/daily_geometric_play.webp",
        alt: "Collection of abstract shapes in gray scale",
        type: "gallery", // First gallery image (side by side)
      },
      {
        src: "/images/play/daily_geometric_play.webp",
        alt: "Geometric composition with circles and triangles",
        type: "gallery", // Second gallery image (side by side)
      },
      {
        src: "/images/play/daily_geometric_play.webp",
        alt: "Grid of multiple geometric pattern explorations",
        type: "gallery", // Third gallery image (full width)
      },
    ],
    roles: ["Algorithm Design", "Creative Writing", "Data Analysis"],
    url: "https://www.instagram.com/gray.pattern/",
  },
];

// For backward compatibility
playProjects.forEach((project) => {
  // If no thumbnail image is defined, use the first image
  if (!project.image && project.images) {
    const thumbnailImage = project.images.find(
      (img) => img.type === "thumbnail"
    );
    if (thumbnailImage) {
      project.image = thumbnailImage.src;
    } else if (project.images.length > 0) {
      project.image = project.images[0].src;
    }
  }
});

export default playProjects;
