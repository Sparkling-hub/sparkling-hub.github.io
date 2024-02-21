import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; 
interface FileData {
  name: string;
  url: string;
}

interface FormValues {
  name: string;
  select: string;
  email: string;
  company: string;
  message: string;
  phone: string;
  linkId: string;
  file: FileData|null;
  [key: string]: string | File | null | FileData ;
}

interface FormState {
  formData: FormValues;
  check: boolean | null;
  checkForm: FormValues;
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
    phone: '',
    linkId: '',
    file: null,
  },
  check: null,
  checkForm: {
    name: '',
    select: '',
    email: '',
    company: '',
    message: '',
    phone: '',
    linkId: '',
    file: null,
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormValues>) => {
      state.formData = action.payload;
    },
    setCheck: (state, action: PayloadAction<boolean | null>) => {
      state.check = action.payload;
    },
    setCheckFormByKey: (state, action: PayloadAction<{ key: keyof FormValues; value: string }>) => {
      const { key, value } = action.payload;
      state.checkForm[key] = value;
    },
  },
});

export const selectIsValidEmail = (email: string): boolean => {
  return isValidEmail(email);
};

export const { setFormData, setCheck, setCheckFormByKey } = formSlice.actions;

export const selectForm = (state: RootState) => state.form;

export default formSlice.reducer;
