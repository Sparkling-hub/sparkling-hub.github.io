

interface IMultiSelectActiveItem {

	id: string
	name: string;
	activeLocations: string[];

	deleteItem: (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[]) => void

}

export default IMultiSelectActiveItem