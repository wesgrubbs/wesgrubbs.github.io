import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import "./styles.scss";

const PatternSeven = () => {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!image1Ref.current || !image2Ref.current) return;

    // Initial fade in
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
        "darken",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
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

        if (!activeImage || !nextImage) return;

        nextImage.style.mixBlendMode = blendModes[nextIndex];

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
          );

        currentIndex = nextIndex;
        isFirstImage = !isFirstImage;
      };

      const intervalId = setInterval(animate, 10000);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <section
      className="Grid"
      ref={containerRef}
      data-pattern-dimensions="591/708"
    >
      <div
        className="image-grid absolute-layout"
        style={{ maxWidth: "591px", margin: "0 auto" }}
      >
        <img
          ref={image1Ref}
          src="./images/pattern_offset_circles.png"
          alt="Pattern"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: 0,
            mixBlendMode: "multiply",
          }}
        />
        <img
          ref={image2Ref}
          src="./images/pattern_offset_circles.png"
          alt="Pattern"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: 0,
          }}
        />
      </div>
    </section>
  );
};

export default PatternSeven;
