export default function AwardsForm({ awards, onUpdate, onAdd, onDelete }) {
  return (
    <div className="form-container">
      <h2 className="form-title">Awards & Certificates</h2>
      {awards.length === 0 ? (
        <p className="form-empty-message">
          No awards or certificates added yet. Click "Add Award" to get started!
        </p>
      ) : (
        awards.map((award) => (
          <div key={award.id} className="award-item">
            <div className="award-inputs">
              <input
                type="text"
                placeholder="Award/Certificate Name"
                value={award.name}
                onChange={(e) => onUpdate(award.id, "name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Issuing Organization"
                value={award.issuer}
                onChange={(e) => onUpdate(award.id, "issuer", e.target.value)}
              />
              <input
                type="text"
                placeholder="Date (e.g., Dec 2023)"
                value={award.date}
                onChange={(e) => onUpdate(award.id, "date", e.target.value)}
              />
              <textarea
                placeholder="Description (optional)"
                value={award.description}
                onChange={(e) =>
                  onUpdate(award.id, "description", e.target.value)
                }
                rows="2"
              />
            </div>
            <div className="award-actions">
              <button
                className="btn btn-danger"
                onClick={() => onDelete(award.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
      <button className="btn btn-success" onClick={onAdd}>
        Add Award
      </button>
    </div>
  );
}
