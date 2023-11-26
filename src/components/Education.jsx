import {useState} from 'react';
import EducationForm from './EducationForm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Education() {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggleOpen() {
        console.log('working')
        setIsOpen(!isOpen);
    }
    return (
        <div className="eductation item-container">
            <div className="header-container">
                <h2>Education</h2>
                <ExpandMoreIcon fontSize="large" onClick={handleToggleOpen} className={isOpen ? 'accordion-icon open' : 'accordion-icon'}/>
            </div>
            
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <EducationForm />
            </div>
        
        </div>
    )
}

export default Education;