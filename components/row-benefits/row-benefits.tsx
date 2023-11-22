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

        <div key={index} className={`${(index + 1) % 2 ? 'items-start' : 'items-end'} flex flex-col`}>

          <div className={`${(index + 1) % 2 ? 'flex-row-reverse' : 'flex-row'} flex benefist`}>
         

            <div className={`${(index + 1) % 2 ? 'flex-row-reverse text-right' : 'flex-row'} flex`}>
            <div className=''>{value.image}</div>
            <div key={index} className='flex flex-col'>
                
             {value.header}
                <div >{value.content} </div>    </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

};

export default Benefits;

