import FormGroup from './FormGroup';
import './../styles/FormGroup.css'

function EducationForm() {

    return (
        <form>
            <FormGroup className="input" name="school" type="text"
            value="" id="school" placeholder="" label="School"
            />
            <FormGroup className="input" name="degree" type="text"
            value="" id="degree" placeholder="" label="Degree"
            />
            <div class="col">
                <FormGroup className="input" name="start" type="date"
                value="" id="date-start" placeholder="" label="Start Date"
                />
                <FormGroup className="input" name="end" type="date"
                value="" id="date-end" placeholder="" label="Start Date"
                />
            </div>
            <FormGroup className="input" name="location" type="text"
            value="" id="location" placeholder="" label="Location"
            />
            <div className='form-btns-container'>
                <button className="btn">Clear</button>
                <button className="btn">Save</button>
            </div>
        </form>
    )
}

export default EducationForm;