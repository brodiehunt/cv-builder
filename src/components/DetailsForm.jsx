import FormGroup from './FormGroup';
import './../styles/FormGroup.css';

function DetailsForm() {

    return (
        <form>
            <FormGroup className="input" name="fullName" type="text"
            value="" id="fullName" placeholder="e.g Brodie Hunt" label="Full Name"
            />
            <FormGroup className="input" name="email" type="email"
            value="" id="email" placeholder="e.g brodie@gmail.com" label="Email"
            />
            <FormGroup className="input" name="phone" type="tel"
            value="" id="phone" placeholder="e.g 04000000000" label="Mobile"
            />
            <FormGroup className="input" name="address" type="text"
            value="" id="address" placeholder="City, Country" label="Address"
            />
            <div className='form-btns-container'>
                <button className="btn">Clear</button>
                <button className="btn">Save</button>
            </div>
            
        </form>
    )
}

export default DetailsForm;