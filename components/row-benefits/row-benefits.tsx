import React from 'react';
import type IBenefitsType from '../../interface/IBenefits';
import Button from '../button';
import benefits from '../../data/data-benefits';  // Используйте дефолтный импорт, если он предоставляется
import type { FC } from 'react';  // Импортируем тип FC из React
const Benefits: FC = () => {
  { console.log(benefits.benefits) }
  return (

    <div className='flex items-center justify-center relative flex-col'>
      {Object.values(benefits.benefits).map((value: IBenefitsType, index: number) => (

        <div key={index} className={`${(index + 1) % 2 ? 'items-start' : 'items-end'} flex flex-col w-full `}>

<div className={`${(index + 1) % 2 ? 'flex-row' : 'flex-row-reverse'} flex w-full `}>
          <div className={`${(index + 1) % 2 ? 'flex-row-reverse text-right' : 'flex-row'} flex benefist items-center`}>
         

            <div className='justify-center flex w-64 h-64 '>{value.image}</div>
            <div key={index} className='flex flex-col justify-center mx-50 w-2/4'>
                
             {value.header}
                <div className='min-w-full max-w-full ' >{value.content} </div>    </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

};

export default Benefits;

