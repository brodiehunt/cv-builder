function FormGroup({className, name, type, placeholder, value, id, label}) {

    const element = ( <input className={className} name={name} type={type}
            placeholder={placeholder} id={id}></input> )
        

    return (
        <div className="form-group">
            <label htmlFor={id} >{label}</label>
            {element}
        </div>
    )
}

export default FormGroup;