
import ICheckboxSelect from '@/interface/ICheckboxSelect';




const CheckboxSelect: React.FC<ICheckboxSelect> = ({  id, checked, onChange }) => {


  return (
    <div>
        <input className='m-4' id = {id} type="checkbox"  onChange = {onChange} checked= {checked}/>
		    <label className='text-white' htmlFor="html">{id}</label>
    </div>
  );
};

export default CheckboxSelect;
