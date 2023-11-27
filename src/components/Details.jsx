import {useState} from 'react';
import DetailsForm from './DetailsForm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Details({formDetails, handleSaveDetails}) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggleOpen() {
        setIsOpen(!isOpen);
    }


    return (
        <div className="personal-details item-container">
            <div className="header-container">
                <h2>Personal Details</h2>
                <ExpandMoreIcon fontSize="large" onClick={handleToggleOpen} className={isOpen ? 'accordion-icon open' : 'accordion-icon'}/>
            </div>
            
                <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <DetailsForm formDetails={formDetails} handleSaveDetails={handleSaveDetails}/>
                </div>
            
            
            
        </div>
    )
}

export default Details;