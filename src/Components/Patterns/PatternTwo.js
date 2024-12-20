import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import "./styles.scss";

const PatternTwo = () => {
  const svgRef = useRef(null);

  // Generate random circles with their properties
  const circles = Array.from({ length: 20 }, () => {
    const size = Math.random() * 20 + 10; // Random size between 10 and 30
    const radius = size / 2;

    // Adjust position range to account for radius and prevent edge clipping
    const x = radius + Math.random() * (100 - 2 * radius);
    const y = radius + Math.random() * (100 - 2 * radius);

    const delay = Math.random() * 2000; // Random delay up to 2 seconds
    const duration = Math.random() * 10000 + 100000; // Random duration between 1-2 seconds
    const rotation = Math.random() * 360; // Random rotation angle
    const isClockwise = Math.random() < 0.5; // Random direction

    return {
      size,
      x,
      y,
      delay,
      duration,
      rotation,
      isClockwise,
    };
  });

  useEffect(() => {
    const circlePaths = svgRef.current?.querySelectorAll(".circle-path");
    if (!circlePaths) return;

    circlePaths.forEach((circle, index) => {
      const circleData = circles[index];

      // Calculate the circle's circumference
      const radius = circleData.size / 2;
      const circumference = 2 * Math.PI * radius;

      // Initial setup - make circle invisible
      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference;

      // Apply rotation
      circle.style.transform = `rotate(${circleData.rotation}deg)`;
      circle.style.transformOrigin = `${circleData.x}% ${circleData.y}%`;

      // Animate the drawing of the circle
      anime({
        targets: circle,
        strokeDashoffset: [circumference, 0],
        duration: circleData.duration,
        delay: circleData.delay,
        easing: "easeInOutSine",
        direction: circleData.isClockwise ? "normal" : "reverse",
        complete: () => {
          // Ensure circle is completely drawn
          circle.style.strokeDasharray = "none";
          circle.style.strokeDashoffset = 0;
        },
      });
    });
  }, []);

  return (
    <section className="Grid">
      <div className="image-grid">
        <svg
          ref={svgRef}
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          style={{ maxWidth: "800px", aspectRatio: "1/1" }}
          preserveAspectRatio="xMidYMid meet"
        >
          {circles.map((circle, index) => (
            <circle
              key={index}
              className="circle-path"
              cx={`${circle.x}%`}
              cy={`${circle.y}%`}
              r={circle.size / 2}
              fill="none"
              stroke="var(--theme-text-secondary)"
              strokeWidth="0.15"
              strokeLinecap="round"
              opacity={0.8}
              style={{
                strokeDasharray: Math.PI * circle.size,
                strokeDashoffset: Math.PI * circle.size,
              }}
            />
          ))}
        </svg>
      </div>
    </section>
  );
};

export default PatternTwo;
