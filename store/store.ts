


import { configureStore } from '@reduxjs/toolkit';
import mapsReducer from '@/store/redusers/mapsSliceReduser';
import formReducer from '@/store/redusers/FormSliceReduser';
import careersReducer from './redusers/CareersSliceReduser'
import dropdownReducer from './redusers/SelectSliceReduser'
import navbarReducer from './redusers/NavbarSliceReduser'
const store = configureStore({
  reducer: {
    maps: mapsReducer,
    form: formReducer,
    careers: careersReducer,
    dropdown: dropdownReducer,
    navbar: navbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;