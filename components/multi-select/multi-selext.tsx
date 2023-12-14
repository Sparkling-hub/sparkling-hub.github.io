import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const CustomSelect = ({ name, options, value, onChange, isMulti }:any) => {
  const formattedOptions = [{ value: '', label: 'Select' }, ...Object.entries(options).map(([value, label]) => ({ value, label }))];

  const handleChange = (selectedOption:any) => {
    onChange(selectedOption ? (isMulti ? selectedOption.map((option: { value: any; }) => option.value) : selectedOption.value) : null);
  };

  return (
    <Select
      name={name}
      options={formattedOptions}
      value={formattedOptions.find((option) => (isMulti ? value.includes(option.value) : value === option.value))}
      isMulti={isMulti}
      placeholder="Select"
      onChange={handleChange}
    />
  );
};

const MultipleSelect = () => {
  const [selectedValues, setSelectedValues] = useState(['apples']);
  const options = {
    apples: 'green',
    bananas: 'yellow',
    orange: 'orange',
  };

  const handleChange = (newValues:any) => {
    setSelectedValues(newValues);
    console.log(newValues);
    // Handle selected values as needed
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <CustomSelect name="test" options={options} value={selectedValues} onChange={handleChange} isMulti />
        </div>
      </div>
    </div>
  );
};

export default MultipleSelect;