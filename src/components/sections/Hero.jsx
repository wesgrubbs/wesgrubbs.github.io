import React from "react";
import Follow from "../ui/Follow";

const Hero = () => {
  const createLink = (text, url) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-meta-sans underline text-current hover:text-primary-red transition-colors duration-300"
    >
      {text}
    </a>
  );

  return (
    <div id="hero" className="min-h-screen flex px-6 pt-24">
      <div className="w-full lg:w-2/3 mt-8">
        <h1 className="font-meta-serif text-4xl lg:text-4xl font-bold pb-2 ml-[-14px]">
          Wesley Grubbs
        </h1>
        <h2 className="font-meta-serif-italic text-xl lg:text-xl font-normal opacity-50 pb-5 ml-[-12px]">
          Information Design Technologist
        </h2>
        <p className="font-meta-sans text-base sm:text-sm">
          I transform complex data into meaningful experiences, operating at the
          intersection of design and technology. As the founder of{" "}
          {createLink("Pitch Interactive", "https://www.pitchinteractive.com")},
          I've spent over two decades crafting visualization tools and
          data-driven applications for organizations like Google, eBay, and
          UNDP. My expertise spans from enterprise analytics dashboards to
          mobile and watch applications, with a focus on creating intuitive
          solutions that help people better understand and interact with the
          world around them. Based in Oakland, I excel at weaving together
          product, design, and engineering to deliver functional, impactful
          results.
        </p>

        <div className="mt-8 w-72">
          {/* TimeBasedPattern component placeholder */}
        </div>

        <div className="mt-8">
          <Follow />
        </div>
      </div>
    </div>
  );
};

export default Hero;
