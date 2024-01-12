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
    setActiveWorkmode: (state, action: PayloadAction<string[]>) => {
      state.activeWorkmode = action.payload;
    },
  },
});

export const {
  setFilterPhraze,
  setUniqueIds,
  setActiveLocations,
  setUniqueExp,
  setActivePositions,
  setUniqueWorkmode,
  setActiveWorkmode,
} = careersSlice.actions;

export const selectCareers = (state: RootState) => state.careers;

export default careersSlice.reducer;
