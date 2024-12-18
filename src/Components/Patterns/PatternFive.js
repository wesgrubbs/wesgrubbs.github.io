import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import "./styles.scss";

const PatternFive = () => {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    // Initial fade in - 3 seconds
    anime({
      targets: image1Ref.current,
      opacity: [0, 1],
      duration: 5000,
      easing: "easeInOutQuad",
      complete: startBlendAnimation,
    });

    function startBlendAnimation() {
      const blendModes = [
        "multiply",
        "overlay",
        "difference",
        "exclusion",
        "screen",
      ];
      let currentIndex = 0;
      let isFirstImage = true;

      const animate = () => {
        const nextIndex = (currentIndex + 1) % blendModes.length;
        const activeImage = isFirstImage
          ? image1Ref.current
          : image2Ref.current;
        const nextImage = isFirstImage ? image2Ref.current : image1Ref.current;

        // Set up next blend mode
        nextImage.style.mixBlendMode = blendModes[nextIndex];

        // 5-second crossfade animation
        anime
          .timeline()
          .add({
            targets: nextImage,
            opacity: [0, 1],
            duration: 5000,
            easing: "easeInOutQuad",
          })
          .add(
            {
              targets: activeImage,
              opacity: 0,
              duration: 5000,
              easing: "easeInOutQuad",
            },
            "-=5000"
          ); // Start at same time

        currentIndex = nextIndex;
        isFirstImage = !isFirstImage;
      };

      // Start the cycle - total time is 10 seconds (5s transition + 5s pause)
      const intervalId = setInterval(animate, 10000);
      return () => clearInterval(intervalId);
    }
  }, []);

  const imageStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "668px",
    height: "681px",
  };

  return (
    <section className="Grid">
      <div
        className="image-grid"
        style={{
          position: "relative",
          width: "668px",
          height: "681px",
          margin: "0 0 -100px 0",
        }}
      >
        <img
          ref={image1Ref}
          src="./images/pattern_double_bar.png"
          alt="Pattern"
          style={{
            ...imageStyles,
            opacity: 0,
            mixBlendMode: "multiply",
          }}
        />
        <img
          ref={image2Ref}
          src="./images/pattern_double_bar.png"
          alt="Pattern"
          style={{
            ...imageStyles,
            opacity: 0,
          }}
        />
      </div>
    </section>
  );
};

export default PatternFive;
