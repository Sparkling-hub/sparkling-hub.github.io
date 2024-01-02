import React from 'react';
import ITeamRoles from '@/interface/ITeamRoles';
import Row from '../team-roles-row';
import data from '@/data/data-team-roles';
import rolesData from '@/data/data-list-roles'
import ButtonCircle from '../ui/circle-button';
import Link from 'next/link';
const Benefit: React.FC = () => {



    return (
        <div className='w-full flex'> <div className='w-1/2 mx-8'>
            {data.map((item) => (
                <Row key={item.index} {...item} />
            ))}
        </div>
            <div className='w-1/2 mx-8'>
                <div className='border-slate-100 border-2 rounded-3xl'>
                    <h3 className='flex justify-center font-normal text-xl'>Roles {'\u00A0'}
                        <strong className='font-semibold text-teal-500'>
                            We Cover
                        </strong>:
                    </h3>
                    <ul>
                        {rolesData.map((role, index) => (
                            <li className="flex flex-row m-3" key={index}><Link href={''}><ButtonCircle isDropdownOpen={false} /></Link>{role}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Benefit;
