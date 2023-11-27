import {useState} from 'react';
import FormGroup from './FormGroup';
import './../styles/FormGroup.css';

function DetailsForm({formDetails, handleSaveDetails}) {
    const [formState, setFormState] = useState(formDetails);
    // Clear form button
    function handleClearForm(event) {
        console.log('setting state');
        event.preventDefault();
        setFormState({fullName: "", email: "", phone: "", address: ""});
    }

    function handleOnChange(event) {
        const inputName = event.target.name;
        const inputVal = event.target.value;
        setFormState(() => ({...formState, [inputName]: inputVal}));
    }

    return (
        <form>
            <FormGroup className="input" name="fullName" type="text"
            value={formState.fullName} id="fullName" placeholder="e.g Brodie Hunt"  label="Full Name"
            handleOnChange={handleOnChange}
            />
            <FormGroup className="input" name="email" type="email"
            value={formState.email} id="email" placeholder="e.g brodie@gmail.com" label="Email"
            handleOnChange={handleOnChange}
            />
            <FormGroup className="input" name="phone" type="tel"
            value={formState.phone} id="phone" placeholder="e.g 04000000000" label="Mobile"
            handleOnChange={handleOnChange}
            />
            <FormGroup className="input" name="address" type="text"
            value={formState.address} id="address" placeholder="City, Country" label="Address"
            handleOnChange={handleOnChange}
            />
            <div className='form-btns-container'>
                <button className="btn" onClick={handleClearForm}>Clear</button>
                <button className="btn" onClick={(event) => handleSaveDetails(event, formState)}>Save</button>
            </div>
            
        </form>
    )
}

export default DetailsForm;