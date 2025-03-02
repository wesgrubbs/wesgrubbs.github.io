import { useState, useEffect } from "react";
import ProjectCard from "../projects/ProjectCard";
import ProjectDetail from "../projects/ProjectDetail";
import { workProjects } from "../../data/workProjects";
import anime from "animejs";
import { trackProjectView } from "../../utils/analytics";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = (event) => {
      if (event.state?.projectId) {
        const project = workProjects.find(
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
      const project = workProjects.find((p) => p.id === projectId);
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
    // Animate the grid to fade out slightly
    const projectGrid = document.querySelector("#work-project-grid");

    anime({
      targets: projectGrid,
      opacity: [1, 0.2],
      scale: [1, 0.98],
      duration: 200,
      easing: "easeOutQuad",
    });

    // Track project view using our analytics utility
    trackProjectView(project, "work");

    // Set a small delay before showing the project detail
    setTimeout(() => {
      setSelectedProject(project);
      document.body.style.overflow = "hidden";
      // Update URL and browser history
      window.history.pushState(
        { projectId: project.id },
        "",
        `#project/${project.id}`
      );
    }, 300);
  };

  const handleCloseDetail = () => {
    setAnimatingOut(true);

    // Allow the ProjectDetail component to animate out
    setTimeout(() => {
      setSelectedProject(null);
      setAnimatingOut(false);
      document.body.style.overflow = "auto";

      // Animate the grid back in
      const projectGrid = document.querySelector("#work-project-grid");
      anime({
        targets: projectGrid,
        opacity: [0.2, 1],
        scale: [0.98, 1],
        duration: 100,
        easing: "easeInQuad",
      });

      // Update URL and browser history
      window.history.pushState(null, "", window.location.pathname);
    }, 200); // This timing should match the close animation in ProjectDetail
  };

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <h2 className="font-meta-serif text-3xl mb-8 mx-0">Selected Work</h2>

        {/* Multi-column grid layout */}
        <div
          id="work-project-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
        >
          {workProjects.map((project) => (
            <div key={project.id} className="p-0">
              <ProjectCard project={project} onClick={handleProjectClick} />
            </div>
          ))}
        </div>
      </div>

      {(selectedProject || animatingOut) && (
        <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
      )}
    </section>
  );
};

export default Work;
