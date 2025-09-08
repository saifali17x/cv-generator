export default function SkillsForm({ skills, onUpdate, onAdd, onDelete }) {
  return (
    <div className="form-container">
      <h2 className="form-title">Skills</h2>
      {skills.length === 0 ? (
        <p className="form-empty-message">
          No skills added yet. Click "Add Skill" to get started!
        </p>
      ) : (
        skills.map((skill) => (
          <div key={skill.id} className="skill-item">
            <div className="skill-inputs">
              <input
                type="text"
                placeholder="Enter a skill (e.g., JavaScript, Python)"
                value={skill.skill}
                onChange={(e) => onUpdate(skill.id, "skill", e.target.value)}
              />
            </div>
            <div className="skill-actions">
              <button
                className="btn btn-danger"
                onClick={() => onDelete(skill.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
      <button className="btn btn-success" onClick={onAdd}>
        Add Skill
      </button>
    </div>
  );
}
