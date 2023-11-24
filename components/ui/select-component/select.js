const Select = ({ name, value, onChange, placeholder, data }) => {
    return (
        <select name= {name} id="Position" required="" style={{marginBottom: "3%"}} value={value} onChange={onChange}>
            <option value="" selected="" disabled="">{placeholder}</option>
      

        </select>)
}
export default Select