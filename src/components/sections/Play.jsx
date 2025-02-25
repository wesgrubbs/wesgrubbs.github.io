import { useState, useEffect } from "react";
import ProjectCard from "../projects/ProjectCard";
import ProjectDetail from "../projects/ProjectDetail";
import { playProjects } from "../../data/playProjects";

const Play = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = (event) => {
      if (event.state?.projectId) {
        const project = playProjects.find(
          (p) => p.id === event.state.projectId
        );
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
      } else {
        setSelectedProject(null);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("popstate", handlePopState);

    // Check URL on mount for direct navigation
    const projectId = window.location.hash.replace("#project/", "");
    if (projectId) {
      const project = playProjects.find((p) => p.id === projectId);
      if (project) {
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
      }
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
    // Update URL and browser history
    window.history.pushState(
      { projectId: project.id },
      "",
      `#project/${project.id}`
    );
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
    // Update URL and browser history
    window.history.pushState(null, "", window.location.pathname);
  };

  return (
    <section id="play" className="py-20">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-6">
        <h2 className="font-meta-serif text-3xl mb-8 mx-0">Creative Play</h2>

        {/* Multi-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {playProjects.map((project) => (
            <div key={project.id} className="p-0">
              <ProjectCard project={project} onClick={handleProjectClick} />
            </div>
          ))}
        </div>
      </div>

      <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
    </section>
  );
};

export default Play;
