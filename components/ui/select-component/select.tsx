

import { useDispatch, useSelector } from 'react-redux';
import { selectNavigation } from '@/store/redusers/navigationReducer';
import { setActiveOption, selectForm } from '@/store/redusers/FormSliceReduser';
import rolesData from '@/data/data-contact/data-contact';
import { ChangeEvent, useEffect } from 'react';

interface SelectProps {
	name: string;	
}

const Select: React.FC<SelectProps> = ({ name }) => {

	const dispatch = useDispatch();
	
	const { lastPageSlug } = useSelector(selectNavigation);
	const { activeOption } = useSelector(selectForm);

	useEffect(() => {
		
		dispatch(setActiveOption(lastPageSlug));		

	}, []);

	const handleInputChange = (e: ChangeEvent<HTMLSelectElement>) => {

		const { value } = e.target;		
		dispatch(setActiveOption(value));			
	
	};
	
	return (
		<select
			name={name}
			className={`border border-green-500 rounded-3xl p-4 w-full my-5`}
			value={activeOption || ''}
			onChange={handleInputChange}
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


