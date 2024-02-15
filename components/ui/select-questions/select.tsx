
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDropdown, toggleDropdown } from '@/store/redusers/SelectSliceReduser';
import ButtonCircle from '../circle-button';
import IQustion from '../../../interface/IQustion';
import { RootState } from '@/store/store';

const DisabledSelect: React.FC<{ data: IQustion }> = ({ data }) => {
  const [visibleText, setVisibleText] = useState('');
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


  useEffect(() => {
    setVisibleText('')
 
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < (data.answer).length) {

        setVisibleText((prevText) => prevText + data.answer[index - 1]);

        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [data.answer, isOpen]);
  
  return (
    <>
      <button
        className={`w-full p-3 border rounded cursor-pointer text-lg border-none ${isOpen ? 'bg-emerald-900 text-white rounded-t-xl lg:rounded-t-2xl' : 'lg:rounded-2xl rounded-xl bg-slate-100'}`}
        onClick={handleDropdownToggle}
      >
        <span className="block relative flex justify-between w-full text-start">{data.question}<ButtonCircle isDropdownOpen={isOpen} /> </span>
      </button>

      <div className={`${isOpen ? 'h-auto p-4 border-[1px] border-gray-300' : 'h-0'}  overflow-hidden  top-full left-0 block bg-white   transition-height rounded-b-2xl w-full duration-500`}>
        <p>{visibleText}</p>
      </div>

    </>
  );
};

export default DisabledSelect;
