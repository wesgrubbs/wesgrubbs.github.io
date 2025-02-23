import { infoContent } from "../../data/infoContent";
import PropTypes from "prop-types";

const InfoSection = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="font-meta-serif text-2xl mb-4">{title}</h2>
      <div className="space-y-6">
        {items.map((yearGroup) => (
          <div key={yearGroup.year}>
            <h3 className="font-meta-serif-italic text-xl text-grey-90 mb-2">
              {yearGroup.year}
            </h3>
            <div className="space-y-3">
              {yearGroup.items?.map((item, index) => {
                // Media items
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

                // Workshops and Talks
                if (title === "Workshops" || title === "Talks") {
                  return (
                    <div key={index}>
                      <h4 className="font-meta-sans text-lg">{item.title}</h4>
                      <p className="font-meta-sans text-grey-90 mt-0.5">
                        {item.venue || item.event}, {item.location}
                      </p>
                      {item.description && (
                        <p className="font-meta-sans mt-1 text-sm">
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                }

                // Publications
                if (title === "Publications") {
                  return (
                    <div key={index}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group-hover:text-primary-red transition-colors duration-300"
                      >
                        <h4 className="font-meta-sans text-lg">{item.title}</h4>
                      </a>
                    </div>
                  );
                }

                // Exhibits
                if (title === "Exhibits") {
                  return (
                    <div key={index}>
                      <h4 className="font-meta-sans text-lg">{item.title}</h4>
                      <p className="font-meta-sans text-grey-90 mt-0.5">
                        {item.venue}, {item.location}
                      </p>
                      {item.organization && (
                        <p className="font-meta-sans mt-1 text-sm">
                          {item.organization}
                        </p>
                      )}
                    </div>
                  );
                }

                // Recognition
                if (title === "Recognition") {
                  return (
                    <div key={index}>
                      <h4 className="font-meta-sans text-lg">{item.title}</h4>
                      {(item.award || item.category) && (
                        <p className="font-meta-sans text-grey-90 mt-0.5">
                          {[item.award, item.category]
                            .filter(Boolean)
                            .join(" - ")}
                        </p>
                      )}
                      {item.project && (
                        <p className="font-meta-sans mt-1 text-sm">
                          Project: {item.project}
                        </p>
                      )}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes definitions...
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
  description: PropTypes.string,
  url: PropTypes.string,
});

const exhibitItemShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  organization: PropTypes.string,
  url: PropTypes.string,
});

const publicationItemShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

const recognitionItemShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  award: PropTypes.string,
  project: PropTypes.string,
});

const yearGroupShape = PropTypes.shape({
  year: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      mediaItemShape,
      workshopTalkItemShape,
      exhibitItemShape,
      publicationItemShape,
      recognitionItemShape,
    ])
  ).isRequired,
});

InfoSection.propTypes = {
  title: PropTypes.oneOf([
    "In the Media",
    "Workshops",
    "Talks",
    "Publications",
    "Exhibits",
    "Recognition",
  ]).isRequired,
  items: PropTypes.arrayOf(yearGroupShape),
};

const Info = () => {
  return (
    <section id="info" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <InfoSection title="In the Media" items={infoContent.media} />
        <InfoSection title="Publications" items={infoContent.publications} />
        <InfoSection title="Workshops" items={infoContent.workshops} />
        <InfoSection title="Talks" items={infoContent.talks} />
        <InfoSection title="Exhibits" items={infoContent.exhibits} />
        <InfoSection title="Recognition" items={infoContent.recognition} />
      </div>
    </section>
  );
};

export default Info;
