const TextArea = ({ name, type,placeholder, value, onChange}) => {

    return(<textarea name={name} type={type} placeholder={placeholder} value={value} className="border border-teal-900 rounded-3xl p-4 w-full m-5 h-40 resize-none"  onChange={onChange}/>)
    }
    export default TextArea