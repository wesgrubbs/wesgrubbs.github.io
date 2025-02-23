import { infoContent } from "../../data/infoContent";
import PropTypes from "prop-types";

const InfoSection = ({ title, items }) => {
  return (
    <div className="mb-16">
      <h2 className="font-meta-serif text-2xl mb-8">{title}</h2>
      <div className="space-y-12">
        {items.map((yearGroup) => (
          <div key={yearGroup.year}>
            <h3 className="font-meta-serif-italic text-xl text-grey-90 mb-4">
              {yearGroup.year}
            </h3>
            <div className="space-y-6">
              {yearGroup.items.map((item, index) => {
                if (title === "In the Media") {
                  return (
                    <div key={index} className="group">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group-hover:text-primary-red transition-colors duration-300"
                      >
                        <span className="font-meta-sans text-grey-90 mr-2">
                          {item.publication}:
                        </span>
                        <span className="font-meta-sans">{item.title}</span>
                      </a>
                    </div>
                  );
                }

                if (title === "Workshops" || title === "Talks") {
                  return (
                    <div key={index}>
                      <h4 className="font-meta-sans text-lg">{item.title}</h4>
                      <p className="font-meta-sans text-grey-90 mt-1">
                        {item.venue || item.event}, {item.location}
                      </p>
                      <p className="font-meta-sans mt-2">{item.description}</p>
                    </div>
                  );
                }

                if (title === "Recognition") {
                  return (
                    <div key={index}>
                      <h4 className="font-meta-sans text-lg">{item.title}</h4>
                      <p className="font-meta-sans text-grey-90 mt-1">
                        {item.award} - {item.category}
                      </p>
                      <p className="font-meta-sans mt-1">
                        Project: {item.project}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define shape for each type of item
const mediaItemShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  publication: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

const workshopTalkItemShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  venue: PropTypes.string,
  event: PropTypes.string,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

const recognitionItemShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  award: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
});

const yearGroupShape = PropTypes.shape({
  year: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      mediaItemShape,
      workshopTalkItemShape,
      recognitionItemShape,
    ])
  ).isRequired,
});

InfoSection.propTypes = {
  title: PropTypes.oneOf(["In the Media", "Workshops", "Talks", "Recognition"])
    .isRequired,
  items: PropTypes.arrayOf(yearGroupShape).isRequired,
};

const Info = () => {
  return (
    <section id="info" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <InfoSection title="In the Media" items={infoContent.media} />
        <InfoSection title="Workshops" items={infoContent.workshops} />
        <InfoSection title="Talks" items={infoContent.talks} />
        <InfoSection title="Recognition" items={infoContent.recognition} />
      </div>
    </section>
  );
};

export default Info;
