import { infoContent } from "../../data/infoContent";

/* eslint-disable react/prop-types */
const InfoSection = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="mx-0 max-w-7xl md:mx-0 lg:mx-0 xl:mx-0">
      <h2 className="font-meta-serif text-2xl mb-2 mt-6">{title}</h2>
      <div className="space-y-1">
        {items.map((yearGroup) => (
          <div key={yearGroup.year}>
            {yearGroup.items?.map((item, index) => {
              // Media items
              if (title === "In the Media") {
                return (
                  <div key={index} className="group mb-1">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group-hover:text-primary-red transition-colors duration-300"
                    >
                      <span className="font-meta-serif-italic mr-2">
                        {yearGroup.year}
                      </span>
                      <span className="font-meta-sans mr-2">
                        {item.publication}:
                      </span>
                      <span className="font-meta-sans">{item.title}</span>
                    </a>
                  </div>
                );
              }

              // Talks - Link the title if URL exists
              if (title === "Talks") {
                return (
                  <div key={index} className="mb-2">
                    <div className="flex items-baseline">
                      <span className="font-meta-serif-italic mr-2">
                        {yearGroup.year}
                      </span>
                      <div>
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-meta-sans text-lg inline hover:text-primary-red transition-colors duration-300"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <h4 className="font-meta-sans text-lg inline">
                            {item.title}
                          </h4>
                        )}
                        <p className="font-meta-sans inline ml-2">
                          {item.venue || item.event}, {item.location}
                        </p>
                        {item.description && (
                          <p className="font-meta-sans text-sm">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              // Workshops - No links
              if (title === "Workshops") {
                return (
                  <div key={index} className="mb-2">
                    <div className="flex items-baseline">
                      <span className="font-meta-serif-italic mr-2">
                        {yearGroup.year}
                      </span>
                      <div>
                        <h4 className="font-meta-sans text-lg inline">
                          {item.title}
                        </h4>
                        <p className="font-meta-sans inline ml-2">
                          {item.venue || item.event}, {item.location}
                        </p>
                        {item.description && (
                          <p className="font-meta-sans text-sm">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              // Publications
              if (title === "Publications") {
                return (
                  <div key={index} className="mb-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group-hover:text-primary-red transition-colors duration-300"
                    >
                      <span className="font-meta-serif-italic mr-2">
                        {yearGroup.year}
                      </span>
                      <h4 className="font-meta-sans text-lg inline">
                        {item.title}
                      </h4>
                    </a>
                  </div>
                );
              }

              // Exhibits
              if (title === "Exhibits") {
                return (
                  <div key={index} className="mb-2">
                    <div className="flex items-baseline">
                      <span className="font-meta-serif-italic mr-2">
                        {yearGroup.year}
                      </span>
                      <div>
                        <h4 className="font-meta-sans text-lg inline">
                          {item.title}
                        </h4>
                        <p className="font-meta-sans inline ml-2">
                          {item.venue}, {item.location}
                        </p>
                        {item.organization && (
                          <p className="font-meta-sans text-sm">
                            {item.organization}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              // Recognition
              if (title === "Recognition") {
                return (
                  <div key={index} className="mb-2">
                    <div className="flex items-baseline">
                      <span className="font-meta-serif-italic mr-2">
                        {yearGroup.year}
                      </span>
                      <div>
                        <h4 className="font-meta-sans text-lg inline">
                          {item.title}
                        </h4>
                        {(item.award || item.category) && (
                          <p className="font-meta-sans inline ml-2">
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
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-meta-sans text-sm text-primary-red hover:underline block mt-1"
                          >
                            View
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <section id="info" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
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
