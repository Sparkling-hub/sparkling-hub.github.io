import React from 'react';

import Row from '../team-roles-row';
import data from '@/data/data-team-roles';
import rolesData from '@/data/data-list-roles'
import ButtonCircle from '../ui/circle-button';
import Link from 'next/link';
import Button from '../button';
const Benefit: React.FC = () => {



    return (
        <div className='w-full flex mb-16'>
            <div className='w-1/2  mx-4'>
                {data.map((item) => (
                    <Row key={item.index} {...item} />
                ))}
            </div>
            <div className='mx-4 w-1/2'>
                <div className='border-gray-100 border-[1px] rounded-3xl  m-5 p-5 h-8/12'>
                    <h3 className='flex justify-center text-xl mb-5'>
                        Roles<strong className='font-medium text-teal-500'>
                            {'\u00A0'}We Cover
                        </strong>:
                    </h3>
                    <ul>
                        {rolesData.map((role) => (
                            <li className="flex flex-row m-3" key={role}><Link href={''}><ButtonCircle isDropdownOpen={false} /></Link>{role}</li>
                        ))}
                    </ul>
                </div>


                <div className='border-gray-50 h-1/3 bg-gray-100 border-[1px] rounded-3xl mx-5 mb-2  mt-10 h-[35%] flex items-center justify-center p-2' >
                    <Button href='/contact#rec_form' text={"Build your team"} />
                </div>
            </div>
        </div>
    );
};

export default Benefit;
