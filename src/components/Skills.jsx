import {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FormGroup from './FormGroup';
import './../styles/FormGroup.css'

function Skills({isOpen, skillsData, handleSaveNewSkill, handleDeleteSkill, handleChangeAccordion}) {
    const [formState, setFormState] = useState({skill: ''});
    
    function handleOnChange(event) {
        const inputVal = event.target.value;
        setFormState({skill: inputVal});
    }

    const skillDivs = skillsData.map((item) => {
        return (
            <div className="existing-object-tab" key={item.id} >
                <p>{item.skill}</p>
                <DeleteOutlineIcon className="delete-icon" onClick={(event) => {
                    handleDeleteSkill(item)}}/>
            </div>
        )
    })

    return (
        <div className="item-container skills">
            <div className="header-container">
            <h2>Skills</h2>
                <ExpandMoreIcon fontSize="large" onClick={() => handleChangeAccordion(isOpen, 'skills')} className={isOpen ? 'accordion-icon open' : 'accordion-icon'}/>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <form className='skill-form'>
                    <FormGroup className="input" name="skill" type="text"
                        value={formState.skill} id="skill" placeholder="" label="Skill"
                        handleOnChange={handleOnChange}
                    />
                    <button className="btn" 
                    onClick={(event) => {
                        handleSaveNewSkill(event, formState)
                        setFormState({skill: ''})
                        }}>Save</button>
                </form>
                <div className="state-items">
                    {skillDivs}
                </div>
            </div>
        </div>
    )
}

export default Skills;