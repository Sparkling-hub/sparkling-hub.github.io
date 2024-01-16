import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import ICheckboxItem from '@/interface/IChekboxItem';
import IJob from '@/interface/IJob';
import dataJobs from '@/data/data-jobs';




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
    filterJobs: (state) => { var data:any = [];  
      const filteredJobsList = Object.keys(state.activeIds).map((key: any) => {
       
      state.dataJobs.forEach((job) => {
   
          console.log(1);

          if (!state.activeIds[key].length) {
            console.log(1); data.push(JSON.parse(JSON.stringify(job)));
          }
          else {
   
            if (state.activeIds[key].includes(job[key])) data.push(job[key]) ;
          }
   
       
        }); 
  
      })
    
      console.log(data);
      state.filteredJobsList = filteredJobsList;
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
