import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DropdownState {
  isOpen: boolean;
}

const initialState: DropdownState = {
  isOpen: false,
};

const dropdownSlice = createSlice({
  name: 'dropdownNavbar',
  initialState,
  reducers: {
    openDropdown: (state) => {
      state.isOpen = true;
    },
    closeDropdown: (state) => {
      state.isOpen = false;
    },
    toggleDropdown: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openDropdown, closeDropdown, toggleDropdown } = dropdownSlice.actions;
export const selectDropdownState = (state: { dropdownNavbar: DropdownState }) => state.dropdownNavbar;

export default dropdownSlice.reducer;
