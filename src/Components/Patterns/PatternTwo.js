import React, { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import "./styles.scss";

const PatternTwo = () => {
  const gridRef = useRef(null);
  const [gridConfig, setGridConfig] = useState(calculateGridConfig());

  // Reuse the same configuration and animation logic
  function calculateGridConfig() {
    const width = window.innerWidth;
    if (width > 1200) {
      return { baseItems: 60, rows: 3 };
    } else if (width >= 900 && width <= 1200) {
      return { baseItems: 32, rows: 2 };
    } else {
      return { baseItems: 14, rows: 1 };
    }
  }

  const animatePath = (path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    return anime({
      targets: path,
      strokeDashoffset: [
        { value: length, duration: 0 },
        { value: 0, duration: 400 },
      ],
      easing: "easeOutQuad",
    });
  };

  // Reuse the same useEffect hooks
  useEffect(() => {
    const handleResize = () => {
      setGridConfig(calculateGridConfig());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const gridItems = gridRef.current.querySelectorAll(".path");
    const gridContainer = gridRef.current;
    const containerRect = gridContainer.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    gridItems.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenterX =
        itemRect.left - containerRect.left + itemRect.width / 2;
      const itemCenterY =
        itemRect.top - containerRect.top + itemRect.height / 2;
      const distanceFromCenter = Math.sqrt(
        Math.pow(itemCenterX - centerX, 2) + Math.pow(itemCenterY - centerY, 2)
      );
      const length = item.getTotalLength();

      item.style.strokeDasharray = length;
      item.style.strokeDashoffset = length;

      anime({
        targets: item,
        strokeDashoffset: [
          { value: length, duration: 0 },
          { value: 0, duration: 400 },
        ],
        delay: distanceFromCenter * 5,
        easing: "easeOutQuad",
      });

      const parentSvg = item.closest("svg");
      parentSvg.addEventListener("mouseenter", () => {
        animatePath(item);
      });
    });
  }, [gridConfig]);

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
            <path className="path" d="M1 1h63v63H1z M1 32h63 M32 1v63" />
          </svg>
        ))}
      </div>
    </section>
  );
};

export default PatternTwo;
