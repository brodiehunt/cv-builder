import {useState} from 'react';
import DetailsForm from './DetailsForm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Details() {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggleOpen() {
        console.log('working')
        setIsOpen(!isOpen);
    }
    return (
        <div className="personal-details item-container">
            <div className="header-container">
                <h2>Personal Details</h2>
                <ExpandMoreIcon fontSize="large" onClick={handleToggleOpen} className={isOpen ? 'accordion-icon open' : 'accordion-icon'}/>
            </div>
            
                <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <DetailsForm />
                </div>
            
            
            
        </div>
    )
}

export default Details;