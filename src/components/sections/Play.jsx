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
    const projectId = window.location.hash.replace("#play/", "");
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
      `#play/${project.id}`
    );
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
    // Update URL and browser history
    window.history.pushState(null, "", window.location.pathname);
  };

  return (
    <section id="play" className="py-24 px-6 bg-grey-60/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-meta-serif text-4xl mb-12">Experiments & Play</h2>

        <div className="divide-y divide-grey-60">
          {playProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>

      <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
    </section>
  );
};

export default Play;
