import {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import template1 from '../assets/template1.jpeg';
import template2 from '../assets/template2.jpeg';

function Design({isOpen, handleChangeAccordion, designData, handleDesignChange}) {
    console.log(designData);
    return (
        <div className="design item-container">
            <div className="header-container">
                <h2>Design</h2>
                <ExpandMoreIcon fontSize="large" onClick={() => handleChangeAccordion(isOpen, 'design')} className={isOpen ? 'accordion-icon open' : 'accordion-icon'}/>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <div className="design-group">
                    <h3>Layout</h3>
                    <div className="design-btns-group">
                        <button 
                            onClick={() => handleDesignChange('layout', 'one' )}
                            className={`template-btn ${designData.layout === 'one' ? 'selected' : ''}`}
                        >
                            <img src={template1}/>
                        </button>
                        <button 
                        onClick={() => handleDesignChange('layout', 'two' )}
                        className={`template-btn ${designData.layout === 'one' ? '' : 'selected'}`}>
                            <img src={template2}/>
                        </button>
                    </div>
                </div>
                <div className="design-group">
                    <h3>Theme</h3>
                    <div className="design-btns-group">
                        <button 
                            onClick={() => handleDesignChange('theme', 'one' )}
                            className={`theme-btn first ${designData.theme === 'one' ? 'selected' : ''}`}
                        >
                            <span className="first" style={{backgroundColor: "blue"}}></span>
                            <span className="second" style={{backgroundColor: "red"}}></span>
                        </button>
                        <button 
                            onClick={() => handleDesignChange('theme', 'two' )}
                            className={`theme-btn second ${designData.theme === 'two' ? 'selected' : ''}`}
                        >
                            <span className="first" style={{backgroundColor: "blue"}}></span>
                            <span className="second" style={{backgroundColor: "red"}}></span>
                        </button>
                        <button 
                            onClick={() => handleDesignChange('theme', 'three' )}
                            className={`theme-btn third ${designData.theme === 'three' ? 'selected' : ''}`}
                        >
                            <span className="first" style={{backgroundColor: "blue"}}></span>
                            <span className="second" style={{backgroundColor: "red"}}></span>
                        </button>
                    </div>
                </div>
                <div className="design-group">
                    <h3>Typography</h3>
                    <div className="design-btns-group">
                        <button 
                            onClick={() => handleDesignChange('typography', 'one' )}
                            className={`font-btn ${designData.typography === 'one' ? 'selected' : ''}`}
                        >Ss</button>
                        <button 
                            onClick={() => handleDesignChange('typography', 'two' )}
                            className={`font-btn ${designData.typography === 'two' ? 'selected' : ''}`}
                        >Ss</button>
                        <button 
                            onClick={() => handleDesignChange('typography', 'three' )}
                            className={`font-btn ${designData.typography === 'three' ? 'selected' : ''}`}
                        >Ss</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Design;