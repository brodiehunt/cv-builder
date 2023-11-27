import {useState} from 'react';
import ExperienceForm from './ExperienceForm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Experience({experienceData, handleSaveNewExperience, handleUpdateExperience}) {
    const [isOpen, setIsOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    const  [currentFormVals, setCurrentFormVals] = useState({companyName: '', positionTitle: '', start: '', end: '', location: '', description: ''});
    const [newForm, setNewForm] = useState(true);
    
    function handleToggleOpen() {
        setIsOpen(!isOpen);
    }
    function handleToggleForm() {
        setFormOpen(!formOpen)
    };

    function handleNewFormOpen() {
        setCurrentFormVals({companyName: '', positionTitle: '', start: '', end: '', location: '', description: ''});
        setNewForm(true)
        setFormOpen(true);
    }

    function handleUpdateFormOpen(vals) {
        setCurrentFormVals(vals);
        setNewForm(false)
        setFormOpen(true)
    }
    console.log(experienceData)
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
                <ExpandMoreIcon fontSize="large" onClick={handleToggleOpen} className={isOpen ? 'accordion-icon open' : 'accordion-icon'}/>
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