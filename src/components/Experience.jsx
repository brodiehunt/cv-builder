import {useState} from 'react';
import ExperienceForm from './ExperienceForm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Experience() {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggleOpen() {
        console.log('working')
        setIsOpen(!isOpen);
    }   
    return (
        <div className="experience item-container">
            <div className="header-container">
                <h2>Experience</h2>
                <ExpandMoreIcon fontSize="large" onClick={handleToggleOpen} className={isOpen ? 'accordion-icon open' : 'accordion-icon'}/>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <ExperienceForm />
            </div>
            
            
        </div>
    )
}

export default Experience;