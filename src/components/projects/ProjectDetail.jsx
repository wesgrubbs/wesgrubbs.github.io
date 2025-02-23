import React, { useEffect } from "react";

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

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="min-h-screen">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-grey-60 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <h2 className="font-meta-serif text-2xl">{project.title}</h2>
              <p className="font-meta-serif-italic text-grey-90">
                {project.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-grey-90 hover:text-primary-red transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Hero Image */}
          <div className="mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[70vh] object-cover"
            />
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h3 className="font-meta-serif text-xl mb-4">About</h3>
              <p className="font-meta-sans text-base">{project.description}</p>

              {project.challenge && (
                <div className="mt-8">
                  <h3 className="font-meta-serif text-xl mb-4">Challenge</h3>
                  <p className="font-meta-sans text-base">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="mt-8">
                  <h3 className="font-meta-serif text-xl mb-4">Solution</h3>
                  <p className="font-meta-sans text-base">{project.solution}</p>
                </div>
              )}
            </div>

            <div>
              <div className="sticky top-32">
                <h3 className="font-meta-serif text-xl mb-4">Details</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-meta-serif-italic text-grey-90 mb-2">
                      Year
                    </h4>
                    <p className="font-meta-sans">{project.year}</p>
                  </div>

                  <div>
                    <h4 className="font-meta-serif-italic text-grey-90 mb-2">
                      Role
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
      </div>
    </div>
  );
};

export default ProjectDetail;
