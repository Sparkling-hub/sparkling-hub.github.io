import React from 'react';
import type IQustians from '../../interface/IQustion';
import Button from '../button';
import questions from '../../data/data-questions';  // Используйте дефолтный импорт, если он предоставляется
import type { FC } from 'react';  // Импортируем тип FC из React
const Questions: FC = () => {
  { console.log(questions) }
  return (

    <div className='flex items-center justify-center relative flex-col'>
     <section className="p-4">
   
     <select id="dropdown" name="dropdown" className="w-full p-2 border rounded">
        {/* <option value="option1">{questions.question.questionOne.question}</option> */}
       {questions.question.questionOne.answer}
    
    </select>
</section>
    </div>
  );

};

export default Questions;

