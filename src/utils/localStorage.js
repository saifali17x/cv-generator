// LocalStorage utility functions for saving and loading CV data

export const saveCVData = (cvData) => {
  try {
    const dataToSave = {
      header: cvData.header,
      projects: cvData.projects,
      education: cvData.education,
      skills: cvData.skills,
      workExperience: cvData.workExperience,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem("cv-generator-data", JSON.stringify(dataToSave));
    return { success: true, message: "CV data saved successfully!" };
  } catch (error) {
    console.error("Error saving CV data:", error);
    return {
      success: false,
      message: "Failed to save CV data. Please try again.",
    };
  }
};

export const loadCVData = () => {
  try {
    const savedData = localStorage.getItem("cv-generator-data");
    if (!savedData) {
      return { success: false, message: "No saved CV data found." };
    }

    const parsedData = JSON.parse(savedData);
    return {
      success: true,
      data: parsedData,
      message: `CV data loaded successfully! (Saved: ${new Date(
        parsedData.savedAt
      ).toLocaleDateString()})`,
    };
  } catch (error) {
    console.error("Error loading CV data:", error);
    return {
      success: false,
      message: "Failed to load CV data. Data may be corrupted.",
    };
  }
};

export const clearCVData = () => {
  try {
    localStorage.removeItem("cv-generator-data");
    return { success: true, message: "CV data cleared successfully!" };
  } catch (error) {
    console.error("Error clearing CV data:", error);
    return { success: false, message: "Failed to clear CV data." };
  }
};

export const hasSavedData = () => {
  return localStorage.getItem("cv-generator-data") !== null;
};
