import {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import template1 from '../assets/template1.jpeg';
import template2 from '../assets/template2.jpeg';

function Design({isOpen, handleChangeAccordion, designData, handleDesignChange}) {
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
                            onClick={() => handleDesignChange('layout', 'layoutOne' )}
                            className={`template-btn ${designData.layout === 'layoutOne' ? 'selected' : ''}`}
                        >
                            <img src={template1}/>
                        </button>
                        <button 
                        onClick={() => handleDesignChange('layout', 'layoutTwo' )}
                        className={`template-btn ${designData.layout === 'layoutOne' ? '' : 'selected'}`}>
                            <img src={template2}/>
                        </button>
                    </div>
                </div>
                <div className="design-group">
                    <h3>Theme</h3>
                    <div className="design-btns-group">
                        <button 
                            onClick={() => handleDesignChange('theme', 'themeOne' )}
                            className={`theme-btn first ${designData.theme === 'themeOne' ? 'selected' : ''}`}
                        >
                            <span className="first" style={{backgroundColor: "#303072"}}></span>
                            <span className="second" style={{backgroundColor: "#808080"}}></span>
                        </button>
                        <button 
                            onClick={() => handleDesignChange('theme', 'themeTwo' )}
                            className={`theme-btn second ${designData.theme === 'themeTwo' ? 'selected' : ''}`}
                        >
                            <span className="first" style={{backgroundColor: "#333333"}}></span>
                            <span className="second" style={{backgroundColor: "#008080"}}></span>
                        </button>
                        <button 
                            onClick={() => handleDesignChange('theme', 'themeThree' )}
                            className={`theme-btn third ${designData.theme === 'themeThree' ? 'selected' : ''}`}
                        >
                            <span className="first" style={{backgroundColor: "#FFF9C4"}}></span>
                            <span className="second" style={{backgroundColor: "#333333"}}></span>
                        </button>
                    </div>
                </div>
                <div className="design-group">
                    <h3>Typography</h3>
                    <div className="design-btns-group">
                        <button 
                            onClick={() => handleDesignChange('typography', 'typeOne' )}
                            className={`font-btn ${designData.typography === 'typeOne' ? 'selected' : ''}`}
                        >Ss</button>
                        <button 
                            onClick={() => handleDesignChange('typography', 'typeTwo' )}
                            className={`font-btn ${designData.typography === 'typeTwo' ? 'selected' : ''}`}
                        >Ss</button>
                        <button 
                            onClick={() => handleDesignChange('typography', 'typeThree' )}
                            className={`font-btn ${designData.typography === 'typeThree' ? 'selected' : ''}`}
                        >Ss</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Design;