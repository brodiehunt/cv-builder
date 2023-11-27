import {useState} from 'react';
import ExperienceForm from './ExperienceForm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Experience({experienceData, handleSaveNewExperience, handleUpdateExperience, isOpen, handleChangeAccordion}) {
    const [formOpen, setFormOpen] = useState(false);
    const  [currentFormVals, setCurrentFormVals] = useState({companyName: '', positionTitle: '', start: '', end: '', location: '', description: ''});
    const [newForm, setNewForm] = useState(true);
   
    // toggles the form within the content of the accordion
    function handleToggleForm() {
        setFormOpen(!formOpen)
    };

    // Need to set set of current form vals to default if user wants to create new experience object
    function handleNewFormOpen() {
        setCurrentFormVals({companyName: '', positionTitle: '', start: '', end: '', location: '', description: ''});
        setNewForm(true)
        setFormOpen(true);
    }

    // Takes values passed to it (in the map method below this)
    function handleUpdateFormOpen(vals) {
        setCurrentFormVals(vals);
        setNewForm(false)
        setFormOpen(true)
    }

    // map through experienceData which is just the state passed from App.jsx and create a clickable div
    // opens a form that is prefilled for editing.
    const experienceDivs = experienceData.map((item) => {
        return (
            <div key={item.id} onClick={() => handleUpdateFormOpen(item)}>
                <p>{item.positionTitle}</p>
            </div>
        )
    })
    
    return (
        <div className="experience item-container">
            <div className="header-container">
                <h2>Experience</h2>
                <ExpandMoreIcon fontSize="large" onClick={() => handleChangeAccordion(isOpen, 'experience')} className={isOpen ? 'accordion-icon open' : 'accordion-icon'}/>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                {
                    formOpen ? 
                    <ExperienceForm handleToggleForm={handleToggleForm} formDetails={currentFormVals} saveCallback={newForm ?  handleSaveNewExperience : handleUpdateExperience}/> : 
                    <div className="state-items">
                        {experienceDivs}
                        <button className="btn add-new" onClick={handleNewFormOpen}>Add New</button>
                    </div>
                }
            </div>
            
            
        </div>
    )
}

// If clicks add new then:
    // open the form with default values - pass to form component
    // clear form will act the same - define in form component
    // save will add a completely new object to the array in the app component
// If clicks one of the previously completed experience tabs (to edit)
    // open the form with values specific to that tab - pass those vals to form component
    // open clear form will act the same (define in form component)
    // save form will act differently, it will need to be able to update the existing object in the state array.
    // pass a key for this? 


export default Experience;