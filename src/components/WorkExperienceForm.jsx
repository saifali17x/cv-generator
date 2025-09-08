export default function WorkExperienceForm({
  workExperience,
  onUpdate,
  onAdd,
  onDelete,
}) {
  return (
    <div className="form-container">
      <h2 className="form-title">Work Experience</h2>
      {workExperience.length === 0 ? (
        <p className="form-empty-message">
          No work experience added yet. Click "Add Experience" to get started!
        </p>
      ) : (
        workExperience.map((experience) => (
          <div key={experience.id} className="work-experience-item">
            <div className="work-experience-inputs">
              <input
                type="text"
                placeholder="Job Title"
                value={experience.jobTitle}
                onChange={(e) =>
                  onUpdate(experience.id, "jobTitle", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Company Name"
                value={experience.company}
                onChange={(e) =>
                  onUpdate(experience.id, "company", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Start Date (e.g., Jan 2020)"
                value={experience.startDate}
                onChange={(e) =>
                  onUpdate(experience.id, "startDate", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="End Date (e.g., Dec 2022 or Present)"
                value={experience.endDate}
                onChange={(e) =>
                  onUpdate(experience.id, "endDate", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Location"
                value={experience.location}
                onChange={(e) =>
                  onUpdate(experience.id, "location", e.target.value)
                }
              />
              <textarea
                placeholder="Job Description and Key Achievements"
                value={experience.description}
                onChange={(e) =>
                  onUpdate(experience.id, "description", e.target.value)
                }
                rows="3"
              />
            </div>
            <div className="work-experience-actions">
              <button
                className="btn btn-danger"
                onClick={() => onDelete(experience.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
      <button className="btn btn-success" onClick={onAdd}>
        Add Experience
      </button>
    </div>
  );
}
