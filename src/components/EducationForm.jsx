import {useState} from 'react';
import FormGroup from './FormGroup';
import './../styles/FormGroup.css'

function EducationForm({formDetails, saveCallback, handleToggleForm}) {

    const [formState, setFormState] = useState(formDetails);

    function handleClearForm(event) {
        event.preventDefault();
        if (formState.id) {
            return setFormState({school: '', degree: '', start: '', end: '', location: '', id: formState.id});
        }
        setFormState({school: '', degree: '', start: '', end: '', location: ''});
    }

    function handleOnChange(event) {
        const inputName = event.target.name;
        const inputVal = event.target.value;
        setFormState(() => ({...formState, [inputName]: inputVal}));
    }

    return (
        <form>
            <FormGroup className="input" name="school" type="text"
            value={formState.school} id="school" placeholder="" label="School"
            handleOnChange={handleOnChange}
            />
            <FormGroup className="input" name="degree" type="text"
            value={formState.degree} id="degree" placeholder="" label="Degree"
            handleOnChange={handleOnChange}
            />
            <div className="col">
                <FormGroup className="input" name="start" type="date"
                value={formState.start} id="date-start" placeholder="" label="Start Date"
                handleOnChange={handleOnChange}
                />
                <FormGroup className="input" name="end" type="date"
                value={formState.end} id="date-end" placeholder="" label="End Date"
                handleOnChange={handleOnChange}
                />
            </div>
            <FormGroup className="input" name="location" type="text"
            value={formState.location} id="location" placeholder="" label="Location"
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
}

export default EducationForm;