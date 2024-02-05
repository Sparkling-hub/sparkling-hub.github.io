


import rolesData from '@/data/data-contact/data-contact';


const Select: React.FC<any> = ({ name, onChange,value }) => {


	


	
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


