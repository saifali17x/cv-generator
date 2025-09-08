export default function SkillsPreview({ skills }) {
  if (skills.length === 0) {
    return (
      <div className="preview-container">
        <h2 className="preview-section-title">Skills</h2>
        <p className="preview-empty-message">
          No skills added yet. Add your skills to see them here!
        </p>
      </div>
    );
  }

  return (
    <div className="preview-container">
      <h2 className="preview-section-title">Skills</h2>
      <div className="preview-skills-container">
        {skills.map((skill) => (
          <div key={skill.id} className="preview-skill-tag">
            <span className="preview-skill-name">{skill.skill || "Skill"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
