import React from 'react';
import type IQustians from '../../interface/IQustion';
import Button from '../button';
import DisabledSelect from '../ui/select-questions/select';
import questions from '../../data/data-questions';  // Используйте дефолтный импорт, если он предоставляется
import type { FC } from 'react';  // Импортируем тип FC из React
const Questions: FC = () => {
  { console.log(questions) }
  return (
    <div className="p-4">
      
      {Object.values(questions.question).map((value, index) => (
      <DisabledSelect data={value} key={index}/>
 
    
    ))};
       </div>
  )

};

export default Questions;

