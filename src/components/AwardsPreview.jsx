export default function AwardsPreview({ awards }) {
  if (awards.length === 0) return null;

  return (
    <div className="preview-container">
      <h2 className="preview-section-title">Awards & Certificates</h2>
      <div className="preview-awards">
        {awards.map((award) => (
          <div key={award.id} className="preview-award-item">
            <div className="preview-award-header">
              <h3 className="preview-award-name">
                {award.name || "Award Name"}
              </h3>
              <span className="preview-award-date">{award.date || "Date"}</span>
            </div>
            <div className="preview-award-issuer">
              {award.issuer || "Issuing Organization"}
            </div>
            {award.description && (
              <div className="preview-award-description">
                {award.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
