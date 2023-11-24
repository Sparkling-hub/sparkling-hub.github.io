const TextArea = ({ name, type,placeholder, value, onChange}) => {

    return(<textarea name={name} type={type} placeholder={placeholder} value={value} className="form-control"  onChange={onChange}/>)
    }
    export default TextArea