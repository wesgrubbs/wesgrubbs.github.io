import Follow from "../ui/Follow";
import IsometricSquares from "../shapes/IsometricSquares";

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
    <div
      id="hero"
      className="min-h-screen flex px-6 sm:px-12 md:px-20 lg:px-28 pt-16 sm:pt-20 md:pt-24 lg:pt-28"
    >
      <div className="w-full lg:w-2/3 mt-4 sm:mt-6 md:mt-8">
        <h1 className="font-meta-serif text-3xl sm:text-4xl font-bold pb-2 ml-[-8px] sm:ml-[-14px]">
          Wesley Grubbs
        </h1>
        <h2 className="font-meta-serif-italic text-lg sm:text-xl font-normal opacity-50 pb-4 sm:pb-5 ml-[-6px] sm:ml-[-12px]">
          Information Design Technologist
        </h2>
        <p className="font-meta-sans text-base sm:text-sm">
          I transform complex data into meaningful experiences, operating at the
          intersection of design and technology. As the founder of{" "}
          {createLink("Pitch Interactive", "https://www.pitchinteractive.com")},
          I&apos;ve spent over two decades crafting visualization tools and
          data-driven applications for organizations like Google, eBay, and
          UNDP. My expertise spans from enterprise analytics dashboards to
          mobile and watch applications, with a focus on creating intuitive
          solutions that help people better understand and interact with the
          world around them. Based in Oakland, I excel at weaving together
          product, design, and engineering to deliver functional, impactful
          results.
        </p>

        <div className="mt-6 sm:mt-8 w-56 sm:w-72">
          <IsometricSquares />
        </div>

        <div className="mt-6 sm:mt-8">
          <Follow />
        </div>
      </div>
    </div>
  );
};

export default Hero;
