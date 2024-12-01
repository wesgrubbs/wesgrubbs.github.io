import React, { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import "./styles.scss";

const Body = () => {
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
    });
  }, [gridConfig]); // Re-run effect when grid configuration changes

  return (
    <div className="Body">
      <section className="text-section">
        <p>
          <b>Wesley Grubbs</b> is a multidisciplinary creator blending the
          worlds of code and design to craft unique, immersive experiences. With
          a skillset that spans data visualization, interface design, and iOS
          sports applications, Wesley seamlessly weaves functionality and
          aesthetics to bring ideas to life. Whether developing dynamic digital
          tools or designing intuitive user interfaces, his{" "}
          <a href="https://www.wesleygrubbs.com/">work</a> is driven by a
          passion for merging technical precision with creative expression.
        </p>
      </section>
      <section className="Grid">
        <div ref={gridRef} className="image-grid">
          {Array.from({ length: gridConfig.baseItems }, (_, index) => (
            <svg
              key={index}
              width="62"
              height="62"
              viewBox="0 0 63 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="grid-item"
              style={{
                transform: `rotate(${Math.floor(Math.random() * 4) * 90}deg)`,
              }}
            >
              <path
                className="path"
                d="M0.5 62.5L62.498 62.5C62.2307 28.3789 34.6211 0.769313 0.500001 0.501956L0.5 62.5Z"
              />
            </svg>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Body;
