import FormGroup from './FormGroup';
import './../styles/FormGroup.css';

function ExperienceForm() {
    
    return (
        <form>
            <FormGroup className="input" name="companyName" type="text"
            value="" id="company-name" placeholder="" label="Company Name"
            />
            <FormGroup className="input" name="positionTitle" type="text"
            value="" id="position-title" placeholder="" label="Position Title"
            />
            <div class="col">
                <FormGroup className="input" name="start" type="date"
                value="" id="date-start-exp" placeholder="" label="Start Date"
                />
                <FormGroup className="input" name="end" type="date"
                value="" id="date-end-exp" placeholder="" label="Start Date"
                />
            </div>
            <FormGroup className="input" name="location" type="text"
            value="" id="location" placeholder="" label="Location"
            />
            <FormGroup className="input" name="description" type="text"
            value="" id="description" placeholder="" label="Description"
            />
            <div className='form-btns-container'>
                <button className="btn">Clear</button>
                <button className="btn">Save</button>
            </div>
        </form>
    )
};

export default ExperienceForm;