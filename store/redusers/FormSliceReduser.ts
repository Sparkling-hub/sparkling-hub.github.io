import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Make sure to import your store configuration

interface FormData {
  name: string;
  select: string;
  email: string;
  company: string;
  message: string;
}

interface FormState {
  formData: FormData;
  check: boolean;
}
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([a-z\d])/.exec(email);
  return emailRegex !== null;
};
const initialState: FormState = {
  formData: {
    name: "",
    select: "",
    email: "",
    company: "",
    message: "",
  },
  check: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
    },
    setCheck: (state, action: PayloadAction<boolean>) => {
      state.check = action.payload;
    },
  },
});
export const selectIsValidEmail = (email: string): boolean => {
  return isValidEmail(email);
};
export const { setFormData, setCheck } = formSlice.actions;

export const selectForm = (state: RootState) => state.form;

export default formSlice.reducer;