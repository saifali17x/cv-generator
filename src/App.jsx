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
import AwardsForm from "./components/AwardsForm";
import AwardsPreview from "./components/AwardsPreview";
import ActionButtons from "./components/ActionButtons";

export default function App() {
  const [header, setHeader] = useState({
    name: "",
    email: "",
    mobile: "",
    url1: "",
    url2: "",
  });

  const [projects, setProjects] = useState([]);

  const [education, setEducation] = useState([]);

  const [skills, setSkills] = useState([]);

  const [workExperience, setWorkExperience] = useState([]);

  const [awards, setAwards] = useState([]);

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
      startDate: "",
      endDate: "",
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

  const updateAwards = (id, field, value) => {
    setAwards((prev) =>
      prev.map((award) =>
        award.id === id ? { ...award, [field]: value } : award
      )
    );
  };

  const addAward = () => {
    const newAward = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      date: "",
      description: "",
    };
    setAwards((prev) => [...prev, newAward]);
  };

  const deleteAward = (id) => {
    setAwards((prev) => prev.filter((award) => award.id !== id));
  };

  // Function to get all CV data
  const getCVData = () => ({
    header,
    projects,
    education,
    skills,
    workExperience,
    awards,
  });

  // Function to load data from localStorage
  const handleLoadData = (data) => {
    setHeader(
      data.header || { name: "", email: "", mobile: "", url1: "", url2: "" }
    );
    setProjects(data.projects || []);
    setEducation(data.education || []);
    setSkills(data.skills || []);
    setWorkExperience(data.workExperience || []);
    setAwards(data.awards || []);
  };

  // Function to clear all data
  const handleClearData = () => {
    setHeader({ name: "", email: "", mobile: "", url1: "", url2: "" });
    setProjects([]);
    setEducation([]);
    setSkills([]);
    setWorkExperience([]);
    setAwards([]);
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
        <AwardsForm
          awards={awards}
          onUpdate={updateAwards}
          onAdd={addAward}
          onDelete={deleteAward}
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
        <AwardsPreview awards={awards} />
        <ProjectsPreview projects={projects} />
        <EducationPreview education={education} />
        <SkillsPreview skills={skills} />
      </div>
    </div>
  );
}
