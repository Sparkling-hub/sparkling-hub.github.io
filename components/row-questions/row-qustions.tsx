import React from 'react';
import type IQustians from '../../interface/IQustion';

import DisabledSelect from '../ui/select-questions/select';
import questions from '../../data/data-questions';  // Используйте дефолтный импорт, если он предоставляется
import type { FC } from 'react';  // Импортируем тип FC из React
const Questions: FC = () => {
  return (
    <div className="p-4 ">
      
      {Object.values(questions.question).map((value:IQustians, index) => (

   
<div className="relative m-5 " key={index}>
      <DisabledSelect data={value}/>

 
      </div>
    ))};
       </div>
  )

};

export default Questions;

