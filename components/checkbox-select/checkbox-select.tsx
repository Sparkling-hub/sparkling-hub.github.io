
import ICheckboxSelect from '@/interface/ICheckboxSelect';




const CheckboxSelect: React.FC<ICheckboxSelect> = ({  id, checked, onChange }) => {
  
  return (
    <div>
        <input className='m-4' id = {id.value} type="checkbox"  onChange = {onChange} checked= {checked}/>
		    <label className='text-white' htmlFor="html"><span className='mr-4'>{id.value} </span> (<span> {id.count}</span> ) </label>
    </div>
  );
};

export default CheckboxSelect;
