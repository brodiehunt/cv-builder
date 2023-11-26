import { useState } from 'react'
import Button from '@mui/material/Button';
import Accordion from './components/Accordion';
import Page from './components/Page';
import './App.css'

function App() {
  const [design, setDesign] = useState({layout: 'One', theme: 'One', typography: 'One'});
  const [personDetails, setPersonDetails] = useState({fullName: '', email: '', phone: '', address: ''});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    
    <div className="main-container">
      <div className="fixed-div">
        <button className="btn">Clear resume</button>
        <button className="btn">Download</button>
      </div>
      <Accordion />
      <Page />
    </div>
  )
}

export default App
