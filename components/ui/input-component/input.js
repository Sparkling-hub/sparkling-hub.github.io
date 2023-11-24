const Input = ({ name, type, placeholder, value, onChange, id }) => {

    return (
        <input name={name} type={type} id = {id} placeholder={placeholder} value={value} onChange={onChange} className="m-2" />
    )
}
export default Input