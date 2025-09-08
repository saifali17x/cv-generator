export default function ProjectsForm({ projects, onUpdate, onAdd, onDelete }) {
  return (
    <div className="form-container">
      <h2 className="form-title">Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <div className="project-inputs">
            <input
              type="text"
              placeholder="Project Name"
              value={project.name}
              onChange={(e) => onUpdate(project.id, "name", e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              value={project.location}
              onChange={(e) => onUpdate(project.id, "location", e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={project.description}
              onChange={(e) =>
                onUpdate(project.id, "description", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="URL"
              value={project.url}
              onChange={(e) => onUpdate(project.id, "url", e.target.value)}
            />
          </div>
          <div className="project-actions">
            <button
              className="btn btn-danger"
              onClick={() => onDelete(project.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <button className="btn btn-success" onClick={onAdd}>
        Add Project
      </button>
    </div>
  );
}
