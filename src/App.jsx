import { useState } from "react";
import HeaderForm from "./components/HeaderForm";
import HeaderPreview from "./components/HeaderPreview";
import ProjectsForm from "./components/ProjectsForm";
import ProjectsPreview from "./components/ProjectsPreview";
import EducationForm from "./components/EducationForm";
import EducationPreview from "./components/EducationPreview";
import SkillsForm from "./components/SkillsForm";
import SkillsPreview from "./components/SkillsPreview";
import WorkExperienceForm from "./components/WorkExperienceForm";
import WorkExperiencePreview from "./components/WorkExperiencePreview";
import ActionButtons from "./components/ActionButtons";

export default function App() {
  const [header, setHeader] = useState({
    name: "",
    email: "",
  });

  const [projects, setProjects] = useState([]);

  const [education, setEducation] = useState([]);

  const [skills, setSkills] = useState([]);

  const [workExperience, setWorkExperience] = useState([]);

  const updateHeader = (field, value) => {
    setHeader((prev) => ({ ...prev, [field]: value }));
  };

  const updateProjects = (id, field, value) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      name: "",
      location: "",
      description: "",
      url: "",
    };
    setProjects((prev) => [...prev, newProject]);
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const updateEducation = (id, field, value) => {
    setEducation((prev) =>
      prev.map((education) =>
        education.id === id ? { ...education, [field]: value } : education
      )
    );
  };

  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      college: "",
      degree: "",
      startDate: "",
      endDate: "",
    };
    setEducation((prev) => [...prev, newEducation]);
  };

  const deleteEducation = (id) => {
    setEducation((prev) => prev.filter((education) => education.id !== id));
  };

  const updateSkills = (id, field, value) => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    );
  };

  const addSkill = () => {
    const newSkill = {
      id: Date.now().toString(),
      skill: "",
    };
    setSkills((prev) => [...prev, newSkill]);
  };

  const deleteSkill = (id) => {
    setSkills((prev) => prev.filter((skill) => skill.id !== id));
  };

  const updateWorkExperience = (id, field, value) => {
    setWorkExperience((prev) =>
      prev.map((experience) =>
        experience.id === id ? { ...experience, [field]: value } : experience
      )
    );
  };

  const addWorkExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    };
    setWorkExperience((prev) => [...prev, newExperience]);
  };

  const deleteWorkExperience = (id) => {
    setWorkExperience((prev) =>
      prev.filter((experience) => experience.id !== id)
    );
  };

  // Function to get all CV data
  const getCVData = () => ({
    header,
    projects,
    education,
    skills,
    workExperience,
  });

  // Function to load data from localStorage
  const handleLoadData = (data) => {
    setHeader(data.header || { name: "", email: "" });
    setProjects(data.projects || []);
    setEducation(data.education || []);
    setSkills(data.skills || []);
    setWorkExperience(data.workExperience || []);
  };

  // Function to clear all data
  const handleClearData = () => {
    setHeader({ name: "", email: "" });
    setProjects([]);
    setEducation([]);
    setSkills([]);
    setWorkExperience([]);
  };

  return (
    <div className="app-container">
      <div className="form-section">
        <HeaderForm header={header} onChange={updateHeader} />
        <ProjectsForm
          projects={projects}
          onUpdate={updateProjects}
          onAdd={addProject}
          onDelete={deleteProject}
        />
        <EducationForm
          education={education}
          onUpdate={updateEducation}
          onAdd={addEducation}
          onDelete={deleteEducation}
        />
        <WorkExperienceForm
          workExperience={workExperience}
          onUpdate={updateWorkExperience}
          onAdd={addWorkExperience}
          onDelete={deleteWorkExperience}
        />
        <SkillsForm
          skills={skills}
          onUpdate={updateSkills}
          onAdd={addSkill}
          onDelete={deleteSkill}
        />
        <ActionButtons
          cvData={getCVData()}
          onLoadData={handleLoadData}
          onClearData={handleClearData}
        />
      </div>

      <div className="preview-section">
        <HeaderPreview header={header} />
        <WorkExperiencePreview workExperience={workExperience} />
        <ProjectsPreview projects={projects} />
        <EducationPreview education={education} />
        <SkillsPreview skills={skills} />
      </div>
    </div>
  );
}
