import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import anime from "animejs";
import { trackExternalLinkClick } from "../../utils/analytics";
import { useTheme } from "../../components/ThemeProvider";

/* eslint-disable react/prop-types */
const ProjectDetail = ({ project, onClose }) => {
  const detailRef = useRef(null);
  const contentRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const { isDarkMode } = useTheme();

  // Handle animations when opening
  useEffect(() => {
    if (project && detailRef.current && contentRef.current) {
      setIsAnimating(true);

      // Initial state - start with opacity 0
      detailRef.current.style.opacity = 0;

      // Animation timeline
      const timeline = anime.timeline({
        easing: "easeOutExpo",
        complete: () => setIsAnimating(false),
      });

      // First animate the container
      timeline.add({
        targets: detailRef.current,
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutQuad",
      });

      // Then animate the content with a stagger effect
      timeline.add(
        {
          targets: contentRef.current.children,
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 600,
          delay: anime.stagger(100),
          easing: "easeOutQuad",
        },
        "-=300"
      );
    }
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && !isAnimating) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isAnimating]);

  // Handle close animation
  const handleClose = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    anime({
      targets: detailRef.current,
      //opacity: [1, 0],
      translateY: [0, 800],
      duration: 200,
      easing: "easeInOutQuad",
      complete: () => {
        setIsAnimating(false);
        onClose();
      },
    });
  };

  if (!project) return null;

  // Get the hero image
  let heroImage = project.images?.find((img) => img.type === "hero");

  // Fallback: If no hero image is defined, use the first image or the legacy image property
  if (!heroImage && project.images && project.images.length > 0) {
    heroImage = project.images[0];
  } else if (!heroImage) {
    heroImage = { src: project.image, alt: project.title };
  }

  // Get gallery images (filter for type "gallery")
  const galleryImages =
    project.images?.filter((img) => img.type === "gallery") || [];

  // Determine if we have enough gallery images to show
  const hasGallery = galleryImages.length > 0;

  // Get custom link text or use default
  const linkText = project.linkText || "View Project";

  // Determine if we're in work section based on project ID
  const isWorkProject = project.id.includes("work");

  // Determine if the background is dark (either work section in light mode or dark mode)
  const hasDarkBackground = (isWorkProject && !isDarkMode) || isDarkMode;

  // Text color class based on background
  const textColorClass = hasDarkBackground
    ? "text-primary-yellow"
    : "text-primary-black";
  const linkColorClass = "text-primary-red";

  return (
    <div
      ref={detailRef}
      className={`fixed inset-0 bg-primary-yellow dark:bg-primary-black z-50 overflow-y-auto ${textColorClass}`}
    >
      {/* Header */}
      <div className="sticky top-0 bg-primary-yellow dark:bg-primary-black z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className={`font-meta-serif text-2xl ${textColorClass}`}>
              {project.title}
            </h2>
            <p className={`font-meta-serif-italic ${textColorClass}`}>
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-grey-90 hover:text-primary-red transition-colors duration-300"
            disabled={isAnimating}
          >
            Close
          </button>
        </div>
      </div>

      {/* Hero Image - Full Width with responsive height - Significantly increased for mobile */}
      {heroImage && heroImage.src && (
        <div className="w-full mb-4">
          <img
            src={heroImage.src}
            alt={heroImage.alt || project.title}
            className="w-full h-70 sm:h-70 md:h-[450px] lg:h-[70vh] object-cover"
          />
        </div>
      )}

      {/* Main Content Area */}
      <div ref={contentRef} className="max-w-7xl mx-auto px-6 py-12">
        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h3 className={`font-meta-serif text-xl mb-4 ${textColorClass}`}>
              About
            </h3>
            <div className="space-y-4">
              {Array.isArray(project.description) ? (
                project.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`font-meta-sans text-base ${textColorClass}`}
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className={`font-meta-sans text-base ${textColorClass}`}>
                  {project.description}
                </p>
              )}
            </div>

            {project.challenge && (
              <div className="mt-8">
                <h3
                  className={`font-meta-serif text-xl mb-4 ${textColorClass}`}
                >
                  Challenge
                </h3>
                <div className="space-y-4">
                  {Array.isArray(project.challenge) ? (
                    project.challenge.map((paragraph, index) => (
                      <p
                        key={index}
                        className={`font-meta-sans text-base ${textColorClass}`}
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className={`font-meta-sans text-base ${textColorClass}`}>
                      {project.challenge}
                    </p>
                  )}
                </div>
              </div>
            )}

            {project.solution && (
              <div className="mt-8">
                <h3
                  className={`font-meta-serif text-xl mb-4 ${textColorClass}`}
                >
                  Solution
                </h3>
                <div className="space-y-4">
                  {Array.isArray(project.solution) ? (
                    project.solution.map((paragraph, index) => (
                      <p
                        key={index}
                        className={`font-meta-sans text-base ${textColorClass}`}
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className={`font-meta-sans text-base ${textColorClass}`}>
                      {project.solution}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="sticky top-32">
              <div className="space-y-6">
                <div>
                  <h4
                    className={`font-meta-serif-italic text-grey-90 ${textColorClass}`}
                  >
                    Year
                  </h4>
                  <p className={`font-meta-sans ${textColorClass}`}>
                    {project.year}
                  </p>
                </div>

                <div>
                  <h4
                    className={`font-meta-serif-italic text-grey-90 mb-2 ${textColorClass}`}
                  >
                    My Roles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.roles.map((role, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 bg-grey-60 text-primary-black rounded-full text-sm font-meta-sans"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {project.url && (
                  <div>
                    <h4
                      className={`font-meta-serif-italic text-grey-90 mb-2 ${textColorClass}`}
                    >
                      Link
                    </h4>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-meta-sans ${linkColorClass} hover:underline`}
                      onClick={() => {
                        const projectType = project.id.includes("work")
                          ? "work"
                          : "play";
                        trackExternalLinkClick(
                          project,
                          projectType,
                          project.url
                        );
                      }}
                    >
                      {linkText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery - Modified for stacked layout on mobile */}
      {hasGallery && (
        <div className="w-full mt-8 pb-2">
          <div className="w-full">
            {/* Images stacked on mobile, side by side on larger screens */}
            {galleryImages.length >= 2 && (
              <div className="flex flex-col sm:flex-row w-full mb-4">
                {galleryImages[0] && galleryImages[0].src && (
                  <div className="w-full sm:w-1/2 aspect-video overflow-hidden mb-4 sm:mb-0">
                    <img
                      src={galleryImages[0].src}
                      alt={galleryImages[0].alt || "Gallery image"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {galleryImages[1] && galleryImages[1].src && (
                  <div className="w-full sm:w-1/2 aspect-video overflow-hidden">
                    <img
                      src={galleryImages[1].src}
                      alt={galleryImages[1].alt || "Gallery image"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Third image full width */}
            {galleryImages.length >= 3 &&
              galleryImages[2] &&
              galleryImages[2].src && (
                <div className="w-full aspect-video overflow-hidden">
                  <img
                    src={galleryImages[2].src}
                    alt={galleryImages[2].alt || "Gallery image"}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

ProjectDetail.propTypes = {
  project: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["thumbnail", "hero", "gallery"]).isRequired,
      })
    ),
    image: PropTypes.string, // For backward compatibility
    url: PropTypes.string,
    linkText: PropTypes.string, // New prop for custom link text
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    challenge: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    solution: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    year: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectDetail;
