
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface StartupStepByStepState {
  highlightedIndices: boolean[];

}

const initialState: StartupStepByStepState = {
  highlightedIndices: [false],

};

const startupStepByStepSlice = createSlice({
  name: 'startupStepByStep',
  initialState,
  reducers: {
    setHighlightedIndices: (state, action: PayloadAction<boolean[]>) => {
      state.highlightedIndices = action.payload;
    },
 
  },
});

export const { setHighlightedIndices } = startupStepByStepSlice.actions;

export const selectStartupStepByStep = (state: RootState) => state.startupStepByStep;

export default startupStepByStepSlice.reducer;
