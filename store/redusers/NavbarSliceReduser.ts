import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavbarState {

  services: { id: number; href: string; text: string }[];
}

const initialState: NavbarState = {

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
    
    setServices: (state, action: PayloadAction<{ id: number; href: string; text: string }[]>) => {
      state.services = action.payload;
    },
  },
});

export const selectServices = (state: { navbar: NavbarState }) => state.navbar.services;

export default navbarSlice.reducer;
