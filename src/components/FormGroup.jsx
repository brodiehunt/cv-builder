function FormGroup({className, name, type, placeholder, value, id, label, handleOnChange, textarea}) {

    const element = ( textarea ? <textarea className={className} name={name} type={type} 
        placeholder={placeholder} id={id} value={value} onChange={handleOnChange} rows={4} ></textarea>  
    :   <input className={className} name={name} type={type}
        placeholder={placeholder} id={id} value={value} onChange={handleOnChange}></input> )
        

    return (
        <div className="form-group">
            <label htmlFor={id} >{label}</label>
            {element}
        </div>
    )
}

export default FormGroup;