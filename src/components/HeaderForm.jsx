export default function HeaderForm({ header, onChange }) {
  return (
    <div className="form-container">
      <h2 className="form-title">Personal Information</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Full Name"
          value={header.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="email"
          placeholder="Email Address"
          value={header.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
      </div>
    </div>
  );
}
