

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
// import IMaps from '@/interface/IMaps';
// import IOfficeCards from '@/interface/IOfficeCards';

interface FormsState {

    //перечисление state
   

}

const initialState: FormsState = {
    // начальное состояние state
};

const formsSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
       //методы
    },
});

export const {

  // перечисление методов

} = formsSlice.actions;

export const selectForms = (state: RootState) => state.forms;

export default formsSlice.reducer;
