export default function EducationPreview({ education }) {
  if (education.length === 0) {
    return (
      <div className="preview-container">
        <h2 className="preview-section-title">Education</h2>
        <p className="preview-empty-message">
          No education entries added yet. Add your education to see them here!
        </p>
      </div>
    );
  }

  return (
    <div className="preview-container">
      <h2 className="preview-section-title">Education</h2>
      {education.map((edu) => (
        <div key={edu.id} className="preview-education-item">
          <h3 className="preview-education-degree">{edu.degree || "Degree"}</h3>
          <p className="preview-education-college">
            🎓 {edu.college || "Institution Name"}
          </p>
          <div className="preview-education-dates">
            {edu.startDate && (
              <span className="preview-education-date">📅 {edu.startDate}</span>
            )}
            {edu.startDate && edu.endDate && (
              <span className="preview-education-separator"> - </span>
            )}
            {edu.endDate && (
              <span className="preview-education-date">{edu.endDate}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
