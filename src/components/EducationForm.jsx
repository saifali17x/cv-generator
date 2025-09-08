export default function EducationForm({
  education,
  onUpdate,
  onAdd,
  onDelete,
}) {
  return (
    <div className="form-container">
      <h2 className="form-title">Education</h2>
      {education.map((education) => (
        <div key={education.id} className="education-item">
          <div className="education-inputs">
            <input
              type="text"
              placeholder="Institute Name"
              value={education.college}
              onChange={(e) =>
                onUpdate(education.id, "college", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Degree"
              value={education.degree}
              onChange={(e) => onUpdate(education.id, "degree", e.target.value)}
            />
            <input
              type="text"
              placeholder="Start Date"
              value={education.startDate}
              onChange={(e) =>
                onUpdate(education.id, "startDate", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="End Date"
              value={education.endDate}
              onChange={(e) =>
                onUpdate(education.id, "endDate", e.target.value)
              }
            />
          </div>
          <div className="education-actions">
            <button
              className="btn btn-danger"
              onClick={() => onDelete(education.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <button className="btn btn-success" onClick={onAdd}>
        Add education
      </button>
    </div>
  );
}
