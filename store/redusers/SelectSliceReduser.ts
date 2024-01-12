
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DropdownState {
  id: number;
  isOpen: boolean;
}

interface DropdownSliceState {
  dropdowns: DropdownState[];
}

const initialState: DropdownSliceState = {
  dropdowns: [],
};

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    toggleDropdown: (state, action: PayloadAction<number>) => {
      const dropdownIndex = state.dropdowns.findIndex(dropdown => dropdown.id === action.payload);
      if (dropdownIndex !== -1) {
        state.dropdowns[dropdownIndex].isOpen = !state.dropdowns[dropdownIndex].isOpen;
      }
    },
    addDropdown: (state, action: PayloadAction<number>) => {
      state.dropdowns.push({ id: action.payload, isOpen: false });
    },
  },
});

export const { toggleDropdown, addDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
