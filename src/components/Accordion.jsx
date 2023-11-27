import {useState} from 'react'; 

import Design from './Design';
import Details from './Details';
import Education from './Education';
import Experience from './Experience';
function Accordion(props) {
    const [openAccordion, setOpenAccordion] = useState({design: true, details: false, education: false, experience: false});

    function handleChangeAccordion(isOpen, stateKey) {
        const newState = {...openAccordion};
        for (let key in newState) {
            if (!isOpen && (key === stateKey)) {
                newState[key] = true;
            } else {
                newState[key] = false;
            }
        }
        setOpenAccordion(newState)
    }

    return (
        <div className="accordion" >
            <Design isOpen={openAccordion.design}
            handleChangeAccordion={handleChangeAccordion}
            />
            <Details isOpen={openAccordion.details}
                handleChangeAccordion={handleChangeAccordion}
                formDetails={props.formDetails} 
                handleSaveDetails={props.handleSaveDetails}
            />
            <Education isOpen={openAccordion.education}
                handleChangeAccordion={handleChangeAccordion}
                educationData={props.education}
                handleUpdateEducation={props.handleUpdateEducation}
                handleSaveNewEducation={props.handleSaveNewEducation}
            />
            <Experience isOpen={openAccordion.experience}
                handleChangeAccordion={handleChangeAccordion}
                experienceData={props.experience} 
                handleUpdateExperience={props.handleUpdateExperience}
                handleSaveNewExperience={props.handleSaveNewExperience}
            />
        </div>
    )
}

export default Accordion;