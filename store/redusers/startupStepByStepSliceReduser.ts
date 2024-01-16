
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface StartupStepByStepState {
  highlightedIndices: number[];
}

const initialState: StartupStepByStepState = {
  highlightedIndices: [],
};

const startupStepByStepSlice = createSlice({
  name: 'startupStepByStep',
  initialState,
  reducers: {
    setHighlightedIndices: (state, action: PayloadAction<number[]>) => {
      state.highlightedIndices = action.payload;
    },
  },
});

export const { setHighlightedIndices } = startupStepByStepSlice.actions;

export const selectStartupStepByStep = (state: RootState) => state.startupStepByStep;

export default startupStepByStepSlice.reducer;
