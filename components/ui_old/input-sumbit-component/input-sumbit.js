
// import axios from 'axios';
const InputSumbit = ({ name, type,placeholder, value, disabled, formData, http}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    
    
      //   try {
        
     
      //     const response = await axios.post(http, { formData });
        
      //     console.log('Успешно отправлено:', response.data);
    
    
      //   } catch (error) {
      //     console.error('Ошибка при отправке:', error);

      //   }
      };
    const buttonClass = disabled ? "active" : "disabled";
    return(<input name={name} type={type} placeholder={placeholder} value="Submit"  disabled={!disabled}  className="no-underline text-white py-3 px-8 bg-gradient-to-r from-teal-900 to-teal-300 rounded-3xl p-2 w-40" onClick={handleSubmit} />)
    }
    export default InputSumbit