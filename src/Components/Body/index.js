import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

import "./styles.scss";

const Body = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const gridItems = gridRef.current.querySelectorAll(".grid-item");

    anime({
      targets: gridItems,
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(500), // 500ms between each image
      easing: "easeOutQuad",
      duration: 800,
    });
  }, []);

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
          {Array.from(
            { length: 3 * Math.ceil(window.innerWidth / 550) },
            (_, index) => (
              <img
                key={index}
                src={require("../../images/rectround.svg").default}
                alt="Dynamic SVG"
                className="grid-item"
                style={{
                  opacity: 0, // Start with 0 opacity for animation
                  transform: `rotate(${Math.floor(Math.random() * 4) * 90}deg)`,
                }}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Body;
