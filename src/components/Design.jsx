import {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Design() {
    const [isOpen, setIsOpen] = useState(true);

    function handleToggleOpen() {
        console.log('working')
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
                    <button>click 1</button>
                    <button>click 1</button>
                    <button>click 1</button>
                </div>
                <div className="design-group">
                    <h3>Theme</h3>
                    <button>click 1</button>
                    <button>click 1</button>
                    <button>click 1</button>
                </div>
                <div className="design-group">
                    <h3>Typography</h3>
                    <button>click 1</button>
                    <button>click 1</button>
                    <button>click 1</button>
                </div>
            </div>
            
        </div>
    )
}

export default Design;