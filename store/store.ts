


import { configureStore } from '@reduxjs/toolkit';
import mapsReducer from '@/store/redusers/mapsSliceReduser';
import formsReducer from '@/store/redusers/formsSliceReduser';
import careersReducer from './redusers/CareersSliceReduser'

const store = configureStore({
  reducer: {
    maps: mapsReducer,
    forms: formsReducer,
    careers: careersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;