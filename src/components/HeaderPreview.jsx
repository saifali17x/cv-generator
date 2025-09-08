export default function HeaderPreview({ header }) {
  return (
    <div className="preview-container">
      <h2 className="preview-title">CV Preview</h2>
      <div className="preview-header">
        <h1 className="preview-name">{header.name || "Your Name Here"}</h1>
        <p className="preview-email">{header.email || "your@email.com"}</p>
      </div>
    </div>
  );
}
