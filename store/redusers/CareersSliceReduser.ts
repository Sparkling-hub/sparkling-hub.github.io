// careersSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; 
import ICheckboxItem from '@/interface/IChekboxItem';

interface CareersState {
  filterPhraze: string;
  uniqueIds: ICheckboxItem[];
  activeLocations: string[];
  uniqueExp: ICheckboxItem[];
  activePositions: string[];
  uniqueWorkmode: ICheckboxItem[];
  activeWorkmode: string[];
}

const initialState: CareersState = {
  filterPhraze: '',
  uniqueIds: [],
  activeLocations: [],
  uniqueExp: [],
  activePositions: [],
  uniqueWorkmode: [],
  activeWorkmode: [],
};

const careersSlice = createSlice({
  name: 'careers',
  initialState,
  reducers: {
    setFilterPhraze: (state, action: PayloadAction<string>) => {
      state.filterPhraze = action.payload;
    },
    setUniqueIds: (state, action: PayloadAction<ICheckboxItem[]>) => {
      state.uniqueIds = action.payload;
    },
    setActiveLocations: (state, action: PayloadAction<string[]>) => {
      state.activeLocations = action.payload;
    },
    setUniqueExp: (state, action: PayloadAction<ICheckboxItem[]>) => {
      state.uniqueExp = action.payload;
    },
    setActivePositions: (state, action: PayloadAction<string[]>) => {
      state.activePositions = action.payload;
    },
    setUniqueWorkmode: (state, action: PayloadAction<ICheckboxItem[]>) => {
      state.uniqueWorkmode = action.payload;
    },
    setActiveWorkmode: (state, action: PayloadAction<string>) => {
      state.activeWorkmode.push(action.payload);
    },
    setCheckboxData: (state, action: PayloadAction<{ name: string; value: string }>) => {
      const { name, value } = action.payload;
    
      switch (name) {
        case 'location':
          state.activeLocations.push(value);
          break;
        case 'exp':
          state.activePositions.push(value);
          break;
        case 'mode':
          state.activeWorkmode.push(value);
          break;
        default:
          break;
      }},
  
    updateActiveParams: (state, action: PayloadAction<{ name: string; value: any }>) => {
      const { name, value } = action.payload;

      switch (name) {
        case 'location':
          state.activeLocations.includes(value)
            ? (state.activeLocations = state.activeLocations.filter((v) => v !== value))
            : state.activeLocations.push(value);
          break;
        case 'exp':
          state.activePositions.includes(value)
            ? (state.activePositions = state.activePositions.filter((v) => v !== value))
            : state.activePositions.push(value);
          break;
        case 'mode':
          state.activeWorkmode.includes(value)
            ? (state.activeWorkmode = state.activeWorkmode.filter((v) => v !== value))
            : state.activeWorkmode.push(value);
          break;
        default:
          break;
      }},
    deleteActiveItem: (state, action: PayloadAction<{ name: string; idToDelete: string }>) => {
      const { name, idToDelete } = action.payload;
      let newValue: string[] = [];

      switch (name) {
        case 'location':
          newValue = state.activeLocations.filter((value) => value !== idToDelete);
          state.activeLocations = newValue;
          break;
        case 'exp':
          newValue = state.activePositions.filter((value) => value !== idToDelete);
          state.activePositions = newValue;
          break;
        case 'mode':
          newValue = state.activeWorkmode.filter((value) => value !== idToDelete);
          state.activeWorkmode = newValue;
          break;
        default:
          break;
      }
    },
  },
  
});

export const {
  setCheckboxData,
  setFilterPhraze,
  setUniqueIds,
  setActiveLocations,
  setUniqueExp,
  setActivePositions,
  setUniqueWorkmode,
  setActiveWorkmode,
  updateActiveParams,
  deleteActiveItem,
} = careersSlice.actions;

export const selectCareers = (state: RootState) => state.careers;

export default careersSlice.reducer;
