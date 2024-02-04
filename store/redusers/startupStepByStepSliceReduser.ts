
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface StartupStepByStepState {
  highlightedIndices: boolean[];
  animation: boolean,
}

const initialState: StartupStepByStepState = {
  highlightedIndices: [false],
  animation: false,
};

const startupStepByStepSlice = createSlice({
  name: 'startupStepByStep',
  initialState,
  reducers: {
    setHighlightedIndices: (state, action: PayloadAction<boolean[]>) => {
      state.highlightedIndices = action.payload;
    },
    setAnimation: (state, action) => {
      state.animation = action.payload;
    },
  },
});

export const { setHighlightedIndices,setAnimation } = startupStepByStepSlice.actions;

export const selectStartupStepByStep = (state: RootState) => state.startupStepByStep;

export default startupStepByStepSlice.reducer;
