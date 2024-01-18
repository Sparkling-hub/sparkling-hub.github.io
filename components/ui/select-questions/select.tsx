
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDropdown, toggleDropdown } from '@/store/redusers/SelectSliceReduser';
import ButtonCircle from '../circle-button';
import IQustion from '../../../interface/IQustion';
import { RootState } from '@/store/store';

const DisabledSelect: React.FC<{ data: IQustion }> = ({ data }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => {
    const dropdown = state.dropdown.dropdowns.find(dropdown => dropdown.id === data.id);
    return dropdown ? dropdown.isOpen : false;
  });

  const handleDropdownToggle = () => {
    dispatch(toggleDropdown(data.id));
  };

useEffect(() => {
  dispatch(addDropdown(data.id));
}, [dispatch, data.id]);

  return (
    <>
      <button
        className={`w-full p-3 border rounded cursor-pointer text-lg border-none ${isOpen ? 'bg-emerald-900 text-white rounded-t-2xl' : 'rounded-2xl bg-slate-100'}`}
        onClick={handleDropdownToggle}
      >
        <span className="block relative flex justify-between w-full">{data.question}<ButtonCircle isDropdownOpen={isOpen} /> </span>
      </button>
      {isOpen && (
        <div className="top-full left-0 bg-white border border-gray-300 rounded-b-2xl p-4 w-full">
          <p>{data.answer}</p>
        </div>
      )}
    </>
  );
};

export default DisabledSelect;
