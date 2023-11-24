const Input = ({ name, type, placeholder, value, onChange, id }) => {

    return (
        <input name={name} type={type} id = {id} placeholder={placeholder} value={value} onChange={onChange} className="border border-green-500 rounded-3xl p-4 w-full m-5" />
    )
}
export default Input