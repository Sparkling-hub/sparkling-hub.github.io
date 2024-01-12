// SelectSliceReduser.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Dropdown {
  question: JSX.Element;
  isOpen: boolean;
}

interface SelectState {
  dropdowns: Dropdown[];
}

const initialState: SelectState = {
  dropdowns: [],
};

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    toggleDropdown: (state, action: PayloadAction<number>) => {
      const questionIndex = action.payload;

      // Check if the questionIndex is within the valid range
      if (questionIndex >= 0 && questionIndex < state.dropdowns.length) {
        state.dropdowns[questionIndex].isOpen = !state.dropdowns[questionIndex].isOpen;
      }
    },
  },
});

export const { toggleDropdown } = selectSlice.actions;

export default selectSlice.reducer;
