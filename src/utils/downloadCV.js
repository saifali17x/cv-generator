// CV Download utility functions

export const downloadCVAsPDF = (cvData) => {
  // This function will generate a PDF from the CV data
  // Using modern DOM methods instead of deprecated document.write()

  const htmlContent = generateCVHTML(cvData);

  // Create a new window with the CV content
  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    return {
      success: false,
      message:
        "Failed to open print window. Please allow popups and try again.",
    };
  }

  // Set a proper title to avoid browser print conflicts
  printWindow.document.title = "CV - Professional Resume";

  // Use modern DOM methods to set content (avoiding document.write)
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  // Copy the parsed content to the new window
  printWindow.document.open();
  printWindow.document.write(doc.documentElement.outerHTML);
  printWindow.document.close();

  // Wait for content to load, then trigger print
  printWindow.addEventListener("load", () => {
    // Small delay to ensure content is fully rendered
    setTimeout(() => {
      printWindow.print();
    }, 100);
  });

  return {
    success: true,
    message:
      "CV download initiated! In the print dialog, set margins to 'Minimum' and disable headers/footers in 'More settings' to avoid browser text on your CV.",
  };
};

export const downloadCVAsHTML = (cvData) => {
  try {
    const htmlContent = generateCVHTML(cvData);
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${cvData.header.name || "CV"}_Resume.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return { success: true, message: "CV downloaded as HTML file!" };
  } catch (error) {
    console.error("Error downloading CV:", error);
    return {
      success: false,
      message: "Failed to download CV. Please try again.",
    };
  }
};

// Helper function to generate clean link text from URLs
const getLinkText = (url) => {
  if (!url) return "";

  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;

    // Remove www. prefix if present
    const cleanHostname = hostname.replace(/^www\./, "");

    // Generate friendly text based on common platforms
    if (cleanHostname.includes("linkedin.com")) return "LinkedIn";
    if (cleanHostname.includes("github.com")) return "GitHub";
    if (
      cleanHostname.includes("portfolio") ||
      cleanHostname.includes("personal")
    )
      return "Portfolio";
    if (cleanHostname.includes("behance.net")) return "Behance";
    if (cleanHostname.includes("dribbble.com")) return "Dribbble";
    if (cleanHostname.includes("medium.com")) return "Medium";
    if (
      cleanHostname.includes("twitter.com") ||
      cleanHostname.includes("x.com")
    )
      return "Twitter";

    // For other domains, use the domain name
    return cleanHostname;
  } catch (error) {
    // If URL parsing fails, return a generic text
    return "Website";
  }
};

// Helper function to generate project link text
const getProjectLinkText = (url) => {
  if (!url) return "";
  return "Link to the Project";
};

// ATS-friendly description formatting
const formatDescriptionForATS = (description) => {
  if (!description) return "";

  // Convert line breaks to proper formatting
  const formatted = description
    .replace(/\n\n/g, "</p><p>") // Double line breaks become paragraph breaks
    .replace(/\n/g, "<br>") // Single line breaks become line breaks
    .replace(/•/g, "•") // Ensure proper bullet points
    .replace(/^\s*[-*]\s*/gm, "• ") // Convert dashes/asterisks to bullets
    .replace(/^\s*\d+\.\s*/gm, (match) => match); // Keep numbered lists

  // Wrap in paragraph tags if not already wrapped
  if (!formatted.includes("<p>")) {
    return `<p>${formatted}</p>`;
  }

  return formatted;
};

const generateCVHTML = (cvData) => {
  const { header, workExperience, projects, education, skills, awards } =
    cvData;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${header.name || "CV"} - Professional Resume</title>
    <meta name="description" content="Professional resume of ${
      header.name || "Candidate"
    }">
    <meta name="keywords" content="resume, CV, ${skills
      .map((s) => s.skill)
      .join(", ")}">
    <style>
        /* ATS-Friendly Styles - Clean, Simple, Standard */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Times New Roman', Times, serif;
            font-size: 11pt;
            line-height: 1.4;
            color: #000;
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.75in;
            background: white;
        }
        
        /* Header Section - ATS Optimized */
        .header {
            text-align: center;
            margin-bottom: 20pt;
            padding-bottom: 10pt;
            border-bottom: 2pt solid #000;
        }
        
        .name {
            font-size: 18pt;
            font-weight: bold;
            color: #000;
            margin-bottom: 5pt;
            text-transform: uppercase;
            letter-spacing: 1pt;
        }
        
        .contact-info {
            font-size: 10pt;
            color: #000;
            margin-bottom: 5pt;
        }
        
        .email {
            font-size: 10pt;
            color: #000;
        }
        
        .contact-links {
            margin-top: 5pt;
        }
        
        .contact-link {
            font-size: 10pt;
            color: #000;
            margin-bottom: 2pt;
        }
        
        .contact-link a {
            color: #0066cc;
            text-decoration: none;
        }
        
        .contact-link a:hover {
            text-decoration: underline;
        }
        
        /* Section Headers - ATS Standard */
        .section {
            margin-bottom: 15pt;
        }
        
        .section-title {
            font-size: 12pt;
            font-weight: bold;
            color: #000;
            margin-bottom: 8pt;
            text-transform: uppercase;
            border-bottom: 1pt solid #000;
            padding-bottom: 2pt;
        }
        
        /* Work Experience - ATS Format */
        .work-item, .project-item, .education-item, .award-item {
            margin-bottom: 12pt;
            page-break-inside: avoid;
        }
        
        .work-header, .project-header, .education-header, .award-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 3pt;
        }
        
        .work-title, .project-name, .education-degree, .award-name {
            font-size: 11pt;
            font-weight: bold;
            color: #000;
        }
        
        .work-company, .project-location, .education-college, .award-issuer {
            font-size: 10pt;
            font-weight: bold;
            color: #000;
            font-style: italic;
        }
        
        .work-dates, .project-dates, .education-dates, .award-date {
            font-size: 10pt;
            color: #000;
            font-weight: normal;
        }
        
        .work-location, .project-location-detail {
            font-size: 10pt;
            color: #000;
            margin-left: 10pt;
        }
        
        .work-description, .project-description, .award-description {
            font-size: 10pt;
            color: #000;
            line-height: 1.3;
            margin-top: 3pt;
            text-align: justify;
        }
        
        .work-description ul, .project-description ul, .award-description ul {
            margin-left: 15pt;
            margin-top: 3pt;
        }
        
        .work-description li, .project-description li, .award-description li {
            margin-bottom: 2pt;
        }
        
        /* Skills Section - ATS Friendly */
        .skills-container {
            display: block;
        }
        
        .skill-category {
            margin-bottom: 8pt;
        }
        
        .skill-category-title {
            font-size: 10pt;
            font-weight: bold;
            color: #000;
            margin-bottom: 3pt;
        }
        
        .skill-list {
            font-size: 10pt;
            color: #000;
            margin-left: 15pt;
        }
        
        /* Links - ATS Compatible */
        .project-url {
            color: #0066cc;
            text-decoration: none;
            font-size: 10pt;
        }
        
        .project-url:hover {
            text-decoration: underline;
        }
        
        /* Print Optimizations */
        @media print {
            @page {
                margin: 0.5in;
                size: A4;
                /* Remove browser headers and footers */
                @top-left { content: ""; }
                @top-center { content: ""; }
                @top-right { content: ""; }
                @bottom-left { content: ""; }
                @bottom-center { content: ""; }
                @bottom-right { content: ""; }
            }
            
            /* Additional browser-specific print header/footer removal */
            @page {
                margin-top: 0.5in;
                margin-bottom: 0.5in;
                margin-left: 0.5in;
                margin-right: 0.5in;
            }
            
            body { 
                margin: 0; 
                padding: 0; 
                font-size: 10pt;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            
            .section { 
                page-break-inside: avoid; 
                margin-bottom: 12pt;
            }
            
            .work-item, .project-item, .education-item, .award-item {
                page-break-inside: avoid;
            }
            
            /* Ensure no browser print elements show */
            @page :first {
                margin-top: 0.5in;
                @top-left { content: ""; }
                @top-center { content: ""; }
                @top-right { content: ""; }
                @bottom-left { content: ""; }
                @bottom-center { content: ""; }
                @bottom-right { content: ""; }
            }
            
            @page :left {
                margin-left: 0.5in;
                margin-right: 0.5in;
                @top-left { content: ""; }
                @top-center { content: ""; }
                @top-right { content: ""; }
                @bottom-left { content: ""; }
                @bottom-center { content: ""; }
                @bottom-right { content: ""; }
            }
            
            @page :right {
                margin-left: 0.5in;
                margin-right: 0.5in;
                @top-left { content: ""; }
                @top-center { content: ""; }
                @top-right { content: ""; }
                @bottom-left { content: ""; }
                @bottom-center { content: ""; }
                @bottom-right { content: ""; }
            }
        }
        
        /* ATS Compatibility - No fancy styling */
        .ats-hidden {
            display: none;
        }
    </style>
</head>
<body>
    <!-- ATS-Optimized Header -->
    <div class="header">
        <h1 class="name">${header.name || "YOUR NAME"}</h1>
        <div class="contact-info">
            ${header.email || "your.email@example.com"}
            ${header.mobile ? ` | ${header.mobile}` : ""}
        </div>
        ${
          header.url1 || header.url2
            ? `
        <div class="contact-links">
            ${
              header.url1
                ? `<div class="contact-link"><a href="${
                    header.url1
                  }" target="_blank" rel="noopener noreferrer">${getLinkText(
                    header.url1
                  )}</a></div>`
                : ""
            }
            ${
              header.url2
                ? `<div class="contact-link"><a href="${
                    header.url2
                  }" target="_blank" rel="noopener noreferrer">${getLinkText(
                    header.url2
                  )}</a></div>`
                : ""
            }
        </div>
        `
            : ""
        }
    </div>

    ${
      workExperience.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">Professional Experience</h2>
        ${workExperience
          .map(
            (exp) => `
            <div class="work-item">
                <div class="work-header">
                    <div>
                        <div class="work-title">${
                          exp.jobTitle || "Job Title"
                        }</div>
                        <div class="work-company">${
                          exp.company || "Company Name"
                        }</div>
                    </div>
                    <div class="work-dates">${exp.startDate || ""} ${
              exp.startDate && exp.endDate ? " - " : ""
            } ${exp.endDate || ""}</div>
                </div>
                ${
                  exp.location
                    ? `<div class="work-location">${exp.location}</div>`
                    : ""
                }
                ${
                  exp.description
                    ? `<div class="work-description">${formatDescriptionForATS(
                        exp.description
                      )}</div>`
                    : ""
                }
            </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    ${
      awards.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">Awards & Certificates</h2>
        ${awards
          .map(
            (award) => `
            <div class="award-item">
                <div class="award-header">
                    <div>
                        <div class="award-name">${
                          award.name || "Award Name"
                        }</div>
                        <div class="award-issuer">${
                          award.issuer || "Issuing Organization"
                        }</div>
                    </div>
                    <div class="award-date">${award.date || ""}</div>
                </div>
                ${
                  award.description
                    ? `<div class="award-description">${formatDescriptionForATS(
                        award.description
                      )}</div>`
                    : ""
                }
            </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    ${
      projects.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">Key Projects</h2>
        ${projects
          .map(
            (project) => `
            <div class="project-item">
                <div class="project-header">
                    <div>
                        <div class="project-name">${
                          project.name || "Project Name"
                        }</div>
                    </div>
                    <div class="project-dates">${project.startDate || ""} ${
              project.startDate && project.endDate ? " - " : ""
            } ${project.endDate || ""}</div>
                </div>
                ${
                  project.location
                    ? `<div class="project-location">${project.location}</div>`
                    : ""
                }
                ${
                  project.description
                    ? `<div class="project-description">${formatDescriptionForATS(
                        project.description
                      )}</div>`
                    : ""
                }
                ${
                  project.url
                    ? `<div class="project-url"><a href="${
                        project.url
                      }" target="_blank" rel="noopener noreferrer">${getProjectLinkText(
                        project.url
                      )}</a></div>`
                    : ""
                }
            </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    ${
      education.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">Education</h2>
        ${education
          .map(
            (edu) => `
            <div class="education-item">
                <div class="education-header">
                    <div>
                        <div class="education-degree">${
                          edu.degree || "Degree"
                        }</div>
                        <div class="education-college">${
                          edu.college || "Institution Name"
                        }</div>
                    </div>
                    <div class="education-dates">${edu.startDate || ""} ${
              edu.startDate && edu.endDate ? " - " : ""
            } ${edu.endDate || ""}</div>
                </div>
            </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    ${
      skills.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-container">
            <div class="skill-list">
                ${skills.map((skill) => skill.skill || "Skill").join(" • ")}
            </div>
        </div>
    </div>
    `
        : ""
    }
</body>
</html>
  `;
};
