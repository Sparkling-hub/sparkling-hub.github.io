import React, { ChangeEvent } from 'react';

interface SelectProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  data: any[]; // Замените any на конкретный тип вашего массива данных
}

const Select: React.FC<SelectProps> = ({ name, value, onChange, placeholder, data }) => {
  return (
    <select
      name={name}
   
      className="border border-green-500 rounded-3xl p-4 w-full m-5"
      value={placeholder}
      onChange={onChange}
    >
      <option value= {placeholder}>
        {placeholder}
      </option>
      {/* {data.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))} */}
    </select>
  );
};

export default Select;