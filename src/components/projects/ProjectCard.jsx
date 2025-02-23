import PropTypes from "prop-types";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="group py-4 cursor-pointer hover:bg-grey-60/10 transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="w-full md:w-96 h-64 md:h-72 bg-black flex-shrink-0 overflow-hidden mb-4 md:mb-0">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex-grow">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-meta-serif text-xl group-hover:text-primary-red transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-meta-serif-italic text-black mt-1">
                {project.subtitle}
              </p>
            </div>
            <div className="font-meta-sans text-base sm:text-sm ml-4">
              {project.year}
            </div>
          </div>

          <p className="font-meta-sans text-base sm:text-sm">{project.blurb}</p>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
