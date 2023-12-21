
import ICheckboxSelect from '@/interface/ICheckboxSelect';




const CheckboxSelect: React.FC<ICheckboxSelect> = ({ id, checked, onChange }) => {


  return (
<div className='relative'>
    <input id={id.value} type="checkbox"  className="opacity-0 w-full absolute h-full" onChange={onChange}/>

      <input className='m-4 h-full ' type="checkbox" read-only checked={checked}  />  
      <label className='text-white' htmlFor={id.value}>
        <span className='mr-4'>{id.value}</span>
        <span> {id.count}</span>
      </label>
    
      </div>

  );
};

export default CheckboxSelect;

