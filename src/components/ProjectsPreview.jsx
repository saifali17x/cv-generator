export default function ProjectsPreview({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="preview-container">
        <h2 className="preview-section-title">Projects</h2>
        <p className="preview-empty-message">
          No projects added yet. Add some projects to see them here!
        </p>
      </div>
    );
  }

  return (
    <div className="preview-container">
      <h2 className="preview-section-title">Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="preview-project-item">
          <h3 className="preview-project-name">
            {project.name || "Project Name"}
          </h3>
          {project.location && (
            <p className="preview-project-location">📍 {project.location}</p>
          )}
          {project.description && (
            <p className="preview-project-description">{project.description}</p>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="preview-project-url"
            >
              🔗 View Project
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
