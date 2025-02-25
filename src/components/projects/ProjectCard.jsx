import PropTypes from "prop-types";

const ProjectCard = ({ project, onClick }) => {
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

  return (
    <div
      onClick={() => onClick(project)}
      className="group cursor-pointer transition-colors duration-300 flex flex-col h-full"
    >
      {/* Image Container - No margin around the image */}
      <div className="w-full aspect-video bg-black flex-shrink-0 overflow-hidden">
        <img
          src={displayImage}
          alt={imageAlt}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content Container - With padding */}
      <div className="flex-grow flex flex-col p-2">
        <div className="mb-2">
          <h3 className="font-meta-serif text-lg group-hover:text-primary-red transition-colors duration-300">
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
