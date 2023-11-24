
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
    return(<input name={name} type={type} placeholder={placeholder} value="SUBMIT"  disabled={!disabled} className= {`button ${buttonClass}`} onClick={handleSubmit} />)
    }
    export default InputSumbit