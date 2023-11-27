import {useState} from 'react';
import EducationForm from './EducationForm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Education() {
    const [isOpen, setIsOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    function handleToggleOpen() {
        setIsOpen(!isOpen);
    };
    function handleOpenForm() {
        setFormOpen(!formOpen)
    };
    return (
        <div className="eductation item-container">
            <div className="header-container">
                <h2>Education</h2>
                <ExpandMoreIcon fontSize="large" onClick={handleToggleOpen} className={isOpen ? 'accordion-icon open' : 'accordion-icon'}/>
            </div>
            
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                {
                    formOpen ? 
                    <EducationForm /> : 
                    <div className="state-items">
                        <button className="btn add-new">Add New</button>
                    </div>
                }
                
            </div>
        
        </div>
    )
}

export default Education;