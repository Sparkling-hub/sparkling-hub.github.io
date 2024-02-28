import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import IJob from '@/interface/IJob';
interface CareersState {
	
	filterPhraze: string;
	uniqueIds: string[][];
	activeIds: string[][];
	[key: string]: any;
	dataJobs: any[];
	filteredJobsList: any[];
}
const initialState: CareersState = {
	filterPhraze: '',
	uniqueIds: [],
	activeIds: [],
	dataJobs: [],
	filteredJobsList: [],
};
const careersSlice = createSlice({
	name: 'careers',
	initialState,
	reducers: {
		setFilterPhraze: (state, action: PayloadAction<string>) => {
			state.filterPhraze = action.payload;

		},
		setJobsAction: (state, action: PayloadAction<{ value: any }>) => {
			const { value } = action.payload;
			state.dataJobs = value;
		},
		filterJobs: (state) => {

			let data: IJob[] = [...state.dataJobs];

			Object.keys(state.activeIds).forEach((key: any) => {

				data = data.filter((job: any) => {
					const matchesText = job.namePosition.toLowerCase().includes(state.filterPhraze.toLowerCase());

					if (!state.activeIds[key].length) {
						return matchesText;
					} else {
						return state.activeIds[key].includes(job[key]) && matchesText;
					}
				});
			});

			state.filteredJobsList = data;

		},
		setUniqueIds: (state, action: PayloadAction<{ value: any }>) => {
			const { value } = action.payload;
			state.uniqueIds = value;

		},
		setActiveIds: (state, action: PayloadAction<{ value: any }>) => {
			const { value } = action.payload;
			state.activeIds = value;

		},
		setCheckboxData: (state, action: PayloadAction<{ name: string; value: string[] }>) => {
			const { name, value } = action.payload;
			Object.keys(state.activeIds).forEach((key: any) => { if (key == name) state.activeIds[key] = value });

		},
		deleteActiveItem: (state, action: PayloadAction<{ id: string; ids: string[]; name: string }>) => {
			const { id, ids, name } = action.payload;
			Object.keys(state.activeIds).forEach((key: any) => {
				if (key == name) state.activeIds[key] = ids.filter((item) => item !== id);
			});
		}
	},
});

export const {
	setCheckboxData,
	setFilterPhraze,
	setUniqueIds,
	setActiveIds,
	filterJobs,
	setJobsAction,
	deleteActiveItem,
} = careersSlice.actions;

export const selectCareers = (state: RootState) => state.careers;

export default careersSlice.reducer;
