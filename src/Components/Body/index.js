import React from "react";
import PatternOne from "./PatternOne";

const Body = () => {
  return (
    <div className="Body">
      <section className="text-section">
        <h1>
          Wesley Grubbs is a multidisciplinary creative technologist passionate
          about data-driven, meaningful experiences.
        </h1>
        <p>
          Based in Oakland, California, Wesley is the founder and Chief Creative
          Technologist of Pitch Interactive, a studio renowned for crafting
          innovative data visualizations since 2006. With a Bachelor’s in
          International Economics and a Master’s in Information Systems and over
          23 years of professional experience, Wesley has collaborated with
          leading organizations such as Google, Scientific American, The North
          Face, SPLC, eBay, GE, Wall Street Journal, and The United Nations
          Development Programme. His work spans diverse fields including
          economics, technology, politics, science, art, and social justice, all
          unified by a commitment to visual storytelling and human-centered
          design.
        </p>
        <p>
          An ambidextrous creative technologist, Wesley seamlessly bridges
          design and code, crafting everything from data visualizations and
          UI/UX systems to brand identities and iOS apps. Skilled in
          technologies including Swift, React, Node, Python, etc. he tailors his
          process for each project, leveraging over two decades of expertise.
          Beyond work, Wesley is a passionate father, rock climber, mountaineer,
          and alpinist, driven by a deep respect for the environment, equality,
          and human dignity.
        </p>
      </section>
      <PatternOne />
    </div>
  );
};

export default Body;
