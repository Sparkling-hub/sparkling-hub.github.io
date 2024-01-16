import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NavbarState {
  hasShadow: boolean;
  services: { id: number; href: string; text: string }[];
}

const initialState: NavbarState = {
  hasShadow: false,
  services: [
    { id: 1, href: '/team-augmentation', text: 'Team Augmentation' },
    { id: 2, href: '/software-development', text: 'Software Development' },
    { id: 3, href: '/consulting', text: 'IT Consulting' },
  ],
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setHasShadow: (state, action: PayloadAction<boolean>) => {
      state.hasShadow = action.payload;
    },
    setServices: (state, action: PayloadAction<{ id: number; href: string; text: string }[]>) => {
      state.services = action.payload;
    },
  },
});

export const { setHasShadow, setServices } = navbarSlice.actions;
export const selectHasShadow = (state: { navbar: NavbarState }) => state.navbar.hasShadow;
export const selectServices = (state: { navbar: NavbarState }) => state.navbar.services;

export default navbarSlice.reducer;
