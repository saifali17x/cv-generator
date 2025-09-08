import {
  saveCVData,
  loadCVData,
  clearCVData,
  hasSavedData,
} from "../utils/localStorage";
import { downloadCVAsPDF, downloadCVAsHTML } from "../utils/downloadCV";

export default function ActionButtons({ cvData, onLoadData, onClearData }) {
  const handleSave = () => {
    const result = saveCVData(cvData);
    alert(result.message);
  };

  const handleLoad = () => {
    const result = loadCVData();
    if (result.success) {
      onLoadData(result.data);
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  const handleClear = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all saved data? This action cannot be undone."
      )
    ) {
      const result = clearCVData();
      onClearData();
      alert(result.message);
    }
  };

  const handleDownloadPDF = () => {
    const result = downloadCVAsPDF(cvData);
    alert(result.message);
  };

  const handleDownloadHTML = () => {
    const result = downloadCVAsHTML(cvData);
    alert(result.message);
  };

  return (
    <div className="action-buttons-container">
      <h2 className="form-title">Actions</h2>

      <div className="action-buttons-grid">
        <button className="btn btn-primary" onClick={handleSave}>
          💾 Save CV
        </button>

        <button
          className="btn btn-secondary"
          onClick={handleLoad}
          disabled={!hasSavedData()}
        >
          📂 Load CV
        </button>

        <button
          className="btn btn-warning"
          onClick={handleClear}
          disabled={!hasSavedData()}
        >
          🗑️ Clear Data
        </button>

        <button className="btn btn-success" onClick={handleDownloadPDF}>
          📄 Download PDF
        </button>

        <button className="btn btn-accent" onClick={handleDownloadHTML}>
          🌐 Download HTML
        </button>
      </div>

      {hasSavedData() && (
        <p className="action-buttons-note">
          💡 You have saved data available. Click "Load CV" to restore it.
        </p>
      )}
    </div>
  );
}
