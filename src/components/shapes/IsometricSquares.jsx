import { useEffect, useRef, useState } from "react";
import anime from "animejs";

const IsometricSquares = () => {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const STROKE_WIDTH = 0.6;

  const TRANSFORMS = ["rotate-0", "rotate-180", "scale-x-[-1]", "scale-y-[-1]"];

  useEffect(() => {
    // Animate top row from top
    anime({
      targets: topRowRef.current.children,
      opacity: [0, 1],
      translateY: [-50, 0],
      delay: anime.stagger(180),
      easing: "easeOutQuart",
      duration: 1800,
    });

    // Animate bottom row from bottom
    anime({
      targets: bottomRowRef.current.children,
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(200),
      easing: "easeOutExpo",
      duration: 2000,
    });
  }, []);

  const getRandomTransform = () => {
    return TRANSFORMS[Math.floor(Math.random() * TRANSFORMS.length)];
  };
  /* eslint-disable react/prop-types */
  const Square = ({ index }) => {
    const [transform, setTransform] = useState(getRandomTransform());

    const handleMouseOver = () => {
      setTransform(getRandomTransform());
    };

    return (
      <div
        key={index}
        className="flex items-center justify-center"
        style={{
          marginRight: "-1.2px",
          marginBottom: "0px",
        }}
      >
        <svg
          width="37"
          height="42"
          viewBox="0 0 57 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${transform} transform-gpu cursor-pointer`}
          onMouseOver={handleMouseOver}
        >
          <rect
            width="32.4025"
            height="32.4025"
            transform="matrix(0.866025 -0.5 -0.866025 -0.5 29.0615 66)"
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
            strokeLinejoin="bevel"
          />
          <rect
            width="32.4025"
            height="32.4025"
            transform="matrix(0.866025 -0.5 0 -1 1 49.7988)"
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
            strokeLinejoin="bevel"
          />
          <rect
            width="32.4025"
            height="32.4025"
            transform="matrix(0.866025 0.5 0 -1 29.0615 33.5975)"
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
            strokeLinejoin="bevel"
          />
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={i}
              y1="-0.5"
              x2="32.0927"
              y2="-0.5"
              transform={`matrix(0.866025 0.5 0 -1 29.2412 ${33.3674 - i * 4})`}
              stroke="currentColor"
              strokeWidth={STROKE_WIDTH}
            />
          ))}
        </svg>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-fit max-w-[148px]">
      <div ref={topRowRef} className="flex flex-row">
        {Array.from({ length: 4 }).map((_, index) => (
          <Square key={index} index={index} rowType="top" />
        ))}
      </div>
      <div ref={bottomRowRef} className="flex flex-row">
        {Array.from({ length: 4 }).map((_, index) => (
          <Square key={index} index={index} rowType="bottom" />
        ))}
      </div>
    </div>
  );
};

export default IsometricSquares;
