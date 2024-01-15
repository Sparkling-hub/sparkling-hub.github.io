import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; 
import ICheckboxItem from '@/interface/IChekboxItem';
import IJob from '@/interface/IJob';

 


interface CareersState {
  filterPhraze: string;
  uniqueIds: string[][]; 
  
  activeIds: string[][];
  [key: string]: any;
}
const initialState: CareersState = {
  filterPhraze: '',
  uniqueIds: [],
  activeIds: [],
};
const careersSlice = createSlice({
  name: 'careers',
  initialState,
  reducers: {
    setFilterPhraze: (state, action: PayloadAction<string>) => {
      state.filterPhraze = action.payload;
    },
    setUniqueIds: (state, action: PayloadAction<{ value:any }>) => {
      const { value } = action.payload;
      state.uniqueIds = value;
      console.log(state);
    },
    setActiveIds: (state, action: PayloadAction<{ value:any }>) => {
      const { value } = action.payload;
      state.activeIds = value;
      console.log(state);
    },
    setCheckboxData: (state, action: PayloadAction<{ name: string; value: string[] }>) => {
      const { name, value } = action.payload;
      console.log(name);
      console.log(value);
      debugger
      Object.keys(state.activeIds).forEach((key: any) => {
        console.log(key);
 
        console.log(state.activeIds[key] );
        if (key == name) state.activeIds[key] = value});
      
      
    },
  
    updateActiveParams: (state, action: PayloadAction<{ name: string; value: any }>) => {
      const { name, value } = action.payload;

    
      },
    deleteActiveItem: (state, action: PayloadAction<{ name: string; idToDelete: string }>) => {
      const { name, idToDelete } = action.payload;
      let newValue: string[] = [];
      
    },
   
  },
  
});

export const {
  setCheckboxData,
  setFilterPhraze,
  setUniqueIds,
  setActiveIds,
  updateActiveParams,
  deleteActiveItem,
} = careersSlice.actions;

export const selectCareers = (state: RootState) => state.careers;

export default careersSlice.reducer;
