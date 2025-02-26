import { useRef, useState } from "react";
import PropTypes from "prop-types";
import anime from "animejs";

const ProjectCard = ({ project, onClick }) => {
  const cardRef = useRef(null);
  const [setIsHovering] = useState(false);

  // Find the thumbnail image (an image with type "thumbnail")
  const thumbnailImage = project.images?.find(
    (img) => img.type === "thumbnail"
  );

  // Get the display image (thumbnail or fallback to first image or legacy image property)
  const displayImage =
    thumbnailImage?.src ||
    (project.images && project.images.length > 0
      ? project.images[0].src
      : project.image);

  // Get image alt text
  const imageAlt =
    thumbnailImage?.alt ||
    (project.images && project.images.length > 0
      ? project.images[0].alt
      : project.title);

  // Hover animations
  const handleMouseEnter = () => {
    setIsHovering(true);

    anime({
      targets: cardRef.current.querySelector("img"),
      scale: 1.05,
      duration: 400,
      easing: "easeOutQuad",
    });

    anime({
      targets: cardRef.current.querySelector("h3"),
      translateX: 5,
      color: "#fb3735", // primary-red
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    anime({
      targets: cardRef.current.querySelector("img"),
      scale: 1,
      duration: 400,
      easing: "easeOutQuad",
    });

    anime({
      targets: cardRef.current.querySelector("h3"),
      translateX: 0,
      color: "#131313", // primary-black (will be overridden by dark mode if active)
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  // Click animation and handling
  const handleClick = () => {
    // Add click animation
    anime({
      targets: cardRef.current,
      scale: 0.98,
      duration: 100,
      easing: "easeInQuad",
      complete: () => {
        anime({
          targets: cardRef.current,
          scale: 1,
          duration: 250,
          easing: "easeOutElastic(1, .5)",
        });

        // Call the parent's onClick handler
        onClick(project);
      },
    });
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer transition-colors duration-300 flex flex-col h-full"
    >
      {/* Image Container - No margin around the image */}
      <div className="w-full aspect-video bg-black flex-shrink-0 overflow-hidden">
        <img
          src={displayImage}
          alt={imageAlt}
          className="object-cover w-full h-full"
          // Optimization for animation
          style={{ willChange: "transform" }}
        />
      </div>

      {/* Content Container - With padding */}
      <div className="flex-grow flex flex-col p-2">
        <div className="mb-2 text-[var(--theme-text-primary)]">
          <h3 className="font-meta-serif text-lg transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="font-meta-sans text-sm line-clamp-3">{project.blurb}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        type: PropTypes.string,
      })
    ),
    image: PropTypes.string, // For backward compatibility
    subtitle: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
