# 📄 CV Generator

A modern, responsive CV/Resume generator built with React and Vite. Create professional resumes with ATS-friendly formatting and download them as PDF or HTML files.

![CV Generator](https://img.shields.io/badge/React-19.1.1-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 **Modern UI/UX**

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Beautiful Color Scheme** - Professional gradients and modern styling
- **Interactive Components** - Smooth animations and hover effects
- **Real-time Preview** - See your CV update as you type

### 📝 **Comprehensive Sections**

- **Personal Information** - Name, email, mobile number, and up to 2 professional URLs (LinkedIn, GitHub, Portfolio, etc.)
- **Work Experience** - Job titles, companies, dates, locations, and detailed descriptions
- **Awards & Certificates** - Awards, certificates, issuing organizations, dates, and descriptions
- **Projects** - Project names, dates, locations, descriptions, and clickable URLs
- **Education** - Degrees, institutions, and graduation dates
- **Skills** - Technical skills displayed as modern tags

### 💾 **Data Management**

- **Local Storage** - Save and load your CV data locally
- **Auto-save** - Never lose your work
- **Data Export** - Download your CV in multiple formats

### 📄 **ATS-Friendly Output**

- **PDF Generation** - Professional PDF format for applications
- **HTML Export** - Clean HTML files for online portfolios
- **ATS Optimization** - Passes Applicant Tracking Systems
- **Print-Ready** - Optimized for both screen and print
- **Smart Links** - Automatic link text generation (LinkedIn Profile, GitHub Profile, etc.)
- **Clean Print Output** - No browser headers/footers in printed CVs

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/cv-generator.git
   cd cv-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
cv-generator/
├── public/
│   └── vite.svg              # Favicon
├── src/
│   ├── components/           # React components
│   │   ├── HeaderForm.jsx    # Personal info form
│   │   ├── HeaderPreview.jsx # Personal info preview
│   │   ├── WorkExperienceForm.jsx
│   │   ├── WorkExperiencePreview.jsx
│   │   ├── ProjectsForm.jsx
│   │   ├── ProjectsPreview.jsx
│   │   ├── EducationForm.jsx
│   │   ├── EducationPreview.jsx
│   │   ├── SkillsForm.jsx
│   │   ├── SkillsPreview.jsx
│   │   └── ActionButtons.jsx # Save/Load/Download buttons
│   ├── utils/               # Utility functions
│   │   ├── localStorage.js  # Data persistence
│   │   └── downloadCV.js    # PDF/HTML generation
│   ├── App.jsx              # Main application
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md               # This file
```

## 🎯 How to Use

### 1. **Fill in Your Information**

- Start with your personal details (name, email, mobile number, and professional URLs)
- Add your work experience with job titles, companies, dates, locations, and descriptions
- Include your awards and certificates with names, issuing organizations, dates, and descriptions
- Add your projects with names, dates, locations, descriptions, and URLs
- List your education and degrees
- Add your technical skills

### 2. **Preview Your CV**

- See your CV update in real-time on the right side
- All sections are beautifully formatted and professional

### 3. **Save Your Work**

- Click "Save CV" to store your data locally
- Use "Load CV" to restore previously saved data
- Clear data when starting fresh

### 4. **Download Your CV**

- **PDF**: Click "Download PDF" and use your browser's print dialog (set margins to 'Minimum' and disable headers/footers for best results)
- **HTML**: Click "Download HTML" to get a file for online use
- **Smart Links**: URLs automatically become clickable links with professional text (e.g., "LinkedIn Profile" instead of full URLs)

## 🆕 Recent Improvements

### **Enhanced Contact Information**

- Added mobile number field to personal information
- Support for up to 2 professional URLs (LinkedIn, GitHub, Portfolio, etc.)
- Smart link text generation for professional appearance

### **New Awards & Certificates Section**

- Complete awards and certificates management
- Fields for award name, issuing organization, date, and description
- Positioned strategically after work experience section
- Professional formatting and ATS-friendly structure

### **Improved Project Management**

- Added start and end dates for projects
- Reorganized project layout with dates on the right
- Project locations now display in parentheses after dates
- Enhanced project descriptions with better placeholders

### **Better Link Handling**

- All URLs now display as clickable blue links
- Automatic link text generation based on platform (LinkedIn Profile, GitHub Profile, etc.)
- Professional appearance in both PDF and HTML outputs

### **Print Optimization**

- Removed browser headers and footers from printed CVs
- Clean, professional print output
- Better instructions for optimal print settings

## 🎨 Design Features

### **Color Themes**

- **Personal Info**: Blue theme
- **Work Experience**: Orange/Amber theme
- **Projects**: Purple theme
- **Education**: Cyan theme
- **Skills**: Purple theme
- **Actions**: Multi-color gradient

### **Responsive Layout**

- **Desktop**: Side-by-side layout with sticky forms
- **Tablet**: Adjusted spacing and form width
- **Mobile**: Stacked layout with full-width sections

## 🔧 Technical Details

### **Built With**

- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.2** - Fast build tool and dev server
- **CSS3** - Modern styling with custom properties
- **Local Storage API** - Client-side data persistence
- **DOMParser** - Safe HTML parsing for downloads

### **ATS Compatibility**

- Standard fonts (Times New Roman)
- Clean, simple layouts
- Proper section headers
- Standard date formats
- No complex graphics or tables
- Print-optimized formatting

## 🚀 Deployment

### **Vercel (Recommended)**

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### **Other Platforms**

- **Netlify**: Connect GitHub repository
- **GitHub Pages**: Use GitHub Actions
- **Firebase Hosting**: Use Firebase CLI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Icons from Unicode emoji
- ATS optimization based on industry best practices

---

**Made with ❤️ for job seekers everywhere**
