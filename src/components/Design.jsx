import {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import template1 from '../assets/template1.jpeg';
import template2 from '../assets/template2.jpeg';
function Design() {
    const [isOpen, setIsOpen] = useState(true);

    function handleToggleOpen() {
        setIsOpen(!isOpen);
    }
    return (
        <div className="design item-container">
            <div className="header-container">
                <h2>Design</h2>
                <ExpandMoreIcon fontSize="large" onClick={handleToggleOpen} className={isOpen ? 'accordion-icon open' : 'accordion-icon'}/>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <div className="design-group">
                    <h3>Layout</h3>
                    <div className="design-btns-group">
                        <button className="template-btn selected">
                            <img src={template1}/>
                        </button>
                        <button className="template-btn">
                            <img src={template2}/>
                        </button>
                    </div>
                </div>
                <div className="design-group">
                    <h3>Theme</h3>
                    <div className="design-btns-group">
                        <button className="theme-btn first selected"><span className="first" style={{backgroundColor: "blue"}}></span><span className="second" style={{backgroundColor: "red"}}></span></button>
                        <button className="theme-btn second"><span className="first" style={{backgroundColor: "blue"}}></span><span className="second" style={{backgroundColor: "red"}}></span></button>
                        <button className="theme-btn third"><span className="first" style={{backgroundColor: "blue"}}></span><span className="second" style={{backgroundColor: "red"}}></span></button>
                    </div>
                </div>
                <div className="design-group">
                    <h3>Typography</h3>
                    <div className="design-btns-group">
                        <button className="font-btn selected">Ss</button>
                        <button className="font-btn">Ss</button>
                        <button className="font-btn">Ss</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Design;