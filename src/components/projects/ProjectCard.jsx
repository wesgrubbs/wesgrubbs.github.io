import PropTypes from "prop-types";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="group py-8 border-b border-grey-60 cursor-pointer hover:bg-grey-60/10 transition-colors duration-300"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between">
          <div className="w-16 h-16 bg-grey-60 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="font-meta-serif text-xl group-hover:text-primary-red transition-colors duration-300">
              {project.title}
            </h3>
            <p className="font-meta-serif-italic text-grey-90 mt-1">
              {project.subtitle}
            </p>
          </div>
          <div className="text-grey-90 font-meta-sans shrink-0 ml-6">
            {project.year}
          </div>
        </div>

        <p className="font-meta-sans text-grey-90 mt-2 pr-8 line-clamp-2">
          {project.blurb}
        </p>
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
