

import { useSelector } from 'react-redux';
import { selectNavigation } from '@/store/redusers/navigationReducer';
import rolesData from '@/data/data-contact/data-contact';
interface SelectProps {
  name: string;
  value: string | undefined;
  onChange: any;
  placeholder: string;
  data?: any;
}

const Select: React.FC<SelectProps> = ({ name, value, onChange, placeholder, data }) => {

  const { lastPageSlug } = useSelector(selectNavigation);

  return (
    <select
      name={name}
      className={`border border-green-500 rounded-3xl p-4 w-full my-5 ${value === '' ? 'text-gray-400 ' : ''}`}
      value={lastPageSlug || ''}
      onChange={onChange}
    >
      <option value={placeholder} disabled>
        {placeholder}
      </option>
      {Object.entries(rolesData).map(([ key, label ]) =>{
       
        return  (
          <option key={ key } value={ key }>
           {label}
         </option>
       )

      })}
    </select>
  );
};

export default Select;
