import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import Accordion from './components/Accordion';
import Page from './components/Page';
import './App.css'

function App() {
  const [design, setDesign] = useState({layout: 'layoutOne', theme: 'themeOne', typography: 'typeOne'});
  const [personDetails, setPersonDetails] = useState({fullName: '', email: '', phone: '', address: '', profile: ''});
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  // Clear entire application
  function clearResume() {
    setDesign({layout: 'layoutOne', theme: 'themeOne', typography: 'typeOne'});
    setPersonDetails({fullName: '', email: '', phone: '', address: '', profile: ''})
    setSkills([]);
    setEducation([]);
    setExperience([]);
  }

  function handleDesignChange(key, newVal) {
    const newState = {...design};
    newState[key] = newVal;
    setDesign(newState);
  }

  // Save new personDetails form event handler
  function handleSaveDetails(event, details) {
    event.preventDefault();
    
    setPersonDetails(details);
  }

  function handleSaveNewSkill(event, data) {
    event.preventDefault();
    const id = uuidv4();
    data.id = id;
    const newState = skills.slice();
    newState.push(data);
    setSkills(newState);
  }

  function handleDeleteSkill(data) {
    const otherItems = skills.filter((item) => item.id !== data.id);
    setSkills(otherItems);
  }

  // New experience save - adds a completely new object
  function handleSaveNewExperience(event, data) {
    event.preventDefault()
    const id = uuidv4();
    data.id = id;
    const newState = experience.slice()
    newState.push(data);
    setExperience(newState);
  }

  // Update existing experience object - If lacking in data, deletes the object
  function handleUpdateExperience(event, data) {
    event.preventDefault()
    // filter the current list
    const otherItems = experience.filter((item) => item.id !== data.id);
    if (data.companyName == '' && data.positionTitle === "" && data.location === "" && data.description === "") {
      return setExperience(otherItems);
    }
    otherItems.push(data);
    setExperience(otherItems);
  }

  function handleSaveNewEducation(event, data) {
    event.preventDefault();
    const id = uuidv4();
    data.id = id;
    const newState = education.slice();
    newState.push(data);
    setEducation(newState);
  }

  function handleUpdateEducation(event, data) {
    event.preventDefault();
    const otherItems = education.filter((item) => item.id !== data.id);
    if (data.degree === '' && data.school === "") {
      return setEducation(otherItems);
    }
    otherItems.push(data);
    setEducation(otherItems);
  }

  function handleDeleteEducation(data) {
    const otherItems = education.filter((item) => item.id !== data.id);
    setEducation(otherItems);
  }

  function handleDeleteExperience(data) {
    const otherItems = education.filter((item) => item.id !== data.id);
    setExperience(otherItems);
  }


  return (
    
    <div className="main-container">
      <div className="fixed-div">
        <button className="btn" onClick={clearResume}>Clear resume</button>
        <button className="btn">Download</button>
      </div>
      <Accordion 
        design={design}
        handleDesignChange={handleDesignChange}
        formDetails={personDetails}
        handleSaveDetails={handleSaveDetails}
        skills={skills}
        handleSaveNewSkill={handleSaveNewSkill}
        handleDeleteSkill={handleDeleteSkill}
        experience={experience}
        handleUpdateExperience={handleUpdateExperience}
        handleSaveNewExperience={handleSaveNewExperience}
        handleDeleteExperience={handleDeleteExperience}
        education={education}
        handleUpdateEducation={handleUpdateEducation}
        handleSaveNewEducation={handleSaveNewEducation}
        handleDeleteEducation={handleDeleteEducation}
      />
      <Page 
        design={design}
        details={personDetails}
        skills={skills}
        education={education}
        experience={experience}
      />
    </div>
  )
}

export default App
