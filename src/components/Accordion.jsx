import {useState} from 'react'; 

import Design from './Design';
import Details from './Details';
import Education from './Education';
import Experience from './Experience';
function Accordion(props) {
    return (
        <div className="accordion" >
            <Design />
            <Details formDetails={props.formDetails} handleSaveDetails={props.handleSaveDetails}/>
            <Education />
            <Experience />
        </div>
    )
}

export default Accordion;