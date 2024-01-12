

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
// import IMaps from '@/interface/IMaps';
// import IOfficeCards from '@/interface/IOfficeCards';

interface FormsState {

    //state listing
   

}

const initialState: FormsState = {
    // initial state
};

const formsSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
       //methods
    },
});

export const {

  // method list

} = formsSlice.actions;

export const selectForms = (state: RootState) => state.forms;

export default formsSlice.reducer;
