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
      <div className="input-group">
        <input
          type="tel"
          placeholder="Mobile Number"
          value={header.mobile}
          onChange={(e) => onChange("mobile", e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="url"
          placeholder="Website URL (e.g., LinkedIn, Portfolio)"
          value={header.url1}
          onChange={(e) => onChange("url1", e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="url"
          placeholder="Additional URL (e.g., GitHub, Personal Website)"
          value={header.url2}
          onChange={(e) => onChange("url2", e.target.value)}
        />
      </div>
    </div>
  );
}
