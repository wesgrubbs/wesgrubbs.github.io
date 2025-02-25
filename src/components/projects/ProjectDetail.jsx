import { useEffect } from "react";
import PropTypes from "prop-types";

const ProjectDetail = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

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

  return (
    <div className="fixed inset-0 bg-primary-yellow dark:bg-primary-black z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-primary-yellow dark:bg-primary-black z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="font-meta-serif text-2xl">{project.title}</h2>
            <p className="font-meta-serif-italic">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-grey-90 hover:text-primary-red transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>

      {/* Hero Image - Full Width */}
      <div className="w-full mb-4">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="w-full h-[70vh] object-cover"
        />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-meta-serif text-xl mb-4">About</h3>
            <div className="space-y-4">
              {Array.isArray(project.description) ? (
                project.description.map((paragraph, index) => (
                  <p key={index} className="font-meta-sans text-base">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="font-meta-sans text-base">
                  {project.description}
                </p>
              )}
            </div>

            {project.challenge && (
              <div className="mt-8">
                <h3 className="font-meta-serif text-xl mb-4">Challenge</h3>
                <div className="space-y-4">
                  {Array.isArray(project.challenge) ? (
                    project.challenge.map((paragraph, index) => (
                      <p key={index} className="font-meta-sans text-base">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="font-meta-sans text-base">
                      {project.challenge}
                    </p>
                  )}
                </div>
              </div>
            )}

            {project.solution && (
              <div className="mt-8">
                <h3 className="font-meta-serif text-xl mb-4">Solution</h3>
                <div className="space-y-4">
                  {Array.isArray(project.solution) ? (
                    project.solution.map((paragraph, index) => (
                      <p key={index} className="font-meta-sans text-base">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="font-meta-sans text-base">
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
                  <h4 className="font-meta-serif-italic text-grey-90">Year</h4>
                  <p className="font-meta-sans">{project.year}</p>
                </div>

                <div>
                  <h4 className="font-meta-serif-italic text-grey-90 mb-2">
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
                    <h4 className="font-meta-serif-italic text-grey-90 mb-2">
                      Link
                    </h4>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-meta-sans text-primary-red hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery - Full width */}
      {hasGallery && (
        <div className="w-full mt-8 pb-2">
          {/* Gallery Layout: 2 side-by-side (no gap) and 1 full width below */}
          <div className="w-full">
            {/* First two images side by side */}
            {galleryImages.length >= 2 && (
              <div className="flex w-full mb-4">
                <div className="w-1/2 aspect-video overflow-hidden">
                  <img
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 aspect-video overflow-hidden">
                  <img
                    src={galleryImages[1].src}
                    alt={galleryImages[1].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Third image full width */}
            {galleryImages.length >= 3 && (
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
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
