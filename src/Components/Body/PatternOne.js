import React, { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import "./styles.scss";

const PatternOne = () => {
  const gridRef = useRef(null);
  const [gridConfig, setGridConfig] = useState(calculateGridConfig());

  // Function to calculate grid configuration based on window width
  function calculateGridConfig() {
    const width = window.innerWidth;
    if (width > 1200) {
      return {
        baseItems: 60,
        rows: 3,
      };
    } else if (width >= 900 && width <= 1200) {
      return {
        baseItems: 32,
        rows: 2,
      };
    } else {
      return {
        baseItems: 14,
        rows: 1,
      };
    }
  }

  // Animation function to be reused
  const animatePath = (path) => {
    const length = path.getTotalLength();

    // Reset to initial state
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Animate path
    return anime({
      targets: path,
      strokeDashoffset: [
        { value: length, duration: 0 }, // Start fully offset
        { value: 0, duration: 400 }, // Animate to zero
      ],
      easing: "easeOutQuad",
    });
  };

  useEffect(() => {
    // Handle window resize to update grid configuration
    const handleResize = () => {
      setGridConfig(calculateGridConfig());
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const gridItems = gridRef.current.querySelectorAll(".path");
    const gridContainer = gridRef.current;

    // Calculate the center of the grid
    const containerRect = gridContainer.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    gridItems.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenterX =
        itemRect.left - containerRect.left + itemRect.width / 2;
      const itemCenterY =
        itemRect.top - containerRect.top + itemRect.height / 2;

      // Calculate distance from center
      const distanceFromCenter = Math.sqrt(
        Math.pow(itemCenterX - centerX, 2) + Math.pow(itemCenterY - centerY, 2)
      );

      const length = item.getTotalLength();

      // Set initial state
      item.style.strokeDasharray = length;
      item.style.strokeDashoffset = length;

      // Custom animation for each item
      anime({
        targets: item,
        strokeDashoffset: [
          { value: length, duration: 0 }, // Start fully offset
          { value: 0, duration: 400 }, // Animate to zero
        ],
        delay: distanceFromCenter * 5, // Delay based on distance from center
        easing: "easeOutQuad",
      });

      // Add hover event listeners
      const parentSvg = item.closest("svg");
      parentSvg.addEventListener("mouseenter", () => {
        animatePath(item);
      });
    });
  }, [gridConfig]); // Re-run effect when grid configuration changes

  return (
    <section className="Grid">
      <div ref={gridRef} className="image-grid">
        {Array.from({ length: gridConfig.baseItems }, (_, index) => (
          <svg
            key={index}
            width="62"
            height="62"
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="grid-item"
            style={{
              transform: `rotate(${Math.floor(Math.random() * 4) * 90}deg)`,
            }}
          >
            <path
              className="path"
              d="M64 64.0001V64.0001C64 29.2061 35.7939 1.00006 1 1.00006V1.00006L1 64.0001L64 64.0001Z"
            />
          </svg>
        ))}
      </div>
    </section>
  );
};

export default PatternOne;
