import {useState} from 'react';
import FormGroup from './FormGroup';
import './../styles/FormGroup.css';

function ExperienceForm({formDetails, saveCallback, handleToggleForm}) {
    
    const [formState, setFormState] = useState(formDetails);

    // Clears the form - if its an existing object, make sure to keep its id in the state object
    function handleClearForm(event) {
        event.preventDefault();
        if (formState.id) {
            return setFormState({companyName: '', positionTitle: '', start: '', end: '', location: '', description: '', id: formState.id});
        }
        setFormState({companyName: '', positionTitle: '', start: '', end: '', location: '', description: ''});
    }

    function handleOnChange(event) {
        const inputName = event.target.name;
        const inputVal = event.target.value;
        setFormState(() => ({...formState, [inputName]: inputVal}));
    }

    return (
        <form>
            <FormGroup className="input" name="companyName" type="text"
            value={formState.companyName} id="company-name" placeholder="" label="Company Name"
            handleOnChange={handleOnChange}
            />
            <FormGroup className="input" name="positionTitle" type="text"
            value={formState.positionTitle} id="position-title" placeholder="" label="Position Title"
            handleOnChange={handleOnChange}
            />
            <div className="col">
                <FormGroup className="input" name="start" type="date"
                value={formState.start} id="date-start-exp" placeholder="" label="Start Date"
                handleOnChange={handleOnChange}
                />
                <FormGroup className="input" name="end" type="date"
                value={formState.end} id="date-end-exp" placeholder="" label="End Date"
                handleOnChange={handleOnChange}
                />
            </div>
            <FormGroup className="input" name="location" type="text"
            value={formState.location} id="location" placeholder="" label="Location"
            handleOnChange={handleOnChange}
            />
            <FormGroup className="input" textarea={true} name="description" type="text"
            value={formState.description} id="description" placeholder="" label="Description"
            handleOnChange={handleOnChange}
            />
            <div className='form-btns-container'>
                <button className="btn" onClick={handleToggleForm}>Close</button>
                <button className="btn" onClick={handleClearForm}>Clear</button>
                <button className="btn" onClick={(event) => {
                    handleToggleForm();
                    saveCallback(event, formState)}}>Save</button>
            </div>
        </form>
    )
};

export default ExperienceForm;