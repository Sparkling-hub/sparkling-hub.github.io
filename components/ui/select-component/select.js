const Select = ({ name, value, onChange, placeholder, data }) => {
    return (
        <select name= {name} id="Position" required="" className="border border-green-500 rounded-3xl p-4 w-full m-5"  value={value} onChange={onChange}>
            <option value="" selected="" disabled="">{placeholder}</option>
      

        </select>)
}
export default Select