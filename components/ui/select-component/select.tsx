

import { useDispatch, useSelector } from 'react-redux';
import { selectNavigation } from '@/store/redusers/navigationReducer';
import { setActiveOption, selectForm } from '@/store/redusers/FormSliceReduser';
import rolesData from '@/data/data-contact/data-contact';
import { ChangeEvent, useEffect } from 'react';
import { Value } from 'sass';

interface SelectProps {
	name: string;	
}

const Select: React.FC<any> = ({ name, onChange,value }) => {

	const dispatch = useDispatch();
	
	const { lastPageSlug } = useSelector(selectNavigation);


	useEffect(() => {
		
		dispatch(setActiveOption(lastPageSlug));		

	}, []);


	
	return (
		<select
			name={name}
			className={`border border-green-500 rounded-3xl p-4 w-full my-5`}
			value={value || ''}
			onChange={onChange}
		>
			
			{Object.entries(rolesData).map(([key, label]) => {

				return (
					<option key={key} value={key}>
						{label}
					</option>
				)

			})}
		</select>
	);
};

export default Select;


