
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface NavigationState {
  lastPageSlug: string;
}

const initialState: NavigationState = {
    lastPageSlug: "",
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setLastPageSlug: (state, action: PayloadAction<string>) => {
      state.lastPageSlug = action.payload;
    },
  },
});

export const { setLastPageSlug } = navigationSlice.actions;

export const selectNavigation = (state: RootState) => state.navigation;

export default navigationSlice.reducer;