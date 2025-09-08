export default function HeaderPreview({ header }) {
  return (
    <div className="preview-container">
      <h2 className="preview-title">CV Preview</h2>
      <div className="preview-header">
        <h1 className="preview-name">{header.name || "Your Name Here"}</h1>
        <div className="preview-contact">
          <p className="preview-email">{header.email || "your@email.com"}</p>
          {header.mobile && <p className="preview-mobile">{header.mobile}</p>}
          {header.url1 && (
            <p className="preview-url">
              <a href={header.url1} target="_blank" rel="noopener noreferrer">
                {header.url1}
              </a>
            </p>
          )}
          {header.url2 && (
            <p className="preview-url">
              <a href={header.url2} target="_blank" rel="noopener noreferrer">
                {header.url2}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
