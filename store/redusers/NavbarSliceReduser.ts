import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavbarState {
  hasShadow: boolean;
}

const initialState: NavbarState = {
  hasShadow: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setHasShadow: (state, action: PayloadAction<boolean>) => {
      state.hasShadow = action.payload;
    },
  },
});

export const { setHasShadow } = navbarSlice.actions;
export const selectHasShadow = (state: { navbar: NavbarState }) => state.navbar.hasShadow;

export default navbarSlice.reducer;
