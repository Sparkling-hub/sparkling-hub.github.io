import { compose, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; 
import { stat } from 'fs';

interface FormData {
  name: string;
  select: string;
  email: string;
  company: string;
  message: string;
  [key: string]: string;
}

interface FormState {
  formData: FormData;
  check: boolean | null;

  checkForm:FormData
}
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([a-z\d])/.exec(email);

  return emailRegex !== null;

};

const initialState: FormState = {
  formData: {
    name: '',
    select: '',
    email: '',
    company: '',
    message: '',
  },
  check: null,
  checkForm: {
    name: '',
    select: '',
    email: '',
    company: '',
    message: '',
  },
};


const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
    },
    setCheck: (state, action: PayloadAction<boolean|null>) => {
      
      console.log(action.payload)
        state.check = action.payload;

    },
    
    setCheckFormByKey: (state, action: PayloadAction<{ key: keyof FormData; value: string }>
    ) => {
      const { key, value } = action.payload;
      state.checkForm[key] = value;
    },
  },
});
export const selectIsValidEmail = (email: string): boolean => {
  return isValidEmail(email);
};
export const { setFormData, setCheck,setCheckFormByKey } = formSlice.actions;

export const selectForm = (state: RootState) => state.form;


export default formSlice.reducer;