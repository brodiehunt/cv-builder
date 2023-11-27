import {useState} from 'react';
import EducationForm from './EducationForm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Education({educationData, handleSaveNewEducation, handleUpdateEducation, isOpen, handleChangeAccordion, handleDeleteEducation}) {
    
    const [formOpen, setFormOpen] = useState(false);
    const [currentFormVals, setCurrentFormVals] = useState({school: '', degree: '', start: '', end: '', location: ''});
    const [newForm, setNewForm] = useState(true);


    function handleToggleForm() {
        setFormOpen(!formOpen)
    };

    function handleNewFormOpen() {
        setCurrentFormVals({school: '', degree: '', start: '', end: '', location: ''});
        setNewForm(true);
        setFormOpen(true);
    }

    function handleUpdateFormOpen(vals) {
        setCurrentFormVals(vals);
        setNewForm(false);
        setFormOpen(true);
    }

    const educationDivs = educationData.map((item) => {
        return (
            <div className="existing-object-tab" key={item.id} onClick={() => handleUpdateFormOpen(item)}>
                <p>{item.degree}</p>
                <DeleteOutlineIcon className="delete-icon" onClick={(event) => {
                    event.stopPropagation();
                    handleDeleteEducation(item)}}/>
            </div>
        )
    })

    
    return (
        <div className="eductation item-container">
            <div className="header-container">
                <h2>Education</h2>
                <ExpandMoreIcon fontSize="large" onClick={() => handleChangeAccordion(isOpen, 'education')} className={isOpen ? 'accordion-icon open' : 'accordion-icon'}/>
            </div>
            
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                {
                    formOpen ? 
                    <EducationForm 
                        handleToggleForm={handleToggleForm} 
                        formDetails={currentFormVals} 
                        saveCallback={newForm ?  handleSaveNewEducation : handleUpdateEducation}
                    /> : 
                    <div className="state-items">
                        {educationDivs}
                        <button className="btn add-new" onClick={handleNewFormOpen}>Add New</button>
                    </div>
                }
                
            </div>
        
        </div>
    )
}

export default Education;