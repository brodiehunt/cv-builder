import {useState} from 'react'; 

import Design from './Design';
import Details from './Details';
import Education from './Education';
import Experience from './Experience';
function Accordion() {
    return (
        <div className="accordion" >
            <Design />
            <Details />
            <Education />
            <Experience />
        </div>
    )
}

export default Accordion;