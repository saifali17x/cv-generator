export default function WorkExperiencePreview({ workExperience }) {
  if (workExperience.length === 0) {
    return (
      <div className="preview-container">
        <h2 className="preview-section-title">Work Experience</h2>
        <p className="preview-empty-message">
          No work experience added yet. Add your work experience to see it here!
        </p>
      </div>
    );
  }

  return (
    <div className="preview-container">
      <h2 className="preview-section-title">Work Experience</h2>
      {workExperience.map((experience) => (
        <div key={experience.id} className="preview-work-experience-item">
          <div className="preview-work-experience-header">
            <h3 className="preview-work-experience-title">
              {experience.jobTitle || "Job Title"}
            </h3>
            <p className="preview-work-experience-company">
              🏢 {experience.company || "Company Name"}
            </p>
            <div className="preview-work-experience-details">
              {experience.startDate && (
                <span className="preview-work-experience-date">
                  📅 {experience.startDate}
                </span>
              )}
              {experience.startDate && experience.endDate && (
                <span className="preview-work-experience-separator"> - </span>
              )}
              {experience.endDate && (
                <span className="preview-work-experience-date">
                  {experience.endDate}
                </span>
              )}
              {experience.location && (
                <span className="preview-work-experience-location">
                  📍 {experience.location}
                </span>
              )}
            </div>
          </div>
          {experience.description && (
            <div className="preview-work-experience-description">
              <p>{experience.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
