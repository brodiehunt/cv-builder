import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import Accordion from './components/Accordion';
import Page from './components/Page';
import './App.css'

function App() {
  const [design, setDesign] = useState({layout: 'One', theme: 'One', typography: 'One'});
  const [personDetails, setPersonDetails] = useState({fullName: 'Hello', email: '', phone: '', address: ''});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  function handleSaveDetails(event, details) {
    event.preventDefault();
    
    setPersonDetails(details);
  }

  function handleSaveNewExperience(event, data) {
    event.preventDefault()
    const id = uuidv4();
    data.id = id;
    const newState = experience.slice()
    newState.push(data);
    setExperience(newState);
  }

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


  return (
    
    <div className="main-container">
      <div className="fixed-div">
        <button className="btn">Clear resume</button>
        <button className="btn">Download</button>
      </div>
      <Accordion 
        formDetails={personDetails}
        handleSaveDetails={handleSaveDetails}
        experience={experience}
        handleUpdateExperience={handleUpdateExperience}
        handleSaveNewExperience={handleSaveNewExperience}
      />
      <Page details={personDetails}/>
    </div>
  )
}

export default App
